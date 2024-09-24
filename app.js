const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const User = require('./model/User');
const Bank = require('./model/Bank');
const Card = require('./model/Card');
const CardType = require('./model/CardType');
const AddMethod = require('./model/AddMethod');
const Payment = require('./model/Payment');
const PaymentMethod = require('./model/PaymentMethod');
const Skill = require('./model/Skills');
const PlayerSkill = require('./model/PlayerSkill');
const PlaygroundLocation = require('./model/PlaygroundLocation');
const PlaygroundPicture = require('./model/PlaygroundPicture');
const Owner = require('./model/Owner');
const GroundType = require('./model/GroundType');
const City = require('./model/City');
const Government = require('./model/Governments');
const BallType = require('./model/BallType');
const Playground = require('./model/Playground');
const Position = require('./model/Position');
const PlayerPosition = require('./model/PlayerPosition');
const PlayerLocation = require('./model/PlayerLocation');
const UserFavoritePlayground = require('./model/UserFavoritePlayground');
const Report = require('./model/Report');
const CancellationReason = require('./model/CancellationReason');
const JoinBooking = require('./model/JoinBooking');
const Booking = require('./model/Booking');

// Synchronize model with the database
User.sync({ alter: true }).then(() => console.log('User model synchronized.'));
Bank.sync({ alter: true }).then(() => console.log('Bank model synchronized.'));
Card.sync({ force: true }).then(() => console.log('Card model synchronized.'));
CardType.sync({ alter: true }).then(() => console.log('CardType model synchronized.'));
AddMethod.sync({ alter: true }).then(() => console.log('AddMethod model synchronized.'));
Payment.sync({ alter: true }).then(() => console.log('Payment model synchronized.'));
PaymentMethod.sync({ alter: true }).then(() => console.log('PaymentMethod model synchronized.'));
Skill.sync({ alter: true }).then(() => console.log('Skill model synchronized.'));
PlayerSkill.sync({ alter: true }).then(() => console.log('PlayerSkill model synchronized.'));
PlaygroundLocation.sync({ alter: true }).then(() => console.log('PlaygroundLocation model synchronized.'));
PlaygroundPicture.sync({ alter: true }).then(() => console.log('PlaygroundPicture model synchronized.'));
Owner.sync({ alter: true }).then(() => console.log('Owner model synchronized.'));
GroundType.sync({ alter: true }).then(() => console.log('GroundType model synchronized.'));
City.sync({ alter: true }).then(() => console.log('City model synchronized.'));
Government.sync({ alter: true }).then(() => console.log('Government model synchronized.'));
BallType.sync({ alter: true }).then(() => console.log('BallType model synchronized.'));
Playground.sync({ alter: true }).then(() => console.log('Playground model synchronized.'));
Position.sync({ alter: true }).then(() => console.log('Position model synchronized.'));
PlayerPosition.sync({ alter: true }).then(() => console.log('PlayerPosition model synchronized.'));
PlayerLocation.sync({ alter: true }).then(() => console.log('PlayerLocation model synchronized.'));
UserFavoritePlayground.sync({ alter: true }).then(() => console.log('UserFavoritePlayground model synchronized.'));
Report.sync({ alter: true }).then(() => console.log('Report model synchronized.'));
CancellationReason.sync({ alter: true }).then(() => console.log('CancellationReason model synchronized.'));
JoinBooking.sync({ alter: true }).then(() => console.log('JoinBooking model synchronized.'));
Booking.sync({ alter: true }).then(() => console.log('Booking model synchronized.'));





app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json('Welcome To Mal3abk On Api.. 😉')
})
//USER
// Routes
const userRoutes = require('./route/User'); // Import your user routes

// Use the user routes
app.use('/user', userRoutes); // Example URL: http://localhost:3000/user


//AddingMethod
// Routes
const addingMethodRoutes = require('./route/AddMethod'); // Import your AddingMethod routes

// Use the addingMethod routes
app.use('/addMethod', addingMethodRoutes); // Example URL: http://localhost:3000/addingMethod

//Banks
// Routes
const bankRoutes = require('./route/Bank'); // Import your Bank routes

// Use the Banks routes
app.use('/bank', bankRoutes); // Example URL: http://localhost:3000/bank

//BallType
// Routes
const ballType = require('./route/BallType'); // Import your BallType routes

// Use the BallType routes
app.use('/ballType', ballType); // Example URL: http://localhost:3000/ballType

//Booking
// Routes
const booking = require('./route/Booking'); // Import your Booking routes

// Use the Booking routes
app.use('/booking', booking); // Example URL: http://localhost:3000/booking

//CancellationReason
// Routes
const cancellationReason = require('./route/CancellationReason'); // Import your CancellationReason routes

// Use the CancellationReason routes
app.use('/cancellationReason', cancellationReason); // Example URL: http://localhost:3000/cancellationReason

//Card
// Routes
const card = require('./route/Card'); // Import your Card routes

// Use the Card routes
app.use('/card', card); // Example URL: http://localhost:3000/card

//CardType
// Routes
const cardType = require('./route/CardType'); // Import your CardType routes

// Use the CardType routes
app.use('/cardType', cardType); // Example URL: http://localhost:3000/cardType

//City
// Routes
const city = require('./route/City'); // Import your City routes

// Use the City routes
app.use('/city', city); // Example URL: http://localhost:3000/city

//Governments
// Routes
const governments = require('./route/Governments'); // Import your Governments routes

// Use the Governments routes
app.use('/governments', governments); // Example URL: http://localhost:3000/governments

//GroundType
// Routes
const groundType = require('./route/GroundType'); // Import your GroundType routes

// Use the GroundType routes
app.use('/groundType', groundType); // Example URL: http://localhost:3000/groundType

//JoinBooking
// Routes
const joinBooking = require('./route/JoinBooking'); // Import your JoinBooking routes

// Use the JoinBooking routes
app.use('/joinBooking', joinBooking); // Example URL: http://localhost:3000/joinBooking

//Owner
// Routes
const owner = require('./route/Owner'); // Import your Owner routes

// Use the Owner routes
app.use('/owner', owner); // Example URL: http://localhost:3000/owner

//Payment
// Routes
const payment = require('./route/Payment'); // Import your Payment routes

// Use the Payment routes
app.use('/payment', payment); // Example URL: http://localhost:3000/payment

//PaymentMethod
// Routes
const paymentMethod = require('./route/PaymentMethod'); // Import your PaymentMethod routes

// Use the PaymentMethod routes
app.use('/paymentMethod', paymentMethod); // Example URL: http://localhost:3000/paymentMethod

//PlayerSkill
// Routes
const playerSkill = require('./route/PlayerSkill'); // Import your PlayerSkill routes

// Use the PlayerSkill routes
app.use('/playerSkill', playerSkill); // Example URL: http://localhost:3000/playerSkill

//Playground
// Routes
const playground = require('./route/Playground'); // Import your Playground routes

// Use the Playground routes
app.use('/playground', playground); // Example URL: http://localhost:3000/playground

//PlaygroundPicture
// Routes
const playgroundPicture = require('./route/PlaygroundPicture'); // Import your PlaygroundPicture routes

// Use the PlaygroundPicture routes
app.use('/playgroundPicture', playgroundPicture); // Example URL: http://localhost:3000/playgroundPicture

//Report
// Routes
const report = require('./route/Report'); // Import your Report routes

// Use the Report routes
app.use('/report', report); // Example URL: http://localhost:3000/report

//Skills
// Routes
const skills = require('./route/Skills'); // Import your Skills routes

// Use the Skills routes
app.use('/skills', skills); // Example URL: http://localhost:3000/skills

//Position
// Routes
const position = require('./route/Position'); // Import your Position routes

// Use the Position routes
app.use('/position', position); // Example URL: http://localhost:3000/position

//PlayerPosition
// Routes
const playerPosition = require('./route/PlayerPosition'); // Import your PlayerPosition routes

// Use the PlayerPosition routes
app.use('/playerPosition', playerPosition); // Example URL: http://localhost:3000/playerPosition

//PlayerLocation
// Routes
const playerLocation = require('./route/PlayerLocation'); // Import your PlayerLocation routes

// Use the Skills routes
app.use('/playerLocation', playerLocation); // Example URL: http://localhost:3000/playerLocation

//PlaygroundLocation
// Routes
const playgroundLocation = require('./route/PlaygroundLocation'); // Import your PlaygroundLocation routes

// Use the PlaygroundLocation routes
app.use('/playgroundLocation', playgroundLocation); // Example URL: http://localhost:3000/playgroundLocation

//Search
// Routes
const search = require('./route/Search'); // Import your PlaygroundLocation routes

// Use the PlaygroundLocation routes
app.use('/search', search); // Example URL: http://localhost:3000/playgroundLocation


//UserFavoritePlayground
// Routes
const userFavoritePlayground = require('./route/UserFavoritePlayground'); // Import your UserFavoritePlayground routes

// Use the UserFavoritePlayground routes
app.use('/userFavoritePlayground', userFavoritePlayground); // Example URL: http://localhost:3000/userFavoritePlayground



// Start the Express.js server
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log('Server is running on port', port);
});
