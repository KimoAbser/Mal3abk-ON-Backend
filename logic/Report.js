const Report = require('../model/Report'); // Import the Report model

module.exports = {

// GET all reports
getAllReports: async (req, res) => {
  try {
    const reports = await Report.findAll();
    console.log('Retrieved reports:', reports); // Add this line for logging
    res.json(reports);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

//GET report by ID
getReportById: async (req, res) => {
  const reportId = req.params.id;

  try {
    const report = await Report.findByPk(reportId);

    if (report) {
      res.json(report);
    } else {
      res.status(404).json({ error: 'Report not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// POST a new report
newReport: async (req, res) => {
  try {
    const { state, content , category , date} = req.body;
    
    // Create a new report record in the database
    const newReport = await Report.create({
      state,
      content,
      category,
      date
    });
    
    res.status(201).json(newReport);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},


// PUT (update) a report by ID
updateReportById: async (req, res) => {
  const reportId = req.params.id;
  const updatedReportFields = req.body;

  try {
    const report = await Report.findByPk(reportId);

    if (report) {
      await report.update(updatedReportFields);
      res.json(report);
    } else {
      res.status(404).json({ error: 'Report not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
},

// DELETE a report by ID
deleteReportById: async (req, res) => {
  const reportId = req.params.id;

  try {
    const report = await Report.findByPk(reportId);

    if (report) {
      await report.destroy();
      res.sendStatus(204); // No content, successful delete
    } else {
      res.status(404).json({ error: 'Report not found' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

}