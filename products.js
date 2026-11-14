/* =====================================================
   COLLECTION MANAGEMENT
   Add collection: set collection: "Collection Name" on a product.
   Remove from a collection: delete that product's collection property.
   Collection cards are generated automatically per category.
   Products without a collection remain in the normal category listing.
===================================================== */

/* =====================================================
   Shivano.store
   PRODUCT DATABASE
===================================================== */

const products = [

    {
        id: 1,

        asin: "B0HBQR4M3L",

        name: "Premium Flannel Checkered Shirt",

        category: "Shirts",
        collection: "Check Shirts",

        price: "495",

        rating: 3.4,

        reviews: "204+",

        boughtText: "1k+ bought in past 30 days",

        badge: "POPULAR",

        image:
            "images/prd1vr1img1.png",

        images: [
            "images/prd1vr1img1.png",
            "images/prd1vr1img2.png",
            "images/prd1vr1img3.png"
        ],

        description:
            "Premium Flannel Checkered Button Down Shirt.",

        features: [
            "Material Composition: Cotton Blend",
            "Fit Type: Regular Fit",
            "Collar Style: Bottom Down Collar Style",
            "Length: Standard Length",
            "Checkered design",
            "Flannel shirt"
        ],

        amazonLink:
            "https://link.amazon/B0bFtzPDW",

        variations: null
    },
 
    {
        id: 4,

        asin:
            "B00ISNVQMW",

        name:
            "Men's Basic Half-Open Collar T-Shirt,Textured fabric Solid Colour",

        category: "T-Shirts",
        collection: "Full sleeve without collar",

        price:
            "398",

        rating:
            3.9,

        reviews:
            "274+",

        boughtText:
            "100+ bought in past 30 days",

        badge:
            "Trending Western",

        image:
            "images/prd4vr1img1.png",

        images: [
            "images/prd4vr1img1.png",
            "images/prd4vr1img2.png",
            "images/prd4vr1img3.png"
        ],

        description:
            "Premium waffle knit fabric for softness and breathability.Classic Henly neckline with button placket. Long sleeves for versatile, all-season wear. Comfortable slim fit with a modern look. East to style for casual, streetwear, or smart-casual outfits.",

        features: [
            "Material: PolyCotton",
            "Fit type: Relaxed fit",
            "Sleeve Type: Long Sleeves",
            "Collar style: Half-Open Collar",
            "Style: Western",
            "Sleeve cuff style: Plain Hem",
            "Country of Origin: India"
        ],

        amazonLink:
            "https://link.amazon/B0aIwdXj1",

        variations: {

            defaultSelection:
                "Black",

            options: [

                {
                    value:
                        "Black",

                    image:
                        "images/prd4vr1img1.png",

                    images: [
                        "images/prd4vr1img1.png",
                        "images/prd4vr1img2.png",
                        "images/prd4vr1img3.png",
                    ],

                    price:
                        "398",

                    asin:
                        "CHILD_ASIN_1",

                    amazonLink:
                        "https://link.amazon/B06Blehbl",

                    name:
                        "Men's Basic Half-Open Collar T-Shirt, Textured Fabric Solid Colour",

                    description:
                        "Premium waffle knit fabric for softness and breathability. Classic Henly neckline with button placket. Long sleeves for versatile, all-season wear. Comfortable slim fit with a modern look. Easy to style for casual, streetwear, or smart-casual outfits.",

                    features: [
                        "Material: PolyCotton",
                        "Fit type: Relaxed fit",
                        "Sleeve Type: Long Sleeves",
                        "Collar style: Half-Open Collar",
                        "Style: Western",
                        "Sleeve cuff style: Plain Hem",
                        "Country of Origin: India"
                    ],

                    rating:
                        3.9,

                    reviews:
                        "274+"
                },


                {
                    value:
                        "Navy Blue",

                    image:
                        "images/prd4vr2img1.png",

                    images: [
                        "images/prd4vr2img1.png",
                        "images/prd4vr2img2.png",
                        "images/prd4vr2img3.png"
                    ],

                    price:
                        "398",

                    asin:
                        "CHILD_ASIN_2",

                    amazonLink:
                        "https://link.amazon/B06Blehbl",

                    name:
                        "Men's Basic Half-Open Collar T-Shirt, Textured Fabric Solid Colour",

                    description:
                        "Premium waffle knit fabric for softness and breathability. Classic Henly neckline with button placket. Long sleeves for versatile, all-season wear. Comfortable slim fit with a modern look. Easy to style for casual, streetwear, or smart-casual outfits.",

                    features: [
                        "Material: PolyCotton",
                        "Fit type: Relaxed fit",
                        "Sleeve Type: Long Sleeves",
                        "Collar style: Half-Open Collar",
                        "Style: Western",
                        "Sleeve cuff style: Plain Hem",
                        "Country of Origin: India"
                    ],

                    rating:
                        3.9,

                    reviews:
                        "274+"
                },

                {
                    value:
                        "White",

                    image:
                        "images/prd4vr3img1.png",

                    images: [
                        "images/prd4vr3img1.png",
                        "images/prd4vr3img2.png",
                        "images/prd4vr3img3.png"
                    ],

                    price:
                        "398",

                    asin:
                        "CHILD_ASIN_2",

                    amazonLink:
                        "https://link.amazon/B06Blehbl",

                    name:
                        "Men's Basic Half-Open Collar T-Shirt, Textured Fabric Solid Colour",

                    description:
                        "Premium waffle knit fabric for softness and breathability. Classic Henly neckline with button placket. Long sleeves for versatile, all-season wear. Comfortable slim fit with a modern look. Easy to style for casual, streetwear, or smart-casual outfits.",

                    features: [
                        "Material: PolyCotton",
                        "Fit type: Relaxed fit",
                        "Sleeve Type: Long Sleeves",
                        "Collar style: Half-Open Collar",
                        "Style: Western",
                        "Sleeve cuff style: Plain Hem",
                        "Country of Origin: India"
                    ],

                    rating:
                        3.9,

                    reviews:
                        "274+"
                },

                {
                    value:
                        "Brown",

                    image:
                        "images/prd4vr4img1.png",

                    images: [
                        "images/prd4vr4img1.png",
                        "images/prd4vr4img2.png",
                        "images/prd4vr4img3.png"
                    ],

                    price:
                        "398",

                    asin:
                        "CHILD_ASIN_2",

                    amazonLink:
                        "https://link.amazon/B06Blehbl",

                    name:
                        "Men's Basic Half-Open Collar T-Shirt, Textured Fabric Solid Colour",

                    description:
                        "Premium waffle knit fabric for softness and breathability. Classic Henly neckline with button placket. Long sleeves for versatile, all-season wear. Comfortable slim fit with a modern look. Easy to style for casual, streetwear, or smart-casual outfits.",

                    features: [
                        "Material: PolyCotton",
                        "Fit type: Relaxed fit",
                        "Sleeve Type: Long Sleeves",
                        "Collar style: Half-Open Collar",
                        "Style: Western",
                        "Sleeve cuff style: Plain Hem",
                        "Country of Origin: India"
                    ],

                    rating:
                        3.9,

                    reviews:
                        "274+"
                },

                 {
                    value:
                        "Dark Grey",

                    image:
                        "images/prd4vr5img1.png",

                    images: [
                        "images/prd4vr5img1.png",
                        "images/prd4vr5img2.png",
                        "images/prd4vr5img3.png"
                    ],

                    price:
                        "398",

                    asin:
                        "CHILD_ASIN_2",

                    amazonLink:
                        "https://link.amazon/B06Blehbl",

                    name:
                        "Men's Basic Half-Open Collar T-Shirt, Textured Fabric Solid Colour",

                    description:
                        "Premium waffle knit fabric for softness and breathability. Classic Henly neckline with button placket. Long sleeves for versatile, all-season wear. Comfortable slim fit with a modern look. Easy to style for casual, streetwear, or smart-casual outfits.",

                    features: [
                        "Material: PolyCotton",
                        "Fit type: Relaxed fit",
                        "Sleeve Type: Long Sleeves",
                        "Collar style: Half-Open Collar",
                        "Style: Western",
                        "Sleeve cuff style: Plain Hem",
                        "Country of Origin: India"
                    ],

                    rating:
                        3.9,

                    reviews:
                        "274+"
                },

                 {
                    value:
                        "Light Grey",

                    image:
                        "images/prd4vr6img1.png",

                    images: [
                        "images/prd4vr6img1.png",
                        "images/prd4vr6img2.png",
                        "images/prd4vr6img3.png"
                    ],

                    price:
                        "398",

                    asin:
                        "CHILD_ASIN_2",

                    amazonLink:
                        "https://link.amazon/B06Blehbl",

                    name:
                        "Men's Basic Half-Open Collar T-Shirt, Textured Fabric Solid Colour",

                    description:
                        "Premium waffle knit fabric for softness and breathability. Classic Henly neckline with button placket. Long sleeves for versatile, all-season wear. Comfortable slim fit with a modern look. Easy to style for casual, streetwear, or smart-casual outfits.",

                    features: [
                        "Material: PolyCotton",
                        "Fit type: Relaxed fit",
                        "Sleeve Type: Long Sleeves",
                        "Collar style: Half-Open Collar",
                        "Style: Western",
                        "Sleeve cuff style: Plain Hem",
                        "Country of Origin: India"
                    ],

                    rating:
                        3.9,

                    reviews:
                        "274+"
                }

            ]

        }

    },

    {
        id: 5,

        asin:
            "B0HF9161QM",

        name:
            "Men's Round Neck Pollycotton T-Shirt",

        category: "T-Shirts",
        collection: "Full sleeve without collar",

        price:
            "349",

        rating:
            4.2,

        reviews:
            "17+",

        boughtText:
            "",

        badge:
            "casual wear",

        image:
            "images/prd5vr1img1.png",

        images: [
            "images/prd5vr1img1.png",
            "images/prd5vr1img2.png",
            "images/prd5vr1img3.png"
        ],

        description:
            "Premium Polycotton Blend Fabric: Crafted from a premium polycotton blend that combines the softness of cotton with the durability of polyester for all-day comfort and long-lasting wear Timeless Round Neck Design: Features a timeless round neck and full sleeves, offering a clean, versatile look suitable for every season and everyday styling Lightweight and Breathable Comfort: The lightweight, breathable fabric promotes airflow to help keep you comfortable during work, travel, casual outings, and daily activities.",

        features: [
            "Material: PolyCotton",
            "Fit type: Relaxed fit",
            "Sleeve Type: Long Sleeves",
            "Collar style: Round neck",
            "Length: Standard Length",
            "Country of Origin: India"
        ],

        amazonLink:
            "https://link.amazon/B08HzW8QP",

    variations: {

          defaultSelection:
                "White",

            options: [

                {
                    value:
                        "White",

                    image:
                        "images/prd5vr1img1.png",

                    images: [
                        "images/prd5vr1img1.png",
                        "images/prd5vr1img2.png",
                        "images/prd5vr1img3.png",
                    ],

                    price:
                        "349",

                    asin:
                        "B0HF9161QM",

                    amazonLink:
                        "https://link.amazon/B08HzW8QP",

                    name:
                        "Men's Round Neck Pollycotton T-Shirt",

                    description:
                        "Premium Polycotton Blend Fabric: Crafted from a premium polycotton blend that combines the softness of cotton with the durability of polyester for all-day comfort and long-lasting wear Timeless Round Neck Design: Features a timeless round neck and full sleeves, offering a clean, versatile look suitable for every season and everyday styling Lightweight and Breathable Comfort: The lightweight, breathable fabric promotes airflow to help keep you comfortable during work, travel, casual outings, and daily activities.",
                    features: [
                        "Material: PolyCotton",
                        "Fit type: Relaxed fit",
                        "Sleeve Type: Long Sleeves",
                        "Collar style: Round neck",
                        "Length: Standard Length",
                        "Country of Origin: India"
                    ],

                    rating:
                        4.2,

                    reviews:
                        "17+"
                },

                 {
                    value:
                        "Dark Grey",

                    image:
                        "images/prd5vr2img1.png",

                    images: [
                        "images/prd5vr2img1.png",
                        "images/prd5vr2img2.png",
                        "images/prd5vr2img3.png",
                    ],

                    price:
                        "349",

                    asin:
                        "B0HF8DY8RL",

                    amazonLink:
                        "https://link.amazon/B08HzW8QP",

                    name:
                        "Men's Round Neck Pollycotton T-Shirt",

                    description:
                        "Premium Polycotton Blend Fabric: Crafted from a premium polycotton blend that combines the softness of cotton with the durability of polyester for all-day comfort and long-lasting wear Timeless Round Neck Design: Features a timeless round neck and full sleeves, offering a clean, versatile look suitable for every season and everyday styling Lightweight and Breathable Comfort: The lightweight, breathable fabric promotes airflow to help keep you comfortable during work, travel, casual outings, and daily activities.",
                    features: [
                        "Material: PolyCotton",
                        "Fit type: Relaxed fit",
                        "Sleeve Type: Long Sleeves",
                        "Collar style: Round neck",
                        "Length: Standard Length",
                        "Country of Origin: India"
                    ],

                    rating:
                        4.2,

                    reviews:
                        "17+"
                },

                 {
                    value:
                        "Light Grey",

                    image:
                        "images/prd5vr3img1.png",

                    images: [
                        "images/prd5vr3img1.png",
                        "images/prd5vr3img2.png",
                        "images/prd5vr3img3.png",
                    ],

                    price:
                        "349",

                    asin:
                        "B0HF8R3J9W",

                    amazonLink:
                        "https://link.amazon/B08HzW8QP",

                    name:
                        "Men's Round Neck Pollycotton T-Shirt",

                    description:
                        "Premium Polycotton Blend Fabric: Crafted from a premium polycotton blend that combines the softness of cotton with the durability of polyester for all-day comfort and long-lasting wear Timeless Round Neck Design: Features a timeless round neck and full sleeves, offering a clean, versatile look suitable for every season and everyday styling Lightweight and Breathable Comfort: The lightweight, breathable fabric promotes airflow to help keep you comfortable during work, travel, casual outings, and daily activities.",
                    features: [
                        "Material: PolyCotton",
                        "Fit type: Relaxed fit",
                        "Sleeve Type: Long Sleeves",
                        "Collar style: Round neck",
                        "Length: Standard Length",
                        "Country of Origin: India"
                    ],

                    rating:
                        4.2,

                    reviews:
                        "17+"
                },
            ]
        }
    },

    {
        id: 6,

        asin:
            "B0GQJJYKCK",

        name:
            "Men's Round Neck Printed Pollycotton T-Shirt",

        category: "T-Shirts",
        collection: "Oversize",

        price:
            "299",

        rating:
            3.7,

        reviews:
            "320+",

        boughtText:
            "50+ Bought in last 30 days",

        badge:
            "casual wear",

        image:
            "images/prd6vr1img1.png",

        images: [
            "images/prd6vr1img1.png",
            "images/prd6vr1img2.png",
            "images/prd6vr1img3.png"
        ],

        description:
            "Soft Polycotton Fabric: Breathable and lightweight material for all-day comfort in every season. Classic Round Neck Design: Timeless crew neck style suitable for casual, sports, and daily wear. Half Sleeve Comfort Fit: Provides easy movement and relaxed feel for work, travel, or gym. Solid Color Versatility: Easy to pair with jeans, joggers, shorts, or track pants. Perfect for Every Occasion: Ideal for casual outings, office wear, workouts, and home wear",

        features: [
            "Material: PolyCotton",
            "Fit type: Relaxed fit",
            "Sleeve Type: half Sleeves",
            "Collar style: Crew neck",
            "Closure type: Pull On",
            "Style: Western",
            "Country of Origin: India"
        ],

        amazonLink:
            "https://link.amazon/B01qOemn2",

    variations: {

          defaultSelection:
                "Black",

            options: [



                {
                    value:
                        "Black",

                    image:
                        "images/prd6vr1img1.png",

                    images: [
                        "images/prd6vr1img1.png",
                        "images/prd6vr1img2.png",
                        "images/prd6vr1img3.png",
                    ],

                    price:
                        "299",

                    asin:
                        "B0GQJJYKCK",

                    amazonLink:
                        "https://link.amazon/B01qOemn2",

                    name:
                        "Men's Round Neck Printed Pollycotton T-Shirt",

                    description:
                        "Soft Polycotton Fabric: Breathable and lightweight material for all-day comfort in every season. Classic Round Neck Design: Timeless crew neck style suitable for casual, sports, and daily wear. Half Sleeve Comfort Fit: Provides easy movement and relaxed feel for work, travel, or gym. Solid Color Versatility: Easy to pair with jeans, joggers, shorts, or track pants. Perfect for Every Occasion: Ideal for casual outings, office wear, workouts, and home wea",

                    features:[
                        "Material: PolyCotton",
                        "Fit type: Relaxed fit",
                        "Sleeve Type: half Sleeves",
                        "Collar style: Crew neck",
                        "Closure type: Pull On",
                        "Style: Western",
                        "Country of Origin: India"
                    ],

                    rating:
                        3.7,

                    reviews:
                        "320+"
                },

                 {
                    value:
                        "White",

                    image:
                        "images/prd6vr2img1.png",

                    images: [
                        "images/prd6vr2img1.png",
                        "images/prd6vr2img2.png",
                        "images/prd6vr2img3.png",
                    ],

                    price:
                        "299",

                    asin:
                        "B0GQJ4B1YK",

                    amazonLink:
                        "https://link.amazon/B01qOemn2",

                    name:
                        "Men's Round Neck Printed Pollycotton T-Shirt",

                    description:
                        "Soft Polycotton Fabric: Breathable and lightweight material for all-day comfort in every season. Classic Round Neck Design: Timeless crew neck style suitable for casual, sports, and daily wear. Half Sleeve Comfort Fit: Provides easy movement and relaxed feel for work, travel, or gym. Solid Color Versatility: Easy to pair with jeans, joggers, shorts, or track pants. Perfect for Every Occasion: Ideal for casual outings, office wear, workouts, and home wea",

                    features:[
                        "Material: PolyCotton",
                        "Fit type: Relaxed fit",
                        "Sleeve Type: half Sleeves",
                        "Collar style: Crew neck",
                        "Closure type: Pull On",
                        "Style: Western",
                        "Country of Origin: India"
                    ],

                    rating:
                        3.7,

                    reviews:
                        "320+"
                },
            ]
        }
    },

    {
        id: 7,

        asin:
            "B0F9FSRJ84",

        name:
            "Pure Cotton Oversized Multicolour T-Shirt Combo for Men",

        category: "T-Shirts",
        collection: "Oversize",

        price:
            "1299",

        rating:
            4.0,

        reviews:
            "615+",

        boughtText:
            "",

        badge:
            "casual wear",

        image:
            "images/prd7vr1img1.png",

        images: [
            "images/prd7vr1img1.png",
            "images/prd7vr1img2.png",
            "images/prd7vr1img3.png",
            "images/prd7vr1img4.png",
            "images/prd7vr1img5.png",
        ],

        description:
            "A Half sleeve,Round Neck Oversized T-Shirt with 4 combo of Multicolour. More comfortable for your classic everyday look.",

        features: [
            "Material: Cotton",
            "Fit type: Oversized fit",
            "Sleeve Type: half Sleeves",
            "Collar style: Round neck",
            "Neck style: Round Neck",
            "Pattern: Solid",
            "Country of Origin: India"
        ],

        amazonLink:
            "https://link.amazon/B0aq4fKwZ",

    variations: {

          defaultSelection:
                "Black/White/Green117/Cork",

            options: [



                {
                    value:
                        "Black/White/Green117/Cork",

                    image:
                        "images/prd7vr1img1.png",

                    images: [
                        "images/prd7vr1img1.png",
                        "images/prd7vr1img2.png",
                        "images/prd7vr1img3.png",
                        "images/prd7vr1img4.png",
                        "images/prd7vr1img5.png",
                    ],

                    price:
                        "1299",

                    asin:
                        "B0F9FSRJ84",

                    amazonLink:
                        "https://link.amazon/B0aq4fKwZ",

                    name:
                        "Pure Cotton Oversized Multicolour T-Shirt Combo for Men",

                    description:
                        "A Half sleeve,Round Neck Oversized T-Shirt with 4 combo of Multicolour. More comfortable for your classic everyday look.",

                    features:[
                        "Material: Cotton",
                        "Fit type: Oversized fit",
                        "Sleeve Type: half Sleeves",
                        "Collar style: Round neck",
                        "Neck style: Round Neck",
                        "Pattern: Solid",
                        "Country of Origin: India"
        ],

                    rating:
                        4.0,

                    reviews:
                        "615+"
                },

                {
                    value:
                        "Black/White/Green117/Maroon",

                    image:
                        "images/prd7vr2img1.png",

                    images: [
                        "images/prd7vr2img1.png",
                        "images/prd7vr2img2.png",
                        "images/prd7vr2img3.png",
                        "images/prd7vr1img4.png",
                        "images/prd7vr1img5.png",
                    ],

                    price:
                        "1299",

                    asin:
                        "BB0F9FVMM7T",

                    amazonLink:
                        "https://link.amazon/B0aq4fKwZ",

                    name:
                        "Pure Cotton Oversized Multicolour T-Shirt Combo for Men",

                    description:
                        "A Half sleeve,Round Neck Oversized T-Shirt with 4 combo of Multicolour. More comfortable for your classic everyday look.",

                    features:[
                          "Material: Cotton",
                        "Fit type: Oversized fit",
                        "Sleeve Type: half Sleeves",
                        "Collar style: Round neck",
                        "Neck style: Round Neck",
                        "Pattern: Solid",
                        "Country of Origin: India"
                    ],

                    rating:
                       4.0 ,

                    reviews:
                        "615+"
                },

                {
                    value:
                        "Black/Cork/Lilac/Navy",

                    image:
                        "images/prd7vr3img1.png",

                    images: [
                        "images/prd7vr3img1.png",
                        "images/prd7vr3img2.png",
                        "images/prd7vr3img3.png",
                        "images/prd7vr3img4.png",
                        "images/prd7vr3img5.png",
                    ],

                    price:
                        "1299",

                    asin:
                        "B0DG5S9KQ7",

                    amazonLink:
                        "https://link.amazon/B0aq4fKwZ",

                    name:
                        "Pure Cotton Oversized Multicolour T-Shirt Combo for Men",

                    description:
                        "A Half sleeve,Round Neck Oversized T-Shirt with 4 combo of Multicolour. More comfortable for your classic everyday look.",

                    features:[
                          "Material: Cotton",
                        "Fit type: Oversized fit",
                        "Sleeve Type: half Sleeves",
                        "Collar style: Round neck",
                        "Neck style: Round Neck",
                        "Pattern: Solid",
                        "Country of Origin: India"
                    ],

                    rating:
                       4.0 ,

                    reviews:
                        "615+"
                },

                {
                    value:
                        "Black/White/Green117/Navy",

                    image:
                        "images/prd7vr4img1.png",

                    images: [
                        "images/prd7vr4img1.png",
                        "images/prd7vr4img2.png",
                        "images/prd7vr4img3.png",
                        "images/prd7vr4img4.png",
                        "images/prd7vr4img5.png",
                    ],

                    price:
                        "1299",

                    asin:
                        "B0F9FQRVRR",

                    amazonLink:
                        "https://link.amazon/B0aq4fKwZ",

                    name:
                        "Pure Cotton Oversized Multicolour T-Shirt Combo for Men",

                    description:
                        "A Half sleeve,Round Neck Oversized T-Shirt with 4 combo of Multicolour. More comfortable for your classic everyday look.",

                    features:[
                          "Material: Cotton",
                        "Fit type: Oversized fit",
                        "Sleeve Type: half Sleeves",
                        "Collar style: Round neck",
                        "Neck style: Round Neck",
                        "Pattern: Solid",
                        "Country of Origin: India"
                    ],

                    rating:
                       4.0 ,

                    reviews:
                        "615+"
                },

                {
                    value:
                        "Black/Swanwhite/Navy/White",

                    image:
                        "images/prd7vr5img1.png",

                    images: [
                        "images/prd7vr5img1.png",
                        "images/prd7vr5img2.png",
                        "images/prd7vr5img3.png",
                        "images/prd7vr5img4.png",
                        "images/prd7vr5img5.png",
                    ],

                    price:
                        "1299",

                    asin:
                        "B0DG5QYPR1",

                    amazonLink:
                        "https://link.amazon/B0aq4fKwZ",

                    name:
                        "Pure Cotton Oversized Multicolour T-Shirt Combo for Men",

                    description:
                        "A Half sleeve,Round Neck Oversized T-Shirt with 4 combo of Multicolour. More comfortable for your classic everyday look.",

                    features:[
                          "Material: Cotton",
                        "Fit type: Oversized fit",
                        "Sleeve Type: half Sleeves",
                        "Collar style: Round neck",
                        "Neck style: Round Neck",
                        "Pattern: Solid",
                        "Country of Origin: India"
                    ],

                    rating:
                       4.0 ,

                    reviews:
                        "615+"
                },

                 {
                    value:
                        "Black/White/Green117/Swanwhite",

                    image:
                        "images/prd7vr6img1.png",

                    images: [
                        "images/prd7vr6img1.png",
                        "images/prd7vr6img2.png",
                        "images/prd7vr6img3.png",
                        "images/prd7vr6img4.png",
                        "images/prd7vr6img5.png",
                    ],

                    price:
                        "1299",

                    asin:
                        "B0F9FSSKRV",

                    amazonLink:
                        "https://link.amazon/B0aq4fKwZ",

                    name:
                        "Pure Cotton Oversized Multicolour T-Shirt Combo for Men",

                    description:
                        "A Half sleeve,Round Neck Oversized T-Shirt with 4 combo of Multicolour. More comfortable for your classic everyday look.",

                    features:[
                          "Material: Cotton",
                        "Fit type: Oversized fit",
                        "Sleeve Type: half Sleeves",
                        "Collar style: Round neck",
                        "Neck style: Round Neck",
                        "Pattern: Solid",
                        "Country of Origin: India"
                    ],

                    rating:
                       4.0 ,

                    reviews:
                        "615+"
                },

                {
                    value:
                        "Black/White/Green117/Lilac",

                    image:
                        "images/prd7vr7img1.png",

                    images: [
                        "images/prd7vr7img1.png",
                        "images/prd7vr7img2.png",
                        "images/prd7vr7img3.png",
                        "images/prd7vr7img4.png",
                        "images/prd7vr7img5.png",
                    ],

                    price:
                        "1299",

                    asin:
                        "B0F9FSXBHY",

                    amazonLink:
                        "https://link.amazon/B0aq4fKwZ",

                    name:
                        "Pure Cotton Oversized Multicolour T-Shirt Combo for Men",

                    description:
                        "A Half sleeve,Round Neck Oversized T-Shirt with 4 combo of Multicolour. More comfortable for your classic everyday look.",

                    features:[
                          "Material: Cotton",
                        "Fit type: Oversized fit",
                        "Sleeve Type: half Sleeves",
                        "Collar style: Round neck",
                        "Neck style: Round Neck",
                        "Pattern: Solid",
                        "Country of Origin: India"
                    ],

                    rating:
                       4.0 ,

                    reviews:
                        "615+"
                },

                {
                    value:
                        "Cork/Lilac/Black/Maroon",

                    image:
                        "images/prd7vr8img1.png",

                    images: [
                        "images/prd7vr8img1.png",
                        "images/prd7vr8img2.png",
                        "images/prd7vr8img3.png",
                        "images/prd7vr8img4.png",
                        "images/prd7vr8img5.png",
                    ],

                    price:
                        "1299",

                    asin:
                        "B0DG5RDBPK",

                    amazonLink:
                        "https://link.amazon/B0aq4fKwZ",

                    name:
                        "Pure Cotton Oversized Multicolour T-Shirt Combo for Men",

                    description:
                        "A Half sleeve,Round Neck Oversized T-Shirt with 4 combo of Multicolour. More comfortable for your classic everyday look.",

                    features:[
                          "Material: Cotton",
                        "Fit type: Oversized fit",
                        "Sleeve Type: half Sleeves",
                        "Collar style: Round neck",
                        "Neck style: Round Neck",
                        "Pattern: Solid",
                        "Country of Origin: India"
                    ],

                    rating:
                       4.0 ,

                    reviews:
                        "615+"
                },

                {
                    value:
                        "Swanwhite/Navy/White/Maroon",

                    image:
                        "images/prd7vr9img1.png",

                    images: [
                        "images/prd7vr9img1.png",
                        "images/prd7vr9img2.png",
                        "images/prd7vr9img3.png",
                        "images/prd7vr9img4.png",
                    ],

                    price:
                        "1299",

                    asin:
                        "B0DG5RFVTQ",

                    amazonLink:
                        "https://link.amazon/B0aq4fKwZ",

                    name:
                        "Pure Cotton Oversized Multicolour T-Shirt Combo for Men",

                    description:
                        "A Half sleeve,Round Neck Oversized T-Shirt with 4 combo of Multicolour. More comfortable for your classic everyday look.",

                    features:[
                          "Material: Cotton",
                        "Fit type: Oversized fit",
                        "Sleeve Type: half Sleeves",
                        "Collar style: Round neck",
                        "Neck style: Round Neck",
                        "Pattern: Solid",
                        "Country of Origin: India"
                    ],

                    rating:
                       4.0 ,

                    reviews:
                        "615+"
                },

                {
                    value:
                        "Swanwhite/Navy/White/Maroon",

                    image:
                        "images/prd7vr9img1.png",

                    images: [
                        "images/prd7vr9img1.png",
                        "images/prd7vr9img2.png",
                        "images/prd7vr9img3.png",
                        "images/prd7vr9img4.png",
                    ],

                    price:
                        "1299",

                    asin:
                        "B0DG5RFVTQ",

                    amazonLink:
                        "https://link.amazon/B0aq4fKwZ",

                    name:
                        "Pure Cotton Oversized Multicolour T-Shirt Combo for Men",

                    description:
                        "A Half sleeve,Round Neck Oversized T-Shirt with 4 combo of Multicolour. More comfortable for your classic everyday look.",

                    features:[
                          "Material: Cotton",
                        "Fit type: Oversized fit",
                        "Sleeve Type: half Sleeves",
                        "Collar style: Round neck",
                        "Neck style: Round Neck",
                        "Pattern: Solid",
                        "Country of Origin: India"
                    ],

                    rating:
                       4.0 ,

                    reviews:
                        "615+"
                },
            ]
        }
    },

    {
        id: 8,

        asin:
            "B0GWQHDNBB",

        name:
            "Cotton Oversized T-Shirt Unisex Drop Shoulder Dye Washed Street",

        category: "T-Shirts",
        collection: "Oversize",

        price:
            "359",

        rating:
            2.7,

        reviews:
            "20+",

        boughtText:
            "",

        badge:
            "casual wear",

        image:
            "images/prd8vr1img1.png",

        images: [
            "images/prd8vr1img1.png",
            "images/prd8vr1img2.png",
            "images/prd8vr1img3.png",
            "images/prd8vr1img4.png",
        ],

        description:
            "Material and Quality: Premium bio-washed soft and smooth skin friendly 100% cotton ,blend with high quality Acid Wash with sharp details with minimal Print which give standout and refined touch. Sleeve type: Half Sleeve; Neck Type: Round Neck; Fitting type: Oversized Fit; Age Range Description: Adult; Occasion: Casual.",

        features: [
            "Material: 100% Cotton",
            "Fit type: Oversized fit",
            "Sleeve Type: half Sleeves",
            "Collar style: Crew neck",
            "Length: Long neck",
            "Neck Style: Crew Neck",
            "Country of Origin: India"
        ],

        amazonLink:
            "https://link.amazon/B0cWtyu5e",

    variations: {

          defaultSelection:
                "Black",

            options: [



                {
                    value:
                        "Black",

                    image:
                        "images/prd8vr1img1.png",

                    images: [
                        "images/prd8vr1img1.png",
                        "images/prd8vr1img2.png",
                        "images/prd8vr1img3.png",
                        "images/prd8vr1img4.png"
                    ],

                    price:
                        "359",

                    asin:
                        "B0GWQHDNBB",

                    amazonLink:
                        "https://link.amazon/B0cWtyu5e",

                    name:
                        "Cotton Oversized T-Shirt Unisex Drop Shoulder Dye Washed Street",

                    description:
                        "Material and Quality: Premium bio-washed soft and smooth skin friendly 100% cotton ,blend with high quality Acid Wash with sharp details with minimal Print which give standout and refined touch. Sleeve type: Half Sleeve; Neck Type: Round Neck; Fitting type: Oversized Fit; Age Range Description: Adult; Occasion: Casual.",

                    features:[
                       "Material: 100% Cotton",
                       "Fit type: Oversized fit",
                       "Sleeve Type: half Sleeves",
                       "Collar style: Crew neck",
                       "Length: Long neck",
                       "Neck Style: Crew Neck",
                       "Country of Origin: India"
                    ],

                    rating:
                        2.7,

                    reviews:
                        "20+"
                },

                {
                    value:
                        "Olive Green",

                    image:
                        "images/prd8vr2img1.png",

                    images: [
                        "images/prd8vr2img1.png",
                        "images/prd8vr2img2.png",
                        "images/prd8vr2img3.png",
                        "images/prd8vr2img4.png"
                    ],

                    price:
                        "359",

                    asin:
                        "B0GWQ9YSL7",

                    amazonLink:
                        "https://link.amazon/B0cWtyu5e",

                    name:
                        "Cotton Oversized T-Shirt Unisex Drop Shoulder Dye Washed Street",

                    description:
                        "Material and Quality: Premium bio-washed soft and smooth skin friendly 100% cotton ,blend with high quality Acid Wash with sharp details with minimal Print which give standout and refined touch. Sleeve type: Half Sleeve; Neck Type: Round Neck; Fitting type: Oversized Fit; Age Range Description: Adult; Occasion: Casual.",

                    features:[
                       "Material: 100% Cotton",
                       "Fit type: Oversized fit",
                       "Sleeve Type: half Sleeves",
                       "Collar style: Crew neck",
                       "Length: Long neck",
                       "Neck Style: Crew Neck",
                       "Country of Origin: India"
                    ],

                    rating:
                        2.7,

                    reviews:
                        "20+"
                },

                {
                    value:
                        "Acid Dragon",

                    image:
                        "images/prd8vr3img1.png",

                    images: [
                        "images/prd8vr3img1.png",
                        "images/prd8vr3img2.png",
                        "images/prd8vr3img3.png",
                        "images/prd8vr3img4.png"
                    ],

                    price:
                        "359",

                    asin:
                        "B0H2BG9XX1",

                    amazonLink:
                        "https://link.amazon/B0cWtyu5e",

                    name:
                        "Cotton Oversized T-Shirt Unisex Drop Shoulder Dye Washed Street",

                    description:
                        "Material and Quality: Premium bio-washed soft and smooth skin friendly 100% cotton ,blend with high quality Acid Wash with sharp details with minimal Print which give standout and refined touch. Sleeve type: Half Sleeve; Neck Type: Round Neck; Fitting type: Oversized Fit; Age Range Description: Adult; Occasion: Casual.",

                    features:[
                       "Material: 100% Cotton",
                       "Fit type: Oversized fit",
                       "Sleeve Type: half Sleeves",
                       "Collar style: Crew neck",
                       "Length: Long neck",
                       "Neck Style: Crew Neck",
                       "Country of Origin: India"
                    ],

                    rating:
                        2.7,

                    reviews:
                        "20+"
                },

                {
                    value:
                        "OPT Black Dragon",

                    image:
                        "images/prd8vr4img1.png",

                    images: [
                        "images/prd8vr4img1.png",
                        "images/prd8vr4img2.png",
                        "images/prd8vr4img3.png",
                        "images/prd8vr4img4.png"
                    ],

                    price:
                        "359",

                    asin:
                        "B0H2BG9XX1",

                    amazonLink:
                        "https://link.amazon/B0cWtyu5e",

                    name:
                        "Cotton Oversized T-Shirt Unisex Drop Shoulder Dye Washed Street",

                    description:
                        "Material and Quality: Premium bio-washed soft and smooth skin friendly 100% cotton ,blend with high quality Acid Wash with sharp details with minimal Print which give standout and refined touch. Sleeve type: Half Sleeve; Neck Type: Round Neck; Fitting type: Oversized Fit; Age Range Description: Adult; Occasion: Casual.",

                    features:[
                       "Material: 100% Cotton",
                       "Fit type: Oversized fit",
                       "Sleeve Type: half Sleeves",
                       "Collar style: Crew neck",
                       "Length: Long neck",
                       "Neck Style: Crew Neck",
                       "Country of Origin: India"
                    ],

                    rating:
                        2.7,

                    reviews:
                        "20+"
                },


            ]
        }


    }, 

    {
        id: 9,

        asin:
            "B0GWXJ26QM",

        name:
            "Men's Plain Pollycotton Relax Fit Round Neck T-Shirt",

        category: "T-Shirts",
        collection: "Oversize",

        price:
            "349",

        rating:
            3.5,

        reviews:
            "103+",

        boughtText:
            "100+ bought in last 30 days",

        badge:
            "casual wear",

        image:
            "images/prd9vr1img1.png",

        images: [
            "images/prd9vr1img1.png",
            "images/prd9vr1img2.png",
            "images/prd9vr1img3.png",
            "images/prd9vr1img4.png",
        ],

        description:
            "Soft Polycotton Fabric: Made from a breathable and lightweight polycotton blend for all-day comfort. Relax Fit Design: Provides a loose and comfortable fit, allowing easy movement and a relaxed feel. Classic Round Neck Style: Timeless crew neck design suitable for casual, gym, and everyday wear. Half Sleeve Comfort: Features half sleeves for warm weather and active use, keeping you cool and comfortable. Versatile Everyday Wear: Suitable for casual outings, workouts, travel, and home wear",

        features: [
            "Material: PolyCotton",
            "Fit type: Relaxed fit",
            "Sleeve Type: half Sleeves",
            "Collar style: Round neck",
            "Neck Style: Crew Neck",
            "Country of Origin: India"
        ],

        amazonLink:
            "https://link.amazon/B02PAo0r3",

    variations: {

          defaultSelection:
          "Black",

            options: [



                {
                    value:
                        "Black",

                    image:
                        "images/prd9vr1img1.png",

                    images: [
                        "images/prd9vr1img1.png",
                        "images/prd9vr1img2.png",
                        "images/prd9vr1img3.png",
                        "images/prd9vr1img4.png"
                    ],

                    price:
                        "349",

                    asin:
                        "B0GWXJ26QM",

                    amazonLink:
                        "https://link.amazon/B02PAo0r3",

                    name:
                        "Men's Plain Pollycotton Relax Fit Round Neck T-Shirt",

                    description:
                        "Soft Polycotton Fabric: Made from a breathable and lightweight polycotton blend for all-day comfort. Relax Fit Design: Provides a loose and comfortable fit, allowing easy movement and a relaxed feel. Classic Round Neck Style: Timeless crew neck design suitable for casual, gym, and everyday wear. Half Sleeve Comfort: Features half sleeves for warm weather and active use, keeping you cool and comfortable. Versatile Everyday Wear: Suitable for casual outings, workouts, travel, and home wear",

                    features:[
                    "Material: PolyCotton",
                    "Fit type: Relaxed fit",
                    "Sleeve Type: half Sleeves",
                    "Collar style: Round neck",
                    "Neck Style: Crew Neck",
                    "Country of Origin: India"
                    ],

                    rating:
                        3.5,

                    reviews:
                        "103+"
                },

                {
                    value:
                        "White",

                    image:
                        "images/prd9vr2img1.png",

                    images: [
                        "images/prd9vr2img1.png",
                        "images/prd9vr2img2.png",
                        "images/prd9vr2img3.png",
                        "images/prd9vr2img4.png"
                    ],

                    price:
                        "349",

                    asin:
                        "B0GWXBKY4G",

                    amazonLink:
                        "https://link.amazon/B02PAo0r3",

                    name:
                        "en's Plain Pollycotton Relax Fit Round Neck T-Shirt",

                    description:
                        "Soft Polycotton Fabric: Made from a breathable and lightweight polycotton blend for all-day comfort. Relax Fit Design: Provides a loose and comfortable fit, allowing easy movement and a relaxed feel. Classic Round Neck Style: Timeless crew neck design suitable for casual, gym, and everyday wear. Half Sleeve Comfort: Features half sleeves for warm weather and active use, keeping you cool and comfortable. Versatile Everyday Wear: Suitable for casual outings, workouts, travel, and home wear",

                    features:[
                        "Material: PolyCotton",
                        "Fit type: Relaxed fit",
                        "Sleeve Type: half Sleeves",
                        "Collar style: Round neck",
                        "Neck Style: Crew Neck",
                        "Country of Origin: India"
                    ],

                    rating:
                        3.5,

                    reviews:
                        "103+"
                },

            ]
        }
    },
 
    {
        id: 11,

        asin:
            "B0FY2R7QPX",

        name:
            "Men's Half Zipper Color Block Hooded Sweatshirt.",

        category:
            "Hoodies",
        collection: "Half-Zip Hoodies",

        price:
            "499",

        rating:
            3.7,

        reviews:
            "319+",

        boughtText:
            "50+ bought in last 30 days",

        badge:
            "Winter wear",

        image:
            "images/prd11vr1img1.png",

        images: [
            "images/prd11vr1img1.png",
            "images/prd11vr1img2.png",
            "images/prd11vr1img3.png",
            "images/prd11vr1img4.png",
        ],

        description:
            "Men's Half-Zip Colorblock Hoodie- Modern, sporty design for a stylish everyday look. Athletic Detailing: Dual stripes on sleeves add a bold, dynamic touch. Hooded Neckline: Offers extra warmth and casual appeal. Minimalist Design: No pockets for a clean, sleek silhouette. Ideal For: Streetwear, gym sessions, travel, and casual outings",

        features: [
            "Material: Fleece",
            "Fit type: Regular fit",
            "Sleeve Type: Long Sleeves",
            "Length: Standard Length",
            "Neck Style: Hooded Neck",
            "Country of Origin: India"
        ],

        amazonLink:
            "https://link.amazon/B03lCsw6R",

    variations: {

          defaultSelection:
          "Coffee::Black",

            options: [



                {
                    value:
                        "Coffee::Black",

                    image:
                        "images/prd11vr1img1.png",

                    images: [
                        "images/prd11vr1img1.png",
                        "images/prd11vr1img2.png",
                        "images/prd11vr1img3.png",
                        "images/prd11vr1img4.png",
                    ],

                    price:
                        "499",

                    asin:
                        "B0FY2R7QPX",

                    amazonLink:
                        "https://link.amazon/B03lCsw6R",

                    name:
                        "Men's Half Zipper Color Block Hooded Sweatshirt.",

                    description:
                        "Comfort & Style: Best Winter wear with style of Bomber Jacket with Regular Fit. Comfortable and durable: This bomber jacket It has a ribbed collar and cozy fit. It also has a smooth zipper closure and multiple pockets. Fit and size: This bomber jacket has a slim and Regular fit that is neither too tight nor too loose. It runs true to size, but you can refer to the size chart in the product images to find your best fit.",

                    features: [
                        "Material: Fleece",
                        "Fit type: Regular fit",
                        "Sleeve Type: Long Sleeves",
                        "Length: Standard Length",
                        "Neck Style: Hooded Neck",
                        "Country of Origin: India"
                    ],

                    rating:
                        3.4,

                    reviews:
                        "319+"
                },

                {
                    value:
                        "Black::Darkgrey",

                    image:
                        "images/prd11vr2img1.png",

                    images: [
                        "images/prd11vr2img1.png",
                        "images/prd11vr2img2.png",
                        "images/prd11vr2img3.png",
                        "images/prd11vr2img4.png",
                    ],

                    price:
                        "499",

                    asin:
                        "B0FY2ZS9HL",

                    amazonLink:
                        "https://link.amazon/B03lCsw6R",

                    name:
                        "Men's Half Zipper Color Block Hooded Sweatshirt.",

                    description:
                        "Comfort & Style: Best Winter wear with style of Bomber Jacket with Regular Fit. Comfortable and durable: This bomber jacket It has a ribbed collar and cozy fit. It also has a smooth zipper closure and multiple pockets. Fit and size: This bomber jacket has a slim and Regular fit that is neither too tight nor too loose. It runs true to size, but you can refer to the size chart in the product images to find your best fit.",

                    features: [
                        "Material: Fleece",
                        "Fit type: Regular fit",
                        "Sleeve Type: Long Sleeves",
                        "Length: Standard Length",
                        "Neck Style: Hooded Neck",
                        "Country of Origin: India"
                    ],

                    rating:
                        3.4,

                    reviews:
                        "319+"
                },

                {
                    value:
                        "DarkGrey::Black",

                    image:
                        "images/prd11vr3img1.png",

                    images: [
                        "images/prd11vr3img1.png",
                        "images/prd11vr3img2.png",
                        "images/prd11vr3img3.png",
                        "images/prd11vr3img4.png",
                    ],

                    price:
                        "499",

                    asin:
                        "B0FY2VBNCM",

                    amazonLink:
                        "https://link.amazon/B03lCsw6R",

                    name:
                        "Men's Half Zipper Color Block Hooded Sweatshirt.",

                    description:
                        "Comfort & Style: Best Winter wear with style of Bomber Jacket with Regular Fit. Comfortable and durable: This bomber jacket It has a ribbed collar and cozy fit. It also has a smooth zipper closure and multiple pockets. Fit and size: This bomber jacket has a slim and Regular fit that is neither too tight nor too loose. It runs true to size, but you can refer to the size chart in the product images to find your best fit.",

                    features: [
                        "Material: Fleece",
                        "Fit type: Regular fit",
                        "Sleeve Type: Long Sleeves",
                        "Length: Standard Length",
                        "Neck Style: Hooded Neck",
                        "Country of Origin: India"
                    ],

                    rating:
                        3.4,

                    reviews:
                        "319+"
                },

            ]
        }
    },

    {    
        id: 12,

        asin:
            "B0DBDMYWK3",

        name:
            "Hoodie Sweatshirt For Unisex",

        category:"Hoodies",
        collection: "Pullover Hoodies",

        price:
            "579",

        rating:
            3.8,

        reviews:
            "2239+",

        boughtText:
            "100+ bought in last 30 days",

        badge:
            "Winter wear",

        image:
            "images/prd12vr1img1.png",

        images: [
            "images/prd12vr1img1.png",
            "images/prd12vr1img2.png",
            "images/prd12vr1img3.png",
            "images/prd12vr1img4.png",
            "images/prd12vr1img5.png",
        ],

        description:
            "Hoodies || Sweatshirt for Unisex || Unisex Hoodie.Actual Products color may vary with product due to monitor settings. Wash care: machine wash cold, tumble dry low, do not bleach. Check our size chart to get your best fit",

        features: [
            "Material: Polyster",
            "Fit type: Regular fit",
            "Sleeve Type: Long Sleeves",
            "Length: Standard Length",
            "Neck Style: Hooded Neck",
            "Country of Origin: India"
        ],

        amazonLink:
            "https://link.amazon/B021ZQQqq",

    variations: {

          defaultSelection:
          "Black",

            options: [



                {
                    value:
                        "Black",

                    image:
                        "images/prd12vr1img1.png",

                    images: [
                        "images/prd12vr1img1.png",
                        "images/prd12vr1img2.png",
                        "images/prd12vr1img3.png",
                        "images/prd12vr1img4.png",
                        "images/prd12vr1img5.png",
                    ],

                    price:
                        "579",

                    asin:
                        "B0DBDMYWK3",

                    amazonLink:
                        "https://link.amazon/B021ZQQqq",

                    name:
                        "Hoodie Sweatshirt For Unisex",

                    description:
                        "Hoodies || Sweatshirt for Unisex || Unisex Hoodie.Actual Products color may vary with product due to monitor settings. Wash care: machine wash cold, tumble dry low, do not bleach. Check our size chart to get your best fit.",

                    features: [
                        "Material: Fleece",
                        "Fit type: Regular fit",
                        "Sleeve Type: Long Sleeves",
                        "Length: Standard Length",
                        "Neck Style: Hooded Neck",
                        "Country of Origin: India"
                    ],

                    rating:
                        3.8,

                    reviews:
                        "2239+"

                },


                {
                    value:
                        "Brown",

                    image:
                        "images/prd12vr2img1.png",

                    images: [
                        "images/prd12vr2img1.png",
                        "images/prd12vr2img2.png",
                        "images/prd12vr2img3.png",
                        "images/prd12vr2img4.png",
                        "images/prd12vr2img5.png",
                    ],

                    price:
                        "579",

                    asin:
                        "B0DBDP7RMN",

                    amazonLink:
                        "https://link.amazon/B021ZQQqq",

                    name:
                        "Hoodie Sweatshirt For Unisex",

                    description:
                        "Hoodies || Sweatshirt for Unisex || Unisex Hoodie.Actual Products color may vary with product due to monitor settings. Wash care: machine wash cold, tumble dry low, do not bleach. Check our size chart to get your best fit.",

                    features: [
                        "Material: Fleece",
                        "Fit type: Regular fit",
                        "Sleeve Type: Long Sleeves",
                        "Length: Standard Length",
                        "Neck Style: Hooded Neck",
                        "Country of Origin: India"
                    ],

                    rating:
                        3.8,

                    reviews:
                        "2239+"

                },
            ]
        }
    },

    {    
        id: 13,

        asin:
            "B0CJJ7KDJZ",

        name:
            "Cotton Fleece | Hooded Neck Full Sleeve | Regular Fit Sweatshirt | Solid Hoodie for Men ",

        category:
            "Hoodies",
        collection: "Pullover Hoodies",

        price:
            "849",

        rating:
            3.9,

        reviews:
            "1409+",

        boughtText:
            "",

        badge:
            "Winter wear",

        image:
            "images/prd13vr1img1.png",

        images: [
            "images/prd13vr1img1.png",
            "images/prd13vr1img2.png",
            "images/prd13vr1img3.png",
            "images/prd13vr1img4.png",
        ],

        description:
            "Pick Your Fit - Regular or oversized, designed for maximum comfort and easygoing vibes. Hood Love - Adjustable hoods with drawstring to keep you cosy, street-ready, and camera-ready. Expressive Designs - Bright solids and big, bold front and back prints guaranteed to turn heads. Colour & Shape Retention - Maintains vibrancy and fit wash after wash. Style It Your Way - Throw on with jeans, joggers, or layer under a bomber on chilly winter nights.",

        features: [
            "Material: Cotton Polly Fleece",
            "Fit type: Regular fit",
            "Sleeve Type: Long Sleeves",
            "Length: Standard Length",
            "Neck Style: Hooded Neck",
            "Country of Origin: India"
        ],

        amazonLink:
            "https://link.amazon/B0hXYEX8J",

    variations: {

          defaultSelection:
          "Beige",

            options: [



                {
                    value:
                        "Beige",

                    image:
                        "images/prd13vr1img1.png",

                    images: [
                        "images/prd13vr1img1.png",
                        "images/prd13vr1img2.png",
                        "images/prd13vr1img3.png",
                        "images/prd13vr1img4.png",
                    ],

                    price:
                        "849",

                    asin:
                        "B0CJJ7KDJZ",

                    amazonLink:
                        "https://link.amazon/B0hXYEX8J",

                    name:
                        "Cotton Fleece | Hooded Neck Full Sleeve | Regular Fit Sweatshirt | Solid Hoodie for Men ",

                    description:
                        "Pick Your Fit - Regular or oversized, designed for maximum comfort and easygoing vibes. Hood Love - Adjustable hoods with drawstring to keep you cosy, street-ready, and camera-ready. Expressive Designs - Bright solids and big, bold front and back prints guaranteed to turn heads. Colour & Shape Retention - Maintains vibrancy and fit wash after wash. Style It Your Way - Throw on with jeans, joggers, or layer under a bomber on chilly winter nights.",

                    features: [
                        "Material: Cotton Polly Fleece",
                        "Fit type: Regular fit",
                        "Sleeve Type: Long Sleeves",
                        "Length: Standard Length",
                        "Neck Style: Hooded Neck",
                        "Country of Origin: India"
                    ],

                    rating:
                        3.9,

                    reviews:
                        "1409+"

                },

                {
                    value:
                        "Black",

                    image:
                        "images/prd13vr2img1.png",

                    images: [
                        "images/prd13vr2img1.png",
                        "images/prd13vr2img2.png",
                        "images/prd13vr2img3.png",
                        "images/prd13vr2img4.png",
                    ],

                    price:
                        "800",

                    asin:
                        "B0CJJ6MJWR",

                    amazonLink:
                        "https://link.amazon/B0hXYEX8J",

                    name:
                        "Cotton Fleece | Hooded Neck Full Sleeve | Regular Fit Sweatshirt | Solid Hoodie for Men ",

                    description:
                        "Pick Your Fit - Regular or oversized, designed for maximum comfort and easygoing vibes. Hood Love - Adjustable hoods with drawstring to keep you cosy, street-ready, and camera-ready. Expressive Designs - Bright solids and big, bold front and back prints guaranteed to turn heads. Colour & Shape Retention - Maintains vibrancy and fit wash after wash. Style It Your Way - Throw on with jeans, joggers, or layer under a bomber on chilly winter nights.",

                    features: [
                        "Material: Cotton Polly Fleece",
                        "Fit type: Regular fit",
                        "Sleeve Type: Long Sleeves",
                        "Length: Standard Length",
                        "Neck Style: Hooded Neck",
                        "Country of Origin: India"
                    ],

                    rating:
                        3.9,

                    reviews:
                        "1409+"

                },
            ]
        }
    },

    {    
        id: 15,

        asin:
            "B07YMZMMRT",

        name:
            "Men,s Round Nect T-Shirt",

        category:
            "T-Shirts",
        collection: "Full sleeve without collar",

        price:
            "779",

        badge:
            "Regular Wear",

        image:
            "images/prd15vr1img1.png",

        images: [
            "images/prd15vr1img1.png",
            "images/prd15vr1img2.png",
            "images/prd15vr1img3.png",
        ],

        description:
            "Combed Cotton Rich Fabric | Fabric Composition : Cotton and PolyesterFull Sleeve",

        features: [
            "Material: 80% Cotton, 20% Polycotton",
            "Fit type: Regular fit",
            "Sleeve Type: Long Sleeves",
            "Length: Standard Length",
            "Collar style: Round Neck",
        ],

        amazonLink:
            "https://link.amazon/B039PyyPN",

    variations: null
    },

    {    
        id: 16,

        asin:
            "B0H9YJSLNJ",

        name:
            "Men's Textured Fabric Solid Half-Open Collar T-Shirt",

        category:
            "T-Shirts",
        collection: "Full sleeve without collar",

        price:
            "365",

        badge:
            "Casual Wear",

        image:
            "images/prd16vr1img1.png",

        images: [
            "images/prd16vr1img1.png",
            "images/prd16vr1img2.png",
            "images/prd16vr1img3.png",
        ],

        description:
            "Perfect for casual outings, office, college, travel, weekend wear, evening gatherings, and layering during the fall and mild winter seasons.",

        features: [
            "Material: Polycotton",
            "Fit type: Regular fit",
            "Sleeve Type: Long Sleeves",
            "Length: Standard Length",
            "Collar style: Round Neck",
        ],

        amazonLink:
            "https://link.amazon/B0fbk51DA",

    variations: null
    },

    {    
        id: 17,

        asin:
            "B0G2XQ4Y6N",

        name:
            "Mens Cotton | Regular Fit | Classic Long Sleeve | Round Neck T-Shirt",

        category:
            "T-Shirts",
        collection: "Full sleeve without collar",

        price:
            "currently unavailable",

        badge:
            "Regular Wear",

        image:
            "images/prd17vr1img1.png",

        images: [
            "images/prd17vr1img1.png",
            "images/prd17vr1img2.png",
            "images/prd17vr1img3.png",
        ],

        description:
            "Premium cotton poly blend fabric provides a naturally soft, breathable and comfortable wearing experience for all-day use",

        features: [
            "Material: 100% cotton",
            "Fit type: Regular fit",
            "Sleeve Type: Long Sleeves",
            "Length: Standard Length",
            "Collar style: Round Neck",
        ],

        amazonLink:
            "https://link.amazon/B07de6lWU",

    variations: null
    },

    {    
        id: 18,

        asin:
            "B0DHZJMDTC",

        name:
            "Men's Full Sleeves Gym Slim Fit T-Shirt",

        category:
            "T-Shirts",
        collection: "Full sleeve without collar",

        price:
            "999",

        badge:
            "Gym slim fit",

        image:
            "images/prd18vr1img1.png",

        images: [
            "images/prd18vr1img1.png",
            "images/prd18vr1img2.png",
            "images/prd18vr1img3.png",
            "images/prd18vr1img4.png",
        ],

        description:
            "Fitted Fullsleeves. Sweat wicking breathable fabric. Soft stretch fabric. Raglan sleeves with logo branding on chest",

        features: [
            "Material: 92%Soft Polyster 8% Spandex",
            "Fit type: Slim fit",
            "Sleeve Type: Long Sleeves",
            "Length: Standard Length",
            "Collar style: Crew",
        ],

        amazonLink:
           "https://link.amazon/B0htOMebL",

    variations: null
    },

    {    
        id: 19,

        asin:
            "B0CPR5N5ZX",

        name:
            "Men's Cotton Ceck Shirt Relaxed Fit",

        category:
            "Shirts",
        collection: "Check Shirts",

        price:
            "1698",

        badge:
            "Casual wear",

        image:
            "images/prd19vr1img1.png",

        images: [
            "images/prd19vr1img1.png",
            "images/prd19vr1img2.png",
            "images/prd19vr1img3.png",
            "images/prd19vr1img4.png",
            "images/prd19vr1img5.png"
        ],

        description:
            "High Definition Print - Using the highest quality solvents and colors combines with fully automated machines, we ensure our t-shirts have razor-sharp prints that highlight every single detail.",

        features: [
            "Material: Cotton",
            "Fit type: casual fit",
            "Sleeve Type: Long Sleeves",
            "Length: Standard Length",
            
        ],

        amazonLink:
           "https://link.amazon/B023CVPVC",

    variations: null
    },

    {    
        id: 20,

        asin:
            "B0FJXN534Q",

        name:
            "Man Stylish Slim Fit Cotton Spread Collar Checked Casual Shirt",

        category:
            "Shirts",
        collection: "Check Shirts",

        price:
            "549",

        badge:
            "Casual wear",

        image:
            "images/prd20vr1img1.png",

        images: [
            "images/prd20vr1img1.png",
            "images/prd20vr1img2.png",
            "images/prd20vr1img3.png",
            "images/prd20vr1img4.png",
            "images/prd20vr1img5.png"
        ],

        description:
            "Fabric - Premium Cotton, Pre-Washed for extremely soft finish and No Shrinkage Post Washing. shirt has a regular spread collar, button placket, and one patch pocket. Long sleeves with buttoned cuffs for an adjustable fit. The curved hem adds a touch of sophistication.",

        features: [
            "Material: Cotton",
            "Fit type: casual fit",
            "Sleeve Type: Long Sleeves",
            "Length: Standard Length",
            
        ],

        amazonLink:
            "https://link.amazon/B0aLfH9Yx",

    variations: null
    },

    {    
        id: 21,

        asin:
            "B0HCN77QTZ",

        name:
            "Men’s Checked Casual Shirts | Full Sleeve Dual Flap Pocket Check Style",

        category:
            "Shirts",
        collection: "Check Shirts",

        price:
            "495",

        badge:
            "casual wear",

        image:
            "images/prd21vr1img1.png",

        images: [
            "images/prd21vr1img1.png",
            "images/prd21vr1img2.png",
            "images/prd21vr1img3.png",
            "images/prd21vr1img4.png",
            "images/prd21vr1img5.png"
        ],

        description:
            "Classic Checked Pattern: Stylish grey and white plaid/check design for a timeless yet modern appearance.Dual Flap Chest Pockets: Two statement buttoned pockets enhance the utility and casual streetwear look.",

        features: [
            "Material: Cotton",
            "Fit type: casual fit",
            "Sleeve Type: Long Sleeves",
            "Length: Standard Length",
            
        ],

        amazonLink:
           "https://link.amazon/B01BGDnIZ",

    variations: null
    },

    {    
        id: 22,

        asin:
            "B0F47X59T2",

        name:
            "Cotton Men Shirt, Regular Fit",

        category:
            "Shirts",
        collection: "Check Shirts",

        price:
            "413",

        badge:
            "Casual wear",

        image:
            "images/prd22vr1img1.png",

        images: [
            "images/prd22vr1img1.png",
            "images/prd22vr1img2.png",
            "images/prd22vr1img3.png",
            "images/prd22vr1img4.png",
            "images/prd22vr1img5.png"
        ],

        description:
            "🧶👕 Fabric: Made from Poly cotton fabric, this fabric is a smooth, durable & blends the breathability of cotton. It is lightweight & moisture-absorbent. It ensures comfort, wrinkle resistance, and a structured fit",

        features: [
            "Material: Cotton",
            "Fit type: casual fit",
            "Sleeve Type: Long Sleeves",
            "Length: Standard Length",
            
        ],

        amazonLink:
           "https://link.amazon/B0eO8HpQW",

    variations: null
    },

    {    
        id: 23,

        asin:
            "B0BXLQJNQH",

        name:
            "Men's Cotton Ceck Shirt Relaxed Fit",

        category:
            "Shirts",
        collection: "Check Shirts",

        price:
            "489",

        badge:
            "Casual wear",

        image:
            "images/prd23vr1img1.png",

        images: [
            "images/prd23vr1img1.png",
            "images/prd23vr1img2.png",
            "images/prd23vr1img3.png",
            "images/prd23vr1img4.png",
            "images/prd23vr1img5.png"
        ],

        description:
            "Comfort : This light weight breathable premium Polycotton soft and smooth fabric designed to enhance comfort without compromising style. This Shirt is crafted to move seamlessly with the body, ensuring that you feel at ease throughout the day.",

        features: [
            "Material: Cotton",
            "Fit type: casual fit",
            "Sleeve Type: Long Sleeves",
            "Length: Standard Length",
            
        ],

        amazonLink:
           "https://link.amazon/B0cXVbdze",

    variations: null
    },

    {    
        id: 24,

        asin:
        "B0DTG86V7Y",

        name:
            "Man Comfort Slim Fit Pure Cotton Checked Casual Shirt",

        category:
            "Shirts",
        collection: "Check Shirts",

        price:
            "599",

        badge:
            "Casual wear",

        image:
            "images/prd24vr1img1.png",

        images: [
            "images/prd24vr1img1.png",
            "images/prd24vr1img2.png",
            "images/prd24vr1img3.png",
            "images/prd24vr1img4.png",
            "images/prd24vr1img5.png"
        ],

        description:
            "Fabric - Premium Cotton, Pre-Washed for extremely soft finish and No Shrinkage Post Washing. Details: Comes with a classic button-down front, one patch pocket,a standard collar, and full-length sleeves with adjustable cuffs for a polished yet casual vibe.",

        features: [
            "Material: Cotton",
            "Fit type: casual fit",
            "Sleeve Type: Long Sleeves",
            "Length: Standard Length",
            
        ],

        amazonLink:
           "https://link.amazon/B0gLvpjjE",

    variations: null
    },

    {    
        id: 25,

        asin:
            "B0HJCV4NGL",

        name:
            "Men's Cotton Check Casual Shirt for Men Stylish | Regular Fit Full Sleeve.",

        category:
            "Shirts",
        collection: "Check Shirts",

        price:
            "499",

        badge:
            "Casual wear",

        image:
            "images/prd25vr1img1.png",

        images: [
            "images/prd25vr1img1.png",
            "images/prd25vr1img2.png",
            "images/prd25vr1img3.png",
            "images/prd25vr1img4.png",
            "images/prd25vr1img5.png"
        ],

        description:
            "Premium Cotton Blend Fabric: Soft, breathable cotton shirt for men for all-day comfort.Stylish Check Design: Trendy checks create a modern casual look.Regular Fit: Comfortable fit with full sleeves and classic button-down collar.",

        features: [
            "Material: Cotton",
            "Fit type: casual fit",
            "Sleeve Type: Long Sleeves",
            "Length: Standard Length",
            
        ],

        amazonLink:
           "https://link.amazon/B0fbEzHq1",

    variations: null
    },

    {    
        id: 26,

        asin:
            "B0DL62Y49G",

        name:
            "Solid Hoodie for Men Stylish Huddy for Men Regular Fit Sweatshirts for Boys .",

        category:
            "Hoodies",
        collection: "Pullover Hoodies",

        price:
            "599",

        badge:
            "Winter wear",

        image:
            "images/prd26vr1img1.png",

        images: [
            "images/prd26vr1img1.png",
            "images/prd26vr1img2.png",
            "images/prd26vr1img3.png",
            "images/prd26vr1img4.png",
            "images/prd26vr1img5.png"
        ],

        description:
            "STYLE & ULTIMATE COMFORT HOODIES: Embrace classic style without compromising on comfort with our hoodie for men. It's expertly crafted from a premium cotton blend that not only feels exceptionally soft against your skin but also provides lasting comfort throughout the day. ",

        features: [
            "Material: Cotton",
            "Fit type: casual fit",
            "Sleeve Type: Long Sleeves",
            "Length: Standard Length",
            "Item Weight: 440 G"
            
        ],

        amazonLink:
           "https://link.amazon/B04Jfs9L6",

    variations: null
    },


] 