/* =====================================================
   SHIVANO ROYALE
   AMAZON AFFILIATE PRODUCT DISCOVERY WEBSITE
===================================================== */



/* =====================================================
   STATE
===================================================== */

let currentCategory = "All";

let currentSearch = "";

let currentSort = "default";

let wishlist =
    JSON.parse(localStorage.getItem("shivanoWishlist")) || [];



/* =====================================================
   DOM ELEMENTS
===================================================== */

const productGrid =
    document.getElementById("productGrid");

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");

const sortFilter =
    document.getElementById("sortFilter");

const resultsInfo =
    document.getElementById("resultsInfo");

const noResults =
    document.getElementById("noResults");

const clearFilters =
    document.getElementById("clearFilters");

const categoryCards =
    document.querySelectorAll(".category-card");

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");

const productModal =
    document.getElementById("productModal");

const modalProduct =
    document.getElementById("modalProduct");

const modalClose =
    document.getElementById("modalClose");

const wishlistNav =
    document.getElementById("wishlistNav");

const wishlistCount =
    document.getElementById("wishlistCount");

const wishlistDrawer =
    document.getElementById("wishlistDrawer");

const closeWishlist =
    document.getElementById("closeWishlist");

const wishlistItems =
    document.getElementById("wishlistItems");

const drawerOverlay =
    document.getElementById("drawerOverlay");

const scrollTop =
    document.getElementById("scrollTop");



/* =====================================================
   RENDER PRODUCTS
===================================================== */

function renderProducts() {

    let filteredProducts = [...products];


    /* SEARCH */

    if (currentSearch.trim() !== "") {

        const search =
            currentSearch.toLowerCase().trim();

        filteredProducts =
            filteredProducts.filter(product => {

                return (
                    product.name
                        .toLowerCase()
                        .includes(search) ||

                    product.category
                        .toLowerCase()
                        .includes(search) ||

                    product.description
                        .toLowerCase()
                        .includes(search)
                );

            });

    }


    /* CATEGORY */

    if (currentCategory !== "All") {

        filteredProducts =
            filteredProducts.filter(product => {

                return product.category === currentCategory;

            });

    }


    /* SORT */

    if (currentSort === "low") {

        filteredProducts.sort(
            (a, b) => a.price - b.price
        );

    }

    else if (currentSort === "high") {

        filteredProducts.sort(
            (a, b) => b.price - a.price
        );

    }

    else if (currentSort === "rating") {

        filteredProducts.sort(
            (a, b) => b.rating - a.rating
        );

    }


    /* RESULTS */

    resultsInfo.textContent =
        `Showing ${filteredProducts.length} product${filteredProducts.length !== 1 ? "s" : ""}`;


    /* EMPTY */

    if (filteredProducts.length === 0) {

        productGrid.innerHTML = "";

        noResults.style.display = "block";

        return;

    }


    noResults.style.display = "none";


    /* CARDS */

    productGrid.innerHTML =
        filteredProducts
            .map(createProductCard)
            .join("");


    updateWishlistButtons();

}



/* =====================================================
   CREATE PRODUCT CARD
===================================================== */

function createProductCard(product) {

    const isSaved =
        wishlist.includes(product.id);


    return `

        <article class="product-card">

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >


                <span class="product-badge">
                    ${product.badge}
                </span>


                <button
                    class="wishlist-btn ${isSaved ? "saved" : ""}"
                    data-wishlist="${product.id}"
                    aria-label="Add to wishlist"
                >
                    ${isSaved ? "♥" : "♡"}
                </button>

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>


                <h3 class="product-title">
                    ${product.name}
                </h3>


                <p class="product-description">
                    ${product.description}
                </p>


                <div class="product-rating">

                    <span class="stars">
                        ${getStars(product.rating)}
                    </span>

                    <span>
                        ${product.rating}
                    </span>

                    <span class="reviews">
                        (${product.reviews})
                    </span>

                </div>


                <div class="product-bottom">

                    <div class="product-price">

                        ₹${product.price.toLocaleString("en-IN")}

                        <span class="product-price-note">
                            Check latest price on Amazon ↗
                        </span>

                    </div>


                    <div class="product-actions">

                        <button
                            class="details-btn"
                            data-details="${product.id}"
                        >
                            Details
                        </button>


                        <a
                            href="${product.amazonLink}"
                            target="_blank"
                            rel="nofollow sponsored noopener"
                            class="amazon-btn"
                        >
                            Amazon ↗
                        </a>

                    </div>

                </div>

            </div>

        </article>

    `;

}



/* =====================================================
   STAR RATING
===================================================== */

function getStars(rating) {

    const fullStars =
        Math.floor(rating);

    const halfStar =
        rating % 1 >= 0.5;

    let stars = "";

    for (
        let i = 0;
        i < fullStars;
        i++
    ) {

        stars += "★";

    }


    if (halfStar) {

        stars += "½";

    }


    return stars;

}



/* =====================================================
   SEARCH
===================================================== */

searchInput.addEventListener(
    "input",
    function () {

        currentSearch =
            this.value;

        renderProducts();

    }
);



/* =====================================================
   CATEGORY FILTER
===================================================== */

categoryFilter.addEventListener(
    "change",
    function () {

        currentCategory =
            this.value;

        updateCategoryCards();

        renderProducts();

    }
);



/* =====================================================
   SORT
===================================================== */

sortFilter.addEventListener(
    "change",
    function () {

        currentSort =
            this.value;

        renderProducts();

    }
);



/* =====================================================
   CATEGORY CARDS
===================================================== */

categoryCards.forEach(card => {

    card.addEventListener(
        "click",
        function () {

            currentCategory =
                this.dataset.category;

            categoryFilter.value =
                currentCategory;

            updateCategoryCards();

            renderProducts();

            document
                .getElementById("products")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

});



function updateCategoryCards() {

    categoryCards.forEach(card => {

        card.classList.toggle(
            "active",
            card.dataset.category === currentCategory
        );

    });

}



/* =====================================================
   CLEAR FILTERS
===================================================== */

clearFilters.addEventListener(
    "click",
    function () {

        currentSearch = "";

        currentCategory = "All";

        currentSort = "default";

        searchInput.value = "";

        categoryFilter.value = "All";

        sortFilter.value = "default";

        updateCategoryCards();

        renderProducts();

    }
);



/* =====================================================
   PRODUCT DETAILS
===================================================== */

document.addEventListener(
    "click",
    function (event) {

        /* Amazon link clicked */

        if (
            event.target.closest(".amazon-btn")
        ) {

            return;

        }


        /* Wishlist button clicked */

        if (
            event.target.closest("[data-wishlist]")
        ) {

            return;

        }


        /* Details button clicked */

        const detailsButton =
            event.target.closest(
                "[data-details]"
            );


        if (detailsButton) {

            const productId =
                Number(
                    detailsButton.dataset.details
                );

            openProductModal(productId);

            return;

        }


        /* Product card clicked */

        const productCard =
            event.target.closest(
                ".product-card"
            );


        if (!productCard) {

            return;

        }


        /*
         * Find the product using
         * the Details button inside the card.
         */

        const cardDetailsButton =
            productCard.querySelector(
                "[data-details]"
            );


        if (!cardDetailsButton) {

            return;

        }


        const productId =
            Number(
                cardDetailsButton.dataset.details
            );


        openProductModal(productId);

    }
);



function openProductModal(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) {

        return;

    }


    window.location.href =
        `product.html?id=${product.id}`;

}



/* =====================================================
   CLOSE MODAL
===================================================== */

function closeModal() {

    productModal.classList.remove("show");

    document.body.style.overflow = "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


productModal
    .querySelector(".modal-overlay")
    .addEventListener(
        "click",
        closeModal
    );


document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);



/* =====================================================
   WISHLIST
===================================================== */

document.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest(
                "[data-wishlist]"
            );


        if (!button) {

            return;

        }


        const id =
            Number(
                button.dataset.wishlist
            );


        toggleWishlist(id);

    }
);



function toggleWishlist(id) {

    if (wishlist.includes(id)) {

        wishlist =
            wishlist.filter(
                item => item !== id
            );

    }

    else {

        wishlist.push(id);

    }


    saveWishlist();

    updateWishlistCount();

    updateWishlistButtons();

    renderWishlist();

}



function saveWishlist() {

    localStorage.setItem(
        "shivanoWishlist",
        JSON.stringify(wishlist)
    );

}



function updateWishlistCount() {

    wishlistCount.textContent =
        wishlist.length;

}



function updateWishlistButtons() {

    document
        .querySelectorAll("[data-wishlist]")
        .forEach(button => {

            const id =
                Number(
                    button.dataset.wishlist
                );


            const saved =
                wishlist.includes(id);


            button.classList.toggle(
                "saved",
                saved
            );


            button.textContent =
                saved ? "♥" : "♡";

        });

}



/* =====================================================
   WISHLIST DRAWER
===================================================== */

wishlistNav.addEventListener(
    "click",
    function () {

        renderWishlist();

        wishlistDrawer.classList.add("show");

        drawerOverlay.classList.add("show");

        document.body.style.overflow = "hidden";

    }
);



function closeWishlistDrawer() {

    wishlistDrawer.classList.remove("show");

    drawerOverlay.classList.remove("show");

    document.body.style.overflow = "";

}


closeWishlist.addEventListener(
    "click",
    closeWishlistDrawer
);


drawerOverlay.addEventListener(
    "click",
    closeWishlistDrawer
);



function renderWishlist() {

    const savedProducts =
        products.filter(
            product =>
                wishlist.includes(product.id)
        );


    if (savedProducts.length === 0) {

        wishlistItems.innerHTML = `

            <div class="empty-wishlist">

                <div style="font-size:40px;">
                    ♡
                </div>

                <h3>
                    Your wishlist is empty
                </h3>

                <p>
                    Save products you want to
                    remember later.
                </p>

            </div>

        `;

        return;

    }


    wishlistItems.innerHTML =
        savedProducts
            .map(product => `

                <div class="wishlist-item">

                    <div class="wishlist-item-image">

                        <img
                            src="${product.image}"
                            alt="${product.name}"
                        >

                    </div>


                    <div>

                        <h3>
                            ${product.name}
                        </h3>

                        <p>
                            ₹${product.price.toLocaleString("en-IN")}
                        </p>

                    </div>


                    <button
                        class="remove-wishlist"
                        data-remove-wishlist="${product.id}"
                    >
                        ×
                    </button>

                </div>

            `)
            .join("");

}



document.addEventListener(
    "click",
    function (event) {

        const removeButton =
            event.target.closest(
                "[data-remove-wishlist]"
            );


        if (!removeButton) {

            return;

        }


        const id =
            Number(
                removeButton.dataset.removeWishlist
            );


        toggleWishlist(id);

        renderWishlist();

    }
);



/* =====================================================
   MOBILE MENU
===================================================== */

menuToggle.addEventListener(
    "click",
    function () {

        navLinks.classList.toggle("show");

    }
);



navLinks
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            function () {

                navLinks.classList.remove("show");

            }
        );

    });



/* =====================================================
   SCROLL TO TOP
===================================================== */

window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 500) {

            scrollTop.classList.add("show");

        }

        else {

            scrollTop.classList.remove("show");

        }

    }
);

scrollTop.addEventListener(
    "click",
    function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);

/* =====================================================
   INITIAL LOAD
===================================================== */

updateWishlistCount();

updateCategoryCards();

renderProducts();