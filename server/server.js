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
let reisenData = generateFakeReisen(); // Initialize some fake data

// Utility function to create one fake Reise
function createFakeReise() {
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

// Create N Reisen
function generateFakeReisen() {
    const length = faker.number.int({min: 5, max: 10});
    const items = [];
    for (let i = 0; i < length; i++) {
        items.push(createFakeReise());
    }
    return items;
}

// -------------- ROUTES --------------

// GET all Angebote
app.post('/api/angebot/cmd/list', (req, res) => {
    res.json({elements: reisenData, totalCount: reisenData.length});
});

// POST a new Angebot
app.post('/api/angebot/cmd/add', (req, res) => {
    const newReise = createFakeReise();
    reisenData.push(newReise);
    res.json({elements: reisenData, totalCount: reisenData.length});
});

// PUT change a specific Angebot (by ID)
app.post('/api/angebot/cmd/change', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const index = reisenData.findIndex((r) => r.id === id);
    if (index < 0) {
        return res.status(404).json({error: 'Reise not found'});
    }

    // Just mimic your “changeAngebot” logic:
    reisenData[index].header = `Item ${reisenData[index].id} has changed`;
    res.json({elements: reisenData, totalCount: reisenData.length});
});

// GET search (via query params: ?value=Vienna&nights=3)
app.post('/api/angebot/cmd/search', (req, res) => {
    const value = req.body.name?.toString().toLowerCase() ?? '';
    const nights = req.body.nights?.toString() ?? '';

    const filtered = reisenData.filter((reise) => {
        return (
            reise.header.toLowerCase().includes(value) &&
            reise.content[0].includes(nights)
        );
    });

    res.json({elements: filtered, totalCount: filtered.length});
});

// Start Server
app.listen(port, () => {
    console.log('RESTful API server started on port: ' + port);
});
