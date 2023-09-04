const { MongoClient } = require('mongodb')

// Create Instance of MongoClient for mongodb
const client = new MongoClient('mongodb://localhost:27017')

// Connect to database
client.connect()
    .then(() => {
        console.log('Connected Successfully!')
        // client.close()
    })
    .catch(error => console.log('Failed to connect!', error))
