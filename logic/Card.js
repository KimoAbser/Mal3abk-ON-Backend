const Card = require('../model/Card'); // Import the Card model
const CardType = require('../model/CardType');

module.exports = {

  // GET all cards
  getAllCards: async (req, res) => {
    try {
      const cards = await Card.findAll({
        include: [{ model: CardType, as: 'CardType' }],
      }).then((cards) => {
        if (!cards) {
          res.status(404).json({ error: 'No cards found' });
        }
        else {
          const cardList = [];

          cards.forEach((card) => {
            const cardInfo = {
              cardNumber: card.cardNumber,
              holder: card.holder,
              bankId: card.bankId,
              expiryDate: card.expiryDate,
              cardTypeId: card.cardTypeId,
              cardTypeName: card.CardType.name,
            };
            cardList.push(cardInfo);
          });
          console.log('Retrieved cards:', cards); // Add this line for logging
          res.json(cardList);
          // res.json(cards);
        }
      })
    } catch (error) {
      
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal server error' });
      
    }
  },

  //GET card by ID
  getCardById: async (req, res) => {
    const cardId = req.params.cardnumber;

    try {
      const card = await Card.findByPk(cardId);

      if (card) {
        res.json(card);
      } else {
        res.status(404).json({ error: 'Card not found' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // POST a new card
  newCard: async (req, res) => {
    try {
      const { cardNumber, holder, bankId, cardTypeId, expiryDate } = req.body;

      // Create a new card record in the database
      const newCard = await Card.create({
        cardNumber,
        holder,
        bankId,
        cardTypeId,
        expiryDate
      });

      res.status(201).json(newCard);
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        // Handle unique constraint violation (e.g., duplicate phone number)
        res.status(400).json({ error: 'The Card is already existed' });
      } else {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  },


  // PUT (update) a card by ID
  updateCardById: async (req, res) => {
    const cardId = req.params.cardnumber;
    const updatedCardFields = req.body;

    try {
      const card = await Card.findByPk(cardId);

      if (card) {
        await card.update(updatedCardFields);
        res.json(card);
      } else {
        res.status(404).json({ error: 'Card not found' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // DELETE a card by ID
  deleteCardById: async (req, res) => {
    const cardId = req.params.cardnumber;

    try {
      const card = await Card.findByPk(cardId);

      if (card) {
        await card.destroy();
        res.sendStatus(204); // No content, successful delete
      } else {
        res.status(404).json({ error: 'Card not found' });
      }
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

}