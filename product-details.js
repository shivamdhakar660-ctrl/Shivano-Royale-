/* =====================================================
   SHIVANO ROYALE
   MASTER PRODUCT DATABASE
   MANUAL DATA ONLY
===================================================== */

const products = [

    {
        id: 1,
        asin: "B0HBQR4M3L",
        name: "DEEMOON Premium Flannel Checkered Shirt",
        category: "Fashion",
        price: 999,
        rating: 4.5,
        reviews: 128,
        badge: "POPULAR",

        image:
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85",

        description:
            "DEEMOON Premium Flannel Checkered Button Down Shirt.",

        features: [
            "Checkered design",
            "Button-down style",
            "Casual everyday wear",
            "Flannel shirt"
        ],

        amazonLink:
            "https://link.amazon/B0bFtzPDW"
    },


    {
        id: 2,
        asin: "B0DQ8B858G",
        name: "U.S. Polo Assn. Men's Sneakers",
        category: "Fashion",
        price: 1499,
        rating: 4.4,
        reviews: 96,
        badge: "TRENDING",

        image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",

        description:
            "U.S. Polo Assn. men's sneakers for everyday casual styling.",

        features: [
            "Casual sneaker design",
            "Men's footwear",
            "Everyday styling",
            "U.S. Polo Assn."
        ],

        amazonLink:
            "https://link.amazon/B086lCdBP"
    },


    {
        id: 3,
        asin: "B00ISNVQMW",
        name: "Titan Karishma Stainless Steel Watch",
        category: "Lifestyle",
        price: 1999,
        rating: 4.6,
        reviews: 74,
        badge: "EDITOR'S PICK",

        image:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",

        description:
            "Titan Karishma stainless steel watch with a classic everyday design.",

        features: [
            "Titan Karishma",
            "Stainless steel design",
            "Classic styling",
            "Everyday wear"
        ],

        amazonLink:
            "https://link.amazon/B0hajaGmS"
    }

];


/* =====================================================
   PRODUCT DETAILS
   YAHAN SE PRODUCT DETAIL PAGE CONTROL HOGI
===================================================== */

const productDetails = {

    1: {

        longDescription:
            "DEEMOON Premium Flannel Checkered Shirt is designed for casual everyday styling with a comfortable and versatile look.",

        productDetails: [
            "Premium flannel fabric",
            "Checkered pattern",
            "Button-down design",
            "Casual everyday wear"
        ],

        specifications: {
            Brand: "DEEMOON",
            Category: "Fashion",
            Style: "Casual",
            Material: "Flannel"
        },

        images: [
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85"
        ],

        availability:
            "Available on Amazon"
    },


    2: {

        longDescription:
            "U.S. Polo Assn. Men's Sneakers are designed for everyday casual styling with a clean and versatile appearance.",

        productDetails: [
            "Casual sneaker design",
            "Men's footwear",
            "Everyday styling",
            "Versatile look"
        ],

        specifications: {
            Brand: "U.S. Polo Assn.",
            Category: "Fashion",
            Style: "Casual",
            Type: "Sneakers"
        },

        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85"
        ],

        availability:
            "Available on Amazon"
    },


    3: {

        longDescription:
            "Titan Karishma Stainless Steel Watch features a classic everyday design suitable for regular styling.",

        productDetails: [
            "Titan Karishma",
            "Stainless steel design",
            "Classic styling",
            "Everyday wear"
        ],

        specifications: {
            Brand: "Titan",
            Collection: "Karishma",
            Category: "Lifestyle",
            Type: "Watch"
        },

        images: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85"
        ],

        availability:
            "Available on Amazon"
    }

};