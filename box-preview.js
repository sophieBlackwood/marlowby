/* ==========================================================================
   Marlowby — Box Quick-View Preview Modal (box-preview.js)
   ========================================================================== */

const BOX_PREVIEWS = {
  nyc: {
    description: "Corner-store staples, dark coffee, and a couple of subway keepsakes packed in Brooklyn.",
    items: [
      "Everything bagel seasoning (2.5 oz jar)",
      "Soft-baked black & white cookie",
      "Brooklyn dark roast espresso (8 oz)",
      "Honey roasted peanuts",
      "Metal yellow cab keychain",
      "Manhattan skyline postcard"
    ]
  },
  la: {
    description: "Dried California citrus, salty tortilla chips, green tea, and a few small-batch bath goods.",
    items: [
      "Dried mango & blood orange slices",
      "Sea salt avocado oil tortilla chips",
      "Cold-pressed green tea bags",
      "Coconut & sea salt body scrub (4 oz)",
      "Rosewater face mist",
      "Sunburst enamel pin"
    ]
  },
  chicago: {
    description: "Sweet-and-salty popcorn, pickled giardiniera, pizza spices, and neighborhood snacks from Chicago.",
    items: [
      "Cheddar & caramel popcorn mix",
      "Jar of Chicago-style giardiniera",
      "Deep-dish pizza oregano & garlic blend",
      "Dark chocolate mints",
      "Chicago flag vinyl sticker",
      "Cork theater coaster"
    ]
  },
  houston: {
    description: "Smoked pecans, BBQ dry rub, jalapeño hot sauce, and a couple of Space City extras.",
    items: [
      "Salted smoked pecan halves",
      "Tex-Mex BBQ dry rub",
      "Smoky jalapeño hot sauce (5 oz)",
      "Dulce de leche caramels",
      "Astronaut vinyl sticker",
      "Cotton bandana with leather key loop"
    ]
  },
  philadelphia: {
    description: "Coarse pretzel mustard, cinnamon pecans, dark chocolate, and loose-leaf tea from Old City.",
    items: [
      "Soft pretzel coarse mustard",
      "Cinnamon-roasted pecans",
      "Dark chocolate bar",
      "Loose-leaf herbal tea",
      "Historic district postcard set"
    ]
  },
  san_francisco: {
    description: "Sourdough pretzels, 70% dark chocolate, French roast beans, and Earl Grey for foggy mornings.",
    items: [
      "Hard sourdough pretzel twists",
      "70% dark chocolate bar",
      "French roast espresso beans (8 oz)",
      "Loose-leaf Earl Grey tea tin",
      "Sea salt linen spray",
      "Golden Gate cable car sticker"
    ]
  },
  seattle: {
    description: "Whole-bean espresso, wild blackberry jam, smoked sea salt, and a cedar candle.",
    items: [
      "Pike Place whole-bean espresso (8 oz)",
      "Wild blackberry jam (6 oz)",
      "Puget Sound smoked sea salt",
      "Cedarwood soy candle",
      "Ferry vinyl sticker"
    ]
  },
  denver: {
    description: "Wildflower honey, Palisade peach preserves, trail mix, and pine soap from Colorado makers.",
    items: [
      "Rocky Mountain wildflower honey",
      "Palisade peach preserves",
      "Roasted nut & berry trail mix",
      "Pine & cedar bar soap",
      "Front Range trail map postcard"
    ]
  },
  nashville: {
    description: "Hot chicken spice rub, honey biscuit mix, peppermint bark, and a brass guitar pick keychain.",
    items: [
      "Nashville hot chicken cayenne rub",
      "Honey buttermilk biscuit mix",
      "Dark chocolate peppermint bark",
      "Brass guitar pick keychain"
    ]
  },
  dc: {
    description: "Cherry blossom green tea, half-smoke sausage seasoning, salted pretzels, and a marble coaster.",
    items: [
      "Cherry blossom green tea",
      "Half-smoke sausage spice blend",
      "Salted butter pretzel twists",
      "Tin of peppermint candies",
      "Marble tile coaster"
    ]
  },
  las_vegas: {
    description: "Chili-lime nuts, foil chocolate casino chips, margarita mixer, and a deck of cards.",
    items: [
      "Foil-wrapped chocolate casino chips",
      "Key lime cocktail mixer (8 oz)",
      "Chili-lime almonds & cashews",
      "Dark chocolate truffles",
      "Deck of playing cards",
      "Dice keyring"
    ]
  },
  new_orleans: {
    description: "Chicory coffee, Cajun seasoning, brown-sugar pecan pralines, and a brass bookmark.",
    items: [
      "Dark roast chicory coffee (8 oz)",
      "Creole & Cajun seasoning blend",
      "Brown-sugar pecan pralines",
      "Brass jazz trumpet bookmark"
    ]
  },
  atlanta: {
    description: "Georgia peach jam, sweet tea syrup, cinnamon pecans, and a wood skyline magnet.",
    items: [
      "Georgia peach jam (6 oz)",
      "Cane-sugar sweet tea syrup",
      "Cinnamon-glazed pecans",
      "Wood skyline magnet"
    ]
  },
  miami: {
    description: "Cuban-style dark espresso, guava chews, key lime shortbread, and a cork coaster.",
    items: [
      "Dark roast Cuban-style espresso (8 oz)",
      "Guava & mango fruit chews",
      "Key lime shortbread cookies",
      "Art Deco cork coaster"
    ]
  },
  salt_lake_city: {
    description: "Utah clover honey, diner fry sauce, sea salt caramels, and a red rock postcard.",
    items: [
      "Utah raw clover honey (6 oz)",
      "Diner-style fry sauce",
      "Sea salt caramels",
      "Red rock canyon postcard"
    ]
  },
  boise: {
    description: "Wild Idaho huckleberry jam, dark chocolate bark, rosemary-garlic rub, and a foothills sticker.",
    items: [
      "Wild Idaho huckleberry jam (6 oz)",
      "Dark chocolate bark",
      "Rosemary & garlic seasoning rub",
      "Boise foothills vinyl sticker"
    ]
  },
  burley: {
    description: "Magic Valley honey sticks, salted almonds, an Idaho spud candy bar, and a stitched patch.",
    items: [
      "Clover honey sticks (10 pack)",
      "Idaho chocolate & coconut candy bar",
      "Salted roasted almonds",
      "Embroidered Burley patch"
    ]
  },
  honolulu: {
    description: "100% Kona coffee, macadamia nut brittle, passionfruit butter, and a hibiscus pin.",
    items: [
      "100% Kona ground coffee (8 oz)",
      "Macadamia nut brittle",
      "Lilikoi (passionfruit) butter",
      "Enamel hibiscus pin"
    ]
  }
};

let lastFocusedElement = null;

function openPreviewModal(boxKey, title, price, imgSrc) {
  const modal = document.getElementById("boxPreviewModal");
  if (!modal) return;

  lastFocusedElement = document.activeElement;

  const key = (boxKey || "").toLowerCase().trim();
  const data = BOX_PREVIEWS[key] || {
    description: "Local snacks, pantry staples, and a couple of keepsakes from around town.",
    items: [
      "Local snack pack",
      "Regional coffee or tea",
      "Small-batch pantry jar",
      "City postcard & sticker"
    ]
  };

  document.getElementById("previewTitle").textContent = title;
  document.getElementById("previewPrice").textContent = price;
  document.getElementById("previewDesc").textContent = data.description;

  const imgEl = document.getElementById("previewImg");
  if (imgEl) {
    imgEl.src = imgSrc;
    imgEl.alt = `${title} contents`;
  }

  const listEl = document.getElementById("previewItems");
  if (listEl) {
    listEl.innerHTML = "";
    data.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      listEl.appendChild(li);
    });
  }

  const fullLinkEl = document.getElementById("previewFullLink");
  if (fullLinkEl) {
    fullLinkEl.href = `box-detail.html?box=${encodeURIComponent(key)}`;
  }

  modal.hidden = false;
  document.body.style.overflow = "hidden";

  const closeBtn = modal.querySelector(".preview-close-btn");
  if (closeBtn) closeBtn.focus();
}

function closePreviewModal() {
  const modal = document.getElementById("boxPreviewModal");
  if (!modal) return;

  modal.hidden = true;
  document.body.style.overflow = "";

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

function extractBoxKey(href) {
  if (!href) return "";
  const match = href.match(/[?&]box=([^&]+)/);
  return match ? decodeURIComponent(match[1]) : "";
}

function createPreviewButton(boxKey, title, price, imgSrc) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "preview-trigger-btn";
  btn.textContent = "Preview Box";
  btn.setAttribute("aria-label", `Preview ${title}`);
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    openPreviewModal(boxKey, title, price, imgSrc);
  });
  return btn;
}

function initBoxPreviews() {
  // 1. All 18 cards in #productGrid
  document.querySelectorAll("#productGrid .product-card-item").forEach((card) => {
    if (card.querySelector(".preview-trigger-btn")) return;

    const link = card.querySelector("a[href*='box-detail.html']");
    const img = card.querySelector("img");
    const priceEl = card.querySelector(".product-price");
    const infoContainer = card.querySelector(".product-info") || card;

    if (!link) return;

    const boxKey = extractBoxKey(link.getAttribute("href"));
    const title = card.dataset.name || link.textContent.trim();
    const price = priceEl ? priceEl.textContent.trim() : `$${card.dataset.price || "49.99"}`;
    const imgSrc = img ? img.getAttribute("src") : "";

    infoContainer.appendChild(createPreviewButton(boxKey, title, price, imgSrc));
  });

  // 2. All 3 cards in .featured-boxes
  document.querySelectorAll(".featured-boxes .card").forEach((card) => {
    if (card.querySelector(".preview-trigger-btn")) return;

    const link = card.querySelector("a[href*='box-detail.html']");
    const img = card.querySelector("img");
    const titleEl = card.querySelector("h3");

    if (!link) return;

    const boxKey = extractBoxKey(link.getAttribute("href"));
    const title = titleEl ? titleEl.textContent.trim() : "Featured Box";
    const imgSrc = img ? img.getAttribute("src") : "";

    // Pull the matching price directly from the shop grid card
    const gridCard = document
      .querySelector(`#productGrid a[href="box-detail.html?box=${boxKey}"]`)
      ?.closest(".product-card-item");
    const price = gridCard?.querySelector(".product-price")?.textContent.trim() || "$49.99";

    card.appendChild(createPreviewButton(boxKey, title, price, imgSrc));
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initBoxPreviews);
} else {
  initBoxPreviews();
}

document.addEventListener("keydown", (event) => {
  const modal = document.getElementById("boxPreviewModal");
  if (!modal || modal.hidden) return;

  if (event.key === "Escape") {
    closePreviewModal();
    return;
  }

  if (event.key === "Tab") {
    const focusable = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
