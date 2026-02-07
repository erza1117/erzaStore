const makePlaceholder = (label) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="320" height="200">
      <rect width="100%" height="100%" fill="#ffffff"/>
      <text x="50%" y="48%" text-anchor="middle" font-size="34" font-family="Arial" font-weight="700" fill="#111111">
        ${label.split(" ")[0]}
      </text>
      <text x="50%" y="66%" text-anchor="middle" font-size="34" font-family="Arial" font-weight="700" fill="#111111">
        ${label.split(" ").slice(1).join(" ") || ""}
      </text>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const games = [
  {
    id: "ml",
    label: "Mobile Legends",
    image: "img/mole.jpg",
    useImage: true,
    items: [
      { name: "5 Diamonds", price: 3000, icon: "img/dm.png" },
      { name: "10 Diamonds", price: 4000, icon: "img/dm.png" },
      { name: "28 Diamonds", price: 9000, icon: "img/dm.png" },
      { name: "59 Diamonds", price: 17000, icon: "img/dm.png" },
      { name: "74 Diamonds", price: 21000, icon: "img/dm.png" },
      { name: "110 Diamonds", price: 31000, icon: "img/dm.png" },
      { name: "148 Diamonds", price: 41000, icon: "img/dm.png" },
      { name: "184 Diamonds", price: 51000, icon: "img/dm.png" },
      { name: "258 Diamonds", price: 70000, icon: "img/dm.png" },
      { name: "284 Diamonds", price: 77000, icon: "img/dm.png" },
      { name: "301 Diamonds", price: 80000, icon: "img/dm.png" },
      { name: "346 Diamonds", price: 93000, icon: "img/dm.png" },
      { name: "384 Diamonds", price: 104000, icon: "img/dm.png" },
      { name: "424 Diamonds", price: 115000, icon: "img/dm.png" },
      { name: "518 Diamonds", price: 138000, icon: "img/dm.png" },
      { name: "WDP 1x", price: 31000, icon: "img/wdp.png" },
      { name: "WDP 2x", price: 59000, icon: "img/wdp.png" },
      { name: "WDP 3x", price: 89000, icon: "img/wdp.png" },
      { name: "WDP 4x", price: 118000, icon: "img/wdp.png" },
      { name: "WDP 5x", price: 140000, icon: "img/wdp.png" }
    ]
  },
  {
    id: "ff",
    label: "Free Fire",
    image: "img/ff.jpg",
    useImage: true,
    items: [
      { name: "10 Diamonds", price: 3000, icon: "img/dm.png" },
      { name: "70 Diamonds", price: 10000, icon: "img/dm.png" },
      { name: "140 Diamonds", price: 19000, icon: "img/dm.png" },
      { name: "210 Diamonds", price: 30000, icon: "img/dm.png" },
      { name: "355 Diamonds", price: 45000, icon: "img/dm.png" },
      { name: "375 Diamonds", price: 50000, icon: "img/dm.png" },
      { name: "425 Diamonds", price: 54000, icon: "img/dm.png" },
      { name: "500 Diamonds", price: 63000, icon: "img/dm.png" },
      { name: "720 Diamonds", price: 89000, icon: "img/dm.png" },
      { name: "860 Diamonds", price: 106000, icon: "img/dm.png" },
      { name: "930 Diamonds", price: 115000, icon: "img/dm.png" },
      { name: "1.075 Diamonds", price: 135000, icon: "img/dm.png" },
      { name: "1.440 Diamonds", price: 177000, icon: "img/dm.png" },
      { name: "2.000 Diamonds", price: 245000, icon: "img/dm.png" },
      { name: "2.355 Diamonds", price: 287000, icon: "img/dm.png" },
      { name: "3.640 Diamonds", price: 442000, icon: "img/dm.png" },
      { name: "4.000 Diamonds", price: 483000, icon: "img/dm.png" },
      { name: "BP Card", price: 45000, icon: "img/bp-card.png" },
      { name: "MM", price: 30000, icon: "img/mm.png" },
      { name: "MB", price: 87000, icon: "img/mb.png" }
    ]
  },
  {
    id: "pubg",
    label: "PUBG Mobile",
    image: "img/pubg.jpg",
    useImage: true,
    items: [
      { name: "180 UC", price: 47231, icon: "img/uc.png" },
      { name: "240 UC", price: 62308, icon: "img/uc.png" },
      { name: "360 + 25 Bonus UC", price: 92461, icon: "img/uc.png" },
      { name: "420 + 25 Bonus UC", price: 107538, icon: "img/uc.png" },
      { name: "480 + 25 Bonus UC", price: 122615, icon: "img/uc.png" },
      { name: "540 + 25 Bonus UC", price: 137692, icon: "img/uc.png" },
      { name: "660 + 60 Bonus UC", price: 167846, icon: "img/uc.png" },
      { name: "720 + 60 Bonus UC", price: 182923, icon: "img/uc.png" },
      { name: "780 + 60 Bonus UC", price: 198000, icon: "img/uc.png" },
      { name: "840 + 60 Bonus UC", price: 213077, icon: "img/uc.png" },
      { name: "900 + 85 Bonus UC", price: 228153, icon: "img/uc.png" },
      { name: "1020 + 85 Bonus UC", price: 258307, icon: "img/uc.png" },
      { name: "1080 + 85 Bonus UC", price: 273384, icon: "img/uc.png" },
      { name: "1200 + 120 Bonus UC", price: 303538, icon: "img/uc.png" },
      { name: "1320 + 120 Bonus UC", price: 333692, icon: "img/uc.png" },
      { name: "1380 + 120 Bonus UC", price: 348769, icon: "img/uc.png" },
      { name: "1620 + 300 Bonus UC", price: 409076, icon: "img/uc.png" },
      { name: "1680 + 300 Bonus UC", price: 424153, icon: "img/uc.png" }
    ]
  },
  {
    id: "valorant",
    label: "Valorant",
    image: "img/valo.jpg",
    useImage: true,
    items: [
      { name: "475 VP", price: 55278, icon: "img/vp.png" },
      { name: "1000 VP", price: 108556, icon: "img/vp.png" },
      { name: "1475 VP", price: 161833, icon: "img/vp.png" },
      { name: "2050 VP", price: 215111, icon: "img/vp.png" },
      { name: "2525 VP", price: 268389, icon: "img/vp.png" },
      { name: "3050 VP", price: 321667, icon: "img/vp.png" },
      { name: "3650 VP", price: 372091, icon: "img/vp.png" },
      { name: "4125 VP", price: 425369, icon: "img/vp.png" },
      { name: "4650 VP", price: 478647, icon: "img/vp.png" },
      { name: "5350 VP", price: 533827, icon: "img/vp.png" },
      { name: "5700 VP", price: 585202, icon: "img/vp.png" },
      { name: "5825 VP", price: 587105, icon: "img/vp.png" },
      { name: "6350 VP", price: 640383, icon: "img/vp.png" },
      { name: "7300 VP", price: 742182, icon: "img/vp.png" },
      { name: "7400 VP", price: 746938, icon: "img/vp.png" },
      { name: "9000 VP", price: 903918, icon: "img/vp.png" },
      { name: "11000 VP", price: 1047578, icon: "img/vp.png" },
      { name: "11475 VP", price: 1100856, icon: "img/vp.png" }
    ]
  },
  {
    id: "steam",
    label: "Steam Wallet",
    image: "img/steam.jpg",
    useImage: true,
    items: [
      { name: "Steam Wallet 12.000", price: 14000 },
      { name: "Steam Wallet 45.000", price: 47000 },
      { name: "Steam Wallet 60.000", price: 62000 },
      { name: "Steam Wallet 90.000", price: 93000 },
      { name: "Steam Wallet 120.000", price: 124000 },
      { name: "Steam Wallet 250.000", price: 256000 },
      { name: "Steam Wallet 400.000", price: 410000 },
      { name: "Steam Wallet 600.000", price: 612000 }
    ]
  }
];

const products = {
  pulsa: [
    { name: "Pulsa 5K", price: 7000 },
    { name: "Pulsa 10K", price: 12000 },
    { name: "Pulsa 15K", price: 17000 },
    { name: "Pulsa 20K", price: 22000 },
    { name: "Pulsa 25K", price: 27000 },
    { name: "Pulsa 30K", price: 32000 },
    { name: "Pulsa 35K", price: 37000 },
    { name: "Pulsa 40K", price: 42000 },
    { name: "Pulsa 45K", price: 47000 },
    { name: "Pulsa 50K", price: 52000 },
    { name: "Pulsa 55K", price: 57000 },
    { name: "Pulsa 60K", price: 62000 },
    { name: "Pulsa 65K", price: 67000 },
    { name: "Pulsa 70K", price: 72000 },
    { name: "Pulsa 75K", price: 77000 },
    { name: "Pulsa 80K", price: 82000 },
    { name: "Pulsa 85K", price: 87000 },
    { name: "Pulsa 90K", price: 92000 },
    { name: "Pulsa 95K", price: 97000 },
    { name: "Pulsa 100K", price: 102000 },
    { name: "Pulsa 150K", price: 152000 },
    { name: "Pulsa 200K", price: 202000 },
    { name: "Pulsa 300K", price: 302000 },
    { name: "Pulsa 500K", price: 502000 }
  ],
  pln: [
    { name: "Token PLN 20K", price: 23000 },
    { name: "Token PLN 50K", price: 53000 },
    { name: "Token PLN 100K", price: 103000 },
    { name: "Tagihan PLN 200K", price: 202000 },
    { name: "Tagihan PLN 500K", price: 501500 }
  ],
  bank: [
    { name: "Transfer Bank (Nominal Custom)", price: 0 }
  ],
  pdam: [
    { name: "Tagihan PDAM", price: 0 }
  ]
};

const amountOptions = {
  pulsa: [
    "5.000",
    "10.000",
    "15.000",
    "20.000",
    "25.000",
    "30.000",
    "35.000",
    "40.000",
    "45.000",
    "50.000",
    "55.000",
    "60.000",
    "65.000",
    "70.000",
    "75.000",
    "80.000",
    "85.000",
    "90.000",
    "95.000",
    "100.000",
    "150.000",
    "200.000",
    "300.000",
    "500.000"
  ],
  pln: ["20.000", "50.000", "100.000", "200.000", "500.000"],
  bank: ["100.000", "250.000", "500.000", "1.000.000", "2.000.000"],
  pdam: ["50.000", "100.000", "150.000", "200.000", "300.000"]
};

const fees = {
  game: 0,
  pulsa: 0,
  pln: 0,
  bank: 0,
  pdam: 0
};

const productGrid = document.getElementById("productGrid");
const gameGallery = document.getElementById("gameGallery");
const tabs = document.querySelectorAll(".tab");
const categorySelect = document.getElementById("categorySelect");
const amountSelect = document.getElementById("amountSelect");
const gameSelect = document.getElementById("gameSelect");
const bankAmountField = document.getElementById("bankAmountField");
const bankAmountInput = document.getElementById("bankAmountInput");
const bankAmountError = document.getElementById("bankAmountError");
const paymentField = document.getElementById("paymentField");
const plnHint = document.getElementById("plnHint");
const targetInput = document.getElementById("targetInput");
const targetLabelText = document.getElementById("targetLabelText");
const paySelect = document.getElementById("paySelect");
const walletField = document.getElementById("walletField");
const walletSelect = document.getElementById("walletSelect");

const gameField = document.getElementById("gameField");
const operatorField = document.getElementById("operatorField");
const plnTypeField = document.getElementById("plnTypeField");
const bankField = document.getElementById("bankField");
const bankAccountField = document.getElementById("bankAccountField");

const sumCategory = document.getElementById("sumCategory");
const sumProduct = document.getElementById("sumProduct");
const sumAmount = document.getElementById("sumAmount");
const sumFee = document.getElementById("sumFee");
const sumTotal = document.getElementById("sumTotal");

const form = document.getElementById("orderForm");
const orderSection = document.getElementById("order");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

let currentGameId = games[0].id;

const formatIDR = (value) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);
};

const getGameById = (id) => games.find((game) => game.id === id);
const getGameByLabel = (label) => games.find((game) => game.label === label);

const renderProducts = (items, category, prefixLabel = "") => {
  productGrid.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "product";
    const iconHtml = item.icon ? `<div class="product-icon"><img src="${item.icon}" alt=""></div>` : "";
    const showPrice = item.price > 0;
    const titleText =
      prefixLabel && item.name.toLowerCase().startsWith(prefixLabel.toLowerCase())
        ? item.name
        : prefixLabel
          ? `${prefixLabel} - ${item.name}`
          : item.name;
    card.innerHTML = `
      <div class="product-title">
        ${iconHtml}
        <div>${titleText}</div>
      </div>
      ${showPrice ? `<div class="price">${formatIDR(item.price)}</div>` : ""}
      <div class="muted">Klik untuk pilih</div>
    `;
    card.addEventListener("click", () => {
      sumProduct.textContent = prefixLabel ? `${prefixLabel} - ${item.name}` : item.name;
      sumAmount.textContent = formatIDR(item.price);
      sumFee.textContent = formatIDR(fees[category]);
      sumTotal.textContent = formatIDR(item.price + fees[category]);
      smoothScrollTo(orderSection, 900);
    });
    productGrid.appendChild(card);
  });
};

const smoothScrollTo = (element, duration = 900) => {
  if (!element) return;
  const startY = window.pageYOffset;
  const targetY = element.getBoundingClientRect().top + window.pageYOffset - 20;
  const distance = targetY - startY;
  let startTime = null;

  const easeInOut = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  const step = (timestamp) => {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOut(progress);
    window.scrollTo(0, startY + distance * eased);
    if (elapsed < duration) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

const renderAmounts = (category) => {
  if (!amountSelect) return;
  amountSelect.innerHTML = "";
  if (category === "game") {
    const game = getGameById(currentGameId);
    game.items.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.price;
      option.textContent = item.name;
      amountSelect.appendChild(option);
    });
    return;
  }

  amountOptions[category]?.forEach((amount) => {
    const option = document.createElement("option");
    option.value = amount;
    option.textContent = `Rp ${amount}`;
    amountSelect.appendChild(option);
  });
};

const toggleFields = (category) => {
  gameField.classList.toggle("hidden", category !== "game");
  operatorField.classList.toggle("hidden", category !== "pulsa");
  plnTypeField.classList.toggle("hidden", category !== "pln");
  bankField.classList.toggle("hidden", category !== "bank");
  bankAccountField.classList.toggle("hidden", category !== "bank");
  bankAmountField.classList.toggle("hidden", category !== "bank");
  gameGallery.classList.toggle("hidden", category !== "game");
  if (amountSelect) {
    amountSelect.parentElement.classList.toggle("hidden", category === "bank");
  }
  paymentField.classList.toggle("hidden", category === "pln");
  plnHint.classList.toggle("hidden", category !== "pln");
  walletField.classList.toggle("hidden", paySelect.value !== "E-Wallet" || category === "pln");
  if (category === "pln") {
    targetLabelText.textContent = "Nomor Pelanggan / ID Meter";
    targetInput.placeholder = "Nomor Pelanggan / ID Meter";
  } else if (category === "game") {
    targetLabelText.textContent = "Masukkan ID";
    targetInput.placeholder = "ID";
  } else if (category === "bank") {
    targetLabelText.textContent = "Nomor Tujuan / Rekening";
    targetInput.placeholder = "Nomor tujuan / rekening";
  } else {
    targetLabelText.textContent = "Nomor Tujuan";
    targetInput.placeholder = "Contoh: 0812xxxxxxx";
  }

  const labels = {
    game: "Top Up Game",
    pulsa: "Pulsa",
    pln: "Token Listrik",
    bank: "Transfer Bank",
    pdam: "PDAM"
  };
  sumCategory.textContent = labels[category];
};

const renderGameGallery = () => {
  gameGallery.innerHTML = "";
  games.forEach((game) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "game-tile";
    button.dataset.game = game.id;
    button.title = game.label;
    if (game.useImage) {
      button.innerHTML = `<img src="${game.image}" alt="${game.label}" />`;
    } else {
      const words = game.label.split(" ");
      const line1 = words[0] || game.label;
      const line2 = words.slice(1).join(" ");
      button.innerHTML = `
        <span class="game-label">
          ${line1}${line2 ? `<br>${line2}` : ""}
        </span>
      `;
    }
    button.addEventListener("click", () => {
      currentGameId = game.id;
      if (gameSelect) gameSelect.value = game.label;
      renderAmounts("game");
      renderProducts(game.items, "game", game.label);
      setSelectedGameTile(game.id);
      sumProduct.textContent = "-";
      sumAmount.textContent = "-";
      sumFee.textContent = formatIDR(fees.game);
      sumTotal.textContent = "-";
    });
    gameGallery.appendChild(button);
  });
};

const setSelectedGameTile = (gameId) => {
  const tiles = gameGallery.querySelectorAll(".game-tile");
  tiles.forEach((tile) => {
    tile.classList.toggle("selected", tile.dataset.game === gameId);
  });
};

const setActiveTab = (category) => {
  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.category === category);
  });
  if (category === "game") {
    const game = getGameById(currentGameId);
    renderProducts(game.items, "game", game.label);
    renderGameGallery();
    setSelectedGameTile(currentGameId);
    return;
  }
  renderProducts(products[category], category);
};

const init = () => {
  const defaultCategory = "game";
  const defaultGame = games[0];
  currentGameId = defaultGame.id;
  if (gameSelect) gameSelect.value = defaultGame.label;
  renderGameGallery();
  setActiveTab(defaultCategory);
  renderAmounts(defaultCategory);
  toggleFields(defaultCategory);
  sumCategory.textContent = "Top Up Game";
  sumFee.textContent = formatIDR(fees.game);
};

categorySelect.addEventListener("change", (event) => {
  const category = event.target.value;
  renderAmounts(category);
  toggleFields(category);
  setActiveTab(category);
  sumProduct.textContent = "-";
  sumAmount.textContent = "-";
  sumFee.textContent = formatIDR(fees[category]);
  sumTotal.textContent = "-";
  targetInput.value = "";
  if (category === "bank") {
    bankAmountInput.value = "";
  }
});

paySelect.addEventListener("change", () => {
  const category = categorySelect.value;
  walletField.classList.toggle("hidden", paySelect.value !== "E-Wallet" || category === "pln");
});

if (amountSelect) {
  amountSelect.addEventListener("change", () => {
    const category = categorySelect.value;
    if (category === "game") {
      const game = getGameById(currentGameId);
      const selectedOption = amountSelect.options[amountSelect.selectedIndex];
      const base = Number(selectedOption.value);
      sumProduct.textContent = `${game.label} - ${selectedOption.textContent}`;
      sumAmount.textContent = formatIDR(base);
      sumFee.textContent = formatIDR(fees[category]);
      sumTotal.textContent = formatIDR(base + fees[category]);
      return;
    }

    if (category === "bank") {
      return;
    }

    const amount = amountSelect.value.replace(/\./g, "");
    const base = Number(amount);
    sumAmount.textContent = formatIDR(base);
    sumFee.textContent = formatIDR(fees[category]);
    sumTotal.textContent = formatIDR(base + fees[category]);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const category = categorySelect.value;
  const fee = fees[category];
  sumFee.textContent = formatIDR(fee);

  const amountText = sumAmount.textContent && sumAmount.textContent !== "-" ? sumAmount.textContent : "-";
  const productText = sumProduct.textContent && sumProduct.textContent !== "-" ? sumProduct.textContent : "Belum dipilih";

  const amountNumeric = Number((amountText || "").replace(/\D/g, "")) || 0;
  const bankAmountNumeric = Number((bankAmountInput?.value || "").replace(/\D/g, "")) || null;
  const bankName = document.getElementById("bankAccountInput")?.value || "";

  const paymentText =
    category === "pln"
      ? "Pembayaran: via WhatsApp"
      : paySelect.value === "E-Wallet"
        ? `Metode Bayar: E-Wallet (${walletSelect.value})`
        : `Metode Bayar: ${paySelect.value}`;

  const payload = {
    category: sumCategory.textContent,
    product: productText,
    amount: amountNumeric,
    target: targetInput.value,
    payment_method: category === "pln" ? "WhatsApp" : paySelect.value,
    wallet: paySelect.value === "E-Wallet" ? walletSelect.value : "",
    bank_amount: bankAmountNumeric,
    bank_name: bankName,
    note: document.getElementById("noteInput").value || ""
  };

  fetch("submit.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).catch(() => {});

  const messageLines = [
    "Halo ERZA CELL, saya mau order:",
    `Kategori: ${sumCategory.textContent}`,
    `Produk: ${productText}`,
    `Nominal: ${amountText}`,
    `Tujuan: ${document.getElementById("targetInput").value}`,
    paymentText,
    `Catatan: ${document.getElementById("noteInput").value || "-"}`,
    "Mohon konfirmasi ya."
  ];

  const message = encodeURIComponent(messageLines.join("\n"));
  const phone = "6281337729336";
  const waUrl = `https://wa.me/${phone}?text=${message}`;
  window.open(waUrl, "_blank");
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const category = tab.dataset.category;
    categorySelect.value = category;
    renderAmounts(category);
    toggleFields(category);
    setActiveTab(category);
  });
});

if (gameSelect) {
  gameSelect.addEventListener("change", (event) => {
    const selected = getGameByLabel(event.target.value);
    if (!selected) return;
    currentGameId = selected.id;
    renderAmounts("game");
    renderProducts(selected.items, "game", selected.label);
    setSelectedGameTile(selected.id);
  });
}

bankAmountInput.addEventListener("input", () => {
  const digitsOnly = bankAmountInput.value.replace(/\D/g, "");
  const raw = Number(digitsOnly || 0);
  if (digitsOnly) {
    bankAmountInput.value = digitsOnly.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const maxBankAmount = 10000000;
  const isOverLimit = raw > maxBankAmount;
  bankAmountError.classList.toggle("hidden", !isOverLimit);
  if (isOverLimit) {
    sumProduct.textContent = "Transfer Bank (Nominal Custom)";
    sumAmount.textContent = "-";
    sumFee.textContent = formatIDR(fees.bank);
    sumTotal.textContent = "-";
    return;
  }
  sumProduct.textContent = "Transfer Bank (Nominal Custom)";
  sumAmount.textContent = raw ? formatIDR(raw) : "-";
  sumFee.textContent = formatIDR(fees.bank);
  sumTotal.textContent = raw ? formatIDR(raw + fees.bank) : "-";
});

init();

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = !mobileMenu.hasAttribute("hidden");
    if (isOpen) {
      mobileMenu.setAttribute("hidden", "");
      menuToggle.setAttribute("aria-expanded", "false");
    } else {
      mobileMenu.removeAttribute("hidden");
      menuToggle.setAttribute("aria-expanded", "true");
    }
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.setAttribute("hidden", "");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}
