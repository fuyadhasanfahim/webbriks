const pricingData = [
    {
        title: 'Clipping Path Services',
        startingPrice: 0.39,
        imagePerDay: 2000,
        discount: 40,
        plans: [
            { complexity: 'Basic Clipping Path', price: 0.39 },
            { complexity: 'Simple Clipping Path', price: 0.99 },
            { complexity: 'Clipping Path Flatness', price: 0.49 },
            { complexity: 'Clipping Path With Shadows', price: 0.99 },
            { complexity: 'Medium Clipping Path', price: 1.99 },
            { complexity: 'Remove Unwanted Objects', price: 1.25 },
            { complexity: 'Complex Clipping Path', price: 3.99 },
            { complexity: 'Super Complex Clipping Path', price: 7.99 },
            { complexity: 'Extra Super Complex Clipping Path', price: 3.99 },
        ],
        image: 'https://i.ibb.co.com/QFVwv8y/clipping-path-gif.gif',
        details: '/services/photo-editing/clipping-path-service',
    },
    {
        title: 'Photo Retouching Services',
        startingPrice: 0.69,
        imagePerDay: 1500,
        discount: 40,
        plans: [
            { complexity: 'Headshots & Face Retouching', price: 4.49 },
            { complexity: 'Beauty & Glamor Retouching', price: 8.99 },
            { complexity: 'Body Retouching & Reshaping', price: 8.99 },
            { complexity: 'Digital Airbrushing', price: 7.49 },
            { complexity: 'Portrait Cleaning & Enhancement', price: 8.49 },
        ],
        after: 'https://i.ibb.co.com/gFmT8SM/photo-retouching-after.jpg',
        before: 'https://i.ibb.co.com/XjDGbbq/photo-retouching-before.jpg',
        details: '/services/photo-editing/photo-retouching-service',
    },
    {
        title: 'Product Photo Editing Services',
        startingPrice: 0.49,
        imagePerDay: 1500,
        discount: 40,
        plans: [
            { complexity: 'Clipping Path', price: 0.49 },
            {
                complexity: 'Bulk Photo Editing (Cropping & Resizing)',
                price: 0.25,
            },
            { complexity: 'Product Photo Background Remove', price: 0.49 },
            { complexity: 'Color Correction & Editing', price: 0.99 },
            { complexity: 'Photoshop Shadow Effect', price: 0.49 },
            { complexity: 'Ghost Mannequin Effect', price: 1.99 },
            { complexity: 'Product Photo Cleaning', price: 0.49 },
            {
                complexity: 'Product Photo Retouching & Enhancement',
                price: 1.49,
            },
            {
                complexity: 'Amazon Requirements Fulfilment Photo Editing',
                price: 0.49,
            },
            {
                complexity: '3D/360° Packshot Retouching(5 images)',
                price: 0.99,
            },
        ],
        after: 'https://i.ibb.co.com/X3hBj2W/product-photo-editing-after.jpg',
        before: 'https://i.ibb.co.com/yR0z5gg/product-photo-editing-before.jpg',
        details: '/services/photo-editing/product-photo-editing-service',
    },
    {
        title: 'Ghost Mannequin Services',
        startingPrice: 0.89,
        imagePerDay: 1500,
        discount: 40,
        plans: [
            { complexity: 'Neck Joint On Ghost Mannequin', price: 0.89 },
            {
                complexity: 'Bottom Joint On Ghost Mannequin',
                price: 2.49,
            },
            { complexity: 'Sleeves Joint On Ghost Mannequin', price: 2.49 },
            {
                complexity: '3D/360° Packshot Ghost Mannequin Effects',
                price: 2.99,
            },
        ],
        after: 'https://i.ibb.co.com/qd6wX6F/ghost-mannequin-effect-after.jpg',
        before: 'https://i.ibb.co.com/f90TQHV/ghost-mannequin-effect-before.jpg',
        details: '/services/photo-editing/product-photo-editing-service',
    },
    {
        title: 'Raster to Vector',
        startingPrice: 3,
        imagePerDay: 1500,
        discount: 40,
        plans: [
            { complexity: 'Raster to Vector Conversion', price: 3 },
            {
                complexity: 'Vector Line Drawing and Artwork (Sketching)',
                price: 4.49,
            },
            { complexity: 'Vector Logo Design', price: 50.0 },
            {
                complexity: 'Vector Character Drawing for Animation',
                price: 20.99,
            },
            {
                complexity: '2D CAD Design',
                price: 9.99,
            },
            {
                complexity: '3D Vector Conversion (line drawing to 3D effects)',
                price: 19.99,
            },
            {
                complexity: 'Product to Vector',
                price: 14.99,
            },
            {
                complexity: '3D Product Modeling	',
                price: 30.0,
            },
        ],
        after: 'https://i.ibb.co.com/mc0vGZV/raster-to-vector-after.jpg',
        before: 'https://i.ibb.co.com/3SGtsS1/raster-to-vector-before.jpg',
        details: '/services/photo-editing/product-photo-editing-service',
    },
    {
        title: 'Shadow Creation Services',
        startingPrice: 0.25,
        imagePerDay: 1500,
        discount: 40,
        plans: [
            { complexity: 'Drop Shadow Creation', price: 0.25 },
            {
                complexity: 'Reflection Shadow Creation',
                price: 0.99,
            },
            { complexity: 'Realistic Shadow Creation', price: 1.49 },
            {
                complexity: 'Retain Original Shadow',
                price: 0.49,
            },
            {
                complexity: 'Shadow Removal Service',
                price: 0.99,
            },
            {
                complexity: 'Highlight & Shadow on Portrait',
                price: 4.49,
            },
        ],
        after: 'https://i.ibb.co.com/Mf6zwS5/shadow-creation-after.jpg',
        before: 'https://i.ibb.co.com/Nngt48J/shadow-creation-before.jpg',
        details: '/services/photo-editing/product-photo-editing-service',
    },
    {
        title: 'Color Correction Services',
        startingPrice: 0.99,
        imagePerDay: 1500,
        discount: 40,
        plans: [
            { complexity: 'Color Correction', price: 0.99 },
            {
                complexity: 'Exposure Correction',
                price: 0.99,
            },
            { complexity: 'Color Conversion/Editing', price: 1.49 },
            {
                complexity: 'Color Restoration For Damaged Photos',
                price: 10.49,
            },
            {
                complexity: 'Product Photography Color Editing',
                price: 4.49,
            },
            {
                complexity: 'Multi Path & Color Editing',
                price: 1.49,
            },
            {
                complexity: 'Color Restoration',
                price: 2.49,
            },
            {
                complexity: 'Black & White Photo Colorize',
                price: 9.49,
            },
            {
                complexity: 'HDR Blending & Exposure Correction',
                price: 4.49,
            },
            {
                complexity: 'Fashion Photography Color Editing',
                price: 2.49,
            },
            {
                complexity: 'Product Photography Color Editing',
                price: 0.99,
            },
            {
                complexity: 'Wedding Photography Color Editing',
                price: 4.49,
            },
            {
                complexity: 'Real Estate Photography Photo Editing',
                price: 4.49,
            },
            {
                complexity: 'Photoshop Lightroom Photo Editing',
                price: 4.49,
            },
        ],
        after: 'https://i.ibb.co.com/C2KSnzx/color-correction-after.jpg',
        before: 'https://i.ibb.co.com/bLHjNQJ/color-correction-before.jpg',
        details: '/services/photo-editing/product-photo-editing-service',
    },
    {
        title: 'Video Editing Services',
        startingPrice: 100,
        imagePerDay: 10,
        discount: 40,
        plans: [
            { complexity: 'Basic Video Editing', price: 100.0 },
            {
                complexity: 'Advance Video Editing	',
                price: 300.0,
            },
            { complexity: 'Complex Video Editing', price: 500.0 },
            {
                complexity: 'Extreme Video Editing',
                price: 2000.0,
            },
        ],
        image: 'https://i.ibb.co.com/FwxKpV0/video-editing-service.jpg',
        details: '/services/photo-editing/product-photo-editing-service',
    },
];

export default pricingData;
