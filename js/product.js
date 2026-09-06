const params = new URLSearchParams(window.location.search);

const productId = params.get("id");

const product = products.find(
    item => item.id === productId
);


if (!product) {

    document.body.innerHTML = `

        <div class="text-center p-20">

            <h1 class="text-3xl font-bold">
                Product not found
            </h1>

            <a
                href="index.html"
                class="text-yellow-700 underline">

                Go Home

            </a>

        </div>

    `;

} else {

    // Page title

    document.title =
        `${product.name} | Kavitha Jewellers`;


    // Product name

    document.getElementById("productName")
        .textContent = product.name;


    // Purity

    document.getElementById("productPurity")
        .textContent = product.purity;


    document.getElementById("productPurityInfo")
        .textContent = product.purity;


    // Description

    document.getElementById("productDescription")
        .textContent = product.description;


    // Weight

    document.getElementById("productWeight")
        .textContent = product.weight;


    // Product photo

    document.getElementById("productImage")
        .src = product.image;


    document.getElementById("productImage")
        .alt = product.name;

}