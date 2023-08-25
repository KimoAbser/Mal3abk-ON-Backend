const express = require('express');
const router = express.Router();
const Sequelize = require('../sequelize'); // Import the Sequelize instance

const { PlayGround} = require('../model/Playground'); // Import the necessary models
const {  Booking } = require('../model/Booking'); // Import the necessary models
const { City } = require('../model/City'); // Import the necessary models
const { Governments } = require('../model/Governments'); // Import the necessary models

// GET PlayGrounds by search criteria and filter
search : async (req, res) => {
  try {
    const { startTime, endTime, searchQuery, showAllHours } = req.query;

    // Set default values for start and end times
    const start = startTime ? new Date(startTime) : null;
    const end = endTime ? new Date(endTime) : null;

    // Build the Sequelize query to find PlayGrounds
    const whereClause = {
      openingTime: start ? { [Sequelize.Op.lte]: start } : { [Sequelize.Op.not]: null }, // If start time is provided, filter by it
      closingTime: end ? { [Sequelize.Op.gte]: end } : { [Sequelize.Op.not]: null }, // If end time is provided, filter by it
      name: { [Sequelize.Op.iLike]: `%${searchQuery}%` },
    };

    if (!showAllHours) {
      whereClause[Sequelize.Op.and] = [
        {
          [Sequelize.Op.or]: [
            {
              '$Bookings.startDate$': {
                [Sequelize.Op.gt]: end ? end : new Date(), // Filter out PlayGrounds with bookings starting after the provided end time or the current date
              },
            },
            {
              '$Bookings.endDate$': {
                [Sequelize.Op.lt]: start ? start : new Date(), // Filter out PlayGrounds with bookings ending before the provided start time or the current date
              },
            },
          ],
        },
      ];
    }

    const PlayGrounds = await PlayGround.findAll({
      include: [
        {
          model: Booking,
          required: false,
          where: {
            [Sequelize.Op.or]: [
              {
                startDate: end ? { [Sequelize.Op.gte]: end } : { [Sequelize.Op.not]: null }, // If end time is provided, filter by it
              },
              {
                endDate: start ? { [Sequelize.Op.lte]: start } : { [Sequelize.Op.not]: null }, // If start time is provided, filter by it
              },
            ],
          },
        },
        {
          model: City,
          required: false, // Include the City model
          where: {
            name: { [Sequelize.Op.iLike]: `%${searchQuery}%` }, // Search for cities
          },
        },
        {
          model: Governments,
          required: false, // Include the Governments model
          where: {
            name: { [Sequelize.Op.iLike]: `%${searchQuery}%` }, // Search for governments
          },
        },
      ],
      where: whereClause,
    });

    res.json(PlayGrounds);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = router;
