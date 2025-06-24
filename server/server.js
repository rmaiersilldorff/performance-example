import express from 'express';
import process from 'process';
import {fakerDE as faker} from '@faker-js/faker';
import cors from 'cors';

// Create the Express app
const app = express();
const port = process.env.PORT ?? 8900;


// Allow requests only from Angular dev server origin (or use '*')
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Alternatively, allow all origins during dev for simplicity:
// app.use(cors());

app.options('*', cors()); // enable preflight for all routes

// Middleware to parse JSON in request body
app.use(express.json());

// In-memory data store
let counter = 0;
let tripData = generateFakeTrip(); // Initialize some fake data

// Utility function to create one fake Trip
function createFakeTrip() {
    return {
        id: counter++,
        header: faker.location.city(),
        content: [
            `${faker.number.int({min: 1, max: 21})} Nächte`,
            `Flug von Wien`,
        ],
        from: new Date(),
        to: new Date(),
        price: faker.number.int({min: 400, max: 1200}),
    };
}

// Create N Trips
function generateFakeTrip() {
    const length = faker.number.int({min: 5, max: 10});
    const items = [];
    for (let i = 0; i < length; i++) {
        items.push(createFakeTrip());
    }
    return items;
}

// -------------- ROUTES --------------

// GET all travelOffer
app.post('/api/offer/cmd/list', (req, res) => {
    res.json({elements: tripData, totalCount: tripData.length});
});

// POST a new Angebot
app.post('/api/offer/cmd/add', (req, res) => {
    const newTrip = createFakeTrip();
    tripData.push(newTrip);
    res.json({elements: tripData, totalCount: tripData.length});
});

// PUT change a specific Angebot (by ID)
app.post('/api/offer/cmd/change', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = tripData.findIndex((r) => r.id === id);
    if (index < 0) {
        return res.status(404).json({error: 'Trip not found'});
    }

    // Just mimic your “changeAngebot” logic:
    tripData[index].header = `Item ${tripData[index].id} has changed`;
    res.json({elements: tripData, totalCount: tripData.length});
});

// GET search (via query params: ?value=Vienna&nights=3)
app.post('/api/offer/cmd/search', (req, res) => {
    const value = req.body.name?.toString().toLowerCase() ?? '';
    const nights = req.body.nights?.toString() ?? '';

    const filtered = tripData.filter((trip) => {
        return (
            trip.header.toLowerCase().includes(value) &&
            trip.content[0].includes(nights)
        );
    });

    res.json({elements: filtered, totalCount: filtered.length});
});

// Start Server
app.listen(port, () => {
    console.log('RESTful API server started on port: ' + port);
});
