// HTML NODES
const plusButtons = document.querySelectorAll(".plus-btn");
const minusButtons = document.querySelectorAll(".minus-btn");
const inputs = document.querySelectorAll(".input");
const cartNode = document.getElementById("cart");
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
const titles = document.querySelectorAll(".title");

// CONSTANTS
const cart = [];
let cartTotal = 0;
const taxRate = 0.16;

// Quantity input and controls
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value < 0 || isNaN(input.value)) input.value = "";
  });
});

plusButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = btn.closest("footer").querySelector("input");

    if (input.value == "") input.value = 0;
    input.value = parseInt(input.value) + 1;
  });
});

minusButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = btn.closest("footer").querySelector("input");

    input.value = parseInt(input.value) - 1;
    if (input.value == "" || input.value < 0) input.value = 0;
  });
});

// Add to cart btn
addToCartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let updatedItem = false;

    const card = btn.closest(".card");
    const item = card.querySelector(".item");
    const input = card.querySelector("input");
    const priceVal = card.querySelector(".price").dataset.price;

    if (input.value === 0 || input.value === "") return;

    if (cart.length > 0) {
      cart.forEach((el) => {
        if (el.item == item.innerHTML) {
          el.quantity = parseInt(input.value);
          updatedItem = true;
        }
      });
    }

    if (!updatedItem) {
      cart.push({
        item: item.innerHTML,
        quantity: parseInt(input.value),
        unitPrice: parseInt(priceVal),
        img: item.dataset.img,
      });
    }

    renderCart(cartNode, cart);
  });
});

function renderCart(cart, items) {
  cart.innerHTML = `
    <thead>
    <tr>
      <th>Item</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody id="cart-body">
  </tbody>
  `;

  const cartBody = document.getElementById("cart-body");
  cartTotal = 0;

  items.forEach((item) => {
    cartTotal += item.quantity * item.unitPrice;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td id="item-title">
        <img src="${item.img}" alt="${
      item.item
    }" width="60" class="cart-img mb-2" />
        <br>
        ${item.item}
      </td>
      <td>${item.quantity}</td>
      <td>$${item.unitPrice * item.quantity}</td>
    `;

    let showDeleteBtn = false;
    const itemTitle = tr.querySelector("#item-title");

    itemTitle.addEventListener("mouseover", () => {
      const button = document.createElement("button");
      button.classList.add("delete");
      button.classList.add("is-small");

      if (!showDeleteBtn) {
        itemTitle.prepend(button);
        showDeleteBtn = true;
      }
    });

    itemTitle.addEventListener("mouseout", () => {
      const button = itemTitle.querySelector(".delete");
      button.remove();
      // button.classList.remove("delete");
      // button.classList.remove("is-small");
      showDeleteBtn = false;
    });

    cartBody.appendChild(tr);
  });

  // TAXES
  const taxes = document.createElement("tr");
  taxes.innerHTML = `
    <td>Taxes (IVA): </td>
    <th></th>
    <td>$${cartTotal * taxRate}</td>
  `;
  cartBody.appendChild(taxes);

  // TOTAL
  const total = document.createElement("tr");
  total.innerHTML = `
    <th>Total: </th>
    <th></th>
    <th>$${(cartTotal * (1 + taxRate)).toFixed(2)}</th>
  `;
  cartBody.appendChild(total);
}

// EXTRA
function changeTitleFont() {
  titles.forEach((title) => {
    title.addEventListener("mouseover", () => {
      title.classList.add("random");
    });
    title.addEventListener("mouseout", () => {
      title.classList.remove("random");
    });
  });
}

changeTitleFont();
