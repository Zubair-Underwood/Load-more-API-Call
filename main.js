const productsContainer = document.querySelector(".products-container");
const loadMoreBtn = document.querySelector(".load-more-btn");
let currentStep = 0;

async function fetchListOfProducts() {

    try {

        const response = await fetch("https://dummyjson.com/products", {

            method: "GET"
        })

        const result = await response.json();
        console.log(result);
        if (result && result.products) displayProducts(result.products);
    } catch (e) {

        console.log(e);
    }
}

function displayProducts(productList) {

    console.log(productList);

    productList.forEach(productItem => {

        const productItemWrapper = document.createElement("div");
        const productTitle = document.createElement("p");
        const productThumbnail = document.createElement("img");
        const productDescription = document.createElement("p");
        const productPrice = document.createElement("p");

        productTitle.textContent = productItem.title;
        productDescription.textContent = productItem.description;
        productThumbnail.src = productItem.thumbnail;
        productPrice.textContent = productItem.price;

        productItemWrapper.classList.add("product-item-wrapper");
        productTitle.classList.add("product-title");
        productThumbnail.classList.add("product-img");
        productPrice.classList.add("product-price");
        productDescription.classList.add("product-description");


        productItemWrapper.appendChild(productThumbnail);
        productItemWrapper.appendChild(productTitle);
        productItemWrapper.appendChild(productPrice);
        productItemWrapper.appendChild(productDescription);

        productsContainer.appendChild(productItemWrapper);
    });


}


fetchListOfProducts();

loadMoreBtn.addEventListener("click", () => {


})