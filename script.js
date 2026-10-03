/* =====================================================
   Shivano.store
   AMAZON AFFILIATE PRODUCT DISCOVERY WEBSITE
===================================================== */



/* =====================================================
   STATE
===================================================== */

let currentCategory = "All";

let currentSearch = "";

let wishlist =
    JSON.parse(localStorage.getItem("shivanoWishlist")) || [];



/* =====================================================
   DOM ELEMENTS
===================================================== */

const productGrid =
    document.getElementById("productGrid");

const searchInput =
    document.getElementById("searchInput");

const categoryShortcuts =
    document.getElementById("categoryShortcuts");

const homeSearchTrigger =
    document.getElementById("homeSearchTrigger");

const homeSearchPanel =
    document.getElementById("homeSearchPanel");

const homeSearchClose =
    document.getElementById("homeSearchClose");

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


    /* RESULTS */

    if (resultsInfo) {

        resultsInfo.textContent =
            `Showing ${filteredProducts.length} product${filteredProducts.length !== 1 ? "s" : ""}`;

    }


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

        <article
            class="product-card"
            data-product-id="${product.id}"
        >

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

                        ₹${Number(product.price).toLocaleString("en-IN")}

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

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            currentSearch =
                this.value;

            renderProducts();

        }
    );

}



/* =====================================================
   CATEGORY SHORTCUTS
   Categories are read directly from products.js.
===================================================== */

function getProductCategories() {

    const uniqueCategories =
        [...new Set(
            products
                .map(product => product.category)
                .filter(Boolean)
        )];

    return [
        "All",
        ...uniqueCategories
    ];

}



function renderCategoryShortcuts() {

    if (!categoryShortcuts) {

        return;

    }


    categoryShortcuts.innerHTML =
        getProductCategories()
            .map(category => {

                return `

                    <button
                        type="button"
                        class="category-shortcut ${
                            category === currentCategory
                                ? "active"
                                : ""
                        }"
                        data-category="${escapeHtml(category)}"
                    >

                        ${
                            category === "All"
                                ? "All Categories"
                                : escapeHtml(category)
                        }

                    </button>

                `;

            })
            .join("");


    categoryShortcuts
        .querySelectorAll("[data-category]")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    currentCategory =
                        this.dataset.category;

                    renderCategoryShortcuts();

                    renderProducts();


                    const productsSection =
                        document.getElementById("products");


                    if (productsSection) {

                        productsSection.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }
            );

        });

}



function escapeHtml(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}



/* =====================================================
   CLEAR FILTERS
===================================================== */

if (clearFilters) {

    clearFilters.addEventListener(
        "click",
        function () {

            currentSearch = "";

            currentCategory = "All";


            if (searchInput) {

                searchInput.value = "";

            }


            renderCategoryShortcuts();

            renderProducts();

        }
    );

}



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


        const productId =
            Number(
                productCard.dataset.productId
            );


        if (!productId) {

            return;

        }


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

    if (!productModal) {

        return;

    }


    productModal.classList.remove("show");

    document.body.style.overflow = "";

}



if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );

}



if (productModal) {

    const modalOverlay =
        productModal.querySelector(
            ".modal-overlay"
        );


    if (modalOverlay) {

        modalOverlay.addEventListener(
            "click",
            closeModal
        );

    }

}



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

    if (!wishlistCount) {

        return;

    }


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

if (wishlistNav) {

    wishlistNav.addEventListener(
        "click",
        function () {

            renderWishlist();

            wishlistDrawer.classList.add("show");

            drawerOverlay.classList.add("show");

            document.body.style.overflow = "hidden";

        }
    );

}



function closeWishlistDrawer() {

    if (wishlistDrawer) {

        wishlistDrawer.classList.remove("show");

    }


    if (drawerOverlay) {

        drawerOverlay.classList.remove("show");

    }


    document.body.style.overflow = "";

}



if (closeWishlist) {

    closeWishlist.addEventListener(
        "click",
        closeWishlistDrawer
    );

}



if (drawerOverlay) {

    drawerOverlay.addEventListener(
        "click",
        closeWishlistDrawer
    );

}



function renderWishlist() {

    if (!wishlistItems) {

        return;

    }


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
                            ₹${Number(product.price).toLocaleString("en-IN")}
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
   HEADER SEARCH
===================================================== */

function openHomeSearch() {

    const navbar =
        document.querySelector(".navbar");


    if (!navbar || !homeSearchPanel) {

        return;

    }


    navbar.classList.add("search-open");

    homeSearchPanel.classList.add("open");


    setTimeout(
        function () {

            if (searchInput) {

                searchInput.focus();

            }

        },
        0
    );

}



function closeHomeSearch() {

    const navbar =
        document.querySelector(".navbar");


    if (!navbar || !homeSearchPanel) {

        return;

    }


    navbar.classList.remove("search-open");

    homeSearchPanel.classList.remove("open");

}



if (homeSearchTrigger) {

    homeSearchTrigger.addEventListener(
        "click",
        openHomeSearch
    );

}



if (homeSearchClose) {

    homeSearchClose.addEventListener(
        "click",
        closeHomeSearch
    );

}



/* =====================================================
   MOBILE MENU
===================================================== */

if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle("show");

        }
    );

}



if (navLinks) {

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

}



/* =====================================================
   SCROLL TO TOP
===================================================== */

window.addEventListener(
    "scroll",
    function () {

        if (!scrollTop) {

            return;

        }


        if (window.scrollY > 500) {

            scrollTop.classList.add("show");

        }

        else {

            scrollTop.classList.remove("show");

        }

    }
);



if (scrollTop) {

    scrollTop.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}



/* =====================================================
   SMART HEADER
   Keep header still for a short scroll distance.
   After that, move it upward at exactly the same
   distance as the page scrolls.
===================================================== */

const siteHeader =
    document.querySelector(".site-header");

const mainContent =
    document.querySelector("main");

let lastScrollY =
    window.scrollY;

let headerOffset =
    0;

let lastDirection =
    "none";

const HEADER_START_DELAY =
    90;

let downwardStartY =
    window.scrollY;



function setHeaderSpace() {

    if (!siteHeader) {

        return;

    }


    /*
     * Remove transition so the header follows the
     * finger/mouse at the same speed instead of
     * moving with a delayed effect.
     */

    siteHeader.style.transition =
        "none";


    const headerHeight =
        siteHeader.offsetHeight;


    document.documentElement.style.setProperty(
        "--smart-header-space",
        `${headerHeight}px`
    );


    /*
     * Keep OUR PICKS / Featured products
     * below the complete header.
     */

    if (mainContent) {

        mainContent.style.paddingTop =
            `${headerHeight}px`;

    }

}



function updateSmartHeader() {

    if (!siteHeader) {

        return;

    }


    const currentScrollY =
        window.scrollY;



    /* =================================================
       TOP OF PAGE
    ================================================= */

    if (currentScrollY <= 0) {

        headerOffset =
            0;

        downwardStartY =
            currentScrollY;

        lastDirection =
            "none";


        siteHeader.style.transform =
            "translateY(0)";


        lastScrollY =
            currentScrollY;

        return;

    }



    const delta =
        currentScrollY - lastScrollY;



    /* =================================================
       SCROLLING DOWN
    ================================================= */

    if (delta > 0) {


        if (
            lastDirection !== "down"
        ) {

            downwardStartY =
                currentScrollY;

        }


        lastDirection =
            "down";


        const downDistance =
            currentScrollY -
            downwardStartY;


        headerOffset =
            Math.max(
                0,
                Math.min(
                    siteHeader.offsetHeight,
                    downDistance -
                        HEADER_START_DELAY
                )
            );

    }



    /* =================================================
       SCROLLING UP
    ================================================= */

    else if (delta < 0) {

        lastDirection =
            "up";


        headerOffset =
            Math.max(
                0,
                headerOffset + delta
            );

    }



    siteHeader.style.transform =
        `translateY(-${headerOffset}px)`;


    lastScrollY =
        currentScrollY;

}



/* =====================================================
   HEADER HEIGHT
===================================================== */

setHeaderSpace();



window.addEventListener(
    "resize",
    setHeaderSpace,
    {
        passive: true
    }
);



/* =====================================================
   HEADER SCROLL LISTENER
===================================================== */

window.addEventListener(
    "scroll",
    updateSmartHeader,
    {
        passive: true
    }
);



/* =====================================================
   INITIAL LOAD
===================================================== */

updateWishlistCount();

renderCategoryShortcuts();

renderProducts();

/* =====================================================
   SHIVANO STORE — HEADER / WISHLIST / CATEGORY UPDATE
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       HEADER ELEMENTS
    ================================================= */

    const navbar =
        document.querySelector(".navbar");

    const menuToggle =
        document.getElementById("menuToggle");

    const wishlistNav =
        document.getElementById("wishlistNav");


    /* =================================================
       PRODUCT PAGE WISHLIST BUTTON
       Product page par dynamically add hoga.
    ================================================= */

    if (
        navbar &&
        document.querySelector(".product-page") &&
        !document.getElementById("productPageWishlist")
    ) {

        const productWishlist =
            document.createElement("button");

        productWishlist.type = "button";

        productWishlist.id =
            "productPageWishlist";

        productWishlist.className =
            "product-page-wishlist";

        productWishlist.setAttribute(
            "aria-label",
            "Wishlist"
        );

        productWishlist.title =
            "Wishlist";

        productWishlist.innerHTML =
            "♡";

        navbar.appendChild(
            productWishlist
        );


        function updateProductWishlistIcon() {

            const params =
                new URLSearchParams(
                    window.location.search
                );

            const productId =
                Number(
                    params.get("id")
                );


            if (
                typeof wishlist === "undefined"
            ) {
                return;
            }


            if (
                wishlist.includes(productId)
            ) {

                productWishlist.innerHTML =
                    "♥";

                productWishlist.classList.add(
                    "saved"
                );

            }

            else {

                productWishlist.innerHTML =
                    "♡";

                productWishlist.classList.remove(
                    "saved"
                );

            }

        }


        productWishlist.addEventListener(
            "click",
            function () {

                const params =
                    new URLSearchParams(
                        window.location.search
                    );

                const productId =
                    Number(
                        params.get("id")
                    );


                if (!productId) {
                    return;
                }


                if (
                    typeof toggleWishlist ===
                    "function"
                ) {

                    toggleWishlist(
                        productId
                    );

                }


                updateProductWishlistIcon();

            }
        );


        updateProductWishlistIcon();

    }



    /* =================================================
       WISHLIST PRODUCTS
       Clicking a saved product opens product page.
    ================================================= */

    document.addEventListener(
        "click",
        function (event) {

            const wishlistItem =
                event.target.closest(
                    ".wishlist-item"
                );


            if (!wishlistItem) {
                return;
            }


            /*
             * Don't redirect when user clicks
             * the remove button.
             */

            if (
                event.target.closest(
                    "[data-remove-wishlist]"
                )
            ) {

                return;

            }


            const removeButton =
                wishlistItem.querySelector(
                    "[data-remove-wishlist]"
                );


            if (!removeButton) {
                return;
            }


            const productId =
                Number(
                    removeButton.dataset
                        .removeWishlist
                );


            if (!productId) {
                return;
            }


            window.location.href =
                `product.html?id=${productId}`;

        }
    );



    /* =================================================
       ALL CATEGORIES
       Clicking "All Categories" opens every category.
    ================================================= */

    const categoryShortcuts =
        document.getElementById(
            "categoryShortcuts"
        );


    if (categoryShortcuts) {

        categoryShortcuts.addEventListener(
            "click",
            function (event) {

                const button =
                    event.target.closest(
                        ".category-shortcut"
                    );


                if (!button) {
                    return;
                }


                const category =
                    button.dataset.category;


                /*
                 * All Categories button
                 */

                if (
                    category === "All"
                ) {

                    showAllCategoriesMenu();

                }

            }
        );

    }



    function showAllCategoriesMenu() {

        /*
         * Remove old menu first.
         */

        const oldMenu =
            document.getElementById(
                "allCategoriesMenu"
            );


        if (oldMenu) {

            oldMenu.remove();

        }


        const categories = [
            ...new Set(
                products
                    .map(
                        product =>
                            product.category
                    )
                    .filter(Boolean)
            )
        ];


        const menu =
            document.createElement(
                "div"
            );


        menu.id =
            "allCategoriesMenu";

        menu.className =
            "all-categories-menu";


        menu.innerHTML = `

            <div
                class="all-categories-panel"
            >

                <div
                    class="all-categories-header"
                >

                    <strong>
                        All Categories
                    </strong>

                    <button
                        type="button"
                        id="closeAllCategories"
                    >
                        ×
                    </button>

                </div>


                <div
                    class="all-categories-options"
                >

                    <button
                        type="button"
                        class="all-category-option active"
                        data-all-category="All"
                    >
                        All Products
                    </button>


                    ${categories
                        .map(
                            category => `
                                <button
                                    type="button"
                                    class="all-category-option"
                                    data-all-category="${escapeHtml(category)}"
                                >
                                    ${escapeHtml(category)}
                                </button>
                            `
                        )
                        .join("")
                    }

                </div>

            </div>

        `;


        document.body.appendChild(
            menu
        );


        requestAnimationFrame(
            function () {

                menu.classList.add(
                    "show"
                );

            }
        );


        const closeButton =
            document.getElementById(
                "closeAllCategories"
            );


        if (closeButton) {

            closeButton.addEventListener(
                "click",
                closeAllCategoriesMenu
            );

        }


        menu.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === menu
                ) {

                    closeAllCategoriesMenu();

                    return;

                }


                const option =
                    event.target.closest(
                        "[data-all-category]"
                    );


                if (!option) {
                    return;
                }


                const selected =
                    option.dataset.allCategory;


                if (
                    typeof currentCategory !==
                    "undefined"
                ) {

                    currentCategory =
                        selected;

                }


                if (
                    typeof renderCategoryShortcuts ===
                    "function"
                ) {

                    renderCategoryShortcuts();

                }


                if (
                    typeof renderProducts ===
                    "function"
                ) {

                    renderProducts();

                }


                closeAllCategoriesMenu();


                const productsSection =
                    document.getElementById(
                        "products"
                    );


                if (productsSection) {

                    productsSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }



    function closeAllCategoriesMenu() {

        const menu =
            document.getElementById(
                "allCategoriesMenu"
            );


        if (!menu) {
            return;
        }


        menu.classList.remove(
            "show"
        );


        setTimeout(
            function () {

                menu.remove();

            },
            220
        );

    }



    /* =================================================
       PRODUCT SEARCH → PRODUCT PAGE
    ================================================= */

    document.addEventListener(
        "click",
        function (event) {

            const searchResult =
                event.target.closest(
                    "[data-search-product-id]"
                );


            if (!searchResult) {
                return;
            }


            const productId =
                searchResult.dataset
                    .searchProductId;


            if (!productId) {
                return;
            }


            window.location.href =
                `product.html?id=${productId}`;

        }
    );



    /* =================================================
       MOBILE MENU
    ================================================= */

    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            function () {

                if (!navLinks) {
                    return;
                }


                navLinks.classList.toggle(
                    "show"
                );

            }
        );

    }

});

/* =========================================================
   MOBILE MENU — RELIABLE CLICK FIX
========================================================= */

(function () {

    const menuButton =
        document.getElementById("menuToggle");

    const mobileNav =
        document.getElementById("navLinks");


    if (!menuButton || !mobileNav) {
        return;
    }


    /*
     * Existing menu logic ko disturb nahi karna.
     * Ye sirf tab fallback ke roop mein kaam karega
     * jab menu already open/closed state change na kare.
     */

    menuButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            mobileNav.classList.toggle("show");

        }
    );


    /*
     * Menu option click karne par menu close.
     */

    mobileNav
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    mobileNav.classList.remove("show");

                }
            );

        });

})();