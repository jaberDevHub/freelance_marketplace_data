require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.osatkz4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Freelance Marketplace Server is Running')
})

const tasksCollection = client.db('freelance_marketplace').collection('tasks');
const bidsCollection = client.db('freelance_marketplace').collection('bids');

app.post('/tasks', async (req, res) => {
    const task = req.body;
    const result = await tasksCollection.insertOne(task);
    res.send(result);
})

app.post('/bids', async (req, res) => {
    const bid = req.body;
    const result = await bidsCollection.insertOne(bid);
    res.send(result);
})

app.get('/bids', async (req, res) => {
    const email = req.query.email;
    const query = { taskOwnerEmail: email };
    const cursor = bidsCollection.find(query);
    const result = await cursor.toArray();
    res.send(result);
})

app.get('/bids/:id', async (req, res) => {
    const id = req.params.id;
    const query = { taskId: id };
    const cursor = bidsCollection.find(query);
    const result = await cursor.toArray();
    res.send(result);
})

app.get('/tasks', async (req, res) => {
    const cursor = tasksCollection.find();
    const result = await cursor.toArray();
    res.send(result);
})

app.get('/featured-tasks', async (req, res) => {
    const cursor = tasksCollection.find().sort({ deadline: 1 }).limit(6);
    const result = await cursor.toArray();
    res.send(result);
})

app.get('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const task = await tasksCollection.findOne(query);
    res.send(task);
})

app.get('/my-posted-tasks', async (req, res) => {
    const email = req.query.email;
    const query = { userEmail: email };
    const cursor = tasksCollection.find(query);
    const result = await cursor.toArray();
    res.send(result);
})

app.put('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const options = { upsert: true };
    const updatedTask = req.body;
    const task = {
        $set: {
            taskTitle: updatedTask.taskTitle,
            category: updatedTask.category,
            description: updatedTask.description,
            deadline: updatedTask.deadline,
            budget: updatedTask.budget
        }
    }
    const result = await tasksCollection.updateOne(filter, task, options);
    res.send(result);
})

app.delete('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await tasksCollection.deleteOne(query);
    res.send(result);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})