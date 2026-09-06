const params = new URLSearchParams(window.location.search);

const category = params.get("category") || "necklaces";

const titles = {
    necklaces: "Gold Necklaces",
    bangles: "Gold Bangles",
    tops: "Gold Tops"
};

const descriptions = {
    necklaces: "Discover our collection of traditional and contemporary gold necklaces.",
    bangles: "Explore elegant gold bangles crafted for timeless beauty.",
    tops: "Discover beautiful gold tops designed for everyday elegance."
};

document.getElementById("collectionTitle").textContent =
    titles[category] || "Jewellery Collection";

document.getElementById("collectionDescription").textContent =
    descriptions[category] || "Explore our jewellery collection";


const grid = document.getElementById("productGrid");

const filteredProducts =
    products.filter(product => product.category === category);


filteredProducts.forEach(product => {

    const card = document.createElement("a");

    card.href = `product.html?id=${product.id}`;

    card.className =
        "product-card bg-white rounded-2xl overflow-hidden shadow-lg";


    card.innerHTML = `

        <div class="product-image-container">

            <img
                src="${product.image}"
                alt="${product.name}"
                class="product-image"
            >

            <div class="view-overlay">
                View Jewellery
            </div>

        </div>

        <div class="p-5">

            <p class="text-sm text-yellow-700 font-medium">
                ${product.purity}
            </p>

            <h2 class="text-xl font-semibold mt-1">
                ${product.name}
            </h2>

            <p class="text-gray-500 text-sm mt-2">
                ${product.weight}
            </p>

        </div>
    `;

    grid.appendChild(card);
});