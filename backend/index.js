const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
require('./Models/db');

// ✅ Corrected imports to use "Routes" (uppercase)
const CustomerRouter = require('./Routes/CustomerRouter');
const AuthRouter = require('./Routes/AuthRouter');
const WauthRouter = require('./Routes/WauthRouter');
const WorkerRouter = require('./Routes/WorkerRouter');
const BookingRouter = require('./Routes/BookingRouter');

// Models
const workermodel = require('./Models/UpdateJob');

const PORT = process.env.PORT || 1000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/auth', AuthRouter);
app.use('/wauth', WauthRouter);
app.use('/worker', WorkerRouter);
app.use('/api', CustomerRouter);
app.use('/book', BookingRouter);

// Backend Route to Fetch WorkerId
app.post('/getWorker', async (req, res) => {
    console.log('Email Received:', req.body.email);
    try {
        const worker = await workermodel.findOne({ email: req.body.email });
        if (worker) {
            res.json(worker._id);
        } else {
            res.status(404).json({ message: 'Worker Not Found' });
        }
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
