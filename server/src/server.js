const http = require('http');


const app = require('./app');
const { mongoConnect } = require('./services/mongo');
const { loadAllExercise } = require('./models/exercise.model');

require('dotenv').config();

const PORT = process.env.PORT;

const server = http.createServer(app);

async function startServer() {
    
    await mongoConnect();
    await loadAllExercise();
    
    server.listen(PORT, () => {
        console.log(`Server start on ${PORT}...`);
    });
}

startServer();

