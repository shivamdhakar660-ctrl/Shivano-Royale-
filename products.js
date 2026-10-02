/* =====================================================
   Shivano.store
   PRODUCT DATABASE
===================================================== */

const products = [

    {
        id: 1,

        asin: "B0HBQR4M3L",

        name: "Premium Flannel Checkered Shirt",

        category: "Fashion",

        price: "499",

        rating: 3.4,

        reviews: 204,

        boughtText: "1k+ bought in past 30 days",

        badge: "POPULAR",

        image:
            "images/prd1img1.png",

        images: [
            "images/prd1img1.png",
            "images/prd1img2.png",
            "images/prd1img3.png"
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
        id: 2,

        asin: "B0DQ8B858G",

        name:
            "U.S. Polo Assn. Men's Sneakers",

        category:
            "Fashion",

        price:
            "2529",

        rating:
            4.2,

        reviews:
            489,

        boughtText:
            "100+ bought in past 30 days",

        badge:
            "TRENDING",

        image:
            "images/prd2img1.png",

        images: [
            "images/prd2img1.png",
            "images/prd2img2.png",
            "images/prd2img3.png",
            "images/prd2img4.png"
        ],

        description:
            "U.S. Polo Assn. men's sneakers for everyday casual styling.",

        features: [
            "heel Type: No heel",
            "Closure Type: Lace-Up",
            "Material: Polyurethane",
            "Casual sneaker design",
            "Men's footwear",
            "Everyday styling",
            "U.S. Polo Assn."
        ],

        amazonLink:
            "https://link.amazon/B086lCdBP",

        variations: null
    },


    {
        id: 3,

        asin:
            "B00ISNVQMW",

        name:
            "Titan Karishma Stainless Steel Watch",

        category:
            "Fashion",

        price:
            "1993",

        rating:
            4.4,

        reviews:
            3706,

        boughtText:
            "1k+ bought in past 30 days",

        badge:
            "EDITOR'S PICK",

        image:
            "images/prd3img1.png",

        images: [
            "images/prd3img1.png",
            "images/prd3img2.png",
            "images/prd3img3.png",
            "images/prd3img4.png"
        ],

        description:
            "stylish and elegant Titan Karishma Stainless Steel Watch for men, perfect for any occasion.",

        features: [
            "Case Diameter: 38 Millimeters",
            "Band colour: Silver",
            "Band Material: Stainless Steel",
            "Item Weight: 150 Grams",
            "Display Type: Analog",
            "Movement Type: Quartz",
            "Special Features: Water Resistant",
            "Power Source Type: Battery",
            "Water Resistance Depth: 30 Meters"
        ],

        amazonLink:
            "https://link.amazon/B0hajaGmS",

        variations: null
    },


    {
        id: 4,

        asin:
            "B00ISNVQMW",

        name:
            "Men's Basic Half-Open Collar T-Shirt,Textured fabric Solid Colour",

        category:
            "Fashion",

        price:
            "373",

        rating:
            3.9,

        reviews:
            "274+",

        boughtText:
            "100+ bought in past 30 days",

        badge:
            "Trending Western",

        image:
            "images/prd4img1.png",

        images: [
            "images/prd4img1.png",
            "images/prd4img2.png",
            "images/prd4img3.png"
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


        /* =================================================

           PRODUCT 4 VARIATIONS

        ================================================== */

        variations: {

            defaultSelection:
                "Black",

            options: [

                {
                    value:
                        "Black",

                    image:
                        "images/prd4img1.png",

                    images: [
                        "images/prd4img1.png",
                        "images/prd4img2.png",
                        "images/prd4img3.png"
                    ],

                    price:
                        "373",

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
                        "images/prd4img1.png",

                    images: [
                        "images/prd4img1.png",
                        "images/prd4img2.png",
                        "images/prd4img3.png"
                    ],

                    price:
                        "373",

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
                        "images/prd4img1.png",

                    images: [
                        "images/prd4img1.png",
                        "images/prd4img2.png",
                        "images/prd4img3.png"
                    ],

                    price:
                        "373",

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
                        "images/prd4img1.png",

                    images: [
                        "images/prd4img1.png",
                        "images/prd4img2.png",
                        "images/prd4img3.png"
                    ],

                    price:
                        "373",

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
                        "images/prd4img1.png",

                    images: [
                        "images/prd4img1.png",
                        "images/prd4img2.png",
                        "images/prd4img3.png"
                    ],

                    price:
                        "373",

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
                        "images/prd4img1.png",

                    images: [
                        "images/prd4img1.png",
                        "images/prd4img2.png",
                        "images/prd4img3.png"
                    ],

                    price:
                        "373",

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

    }

];