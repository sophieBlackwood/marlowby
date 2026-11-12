const BOX_PREVIEWS = {
  nyc: {
    description: "Classic New York corner-store staples, dark-roasted coffee, and small-batch treats from local Manhattan and Brooklyn makers.",
    items: [
      "Everything Bagel Seasoning Blend",
      "Soft-Baked Black & White Cookie",
      "Brooklyn Dark Roast Espresso Grounds",
      "Candied Street-Cart Style Honey Peanuts",
      "Yellow Taxi Metal Keychain",
      "Manhattan Skyline Postcard"
    ]
  },
  la: {
    description: "Sun-dried California fruit, crisp avocado-oil snacks, and small-batch apothecary goods from Southern California shops.",
    items: [
      "Dried California Citrus & Mango Slices",
      "Sea Salt Avocado Oil Tortilla Chips",
      "Cold-Pressed Green Tea Bags",
      "Coconut & Sea Salt Body Scrub",
      "Apothecary Rose Water Face Mist",
      "Minimalist Sunburst Enamel Pin"
    ]
  },
  chicago: {
    description: "Sweet-and-savory popcorn, tangy giardiniera, and neighborhood pantry favorites straight from Chicago.",
    items: [
      "Cheddar & Caramel Popcorn Mix",
      "Chicago-Style Pickled Pepper Giardiniera",
      "Deep Dish Pizza Oregano & Garlic Spice Blend",
      "Dark Chocolate Mint Melts",
      "Chicago City Flag Vinyl Sticker",
      "Vintage Theater Cork Coaster"
    ]
  },
  houston: {
    description: "Smoky Texas barbecue rubs, roasted pecans, and bold Tex-Mex heat packed in Houston.",
    items: [
      "Smoked Texas Pecan Halves",
      "Tex-Mex Hickory BBQ Spice Rub",
      "Smoky Jalapeño Hot Sauce",
      "Wrapped Dulce de Leche Caramels",
      "Space City Astronaut Vinyl Sticker",
      "Classic Cotton Bandana & Leather Key Loop"
    ]
  },
  philadelphia: {
    description: "Old City sweets, soft pretzel mustard, and local roastery favorites from Philadelphia.",
    items: [
      "Philly Soft Pretzel Coarse Mustard",
      "Old City Cinnamon Roasted Pecans",
      "Liberty Bell Dark Chocolate Bar",
      "Rittenhouse Loose-Leaf Herbal Tea",
      "Historic District Postcard Set"
    ]
  },
  san_francisco: {
    description: "Sourdough snacks, dark cocoa, and foggy-morning teas from independent Bay Area makers.",
    items: [
      "Hard Sourdough Pretzel Twists",
      "70% Craft Dark Chocolate Bar",
      "Bay Area French Roast Espresso Beans",
      "Earl Grey Loose-Leaf Tea Tin",
      "Fog & Sea Salt Linen Mist",
      "Golden Gate Cable Car Sticker"
    ]
  },
  seattle: {
    description: "Small-batch espresso, Pacific Northwest berry preserves, and cedar-scented goods from Seattle.",
    items: [
      "Pike Place Whole-Bean Espresso",
      "Wild Pacific Northwest Blackberry Jam",
      "Puget Sound Smoked Sea Salt",
      "Hand-Poured Cedarwood Soy Candle",
      "Emerald City Ferry Sticker"
    ]
  },
  denver: {
    description: "High-altitude trail snacks, wildflower honey, and mountain botanicals from Colorado makers.",
    items: [
      "Rocky Mountain Wildflower Honey Jar",
      "Palisade Peach Fruit Preserves",
      "High-Altitude Roasted Nut & Berry Trail Mix",
      "Colorado Pine & Cedar Soap Bar",
      "Front Range Trail Map Postcard"
    ]
  },
  nashville: {
    description: "Fiery hot chicken spices, sweet biscuit mixes, and Music Row treats from Nashville.",
    items: [
      "Nashville Hot Chicken Cayenne Spice Rub",
      "Tennessee Honey Buttermilk Biscuit Mix",
      "Music Row Dark Chocolate Peppermint Bark",
      "Stamped Brass Guitar Pick Keychain"
    ]
  },
  dc: {
    description: "Cherry blossom green tea, smoky half-smoke seasonings, and neighborhood favorites from Washington, D.C.",
    items: [
      "Cherry Blossom Infused Green Tea",
      "D.C. Half-Smoke Smoky Sausage Seasoning",
      "Salted Butter Pretzel Twists",
      "Decorative Tin of Peppermint Mints",
      "Capital Marble Tile Coaster"
    ]
  },
  las_vegas: {
    description: "Desert prickly-pear sweets, spiced nuts, and classic table-game keepsakes from Las Vegas.",
    items: [
      "Foil-Wrapped Dark Chocolate Casino Chips",
      "Artisanal Key Lime Mixer Syrup",
      "Chili-Lime Roasted Almonds & Cashews",
      "Gold-Dusted Dark Chocolate Truffles",
      "Custom Plastic-Coated Playing Card Deck",
      "Acrylic Dice & Neon Keyring"
    ]
  },
  new_orleans: {
    description: "French Quarter chicory coffee, Creole seasonings, and pecan pralines made in New Orleans.",
    items: [
      "French Quarter Dark Roast Chicory Coffee",
      "Bourbon Street Creole & Cajun Seasoning",
      "Traditional Brown-Sugar Pecan Pralines",
      "Stamped Brass Jazz Trumpet Bookmark"
    ]
  },
  atlanta: {
    description: "Georgia peach preserves, sweet tea syrup, and roasted pecans from local Atlanta kitchens.",
    items: [
      "Small-Batch Georgia Peach Jam",
      "Southern Cane-Sugar Sweet Tea Syrup",
      "Cinnamon-Glazed Georgia Pecans",
      "Atlanta Skyline Wood Magnet"
    ]
  },
  miami: {
    description: "Cuban-style dark espresso, tropical guava sweets, and key lime cookies from Miami.",
    items: [
      "Little Havana Dark Roast Espresso",
      "Tropical Guava & Mango Fruit Chews",
      "Powdered Key Lime Shortbread Cookies",
      "South Beach Art Deco Cork Coaster"
    ]
  },
  salt_lake_city: {
    description: "Utah clover honey, signature fry sauce, and sea salt caramels from the Wasatch Front.",
    items: [
      "Utah Beehive Raw Clover Honey",
      "Wasatch Diner-Style Fry Sauce",
      "Great Salt Lake Sea Salt Caramels",
      "Red Rock Canyon Illustrated Postcard"
    ]
  },
  boise: {
    description: "Wild Idaho huckleberry jam, foothill herb rubs, and local chocolates from Boise.",
    items: [
      "Wild Idaho Huckleberry Preserves",
      "Boise River Dark Chocolate Bark",
      "Treasure Valley Rosemary & Garlic Rub",
      "Boise Foothills Vinyl Trail Sticker"
    ]
  },
  burley: {
    description: "Magic Valley honey, Snake River roasted nuts, and hometown treats straight from Burley, Idaho.",
    items: [
      "Magic Valley Clover Honey Sticks",
      "Classic Idaho Spud-Style Chocolate & Coconut Bar",
      "Snake River Salted Roasted Almonds",
      "Embroidered Burley Heritage Patch"
    ]
  },
  honolulu: {
    description: "100% Kona coffee, roasted Hawaiian macadamia nuts, and passionfruit butter from Oahu.",
    items: [
      "100% Kona Ground Coffee Blend",
      "Caramelized Hawaiian Macadamia Nut Brittle",
      "Tropical Lilikoi (Passionfruit) Fruit Butter",
      "Enamel Hibiscus Flower Pin"
    ]
  },
  /* --- Additional Cities (Ready if added to shop.html later) --- */
  phoenix: {
    description: "Sonoran desert prickly-pear jelly, blue corn chips, and smoky chipotle salsa from Phoenix.",
    items: [
      "Sonoran Prickly Pear Jelly",
      "Stone-Ground Blue Corn Tortilla Chips",
      "Roasted Chipotle Salsa",
      "Mesquite Blossom Honey Sticks",
      "Mini Terracotta Cactus Keychain"
    ]
  },
  dallas: {
    description: "Thick-cut smoked jerky, pecan pralines, and warm vanilla goods from Dallas makers.",
    items: [
      "Southern Caramel Pecan Pralines",
      "Texas Wildflower Honey with Wooden Dipper",
      "Thick-Cut Hickory Beef Jerky",
      "Stamped Faux-Leather Coaster Set",
      "Amber Glass Bourbon Vanilla Candle"
    ]
  },
  san_jose: {
    description: "Dark chocolate espresso beans, matcha packets, and trail snacks from Silicon Valley.",
    items: [
      "Dark Chocolate Covered Espresso Beans",
      "Roasted Almond & Cashew Trail Mix",
      "Single-Serve Ceremonial Matcha Packets",
      "Oat & Peanut Butter Energy Bites",
      "Microfiber Tech Screen Cloth"
    ]
  },
  austin: {
    description: "Chili-infused hot honey, smoked barbecue rub, and pecan chocolate bark from Austin.",
    items: [
      "Chili-Infused Texas Hot Honey",
      "Franklin-Style Smoked Chili BBQ Rub",
      "Whole-Bean Cold Brew Coffee",
      "Pecan Praline Dark Chocolate Bark",
      "Leather & Cedar Soy Tin Candle"
    ]
  },
  boston: {
    description: "Pure maple candies, cranberry-walnut trail mix, and bold breakfast tea from Boston.",
    items: [
      "Cape Cod Cranberry & Walnut Trail Mix",
      "Nostalgic Molasses Candy Baked Beans",
      "Pure New England Maple Sugar Drops",
      "English Breakfast Black Tea Tin",
      "Braided Cotton Sailor Knot Bracelet"
    ]
  },
  detroit: {
    description: "Michigan dark cherry preserves, rich fudge, and spiced ginger syrup from Detroit.",
    items: [
      "Michigan Dark Cherry Preserves",
      "Hand-Cut Dark Chocolate Fudge Slice",
      "Lightly Salted Roasted Cashews",
      "Small-Batch Spiced Ginger Ale Syrup",
      "Heavy-Duty Metal Nut & Bolt Keychain"
    ]
  },
  portland: {
    description: "Marionberry jam, roasted Oregon hazelnuts, and rose-petal black tea from Portland.",
    items: [
      "Rose Petal Infused Loose-Leaf Black Tea",
      "Oregon Marionberry Preserves",
      "Crunchy Roasted Hazelnut Brittle",
      "Single-Origin 70% Dark Chocolate Bar",
      "Apothecary Rosewater Facial Mist"
    ]
  }
};

let lastFocusedElement = null;

/**
 * Opens the preview modal and populates it with the selected city box data.
 */
function openPreviewModal(boxKey, title, price, imgSrc) {
  const modal = document.getElementById("boxPreviewModal");
  if (!modal) {
    console.warn("Box preview modal (#boxPreviewModal) not found in HTML.");
    return;
  }

  lastFocusedElement = document.activeElement;

  const normalizedKey = (boxKey || "").toLowerCase().trim();
  const data = BOX_PREVIEWS[normalizedKey] || {
    description: "A curated box of small-batch snacks, regional pantry staples, and local keepsakes.",
    items: [
      "Small-Batch Regional Snack",
      "Local Coffee or Tea Blend",
      "Artisan Pantry Staple",
      "City Keepsake & Postcard"
    ]
  };

  const titleEl = document.getElementById("previewTitle");
  const priceEl = document.getElementById("previewPrice");
  const descEl = document.getElementById("previewDesc");
  const imgEl = document.getElementById("previewImg");
  const listEl = document.getElementById("previewItems");
  const fullLinkEl = document.getElementById("previewFullLink");

  if (titleEl) titleEl.textContent = title;
  if (priceEl) priceEl.textContent = price;
  if (descEl) descEl.textContent = data.description;

  if (imgEl) {
    imgEl.src = imgSrc;
    imgEl.alt = `${title} contents preview`;
  }

  if (listEl) {
    listEl.innerHTML = "";
    data.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      listEl.appendChild(li);
    });
  }

  if (fullLinkEl) {
    fullLinkEl.href = `box-detail.html?box=${encodeURIComponent(normalizedKey)}`;
  }

  modal.hidden = false;
  document.body.style.overflow = "hidden";

  const closeBtn = modal.querySelector(".preview-close-btn");
  if (closeBtn) closeBtn.focus();
}

/**
 * Closes the preview modal and restores keyboard focus to the trigger button.
 */
function closePreviewModal() {
  const modal = document.getElementById("boxPreviewModal");
  if (!modal) return;

  modal.hidden = true;
  document.body.style.overflow = "";

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

/**
 * Helper to extract the ?box= parameter safely from any link href.
 */
function extractBoxKey(href) {
  if (!href) return "";
  try {
    const url = new URL(href, window.location.origin);
    return url.searchParams.get("box") || "";
  } catch (e) {
    const match = href.match(/[?&]box=([^&]+)/);
    return match ? decodeURIComponent(match[1]) : "";
  }
}

/**
 * Initializes preview buttons on ALL Featured Boxes and Shop Grid cards.
 */
function initBoxPreviews() {
  // 1. Inject "Preview Box" button into every card in #productGrid
  const shopCards = document.querySelectorAll(".product-card-item");
  shopCards.forEach((card) => {
    if (card.querySelector(".preview-trigger-btn")) return; // Prevent duplicates

    const link = card.querySelector("a[href*='box-detail.html']") || card.querySelector("a");
    const img = card.querySelector("img");
    const priceEl = card.querySelector(".product-price");
    const infoContainer = card.querySelector(".product-info") || card.querySelector(".product-item") || card;

    if (link) {
      const boxKey = extractBoxKey(link.getAttribute("href"));
      const title = card.dataset.name || link.textContent.trim() || "City Box";
      const price = priceEl ? priceEl.textContent.trim() : (card.dataset.price ? `$${card.dataset.price}` : "");
      const imgSrc = img ? img.getAttribute("src") : "";

      const previewBtn = document.createElement("button");
      previewBtn.type = "button";
      previewBtn.className = "preview-trigger-btn";
      previewBtn.textContent = "Preview Box";
      previewBtn.setAttribute("aria-label", `Preview ${title}`);
      previewBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openPreviewModal(boxKey, title, price, imgSrc);
      });

      infoContainer.appendChild(previewBtn);
    }
  });

  // 2. Inject "Preview Box" button into every card in .featured-boxes
  const featuredCards = document.querySelectorAll(".featured-boxes .card, .featured-boxes-section .card");
  featuredCards.forEach((card) => {
    if (card.querySelector(".preview-trigger-btn")) return; // Prevent duplicates

    const link = card.querySelector("a[href*='box-detail.html']") || card.querySelector("a");
    const img = card.querySelector("img");
    const titleEl = card.querySelector("h3, h4");

    if (link) {
      const boxKey = extractBoxKey(link.getAttribute("href"));
      const title = titleEl ? titleEl.textContent.trim() : "Featured Box";

      // Match price from the shop grid if present
      const matchingShopCard = document
        .querySelector(`.product-card-item a[href*="box=${boxKey}"]`)
        ?.closest(".product-card-item");
      const price = matchingShopCard && matchingShopCard.querySelector(".product-price")
        ? matchingShopCard.querySelector(".product-price").textContent.trim()
        : "$49.99";
      const imgSrc = img ? img.getAttribute("src") : "";

      const previewBtn = document.createElement("button");
      previewBtn.type = "button";
      previewBtn.className = "preview-trigger-btn";
      previewBtn.textContent = "Preview Box";
      previewBtn.setAttribute("aria-label", `Preview ${title}`);
      previewBtn.addEventListener("click", (e) => {
        e.preventDefault();
        openPreviewModal(boxKey, title, price, imgSrc);
      });

      card.appendChild(previewBtn);
    }
  });
}

// Run initialization as soon as DOM is ready (works whether script is in <head> or <body>)
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initBoxPreviews);
} else {
  initBoxPreviews();
}

// Close modal on Escape key & trap Tab focus inside modal
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
    if (focusable.length === 0) return;

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
