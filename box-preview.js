/* ==========================================================================
   Marlowby — Box Quick-View Preview Modal (box-preview.js)
   Automatically injects accessible "Preview Box" buttons into Featured &
   Shop cards and populates the quick-view modal dialog.
   ========================================================================== */

const BOX_PREVIEWS = {
  nyc: {
    description: "Experience the Big Apple with iconic artisan treats, roasted coffee, and locally crafted keepsakes.",
    items: [
      "Brooklyn Small-Batch Coffee",
      "NY Black & White Cookie Tin",
      "SoHo Artisanal Hot Sauce",
      "Subway Token Enamel Pin"
    ]
  },
  la: {
    description: "Soak up Southern California vibes with sun-drenched snacks, citrus infusions, and Hollywood flair.",
    items: [
      "Venice Beach Sea Salt Caramels",
      "California Blood Orange Honey",
      "Silver Lake Matcha Blend",
      "Custom Sunset Postcard Set"
    ]
  },
  chicago: {
    description: "A taste of the Windy City featuring bold flavors, Midwest classics, and architectural charm.",
    items: [
      "Chicago-Style Gourmet Popcorn",
      "Wicker Park Dark Roast",
      "Midwest Spiced Mustard",
      "Lakefront Skyline Coaster"
    ]
  },
  houston: {
    description: "Big Texas hospitality packed with smoky BBQ rubs, pecan sweets, and Space City collectibles.",
    items: [
      "Texas Pecan Pralines",
      "H-Town Hickory BBQ Rub",
      "Gulf Coast Jalapeño Jelly",
      "Space City Sticker Pack"
    ]
  },
  philadelphia: {
    description: "Brotherly love in a box—historic sweets, soft pretzel seasonings, and local roastery favorites.",
    items: [
      "Philly Soft Pretzel Mustard",
      "Old City Cinnamon Pecans",
      "Liberty Bell Dark Chocolate",
      "Rittenhouse Herbal Tea"
    ]
  },
  san_francisco: {
    description: "Fog-kissed artisan goods from the Bay Area, celebrating sourdough culture and Mission District flavors.",
    items: [
      "Ghirardelli-Style Sea Salt Bark",
      "Mission District Salsa Verde",
      "Bay Area Sourdough Crackers",
      "Golden Gate Art Print"
    ]
  },
  seattle: {
    description: "Cozy Pacific Northwest favorites straight from Pike Place and Emerald City makers.",
    items: [
      "Pike Place Espresso Beans",
      "Wild Blackberry Jam",
      "Puget Sound Smoked Salt",
      "Rainy Day Cedar Candle"
    ]
  },
  denver: {
    description: "Mile High adventure packed with Rocky Mountain honey, trail snacks, and alpine botanicals.",
    items: [
      "Rocky Mountain Wildflower Honey",
      "Palisade Peach Preserves",
      "High-Altitude Trail Mix",
      "Colorado Pine Soap Bar"
    ]
  },
  nashville: {
    description: "Music City soul featuring fiery hot chicken spices, sweet biscuits, and country charm.",
    items: [
      "Nashville Hot Chicken Spice Rub",
      "Tennessee Honey Biscuit Mix",
      "Music Row Peppermint Bark",
      "Guitar Pick Keychain"
    ]
  },
  dc: {
    description: "Capital city classics celebrating cherry blossom season and historic local makers.",
    items: [
      "Cherry Blossom Green Tea",
      "Georgetown Dark Truffles",
      "Capitol Spice Blend",
      "Monument Sketch Notebook"
    ]
  },
  las_vegas: {
    description: "High-roller indulgence with desert-inspired sweets, neon flair, and gourmet snacks.",
    items: [
      "Mojave Desert Prickly Pear Candy",
      "Fremont Street Toffee",
      "Gold-Dusted Chocolate Almonds",
      "Vintage Vegas Playing Cards"
    ]
  },
  new_orleans: {
    description: "Let the good times roll with French Quarter café au lait, Cajun spices, and praline treats.",
    items: [
      "French Quarter Chicory Coffee",
      "Bourbon Street Cajun Seasoning",
      "Creole Pecan Pralines",
      "Jazz Brass Bookmark"
    ]
  },
  atlanta: {
    description: "Southern comfort from the Peach State with sweet preserves, roasted pecans, and local tea.",
    items: [
      "Georgia Peach Jam",
      "Sweet Tea Syrup",
      "Roasted Cinnamon Pecans",
      "Atlanta Skyline Magnet"
    ]
  },
  miami: {
    description: "Tropical Magic City flavors featuring guava pastries, Cuban espresso, and ocean-breeze scents.",
    items: [
      "Little Havana Espresso Roast",
      "Tropical Guava & Mango Chews",
      "Key Lime Shortbread Cookies",
      "Art Deco Coaster"
    ]
  },
  salt_lake_city: {
    description: "Wasatch Front treasures highlighting Utah's famous fry sauce, honey, and mountain treats.",
    items: [
      "Utah Beehive Clover Honey",
      "Wasatch Gourmet Fry Sauce",
      "Salt Flats Sea Salt Caramels",
      "Red Rock Postcard"
    ]
  },
  boise: {
    description: "City of Trees favorites featuring Idaho huckleberries, spud-inspired treats, and Treasure Valley goods.",
    items: [
      "Wild Idaho Huckleberry Jam",
      "Boise River Dark Chocolate",
      "Treasure Valley Herb Rub",
      "Foothills Trail Sticker"
    ]
  },
  burley: {
    description: "Hometown pride from the Magic Valley—celebrating Snake River heritage and Idaho's finest local goods.",
    items: [
      "Magic Valley Honey Sticks",
      "Idaho Potato Candy Bar",
      "Snake River Roasted Almonds",
      "Burley Heritage Patch"
    ]
  },
  honolulu: {
    description: "Island aloha delivered to your door with Kona coffee, macadamia nuts, and tropical fruit.",
    items: [
      "100% Kona Coffee Blend",
      "Hawaiian Macadamia Brittle",
      "Lilikoi (Passionfruit) Butter",
      "Aloha Hibiscus Lei Pin"
    ]
  }
};

let lastFocusedElement = null;

/**
 * Opens the preview modal and populates it with the selected city box data.
 */
function openPreviewModal(boxKey, title, price, imgSrc) {
  const modal = document.getElementById("boxPreviewModal");
  if (!modal) return;

  lastFocusedElement = document.activeElement;

  const data = BOX_PREVIEWS[boxKey] || {
    description: "A curated collection of authentic local goods, snacks, and keepsakes.",
    items: [
      "Artisan Local Snack",
      "Regional Beverage Blend",
      "Handcrafted Keepsake",
      "City Guide Card"
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
    imgEl.alt = `${title} preview`;
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
    fullLinkEl.href = `box-detail.html?box=${encodeURIComponent(boxKey)}`;
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
 * Initializes preview buttons on Shop Grid and Featured Boxes cards.
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Inject "Preview Box" buttons into the main Shop Grid cards
  document.querySelectorAll(".product-card-item").forEach((card) => {
    const link = card.querySelector("a[href*='box-detail.html']");
    const img = card.querySelector("img");
    const priceEl = card.querySelector(".product-price");
    const infoContainer = card.querySelector(".product-info");

    if (link && infoContainer) {
      const urlParams = new URLSearchParams(link.search);
      const boxKey = urlParams.get("box");
      const title = card.dataset.name || link.textContent.trim();
      const price = priceEl ? priceEl.textContent.trim() : "";
      const imgSrc = img ? img.src : "";

      const previewBtn = document.createElement("button");
      previewBtn.type = "button";
      previewBtn.className = "preview-trigger-btn";
      previewBtn.textContent = "Preview Box";
      previewBtn.setAttribute("aria-label", `Preview ${title}`);
      previewBtn.addEventListener("click", () => {
        openPreviewModal(boxKey, title, price, imgSrc);
      });

      infoContainer.appendChild(previewBtn);
    }
  });

  // 2. Inject "Quick Preview" buttons into the Featured Boxes section cards
  document.querySelectorAll(".featured-boxes .card").forEach((card) => {
    const link = card.querySelector("a[href*='box-detail.html']");
    const img = card.querySelector("img");
    const titleEl = card.querySelector("h3");

    if (link) {
      const urlParams = new URLSearchParams(link.search);
      const boxKey = urlParams.get("box");
      const title = titleEl ? titleEl.textContent.trim() : "Featured Box";

      // Pull the matching price from the shop grid if available
      const matchingShopCard = document
        .querySelector(`.product-card-item a[href*="box=${boxKey}"]`)
        ?.closest(".product-card-item");
      const price = matchingShopCard
        ? matchingShopCard.querySelector(".product-price").textContent.trim()
        : "$49.99";
      const imgSrc = img ? img.src : "";

      const previewBtn = document.createElement("button");
      previewBtn.type = "button";
      previewBtn.className = "preview-trigger-btn";
      previewBtn.textContent = "Quick Preview";
      previewBtn.setAttribute("aria-label", `Quick preview ${title}`);
      previewBtn.addEventListener("click", () => {
        openPreviewModal(boxKey, title, price, imgSrc);
      });

      card.appendChild(previewBtn);
    }
  });

  // 3. Close modal when pressing the Escape key
  document.addEventListener("keydown", (event) => {
    const modal = document.getElementById("boxPreviewModal");
    if (event.key === "Escape" && modal && !modal.hidden) {
      closePreviewModal();
    }
  });

  // 4. Trap Tab focus inside the modal while open (WCAG accessibility)
  const modal = document.getElementById("boxPreviewModal");
  if (modal) {
    modal.addEventListener("keydown", (event) => {
      if (event.key !== "Tab" || modal.hidden) return;

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
    });
  }
});
