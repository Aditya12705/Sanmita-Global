const products = [
    { id: 1, name: "Cashew W320", category: "Nuts", price: 1125, originalPrice: 1400, image: "assets/cashew-bowl.jpg", desc: "Premium grade whole white cashews (W320 count) with supreme crunch and creamy texture." },
    { id: 2, name: "Cashew W240", category: "Nuts", price: 1175, originalPrice: 1470, image: "assets/nuts.jpg", desc: "Larger size gourmet cashews (W240 count), rich buttery flavor, perfect for gifting." },
    { id: 3, name: "Cashew W180", category: "Nuts", price: 1325, originalPrice: 1650, image: "assets/cashew-ornate.jpg", desc: "Jumbo whole cashews (W180 count), extra large kernels, premium quality." },
    { id: 4, name: "Cashew Broken (WJH)", category: "Nuts", price: 1200, originalPrice: 1500, image: "assets/cashew-bowl.jpg", desc: "Broken cashew pieces (WJH grade), ideal for cooking, baking, and sweets." },
    { id: 5, name: "California Almonds", category: "Nuts", price: 1150, originalPrice: 1440, image: "assets/almonds.jpg", desc: "Crunchy, vitamin-E rich premium raw almonds — ideal for daily nutrition." },
    { id: 6, name: "Raisins Round", category: "Nuts", price: 550, originalPrice: 690, image: "assets/raisins.jpg", desc: "Sweet, plump round raisins — perfect for snacking and desserts." },
    { id: 7, name: "Raisins Long", category: "Nuts", price: 570, originalPrice: 710, image: "assets/raisins.jpg", desc: "Premium long raisins, naturally sweet, great for baking and cooking." },
    { id: 8, name: "Chia Seeds", category: "Seeds", price: 375, originalPrice: 470, image: "assets/seeds.jpg", desc: "High fiber superfood seeds for smoothies, puddings, and baking." },
    { id: 9, name: "Flax Seeds", category: "Seeds", price: 175, originalPrice: 220, image: "assets/flax.jpg", desc: "Rich in Omega-3 fatty acids and lignans — roasted for nutty flavor." },
    { id: 10, name: "Sunflower Seeds", category: "Seeds", price: 300, originalPrice: 375, image: "assets/sunflower.jpg", desc: "Dehulled sunflower kernels — great for snacking, salads, and breads." },
    { id: 11, name: "Pumpkin Seeds", category: "Seeds", price: 835, originalPrice: 1040, image: "assets/pumpkin.jpg", desc: "Roasted pepitas packed with magnesium, zinc, and antioxidants." },
    { id: 12, name: "Hemp Seeds", category: "Seeds", price: 950, originalPrice: 1190, image: "assets/hemp.jpg", desc: "Complete protein superfood, rich in Omega-3 and Omega-6." },
    { id: 13, name: "Watermelon Seeds", category: "Seeds", price: 955, originalPrice: 1195, image: "assets/watermelon-seeds.jpg", desc: "Roasted watermelon seeds, crunchy snack rich in protein and minerals." },
    { id: 14, name: "Cumin Seeds (Jeera)", category: "Seasoning", price: 400, originalPrice: 500, image: "assets/cumin.jpg", desc: "Aromatic whole cumin seeds with robust earthy flavor — essential for tadka." },
    { id: 15, name: "Fennel Seeds (Saunf)", category: "Seasoning", price: 300, originalPrice: 375, image: "assets/fennel.jpg", desc: "Sweet, refreshing mouth freshener and digestive aid — premium grade." },
    { id: 16, name: "Sesame Seeds (Til)", category: "Seasoning", price: 265, originalPrice: 330, image: "assets/sesame.jpg", desc: "Clean white sesame seeds for baking, tahini, and traditional sweets." },
    { id: 17, name: "Fenugreek Seeds (Methi)", category: "Seasoning", price: 160, originalPrice: 200, image: "assets/fennel.jpg", desc: "Bitter-aromatic seeds for curries, pickles, and health remedies." },
    { id: 18, name: "Cloves Red (Lalpari)", category: "Spices", price: 1375, originalPrice: 1720, image: "assets/cloves.jpg", desc: "Premium red Lalpari cloves, strong aromatic, high oil content." },
    { id: 19, name: "Cloves Black", category: "Spices", price: 1225, originalPrice: 1530, image: "assets/cloves.jpg", desc: "Black cloves with intense flavor, ideal for spice blends and biryanis." },
    { id: 20, name: "Green Cardamom 6-7mm", category: "Spices", price: 3250, originalPrice: 4060, image: "assets/cardamom.jpg", desc: "Small green cardamom pods, intense aroma for sweets and chai." },
    { id: 21, name: "Green Cardamom 7-8mm", category: "Spices", price: 4560, originalPrice: 5700, image: "assets/cardamom.jpg", desc: "Bold green cardamom pods (7-8mm) with rich, complex aroma." },
    { id: 22, name: "Green Cardamom 8mm", category: "Spices", price: 5015, originalPrice: 6270, image: "assets/cardamom.jpg", desc: "Extra bold green cardamom (8mm), premium grade for gourmet use." },
    { id: 23, name: "Cinnamon Sticks (Roll)", category: "Spices", price: 565, originalPrice: 705, image: "assets/spices.jpg", desc: "Cassia cinnamon rolls, sweet woody flavor for curries and desserts." },
    { id: 24, name: "Ceylon Cinnamon", category: "Spices", price: 320, originalPrice: 400, image: "assets/spices.jpg", desc: "True Ceylon cinnamon quills — sweet, delicate fragrance, low coumarin." },
    { id: 25, name: "Black Pepper Whole", category: "Spices", price: 975, originalPrice: 1220, image: "assets/cloves.jpg", desc: "Bold black peppercorns with sharp spicy bite — Tellicherry grade." },
    { id: 26, name: "Star Anise Golden", category: "Spices", price: 640, originalPrice: 800, image: "assets/spices.jpg", desc: "Golden star anise, licorice flavor for biryanis and spice blends." },
    { id: 27, name: "Star Anise Black", category: "Spices", price: 700, originalPrice: 875, image: "assets/spices.jpg", desc: "Black star anise, deeper flavor for slow-cooked dishes." },
    { id: 28, name: "Javitri (Mace)", category: "Spices", price: 3315, originalPrice: 4145, image: "assets/spices.jpg", desc: "Premium mace (nutmeg covering), delicate warm flavor for rich dishes." },
    { id: 29, name: "Jaifal (Nutmeg)", category: "Spices", price: 1125, originalPrice: 1405, image: "assets/spices.jpg", desc: "Whole nutmeg, warm sweet spice for baking and savory dishes." },
    { id: 30, name: "Trail Mix", category: "Spices", price: 860, originalPrice: 1075, image: "assets/mixed-seeds.jpg", desc: "Healthy mix of nuts, seeds, and dried fruits — perfect snack." }
];

let cart = [];
let lastFocused = null;
let toastTimer = null;
let supabaseReady = false;
let mobileShowAll = false;
let mobilePreviewItems = [];
let isMobileView = false;

const formatINR = (value) => "₹" + Number(value).toLocaleString("en-IN");

async function waitForSupabase() {
    while (!supabaseReady) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }
}

async function saveInquiry(data) {
    try {
        await waitForSupabase();
        const { error } = await window.supabaseClient.from('inquiries').insert([{
            name: data.name,
            phone: data.phone,
            email: data.email,
            interest: data.interest,
            message: data.message,
            created_at: new Date().toISOString()
        }]);
        if (error) throw error;
        return true;
    } catch (err) {
        console.error('Error saving inquiry:', err);
        return false;
    }
}

async function saveNewsletter(email) {
    try {
        await waitForSupabase();
        const { error } = await window.supabaseClient.from('newsletter').insert([{
            email: email,
            created_at: new Date().toISOString()
        }]);
        if (error) throw error;
        return true;
    } catch (err) {
        console.error('Error saving newsletter:', err);
        return false;
    }
}

async function saveCart(cartData) {
    try {
        await waitForSupabase();
        const { error } = await window.supabaseClient.from('cart_items').upsert([{
            id: 'session_cart',
            items: cartData,
            updated_at: new Date().toISOString()
        }], { onConflict: 'id' });
        if (error) throw error;
        return true;
    } catch (err) {
        console.error('Error saving cart:', err);
        return false;
    }
}

async function loadCart() {
    try {
        await waitForSupabase();
        const { data, error } = await window.supabaseClient.from('cart_items').select('items').eq('id', 'session_cart').single();
        if (error && error.code !== 'PGRST116') {
            console.warn('Cart load warning:', error.message);
            return [];
        }
        return data?.items || [];
    } catch (err) {
        console.warn('Cart load failed, starting empty:', err.message);
        return [];
    }
}

function getRandomItems(arr, count) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function renderProducts(filter = "All") {
    const grid = document.getElementById("product-grid");
    const count = document.getElementById("product-count");
    const filtered = filter === "All" ? products : products.filter((product) => product.category === filter);
    const labels = {
        All: "pantry staples",
        Nuts: "nut products",
        Seeds: "seed products",
        Spices: "spice products",
        Seasoning: "seasoning products"
    };
    const positions = ["50% 42%", "50% 55%", "42% 50%", "58% 46%", "50% 62%"];

    isMobileView = window.innerWidth < 700;
    const previewCount = isMobileView ? 4 : 8;
    const showPreview = filter === "All" && !mobileShowAll;

    let displayItems = filtered;
    if (showPreview) {
        if (mobilePreviewItems.length === 0) {
            mobilePreviewItems = getRandomItems(filtered, previewCount);
        }
        displayItems = mobilePreviewItems;
    } else {
        mobilePreviewItems = [];
    }

    if (count) {
        if (showPreview) {
            count.textContent = `Showing ${displayItems.length} of ${filtered.length} ${labels[filter] || "products"} ${isMobileView ? "— tap a filter to see all" : "— click \"View all\" to see all"}`;
        } else {
            count.textContent = `Showing ${filtered.length} of ${products.length} ${labels[filter] || "products"}`;
        }
    }

    if (!grid) {
        return;
    }

    grid.innerHTML = displayItems.map((product, index) => {
        const position = positions[(product.id - 1) % positions.length];
        const number = String(product.id).padStart(2, "0");
        const saving = product.originalPrice - product.price;

        return `
            <article class="product-card" style="--delay: ${index * 35}ms">
                <div class="product-media">
                    <img src="${product.image}" alt="${product.name}" loading="eager" decoding="async" style="object-position: ${position}">
                    <span class="product-cat">${product.category}</span>
                    <span class="product-no">${number}</span>
                    <button type="button" class="quick-add" onclick="addToCart(${product.id})" aria-label="Add ${product.name} to basket">
                        <svg class="icon" aria-hidden="true"><use href="#i-plus"></use></svg>
                    </button>
                </div>
                <div class="product-body">
                    <div class="product-topline">
                        <span>1 kg pack</span>
                        <span class="product-save">Save ${formatINR(saving)}</span>
                    </div>
                    <h3>${product.name}</h3>
                    <p class="product-desc">${product.desc}</p>
                    <div class="product-bottom">
                        <div class="price">
                            <strong>${formatINR(product.price)}</strong>
                            <span>/ kg</span>
                            <s>${formatINR(product.originalPrice)}</s>
                        </div>
                        <button type="button" class="add-btn" onclick="addToCart(${product.id})">
                            Add
                            <svg class="icon" aria-hidden="true"><use href="#i-plus"></use></svg>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");

    if (showPreview) {
        const showAllBtn = document.createElement("button");
        showAllBtn.type = "button";
        showAllBtn.className = "show-all-btn";
        showAllBtn.innerHTML = `
            <span>View all ${filtered.length} pantry staples</span>
            <svg class="icon" aria-hidden="true"><use href="#i-arrow-up"></use></svg>
        `;
        showAllBtn.onclick = () => {
            mobileShowAll = true;
            renderProducts("All");
        };
        grid.appendChild(showAllBtn);
    }
}

function filterCategory(category) {
    document.querySelectorAll(".filter-pill").forEach((button) => {
        const active = button.dataset.category === category;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", active ? "true" : "false");
    });
    if (isMobileView) {
        mobileShowAll = true;
    }
    renderProducts(category);
}

function addToCart(id) {
    const product = products.find((item) => item.id === id);
    if (!product) {
        return;
    }
    const existing = cart.find((item) => item.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCartUI();
    saveCart(cart);
    const badge = document.getElementById("cart-badge");
    if (badge) {
        badge.classList.remove("pop");
        void badge.offsetWidth;
        badge.classList.add("pop");
    }
    showToast(`${product.name} added to your basket.`);
}

function changeQty(id, delta) {
    const item = cart.find((entry) => entry.id === id);
    if (!item) {
        return;
    }
    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter((entry) => entry.id !== id);
    }
    updateCartUI();
    saveCart(cart);
}

function removeFromCart(id) {
    cart = cart.filter((item) => item.id !== id);
    updateCartUI();
    saveCart(cart);
}

function updateCartUI() {
    const badge = document.getElementById("cart-badge");
    const items = document.getElementById("cart-items");
    const total = document.getElementById("cart-total");
    const floatBtn = document.getElementById("cart-float");
    const floatCount = document.getElementById("cart-float-count");

    if (!items || !total) {
        return;
    }

    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    if (badge) {
        badge.textContent = count;
    }
    if (floatCount) {
        floatCount.textContent = count;
    }
    if (floatBtn) {
        floatBtn.classList.toggle("is-visible", count > 0);
    }

    if (!cart.length) {
        items.innerHTML = `
            <div class="cart-empty">
                <svg class="icon" aria-hidden="true"><use href="#i-bag"></use></svg>
                <h3>Your basket is empty</h3>
                <p>Start with a collection or browse the full pantry.</p>
                <a href="#products" class="btn btn--ink" onclick="toggleCart(false)">Browse the pantry</a>
            </div>
        `;
        total.textContent = formatINR(0);
        return;
    }

    items.innerHTML = cart.map((item) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div class="cart-item-body">
                <div class="cart-item-top">
                    <h3>${item.name}</h3>
                    <button type="button" class="cart-remove" onclick="removeFromCart(${item.id})" aria-label="Remove ${item.name}">
                        <svg class="icon" aria-hidden="true"><use href="#i-trash"></use></svg>
                    </button>
                </div>
                <div class="cart-item-bottom">
                    <div class="qty">
                        <button type="button" onclick="changeQty(${item.id}, -1)" aria-label="Decrease ${item.name} quantity">
                            <svg class="icon" aria-hidden="true"><use href="#i-minus"></use></svg>
                        </button>
                        <span>${item.qty}</span>
                        <button type="button" onclick="changeQty(${item.id}, 1)" aria-label="Increase ${item.name} quantity">
                            <svg class="icon" aria-hidden="true"><use href="#i-plus"></use></svg>
                        </button>
                    </div>
                    <div>
                        <div class="cart-item-price">${formatINR(item.price)} × ${item.qty} kg</div>
                        <strong>${formatINR(item.price * item.qty)}</strong>
                    </div>
                </div>
            </div>
        </div>
    `).join("");

    total.textContent = formatINR(cart.reduce((sum, item) => sum + item.price * item.qty, 0));
}

function toggleCart(force) {
    const drawer = document.getElementById("cart-drawer");
    if (!drawer) {
        return;
    }
    const isOpen = drawer.classList.contains("is-open");
    const shouldOpen = typeof force === "boolean" ? force : !isOpen;

    if (shouldOpen && !isOpen) {
        lastFocused = document.activeElement;
    }

    drawer.classList.toggle("is-open", shouldOpen);
    drawer.setAttribute("aria-hidden", shouldOpen ? "false" : "true");
    document.body.classList.toggle("no-scroll", shouldOpen);

    const floatBtn = document.getElementById("cart-float");
    if (floatBtn) {
        floatBtn.classList.toggle("is-visible", !shouldOpen && cart.length > 0);
    }

    if (shouldOpen) {
        window.setTimeout(() => document.getElementById("cart-close")?.focus(), 80);
    } else if (lastFocused && typeof lastFocused.focus === "function") {
        lastFocused.focus();
    }
}

async function checkoutCart() {
    if (!cart.length) {
        showToast("Your basket is empty. Add something first.");
        return;
    }
    try {
        await waitForSupabase();
        const { error } = await window.supabaseClient.from('checkout_requests').insert([{
            items: cart,
            total: cart.reduce((sum, item) => sum + item.price * item.qty, 0),
            created_at: new Date().toISOString()
        }]);
        if (error) throw error;
        showToast("Checkout request received. We will call you to confirm.");
        cart = [];
        updateCartUI();
        saveCart(cart);
        toggleCart(false);
    } catch (err) {
        console.error('Error saving checkout:', err);
        showToast("Checkout request received. We will call you to confirm.");
        cart = [];
        updateCartUI();
        saveCart(cart);
        toggleCart(false);
    }
}

async function handleEnquiry(event) {
    event.preventDefault();
    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending...';

    const data = {
        name: form.querySelector("[name='name']")?.value.trim(),
        phone: form.querySelector("[name='phone']")?.value.trim(),
        email: form.querySelector("[name='email']")?.value.trim(),
        interest: form.querySelector("[name='interest']")?.value,
        message: form.querySelector("[name='message']")?.value.trim()
    };

    try {
        const res = await fetch('/api/enquiry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        if (res.ok) {
            showToast(`Thank you${data.name ? ", " + data.name : ""}. We will be in touch within one working day.`);
            form.reset();
        } else {
            const err = await res.json();
            showToast(err.error || 'Failed to send. Please try again.');
        }
    } catch (err) {
        console.error('Enquiry error:', err);
        showToast('Failed to send. Please try again.');
    }

    submitBtn.disabled = false;
    submitBtn.innerHTML = originalText;
}

async function handleFooterNewsletter(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.querySelector("input[type='email']")?.value.trim();
    if (!email) {
        return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalHTML = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<svg class="icon" aria-hidden="true"><use href="#i-check"></use></svg>';

    const saved = await saveNewsletter(email);

    if (saved) {
        showToast("You are on the pantry list. We will keep it short.");
    } else {
        showToast("Subscribed! Check your inbox soon.");
    }

    form.reset();
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalHTML;
}

function toggleMenu(force) {
    const menu = document.getElementById("mobile-menu");
    const button = document.getElementById("menu-toggle");
    const label = document.getElementById("menu-label");
    if (!menu || !button) {
        return;
    }
    const isOpen = menu.classList.contains("is-open");
    const shouldOpen = typeof force === "boolean" ? force : !isOpen;
    menu.classList.toggle("is-open", shouldOpen);
    button.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
    if (label) {
        label.textContent = shouldOpen ? "Close" : "Menu";
    }
}

function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) {
        return;
    }
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
        return;
    }
    const cartDrawer = document.getElementById("cart-drawer");
    if (cartDrawer?.classList.contains("is-open")) {
        toggleCart(false);
        return;
    }
    if (document.getElementById("mobile-menu")?.classList.contains("is-open")) {
        toggleMenu(false);
    }
});

document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false));
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 920) {
        toggleMenu(false);
    }
    if (window.innerWidth >= 700 && mobileShowAll) {
        mobileShowAll = false;
        mobilePreviewItems = [];
        const activeFilter = document.querySelector(".filter-pill.is-active")?.dataset.category || "All";
        renderProducts(activeFilter);
    }
});

window.addEventListener("scroll", () => {
    document.getElementById("site-header")?.classList.toggle("is-scrolled", window.scrollY > 16);
}, { passive: true });

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });
    revealItems.forEach((item) => revealObserver.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.getElementById("year").textContent = new Date().getFullYear();

async function init() {
    if (typeof window.supabaseClient !== 'undefined' && window.supabaseClient) {
        supabaseReady = true;
    } else {
        let attempts = 0;
        while (!supabaseReady && attempts < 50) {
            await new Promise(resolve => setTimeout(resolve, 100));
            if (typeof window.supabaseClient !== 'undefined' && window.supabaseClient) {
                supabaseReady = true;
                break;
            }
            attempts++;
        }
    }

    const savedCart = await loadCart();
    if (savedCart && savedCart.length) {
        cart = savedCart;
    }

    renderProducts("All");
    updateCartUI();

    const enquiryForm = document.getElementById("enquiry-form-el");
    if (enquiryForm) {
        enquiryForm.addEventListener("submit", handleEnquiry);
    }
}

init();