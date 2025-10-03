// server.js

// Import required packages
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// NEW: Import the Firebase Admin SDK
const admin = require('firebase-admin');

// NEW: Path to your service account key file
const serviceAccount = require('./serviceAccountKey.json');

// NEW: Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// NEW: Reference to the Firestore Database
const db = admin.firestore();


// Create an Express app
const app = express();

// Set the port, using the environment variable or defaulting to 5001
const PORT = process.env.PORT || 5001;

// --- Middleware ---
// Enable Cross-Origin Resource Sharing (CORS) for all routes
app.use(cors());
// Enable the express app to parse JSON formatted request bodies
app.use(express.json());


// --- Routes ---

// A simple test route to check if the server is running
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Delicia Bakery API! 🍰 Connected to Firebase!' });
});

// ----------------------------------------------------
// FIREBASE ROUTE: GET all products
// ----------------------------------------------------

app.get('/api/products', async (req, res) => {
    try {
        const productsRef = db.collection('products');
        const snapshot = await productsRef.get();

        const products = [];
        snapshot.forEach(doc => {
            // This will now include 'description' and 'product_images' if they exist in the Firestore document
            products.push({ id: doc.id, ...doc.data() });
        });

        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: 'Failed to fetch products from database.' });
    }
});

// ----------------------------------------------------
// FIREBASE ROUTE: POST a new product (with description and images array)
// ----------------------------------------------------

app.post('/api/products', async (req, res) => {
    try {
        // Extract required fields from the request body
        const { name, price, category, description, product_images } = req.body;

        // Basic Validation: Ensure core fields are present
        if (!name || !price || !description || !product_images || !Array.isArray(product_images)) {
            return res.status(400).json({
                message: 'Missing required product fields: name, price, description, or product_images (must be an array of image URLs).'
            });
        }

        const newProduct = {
            name,
            price,
            category: category || 'Uncategorized', // Use a default category if none is provided
            description,
            product_images, // Array of image URLs
            createdAt: admin.firestore.FieldValue.serverTimestamp() // Add a creation timestamp
        };

        const docRef = await db.collection('products').add(newProduct);

        res.status(201).json({
            message: 'Product added successfully!',
            id: docRef.id,
            product: newProduct
        });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ message: 'Failed to add product to database.' });
    }
});


module.exports = app;
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`\n🎉 Server is running on port ${PORT}`);
        console.log(`Local URL: http://localhost:${PORT}`);
    });
}
// Add this new route to your server.js file

// ----------------------------------------------------
// FIREBASE ROUTE: POST a new contact form submission
// ----------------------------------------------------

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Name, email, and message are required fields.' });
        }

        const newSubmission = {
            name,
            email,
            subject: subject || 'General Inquiry',
            message,
            submittedAt: admin.firestore.FieldValue.serverTimestamp() // Adds a timestamp
        };

        // Add the new submission to the 'contactSubmissions' collection
        const docRef = await db.collection('contactSubmissions').add(newSubmission);

        res.status(201).json({ 
            message: 'Message sent successfully!',
            id: docRef.id 
        });

    } catch (error) {
        console.error("Error saving contact submission:", error);
        res.status(500).json({ message: 'Failed to send message.' });
    }
});