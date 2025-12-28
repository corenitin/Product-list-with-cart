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
          id="add-${product.id}"
          onclick="addToCart(${product.id})"
          class="h-8 px-4  font-semibold  bg-white border border-rose-900 rounded-3xl shadow-md flex flex-row gap-2 items-center justify-center absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img src="assets/images/icon-add-to-cart.svg" class="w-4" alt="">
          <span class="text-[11px]">Add to Cart</span>
        </button>

        <!-- QUANTITY CONTROL (hidden initially) -->
        <div
          id="qty-${product.id}"
          class="hidden absolute left-1/2 -translate-x-1/2 translate-y-1/2
                h-8 w-28 bg-rose-950 border border-rose-900 rounded-3xl
                shadow-md flex items-center justify-between px-3">

          <button onclick="decreaseQty(${product.id})"
                  class=""><img src="assets/images/icon-decrement-quantity.svg" class="p-2  rounded-full border border-white" alt=""></button>

          <span id="count-${product.id}" class="text-sm font-semibold">1</span>

          <button onclick="increaseQty(${product.id})"
                  class="font-bold text-lg text-rose-900">+</button>
        </div>
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

// CART LOGIC

let cart = [];

// Add to cart (first click)
function addToCart(id) {
  cart.push({ id, qty: 1 });

  document.getElementById(`add-${id}`).classList.add("hidden");
  document.getElementById(`qty-${id}`).classList.remove("hidden");

  renderCart();
}

// Increase quantity
function increaseQty(id) {
  let item = cart.find(p => p.id === id);
  item.qty++;

  document.getElementById(`count-${id}`).textContent = item.qty;
  renderCart();
}

// Decrease quantity

function decreaseQty(id) {
  let item = cart.find(p => p.id === id);
  item.qty--;

  if (item.qty === 0) {
    cart = cart.filter(p => p.id !== id);

    document.getElementById(`qty-${id}`).classList.add("hidden");
    document.getElementById(`add-${id}`).classList.remove("hidden");
  } else {
    document.getElementById(`count-${id}`).textContent = item.qty;
  }

  renderCart();
}

