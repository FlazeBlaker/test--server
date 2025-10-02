// This script will run once to populate the database
const admin = require('firebase-admin');

// Import your product data
const { productsData } = require('./productsData');

// Ensure you have this file in your root and it is NOT committed to git
const serviceAccount = require('./serviceAccountKey.json');

// Initialize Firebase Admin SDK (same as in server.js)
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Function to upload all products
async function importData() {
    console.log('🚀 Starting data import to Firestore...');
    const productsCollectionRef = db.collection('products');
    let successfulImports = 0;

    for (const product of productsData) {
        // --- Data Mapping ---
        // 1. Remove the temporary 'id' field
        const { id, imageUrl, ...restOfProduct } = product;

        // 2. Map the single 'imageUrl' to the expected 'product_images' array
        const mappedProduct = {
            ...restOfProduct,
            product_images: [imageUrl], // Convert single URL to an array
            // Use the first tag as the main 'category' for consistency with previous routes
            category: product.tags && product.tags.length > 0 ? product.tags[0] : 'Uncategorized',
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        };
        // --- End Mapping ---

        try {
            await productsCollectionRef.add(mappedProduct);
            successfulImports++;
            console.log(`✅ Successfully added: ${mappedProduct.name}`);
        } catch (error) {
            console.error(`❌ Failed to add ${product.name}:`, error);
        }
    }

    console.log(`\n🎉 Data import complete! ${successfulImports} products added.`);
    process.exit(0); // Exit the script process
}

importData().catch(err => {
    console.error('An unhandled error occurred during import:', err);
    process.exit(1);
});