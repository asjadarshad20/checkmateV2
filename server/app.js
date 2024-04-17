const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 4000;

const uri = 'mongodb+srv://mars0003:2tod80JMHQueoPeo@cluster0.egzxhlz.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const collectionName = 'checkListItems'
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error);
    }
}
const cors = require('cors');
app.use(cors());

app.use(express.json());

//get items 
app.get('/api/getitems', async (req,res)=>{
    try{
        const db = client.db('CheckMate');
        const collection = db.collection('checkListItems')
        const items = await collection.find({}).toArray()
        res.json(items);
    }
    catch(error){
        console.error('Error',error);
        res.status(500).json({error: "Internal server error"})
    

    }
})
//add items 
// Handle POST requests to the '/api/additems' endpoint
// Handle POST requests to the '/api/additems' endpoint
app.post('/api/additems', async (req, res) => {
    try {
        // Destructure the properties id, text, and completed from req.body
        const { id,desc, completed } = req.body;

        // Access the MongoDB collection with the specified collectionName
        const db = client.db('CheckMate'); // Access the database
        const collection = db.collection('checkListItems');

        // Create a new item object with the properties id, text, and completed
        const newItem = { id,desc, completed };

        // Insert the new item into the MongoDB collection
        const result = await collection.insertOne(newItem);

        console.log("boooo")

        // Respond with HTTP status code 201 (Created) and the newly inserted item
        res.status(201).json({result});
    } catch (error) {
        // If an error occurs, log the error to the console
        console.error("error", error);
        console.log("boooo1")
        // Respond with HTTP status code 500 (Internal Server Error) and an error message
        res.status(500).json({ error: "BOOOOO" });
    }
});

// Delete items
app.delete('/api/deleteitem/:itemId', async (req, res) => {
    try {
        // Extract the itemId from the request parameters
        const itemId = req.params.itemId;

        // Access the MongoDB collection with the specified collectionName
        const db = client.db('CheckMate'); // Access the database
        const collection = db.collection('checkListItems');

        const query = { id: itemId };

        // Delete the item from the MongoDB collection based on the itemId
        const result = await collection.deleteOne(query);

        if (result.deletedCount === 1) {
            // If the item is successfully deleted, respond with HTTP status code 200 (OK)
            res.status(200).json({ message: 'Item deleted successfully' });
        } else {
            // If the item is not found, respond with HTTP status code 404 (Not Found)
            res.status(404).json({ error: 'Item not found' });
        }
    } catch (error) {

        console.log("nooo")
        // If an error occurs, log the error to the console
        console.error("Error deleting item:", error);
        // Respond with HTTP status code 500 (Internal Server Error) and an error message
        res.status(500).json({ error: "Internal server error" });
    }
});





app.listen(port,()=>{
    console.log("Server is running on http://localhost:${port}")
    connectToMongoDB();

})

