fetch("data.json")
  .then((res) => res.json())
  .then((products) => renderProducts(products));

function renderProducts(products) {
  const container = document.getElementById("products");

  products.forEach((product) => {
    const productCard = `
    <div class="relative pb-6">
        <img src="${product.image.mobile}" class="rounded-xl w-full shadow" alt="Waffle image">
        <button
          class="h-8 px-4  font-semibold  bg-white border border-rose-900 rounded-3xl shadow-md flex flex-row gap-2 items-center justify-center absolute  left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img src="assets/images/icon-add-to-cart.svg" class="w-4" alt="">
          <span class="text-[11px]">Add to Cart</span>
        </button>
      </div>

      <div class = "pb-4">
        <p class="text-[12px]  text-rose-400 font-normal">${product.category}</p>
        <h3 class="text-[16px] font-semibold text-red-900">${product.name}</h3>
        <p class="text-[16px] font-bold text-rose-500">₹ ${product.price}</p>
      </div>
    `;

    container.innerHTML += productCard;
  });
}
