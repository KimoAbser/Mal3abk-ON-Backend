const City = require('../model/City');
const Government = require('../model/Governments'); // Import the Government model

module.exports = {

  // GET all governments
  getAllGovernments: async (req, res) => {
    try {
      const governments = await Government.findAll({
        include: [{ model: City}],

      }).then((governments) => {
        if (!governments) {
          res.status(404).json({ error: 'No Governments' });
        }
        else {
          const governs = [];

          governments.forEach((government) => {
            const governmentInfo ={
              governmentId: government.id,
            governmentName: government.name,
               governmentCities :[]
              }

              City.findAll({
                where : {governmentId:government.id,},

              }).then((cities)=>{
                governmentInfo.governmentCities=cities;
                governs.push(governmentInfo);
                if(governments.length===governs.length){
                  res.status(200).json(governs);
                }
                
              }).catch((error)=>{
                console.error('Error',error.message);
                res.status(500).json({error:'Internal Server Error dealing with City Tables'});
              });

          });
        };
      })
} catch (error) {
  console.error('Error:', error.message);
  res.status(500).json({ error: 'Internal server error' });
}
},

//GET government by ID
getGovernmentById: async (req, res) => {
  const governmentId = req.params.id;

  try {
    const government = await Government.findByPk(governmentId);

    if (government) {
      res.json(government);
    } else {
      res.status(404).json({ error: 'Government not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

  // POST a new government
  newGovernment: async (req, res) => {
    try {
      const { name } = req.body;

      // Create a new government record in the database
      const newGovernment = await Government.create({
        name
      });

      res.status(201).json(newGovernment);
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },


    // PUT (update) a government by ID
    updateGovernmentById: async (req, res) => {
      const governmentId = req.params.id;
      const updatedGovernmentFields = req.body;

      try {
        const government = await Government.findByPk(governmentId);

        if (government) {
          await government.update(updatedGovernmentFields);
          res.json(government);
        } else {
          res.status(404).json({ error: 'Government not found' });
        }
      } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal server error' });
      }
    },

      // DELETE a government by ID
      deleteGovernmentById: async (req, res) => {
        const governmentId = req.params.id;

        try {
          const government = await Government.findByPk(governmentId);

          if (government) {
            await government.destroy();
            res.sendStatus(204); // No content, successful delete
          } else {
            res.status(404).json({ error: 'Government not found' });
          }
        } catch (error) {
          console.error('Error:', error.message);
          res.status(500).json({ error: 'Internal server error' });
        }
      }

}