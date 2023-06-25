
const fetchMakeupData = async () => {
  try {
    const response = await fetch(
      "https://makeup-api.herokuapp.com/api/v1/products.json"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
};


const displayProductDetails = (product) => {
  const productList = document.getElementById("product-list");

  const productContainer = document.createElement("div");
  productContainer.classList.add("product-container");

  const brandName = document.createElement("h3");
  brandName.textContent = `${product.brand} - ${product.name}`;

  const price = document.createElement("p");
  price.textContent = `Price: ${product.price}`;

  const image = document.createElement("img");
  image.src = product.image_link;

  const description = document.createElement("p");
  description.textContent = product.description;

  const productLink = document.createElement("a");
  productLink.href = product.product_link;
  productLink.textContent = "View Product";

  productContainer.appendChild(brandName);
  productContainer.appendChild(price);
  productContainer.appendChild(image);
  productContainer.appendChild(description);
  productContainer.appendChild(productLink);

  productList.appendChild(productContainer);
};

const loadData = async () => {
  const data = await fetchMakeupData();
  if (data) {
    data.forEach((product) => displayProductDetails(product));
  }
};

loadData();
