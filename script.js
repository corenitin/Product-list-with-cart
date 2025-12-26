fetch("data.json")
  .then(res => res.json())
  .then(products => renderProducts(products));

function renderProducts(products) {
  const container = document.getElementById("products");

  products.forEach(product => {
    const productCard = `
      <div class="bg-white p-4 rounded shadow flex flex-col">
        
        <img 
          src="${product.images[0]}" 
          class="h-40 object-contain mb-2"
        />

        <h3 class="font-semibold text-lg">${product.title}</h3>
        <p class="text-gray-600">₹${product.price}</p>

        <button 
          class="mt-auto bg-blue-600 text-white py-2 rounded"
          onclick="addToCart(${product.id})"
        >
          Add to Cart
        </button>
      </div>
    `;

    container.innerHTML += productCard;
  });
}
