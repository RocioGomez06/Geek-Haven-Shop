// =====================
// LISTA DE PRODUTOS
// =====================
const PRODUCTS = [
  // RPG / DADOS
  {
    id: "dnd-galaxia",
    name: "Set de Dados RPG Galáxia",
    price: 499.90,
    category: "rpg",
    image: "productos/7-dados-DND-RPG-galaxia.jpg",
    alt: "Set de 7 dados para RPG com efeito galáxia em roxo e azul"
  },
  {
    id: "dnd-rosa-glitter",
    name: "Set de Dados RPG Rosa Glitter",
    price: 489.90,
    category: "rpg",
    image: "productos/7-dados-DND-rpg-transparentes-rosado-glitter.jpg",
    alt: "Set de 7 dados transparentes rosa com glitter para D&D e RPG"
  },
  {
    id: "d20-waffle",
    name: "D20 Critical Hit Waffle",
    price: 79.90,
    category: "rpg",
    image: "productos/Critical-Hit-D20-Dado-Wafflera.jpg",
    alt: "Dado D20 temático Critical Hit em formato de waffle dourado"
  },
  {
    id: "colar-d20",
    name: "Colar D20 Metálico",
    price: 99.90,
    category: "rpg",
    image: "productos/collar-D20-DND-rpg.jpg",
    alt: "Colar com pingente de dado D20 metálico inspirado em RPG"
  },
  {
    id: "selo-d20",
    name: "Selo de Cera D20",
    price: 69.90,
    category: "rpg",
    image: "productos/sello-cera-D20.jpg",
    alt: "Selo de cera com desenho de dado D20 para selar cartas e grimórios"
  },
  {
    id: "porta-dados-capy",
    name: "Porta-dados Capybara",
    price: 129.90,
    category: "rpg",
    image: "productos/porta-dados-capybara.jpg",
    alt: "Porta-dados em formato de capivara fofa para guardar sets de RPG"
  },

  // TCG
  {
    id: "pokemon-bundle-coreano",
    name: "Bundle 14 Boosters Pokémon TCG (Coreano)",
    price: 299.90,
    category: "tcg",
    image: "productos/bundle-14-packs-Pokemon-TCG-Booster-Coreano.jpg",
    alt: "Bundle com 14 boosters de Pokémon TCG em coreano"
  },
  {
    id: "pokemon-brilliant-stars",
    name: "Boosters Pokémon Brilliant Stars",
    price: 24.90,
    category: "tcg",
    image: "productos/cartas-pokemon-tcg-edicion-brilliant-stars.jpg",
    alt: "Boosters de Pokémon TCG edição Brilliant Stars"
  },
  {
    id: "deckbox-pokemon-roxa",
    name: "Deck Box Pokémon Roxa",
    price: 79.90,
    category: "tcg",
    image: "productos/deck-box-pokemon-tcg-purpura.jpg",
    alt: "Deck box roxa para cartas de Pokémon TCG"
  },
  {
    id: "mtg-deckbox-100",
    name: "Deck Box MTG 100 Cartas",
    price: 89.90,
    category: "tcg",
    image: "productos/mtg-deck-box-100-cartas.jpg",
    alt: "Deck box para Magic: The Gathering com capacidade para 100 cartas"
  },
  {
    id: "naruto-booster",
    name: "Booster TCG Naruto (5 cartas)",
    price: 29.90,
    category: "tcg",
    image: "productos/pack-tcg-Naruto-booster-5-cartas.jpg",
    alt: "Booster de TCG de Naruto com 5 cartas por pacote"
  },
  {
    id: "mtg-bloomburrow",
    name: "Magic Bloomburrow Collector Box",
    price: 2299.90,
    category: "tcg",
    image: "productos/Magic-The-Gathering-Bloomburrow-Collector-Booster-Box-12-Packs.jpg",
    alt: "Caixa Collector Booster de Magic: Bloomburrow com 12 pacotes"
  },
  {
    id: "mtg-jumpstart-2025",
    name: "Magic Jumpstart 2025 Grundstein",
    price: 44.90,
    category: "tcg",
    image: "productos/Magic-The-Gathering-Grundstein-Jumpstart-2025-Booster-Pack.jpg",
    alt: "Booster Jumpstart 2025 de Magic: The Gathering, coleção Grundstein"
  },
  {
    id: "mtg-phyrexia-box",
    name: "Magic Phyrexia All Will Be One Box",
    price: 1999.90,
    category: "tcg",
    image: "productos/Magic-The-Gathering-Phyrexia_All-Will-Be-One-Set-Booster-Box-30-Packs.jpg",
    alt: "Caixa de Set Boosters de Magic: Phyrexia All Will Be One com 30 pacotes"
  },

  // MINECRAFT
  {
    id: "cofrinho-porco-mc",
    name: "Cofrinho Porco Minecraft",
    price: 89.90,
    category: "minecraft",
    image: "productos/alcancía-mob-cerdo-minecraft.jpg",
    alt: "Cofrinho em formato de porco de Minecraft"
  },
  {
    id: "lamp-abelha-mc",
    name: "Luminária Abelha Minecraft",
    price: 159.90,
    category: "minecraft",
    image: "productos/lampara-abeja-minecraft.jpg",
    alt: "Luminária em formato de abelha de Minecraft"
  },
  {
    id: "lamp-blocos-mc",
    name: "Luminária Blocos Minecraft",
    price: 179.90,
    category: "minecraft",
    image: "productos/lampara-bloques-minecraft.jpg",
    alt: "Luminária composta por blocos empilhados de Minecraft"
  },
  {
    id: "mug-creeper",
    name: "Caneca Quadrada Creeper",
    price: 99.90,
    category: "minecraft",
    image: "productos/taza-creeper-minecraft-cuadrada.jpg",
    alt: "Caneca quadrada verde em formato de Creeper de Minecraft"
  },
  {
    id: "keychain-torch-mc",
    name: "Chaveiro Tocha Minecraft com Luz",
    price: 59.90,
    category: "minecraft",
    image: "productos/llavero-con-luz-antorcha-minecraft.jpg",
    alt: "Chaveiro de tocha de Minecraft com luz LED"
  },
  {
    id: "usb-creeper",
    name: "Pendrive Creeper Minecraft",
    price: 79.90,
    category: "minecraft",
    image: "productos/usb-creeper-minecraft.jpg",
    alt: "Pendrive em formato de Creeper de Minecraft"
  },

  // COLECIONÁVEIS / OUTROS FANDOMS
  {
    id: "hollow-knight-amiibo",
    name: "Amiibo Hollow Knight",
    price: 299.90,
    category: "colecionaveis",
    image: "productos/hollow-knight-amiibo.jpg",
    alt: "Amiibo do personagem Hollow Knight em base decorativa"
  },
  {
    id: "umbreon-set",
    name: "Mini Figuras Umbreon (8 peças)",
    price: 189.90,
    category: "colecionaveis",
    image: "productos/set-8-figuras-umbreon-mini-pokemon.jpg",
    alt: "Conjunto com 8 mini figuras do Pokémon Umbreon em diferentes poses"
  },
  {
    id: "snorlax-giant-plush",
    name: "Pelúcia Gigante Snorlax",
    price: 349.90,
    category: "colecionaveis",
    image: "productos/peluche-gigante-snorlax.jpg",
    alt: "Pelúcia gigante do Pokémon Snorlax deitado"
  },
  {
    id: "psyduck-teapot",
    name: "Bule Psyduck Pokémon",
    price: 219.90,
    category: "colecionaveis",
    image: "productos/tetera-psyduck-pokemon.jpg",
    alt: "Bule de chá em formato do Pokémon Psyduck"
  },
  {
    id: "onepiece-fruta-keychain",
    name: "Chaveiro Fruta do Diabo One Piece",
    price: 69.90,
    category: "colecionaveis",
    image: "productos/llavero-fruta-one-piece.jpg",
    alt: "Chaveiro inspirado na fruta do diabo de One Piece"
  },
  {
    id: "onepiece-set-mesa",
    name: "Kit Pratos & Canecas One Piece",
    price: 259.90,
    category: "colecionaveis",
    image: "productos/set-platos-y-tazas-one-piece.jpg",
    alt: "Conjunto de pratos e canecas temáticos de One Piece"
  },
  {
    id: "bmo-stand-switch",
    name: "Suporte BMO para Nintendo Switch",
    price: 149.90,
    category: "colecionaveis",
    image: "productos/stand-bmo-para-nintendo-switch.jpg",
    alt: "Suporte para Nintendo Switch em formato do personagem BMO"
  },
  {
    id: "powerbank-pokeball",
    name: "Powerbank Pokébola",
    price: 199.90,
    category: "colecionaveis",
    image: "productos/powebank-pokebola-pokemon.jpg",
    alt: "Powerbank em formato de Pokébola para carregar dispositivos"
  },
  {
    id: "usb-big-hero",
    name: "Pendrive Baymax Big Hero 6",
    price: 79.90,
    category: "colecionaveis",
    image: "productos/usb-big-hero-6.jpg",
    alt: "Pendrive em formato do personagem Baymax de Big Hero 6"
  },
  {
    id: "colar-arcane-lol",
    name: "Colar Tubarão Arcane / LoL",
    price: 99.90,
    category: "colecionaveis",
    image: "productos/collar-de-metal-tiburón-arcane-league-of-legends.jpg",
    alt: "Colar de metal com pingente de tubarão inspirado em Arcane e League of Legends"
  },

  // PERIFÉRICOS / TECH
  {
    id: "headset-yowu-pink",
    name: "Headphone Bluetooth YOWU CE",
    price: 599.90,
    category: "perifericos",
    image: "productos/YOWU-CE-headphone-bluetooth-pink-black.jpg",
    alt: "Headphone Bluetooth YOWU CE preto e rosa com orelhas de gatinho iluminadas"
  },
  {
    id: "teclado-redragon-k616",
    name: "Teclado Redragon Fizz Pro K616 RGB",
    price: 429.90,
    category: "perifericos",
    image: "productos/teclado-redragon-bluetooth-fizz-pro-K616-rgb-white-pink-esp.jpg",
    alt: "Teclado mecânico gamer Redragon Fizz Pro K616 branco e rosa com RGB"
  },
  {
    id: "keycap-gengar",
    name: "Keycap Gengar ESC",
    price: 79.90,
    category: "perifericos",
    image: "productos/keycap-gengar-esc.jpg",
    alt: "Tecla ESC personalizada com keycap do Pokémon Gengar"
  },
  {
    id: "keycaps-cartuchos-pokemon",
    name: "Keycaps Cartuchos Pokémon",
    price: 129.90,
    category: "perifericos",
    image: "productos/keycaps-cartuchos-juegos-de-pokemon.jpg",
    alt: "Conjunto de keycaps inspirados em cartuchos de jogos de Pokémon"
  },

  // PAPELARIA / DIVERSOS
  {
    id: "bolsa-winrar",
    name: "Bolsa WinRAR",
    price: 119.90,
    category: "acessorios",
    image: "productos/bolso-win-rar.jpg",
    alt: "Bolsa temática com estampa do ícone de arquivo WinRAR"
  },
  {
    id: "caderno-codigo",
    name: "Caderninho Código",
    price: 39.90,
    category: "papelaria",
    image: "productos/llibreta-diseño-codigo.jpg",
    alt: "Caderninho de anotações com capa de código de programação"
  },
];

// Deixa visível para outros scripts se precisar
window.PRODUCTS = PRODUCTS;

// =========================
//  LÓGICA DE CARRINHO
// =========================
const CART_KEY = 'gh-cart';

function getCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getCartCount(cart) {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function findProductById(id) {
  return PRODUCTS.find(p => String(p.id) === String(id)) || null;
}

// Adicionar produto ao carrinho
function ghAddToCart(productId) {
  const cart = getCart();
  const existing = cart.find(item => String(item.id) === String(productId));

  if (existing) {
    existing.quantity += 1;
  } else {
    const product = findProductById(productId) || { id: productId, name: 'Produto', price: 0 };
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price || 0,
      quantity: 1
    });
  }

  saveCart(cart);
  updateCartBadge();
  announceCartChange('Produto adicionado ao carrinho.');

  // 🔔 Shake no botão do carrinho
  const cartButton = document.querySelector('.floating-cart');
  if (cartButton) {
    cartButton.classList.remove('shake');  // reseta se já estiver
    // force reflow para reiniciar a animação
    void cartButton.offsetWidth;
    cartButton.classList.add('shake');
  }
}

// Atualizar a bolinha de quantidade
function updateCartBadge() {
  const cart = getCart();
  const count = getCartCount(cart);
  const countEls = document.querySelectorAll('.cart-count');
  countEls.forEach(el => {
    el.textContent = count;
  });
}

// Mensagem acessível (aria-live)
function announceCartChange(message) {
  const region = document.getElementById('cart-live-region');
  if (region) {
    region.textContent = message;
  }
}

// Renderizar página de carrinho
function renderCartPage() {
  const tbody = document.getElementById('cart-items');
  if (!tbody) return;

  const cart = getCart();
  const emptyMsg = document.getElementById('cart-empty');
  const summary = document.getElementById('cart-summary');
  const totalEl = document.getElementById('cart-total');

  if (!cart.length) {
    tbody.innerHTML = '';
    if (emptyMsg) emptyMsg.style.display = 'block';
    if (summary) summary.style.display = 'none';
    if (totalEl) totalEl.textContent = 'R$ 0,00';
    return;
  }

  if (emptyMsg) emptyMsg.style.display = 'none';
  if (summary) summary.style.display = 'block';

  tbody.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.name}</td>
      <td>R$ ${item.price.toFixed(2)}</td>
      <td>
        <label class="sr-only" for="qty-${item.id}">Quantidade de ${item.name}</label>
        <input 
          id="qty-${item.id}"
          type="number" 
          min="1" 
          value="${item.quantity}" 
          class="cart-qty-input"
          data-product-id="${item.id}"
        />
      </td>
      <td>R$ ${subtotal.toFixed(2)}</td>
      <td>
        <button 
          type="button" 
          class="btn btn-secondary btn-remove-cart" 
          data-product-id="${item.id}"
        >
          Remover
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  if (totalEl) {
    totalEl.textContent = 'R$ ' + total.toFixed(2);
  }

  // quantidades
  tbody.querySelectorAll('.cart-qty-input').forEach(input => {
    input.addEventListener('change', () => {
      const id = input.dataset.productId;
      let qty = parseInt(input.value, 10);
      if (isNaN(qty) || qty < 1) qty = 1;

      const cart = getCart();
      const item = cart.find(p => String(p.id) === String(id));
      if (item) {
        item.quantity = qty;
        saveCart(cart);
        renderCartPage();
        updateCartBadge();
        announceCartChange('Quantidade atualizada no carrinho.');
      }
    });
  });

  // remover
  tbody.querySelectorAll('.btn-remove-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.productId;
      const newCart = getCart().filter(p => String(p.id) !== String(id));
      saveCart(newCart);
      renderCartPage();
      updateCartBadge();
      announceCartChange('Produto removido do carrinho.');
    });
  });
}

// expõe no escopo global
window.ghAddToCart = ghAddToCart;
window.updateCartBadge = updateCartBadge;
window.renderCartPage = renderCartPage;

// =====================
// DOMContentLoaded
// =====================
document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const THEMES = ['default', 'light', 'desaturated', 'colorblind'];

  // tema salvo
  const savedTheme = localStorage.getItem('gh-color-mode');
  const initialTheme = THEMES.includes(savedTheme) ? savedTheme : 'default';

  THEMES.forEach(theme => {
    root.classList.remove(`theme-${theme}`);
  });
  root.classList.add(`theme-${initialTheme}`);

  // botões de tema
  const themeButtons = document.querySelectorAll('.theme-btn');
  if (themeButtons.length > 0) {
    themeButtons.forEach(btn => {
      if (btn.dataset.theme === initialTheme) {
        btn.classList.add('active');
      }

      btn.addEventListener('click', () => {
        const chosen = btn.dataset.theme;

        THEMES.forEach(theme => root.classList.remove(`theme-${theme}`));
        root.classList.add(`theme-${chosen}`);
        localStorage.setItem('gh-color-mode', chosen);

        themeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  }

  // animações reveal
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // LISTING DE PRODUTOS (products.html)
  const productList = document.getElementById('product-list');
  if (productList) {
    const searchInput = document.getElementById('product-search');
    const categorySelect = document.getElementById('category-filter');

    function mapCategoryLabel(cat) {
      const map = {
        rpg: "RPG & Dados",
        tcg: "TCG & Cartas",
        minecraft: "Minecraft",
        colecionaveis: "Colecionável",
        perifericos: "Periférico",
        acessorios: "Acessório",
        papelaria: "Papelaria"
      };
      return map[cat] || cat;
    }

    function renderProducts(list) {
      productList.innerHTML = "";

      if (list.length === 0) {
        productList.innerHTML = `
          <p class="helper-text">Nenhum produto encontrado com esses filtros.</p>
        `;
        return;
      }

      list.forEach(p => {
        const card = document.createElement('article');
        card.className = 'product-card reveal';

        card.innerHTML = `
          <img src="${p.image}" alt="${p.alt}">
          <div class="product-info">
            <h3>${p.name}</h3>
            <p class="product-category">${mapCategoryLabel(p.category)}</p>
            <p class="product-price">R$ ${p.price.toFixed(2).replace('.', ',')}</p>
            <button type="button" class="btn btn-secondary"
                    data-add-to-cart="${p.id}">
              Adicionar ao carrinho
            </button>
          </div>
        `;

        productList.appendChild(card);
      });

      productList
        .querySelectorAll('[data-add-to-cart]')
        .forEach(btn => {
          btn.addEventListener('click', () => {
            ghAddToCart(btn.dataset.addToCart);
          });
        });

      productList.querySelectorAll('.reveal')
        .forEach(el => el.classList.add('is-visible'));
    }

    function applyFilters() {
      const term = (searchInput?.value || "").toLowerCase().trim();
      const category = categorySelect?.value || "all";

      let filtered = PRODUCTS.slice();

      if (category !== "all") {
        filtered = filtered.filter(p => p.category === category);
      }

      if (term) {
        filtered = filtered.filter(p =>
          p.name.toLowerCase().includes(term)
        );
      }

      renderProducts(filtered);
    }

    if (searchInput) {
      searchInput.addEventListener('input', applyFilters);
    }
    if (categorySelect) {
      categorySelect.addEventListener('change', applyFilters);
    }

    applyFilters();
  }

  // sincroniza carrinho em todas as páginas
  updateCartBadge();
  renderCartPage();
});
