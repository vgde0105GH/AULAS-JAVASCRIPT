import { produtos } from "./produtos.js";

let carrinho = [];

function parsePrice(priceStr) {
  return Number(
    priceStr
      .replace(/\./g, "")
      .replace(",", ".")
  );
}

function formatPrice(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function createProductItem(product) {
  const li = document.createElement("li");
  li.dataset.id = product.id;

  const img = document.createElement("img");
  img.src = product.imagem;
  img.alt = product.nome;

  const p = document.createElement("p");

  const name = document.createElement("span");
  name.textContent = product.nome;

  const priceNumber = parsePrice(product.preco);

  const price = document.createElement("span");
  price.textContent = `Preço: ${formatPrice(priceNumber)}`;

  const btn = document.createElement("button");
  btn.textContent = "Adicionar ao carrinho";

  btn.addEventListener("click", () => {
    addToCart(product.nome, priceNumber);
  });

  p.appendChild(name);
  p.appendChild(document.createElement("br"));
  p.appendChild(price);

  li.appendChild(img);
  li.appendChild(p);
  li.appendChild(btn);

  return li;
}

function addToCart(nome, preco) {
  const itemExistente = carrinho.find((item) => item.nome === nome);

  if (itemExistente) {
    itemExistente.quantidade++;
  } else {
    carrinho.push({
      nome: nome,
      preco: preco,
      quantidade: 1
    });
  }

  renderCart();
}

function renderCart() {
  const listaCarrinho = document.getElementById("carrinho");
  const resumoCarrinho = document.getElementById("resumo-carrinho");

  listaCarrinho.innerHTML = "";

  if (carrinho.length === 0) {
    resumoCarrinho.textContent = "Nenhum item foi selecionado.";
    return;
  }

  let total = 0;

  carrinho.forEach((item) => {
    const subtotal = item.preco * item.quantidade;
    total += subtotal;

    const li = document.createElement("li");

    li.textContent =
      `${item.nome} | Quantidade: ${item.quantidade} | Valor: ${formatPrice(subtotal)}`;

    listaCarrinho.appendChild(li);
  });

  const itensSelecionados = carrinho
    .map((item) => {
      const subtotal = item.preco * item.quantidade;

      return `${item.nome} (${item.quantidade}x) - ${formatPrice(subtotal)}`;
    })
    .join(" | ");

  resumoCarrinho.textContent =
    `Itens selecionados: ${itensSelecionados}. Total: ${formatPrice(total)}`;
}

function renderProducts() {
  const listaProdutos = document.getElementById("lista-produtos");

  produtos.forEach((item) => {
    const produtoLi = createProductItem(item);
    listaProdutos.appendChild(produtoLi);
  });
}

renderProducts();
renderCart();