module.exports = {
    productsData: [
    {
        // Note: The 'id' field here is temporary. Firestore will assign its own unique ID.
        // I will map 'imageUrl' to 'product_images' array for consistency.
        name: 'Artisan Sourdough',
        price: '₹650',
        imageUrl: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        tagline: 'The heart of our bakery in every slice.',
        description: 'Our signature loaf, naturally leavened and hand-shaped. Features a crisp, deeply caramelized crust and a soft, tangy, airy crumb. Perfect for sandwiches or simply toasted with butter.',
        ingredients: 'Organic Whole Wheat Flour, Water, Sea Salt, Natural Sourdough Starter.',
        tags: ['Bread', 'Vegan', 'Signature']
    },
    {
        name: 'Chocolate Croissants',
        price: '₹350',
        imageUrl: 'https://images.pexels.com/photos/19498993/pexels-photo-19498993.jpeg?_gl=1*1oicm6k*_ga*MTQyODIzNTAxMC4xNzU5MzE1NDQ2*_ga_8JE65Q40S6*czE3NTkzMTU0NDYkbzEkZzEkdDE3NTkzMTcwMjkkajQkbDAkaDA.',
        tagline: 'Pure, flaky, chocolatey bliss.',
        description: 'Flaky, buttery French pastry filled with two dark chocolate batons. Baked fresh every morning in Pune to achieve that perfect crunch and melt-in-your-mouth interior.',
        ingredients: 'Enriched Flour, European Butter, Dark Chocolate, Sugar, Yeast, Sea Salt.',
        tags: ['Pastry', 'Chocolate', 'Breakfast']
    },
    {
        name: 'Macaron Assortment',
        price: '₹900',
        imageUrl: 'https://images.pexels.com/photos/33118337/pexels-photo-33118337.jpeg?_gl=1*1q3ofrn*_ga*MTQyODIzNTAxMC4xNzU5MzE1NDQ2*_ga_8JE65Q40S6*czE3NTkzMTU0NDYkbzEkZzEkdDE3NTkzMTcxMjckajI5JGwwJGgw',
        tagline: 'Six little jewels of pure joy.',
        description: 'A colorful selection of six delicate, melt-in-your-mouth French macarons in classic flavors: salted caramel, pistachio, raspberry, vanilla bean, lemon, and chocolate.',
        ingredients: 'Almond Flour, Egg Whites, Sugar, Natural Flavorings, Cream.',
        tags: ['Dessert', 'French', 'Gluten-Free']
    },
    {
        name: 'Red Velvet Cupcakes',
        price: '₹250',
        imageUrl: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        tagline: 'A little bite of crimson luxury.',
        description: 'Rich, crimson-colored cake with a hint of cocoa, topped with a generous swirl of tangy cream cheese frosting. A classic treat for any occasion, baked to perfection right here in Pune.',
        ingredients: 'Flour, Cocoa Powder, Buttermilk, Sugar, Cream Cheese, Butter, Natural Colors.',
        tags: ['Cupcake', 'Celebration', 'Cream Cheese']
    },
    {
        name: 'Almond Biscotti',
        price: '₹150',
        imageUrl: 'https://images.pexels.com/photos/16232326/pexels-photo-16232326.png?_gl=1*1odsvvd*_ga*MTQyODIzNTAxMC4xNzU5MzE1NDQ2*_ga_8JE65Q40S6*czE3NTkzMTU0NDYkbzEkZzEkdDE3NTkzMTU1ODAkajUyJGwwJGgw',
        tagline: 'The perfect crunch for your coffee break.',
        description: 'Crispy, Italian-style cookies baked twice for that signature crunch. Loaded with toasted almonds, these are ideal for dipping into a hot cup of coffee or a glass of dessert wine.',
        ingredients: 'Flour, Almonds, Sugar, Eggs, Natural Almond Extract, Baking Powder.',
        tags: ['Cookie', 'Coffee', 'Italian']
    },
    {
        name: 'Blueberry Cheesecake',
        price: '₹2000',
        imageUrl: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        tagline: 'Creamy, dreamy, and utterly irresistible.',
        description: 'A creamy, classic New York-style cheesecake on a buttery graham cracker crust, topped with a fresh, slightly tart blueberry compote. A timeless dessert for sharing... or not.',
        ingredients: 'Cream Cheese, Graham Crackers, Butter, Sugar, Eggs, Fresh Blueberries, Lemon Zest.',
        tags: ['Cake', 'Dessert', 'Cheesecake']
    },
    {
        name: 'Classic Apple Pie',
        price: '₹1500',
        imageUrl: 'https://images.pexels.com/photos/3223494/pexels-photo-3223494.jpeg?_gl=1*dewcae*_ga*MTQyODIzNTAxMC4xNzU5MzE1NDQ2*_ga_8JE65Q40S6*czE3NTkzMTU0NDYkbzEkZzAkdDE3NTkzMTU0NDYkajYwJGwwJGgw',
        tagline: 'A warm slice of homemade comfort.',
        description: 'Our Classic Apple Pie features a flaky, all-butter crust filled with thinly sliced apples, a hint of cinnamon, and a touch of nutmeg. Baked to golden perfection, it\'s a timeless treat that feels like a warm hug.',
        ingredients: 'Fresh Apples, All-Purpose Flour, Butter, Cinnamon, Nutmeg, Sugar, Lemon Juice.',
        tags: ['Pie', 'Dessert', 'Classic']
    },
    {
        name: 'Quiche Lorraine',
        price: '₹450',
        imageUrl: 'https://images.pexels.com/photos/5419305/pexels-photo-5419305.jpeg?_gl=1*1cmdq7p*_ga*MTQyODIzNTAxMC4xNzU5MzE1NDQ2*_ga_8JE65Q40S6*czE3NTkzMTU0NDYkbzEkZzEkdDE3NTkzMTU1MjYkajQwJGwwJGgw',
        tagline: 'The perfect savory indulgence.',
        description: 'A rich and savory custard tart with bacon, Gruyère cheese, and onions in a buttery, flaky crust. Perfect for a light lunch or a brunch in Pune, served warm.',
        ingredients: 'Eggs, Heavy Cream, Bacon, Gruyère Cheese, Onions, Pie Crust, Spices.',
        tags: ['Savory', 'French', 'Brunch']
        }
    ]
};