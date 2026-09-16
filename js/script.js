const PROMPTPAY_ID = "088983000020605";
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwOn18FEoUQskhb6hV5sLBQAk5KfsLyY8y6jkgBemhzCsaxjfY1NKPPmFL7vO-eUI0wZA/exec";

function getStore(key, def) { try { return localStorage.getItem(key) || def; } catch (e) { return def; } }
function setStore(key, val) { try { localStorage.setItem(key, val); } catch (e) { } }

const translations = {
    en: {
        nav_collection: "Collection", nav_story: "Our Story", nav_cart: "Cart",
        marquee_msg: "🚚 FREE SHIPPING ON ORDERS OVER 799 THB &nbsp; ✦ &nbsp; 🎊 GRAND OPENING PROMO &nbsp; ✦ &nbsp; 100% AUTHENTIC GUARANTEED",
        hero_sub: "LAMUN CURATED PARFUM",
        hero_title: "Find <br/> <span class='italic font-light text-white/80'>Your</span> <br/> Best PARFUM",
        hero_desc: "100% authentic perfumes in smaller, travel-friendly bottles. We find popular fragrances and offer unique translations, all conveniently packaged for easy portability at affordable prices :)",
        slide2_sub: "AUTHENTIC SELECTION", slide2_title: "Signature Scents", slide2_desc: "Discover your best fragrance today!!",
        slide3_sub: "TRAVEL SIZE DECANT", slide3_title: "100% Authentic", slide3_desc: "Conveniently packaged for easy portability at affordable prices.",
        btn_explore: "Explore Collection", col_title: "The Collection",
        col_desc: "Top Niche & Designer perfumes. 100% Authentic guaranteed. Freshly decanted for every order.",
        filter_all: "All", desc_niche: "Unique, artistic scents crafted with rare ingredients.", desc_designer: "Mass-appeal, easy-to-wear fragrances.",
        quote_text: `"Wanna smell like a luxurious? We gotchu!. You don't even need 1,000-Baht. The prices will make you say "Roetttt" 💅"`,
        review_title: "Whispers of Scents (Reviews)",
        faq_title: "FAQ",
        faq_q1: "Are the perfumes 100% authentic?",
        faq_a1: "Absolutely 100% guaranteed! I freshly decant directly from the original bottle for every single order with zero dilution. If you're unsure, I'm more than happy to record a video of the decanting process for you.",
        faq_q2: "How long does shipping take?",
        faq_a2: "Orders are decanted on the same day they are placed. Delivery typically takes 1-3 business days.",
        faq_q3: "Do you offer meetups?",
        faq_a3: "Yes! Free meetups are available at Maejo University (Chiang Mai). Just send us a DM on Instagram to arrange it.",
        footer_desc: "I believe many people, just like myself, aren't looking to drop thousands on a full bottle of perfume. That's why I'm here to carefully curate and share only the finest scents with you.",
        footer_support: "Support", link_shipping: "Shipping Policy", link_policy: "Authenticity Guarantee", footer_connect: "Connect",
        cart_title: "Your Cart", cart_empty: "Your cart is empty.", cart_total: "Subtotal", btn_checkout: "Check Out", btn_add: "Add to Cart",
        sort_recommend: "Recommended", sort_price_low: "Price: Low - High", sort_price_high: "Price: High - Low",
        chk_summary: "Order Summary", chk_subtotal: "Subtotal", chk_shipping: "Shipping", chk_total: "Total",
        chk_ship_title: "Shipping Details", chk_ship_desc: "Please enter your exact address",
        chk_fname: "First Name *", chk_lname: "Last Name *", chk_phone: "Phone Number *", chk_addr: "House No., Building, Street *",
        chk_subdist: "Sub-district *", chk_dist: "District *", chk_prov: "Province *", chk_zip: "Postal Code *",
        btn_continue: "Continue to Payment", btn_back: "Back", chk_scan: "Scan to Pay", chk_promptpay: "PromptPay Payment",
        chk_amount: "Total Amount", btn_paid: "I have paid",
        chk_slip: "Upload Transfer Slip *",
        chk_slip_btn: "Click to upload slip",
        free_meetup: "FREE (Meetup)",
        free_shipping: "FREE",
        err_slip: "Please upload your transfer slip before confirming.",
        err_empty: "Please fill in all required fields.", err_phone: "Invalid phone number (must be 9-10 digits).", err_zip: "Invalid postal code (must be 5 digits).",
        chk_note: "Additional Notes (Optional)",
        ph_fname: "e.g., Lamun", ph_lname: "e.g., Cur", ph_phone: "e.g., 08xxxxxxxx", ph_addr: "e.g., 123/45 Bldg, Sukhumvit Rd.",
        ph_subdist: "e.g., Khlong Toei", ph_dist: "e.g., Khlong Toei", ph_prov: "e.g., Bangkok", ph_zip: "e.g., 10110", ph_note: "e.g., Leave the parcel at the lobby...",
        err_prov_pickup: "Meetup is only available in Maejo / San Sai area. Please select Delivery.",
        method_shipping: "Delivery (35 THB / Free > 799)",
        method_pickup_in: "In-University (Free)",
        method_pickup_out: "Around University (Free)",
        chk_contact: "Phone Number / IG OR ETC. *",
        chk_note_meetup: "Meetup Location & Time *",
        nav_orders: "MY ORDERS",
        chk_slip_warn: "* We verify every transfer slip. Any forgery will be strictly prosecuted.",
        history_title: "MY ORDERS",
        history_note: "* Status will update to tracking number once shipped (1-2 days)",
    },
    th: {
        nav_collection: "คอลเลกชั่น", nav_story: "เกี่ยวกับเรา", nav_cart: "ตะกร้า",
        marquee_msg: "🚚 ซื้อครบ 799฿ ส่งฟรีทั่วประเทศ &nbsp; ✦ &nbsp; 🎊 โปรเปิดร้านลดราคาถึง 31 ส.ค. นี้ &nbsp; ✦ &nbsp; การันตีของแท้ 100% ไม่ผสมแน่นอน",
        hero_sub: "ลามุน คิวเรท พาร์ฟูม",
        hero_title: "ค้นหา <br/> <span class='italic font-light text-white/80'>กลิ่นที่</span> <br/> เหมาะกับคุณ",
        hero_desc: "ร้านแบ่งขายน้ำหอมแท้ 100% คัดสรรน้ำหอมตัวดัง ตัวเด็ด ตัวแปลกกกก ขวดเล็กพกพาง่าย เหมาะสำหรับพกทุกที่ ราคาเข้าถึงง่าย by นักศึกษาตัวเล็กๆคนนึง :)",
        slide2_sub: "คัดสรรแต่น้ำหอมแท้", slide2_title: "กลิ่นหอมเอกลักษณ์", slide2_desc: "ค้นหากลิ่นที่ใช่ได้แล้ววันนี้!!",
        slide3_sub: "ขนาดแบ่งขายพกพาง่าย", slide3_title: "การันตีของแท้ 100%", slide3_desc: "แพ็คเกจพกพาสะดวก พร้อมให้คุณพกความหอมไปได้ทุกที่ในราคาเข้าถึงง่าย",
        btn_explore: "เลือกชมคอลเลกชัน", col_title: "คอลเลกชั่นของมุนมุน",
        col_desc: "คัดสรรน้ำหอม Niche และ Designer ระดับท็อป การันตีของแท้ 100% กดสดใหม่จากขวดทุกออเดอร์",
        filter_all: "ทั้งหมด", desc_niche: "น้ำหอมจากแบรนด์เฉพาะทาง เน้นศิลปะการปรุงกลิ่นและวัตถุดิบหายาก", desc_designer: "น้ำหอมแบรนด์แฟชั่น กลิ่นหอมเข้าถึงง่าย เป็นที่นิยม",
        quote_text: `"อยากใช้น้ำหอมแบรนด์มาที่นี่ แบงค์เทาครึ่งใบก็ซื้อได้ ราคาแบบวอดส์ เริ่ดๆ 💅"`,
        review_title: "เสียง จุ๊ๆ จากคนตัวหอม",
        faq_title: "คำถามที่พบบ่อย (FAQ)",
        faq_q1: "น้ำหอมของแท้ 100% ไหม?", faq_a1: "แท้แน่นอนยืนยัน นอนยัน คว่ำยัน ผมกดแบ่งจากขวดแท้สดๆ ทุกออเดอร์ ไม่มีการผสม ใครไม่มั่นใจพร้อมอัดวีดีโอส่งให้ดูครับ",
        faq_q2: "จัดส่งกี่วันถึง?", faq_a2: "หลังมีคำสั่งซื้อเข้ามาจะแบ่งให้เลยภายในวัน และใช้เวลาจัดส่งประมาณ 1-3 วันทำการครับ",
        faq_q3: "สามารถนัดรับได้ที่ไหนบ้าง?", faq_a3: "สามารถนัดรับได้ที่ ม.แม่โจ้ (จ.เชียงใหม่) ฟรีค่าจัดส่งครับ ทักแชทไอจีได่เลยย",
        footer_desc: "ผมเชื่อว่ายังมีหลายๆคนที่ไม่ได้คิดจะซื้อน้ำหอมขวดละหลายพันถึงหมื่น เหมือนตัวผมเอง ผมเลยอยากจะเป็นตัวแทนคัดตัวดีๆมาให้ครับ",
        footer_support: "ช่วยเหลือ", link_shipping: "วิธีสั่งซื้อและจัดส่ง", link_policy: "นโยบายรับประกันของแท้", footer_connect: "ช่องทางติดต่อ",
        cart_title: "ตะกร้าของคุณ", cart_empty: "ตะกร้าของคุณยังว่างเปล่า", cart_total: "ยอดรวม", btn_checkout: "ชำระเงิน", btn_add: "ใส่ตะกร้า",
        sort_recommend: "ยอดนิยม", sort_price_low: "ราคา: ต่ำ-สูง", sort_price_high: "ราคา: สูง-ต่ำ",
        chk_summary: "สรุปคำสั่งซื้อ", chk_subtotal: "ยอดรวมสินค้า", chk_shipping: "ค่าจัดส่ง", chk_total: "ยอดชำระสุทธิ",
        chk_ship_title: "ข้อมูลการจัดส่ง", chk_ship_desc: "กรุณากรอกที่อยู่ให้ครบถ้วนและชัดเจน",
        chk_fname: "ชื่อจริง *", chk_lname: "นามสกุล *", chk_phone: "เบอร์โทรศัพท์ *", chk_addr: "บ้านเลขที่, อาคาร, ซอย, ถนน *",
        chk_subdist: "แขวง / ตำบล *", chk_dist: "เขต / อำเภอ *", chk_prov: "จังหวัด *", chk_zip: "รหัสไปรษณีย์ *",
        btn_continue: "ดำเนินการชำระเงิน", btn_back: "ย้อนกลับ", chk_scan: "สแกนเพื่อชำระเงิน", chk_promptpay: "ชำระเงินผ่านพร้อมเพย์",
        chk_amount: "ยอดชำระสุทธิ", btn_paid: "ฉันได้ชำระเงินแล้ว",
        chk_slip: "อัปโหลดสลิปชำระเงิน *",
        chk_slip_btn: "คลิกเพื่ออัปโหลดรูปภาพ",
        free_meetup: "ฟรี (นัดรับ)",
        free_shipping: "ส่งฟรี",
        err_slip: "กรุณาแนบรูปสลิปชำระเงินก่อนกดยืนยันครับ",
        err_empty: "กรุณากรอกข้อมูลให้ครบทุกช่องครับ", err_phone: "เบอร์โทรศัพท์ไม่ถูกต้อง (ต้องเป็นตัวเลข 9-10 หลัก)", err_zip: "รหัสไปรษณีย์ไม่ถูกต้อง (ต้องเป็นตัวเลข 5 หลัก)",
        chk_note: "หมายเหตุเพิ่มเติม (ถ้ามี)",
        ph_fname: "เช่น ละมุน", ph_lname: "เช่น เคอร์", ph_phone: "เช่น 0812345678", ph_addr: "เช่น 123/45 คอนโด A ซ.สุขุมวิท",
        ph_subdist: "เช่น คลองเตย", ph_dist: "เช่น คลองเตย", ph_prov: "เช่น กรุงเทพมหานคร", ph_zip: "เช่น 10110", ph_note: "เช่น ฝากพัสดุไว้ที่ป้อม รปภ. ...",
        err_prov_pickup: "การนัดรับรองรับเฉพาะโซน ม.แม่โจ้ / อ.สันทราย เท่านั้น กรุณาเปลี่ยนวิธีจัดส่งครับ",
        method_shipping: "จัดส่งพัสดุ (35฿ / ส่งฟรีครบ 799฿)",
        method_pickup_in: "นัดรับในมอ (ฟรี)",
        method_pickup_out: "ส่งรอบมอ (ฟรี)",
        chk_contact: "เบอร์โทรศัพท์ / ไอจี หรือ อื่นๆ*",
        chk_note_meetup: "สถานที่ตึกนัดรับ และ เวลา *",
        nav_orders: "คำสั่งซื้อของฉัน",
        chk_slip_warn: "*ทางร้านมีการตรวจสอบสลิปก่อนทุกครั้งหากพบการปลอมแปลงจะถูกดำเนินคดีตามกฎหมาย",
        history_title: "คำสั่งซื้อของฉัน",
        history_note: "*สถานะจะเปลี่ยนเป็นเลขพัสดุเมื่อจัดส่งสำเร็จ (ภายใน 1-2 วัน)",
        
    }
};

let currentLang = getStore('lamun_lang', 'en');

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) el.placeholder = translations[lang][key];
    });
    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) langToggleBtn.innerText = lang === 'en' ? 'TH' : 'EN';
    if (typeof renderProducts === 'function') renderProducts();
    if (typeof currentProduct !== 'undefined' && currentProduct && currentProduct.desc) {
        const descEl = document.getElementById('detail-desc');
        if (descEl) descEl.innerHTML = currentProduct.desc[lang].replace(/\n/g, '<br>');
        const addBtn = document.getElementById('detail-add-btn');
        if (addBtn) addBtn.innerText = translations[lang].btn_add;
    }
}

function toggleLang() { currentLang = currentLang === 'en' ? 'th' : 'en'; setStore('lamun_lang', currentLang); applyLanguage(currentLang); }

let isDarkMode = getStore('lamun_theme', 'light') === 'dark';
function applyTheme(dark) {
    const html = document.documentElement; const icon = document.querySelector('#theme-toggle i');
    if (dark) { html.classList.add('dark'); if (icon) { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); } }
    else { html.classList.remove('dark'); if (icon) { icon.classList.remove('fa-sun'); icon.classList.add('fa-moon'); } }
}
function toggleTheme() { isDarkMode = !isDarkMode; setStore('lamun_theme', isDarkMode ? 'dark' : 'light'); applyTheme(isDarkMode); }

let currentSlideIndex = 0; let slideInterval;
function showSlide(index) {
    const slides = document.querySelectorAll('.hero-slide'); const dots = document.querySelectorAll('.dot-btn');
    if (slides.length === 0) return;
    if (index >= slides.length) currentSlideIndex = 0; else if (index < 0) currentSlideIndex = slides.length - 1; else currentSlideIndex = index;
    slides.forEach((slide, i) => {
        if (i === currentSlideIndex) { slide.classList.remove('opacity-0', 'pointer-events-none', 'z-0'); slide.classList.add('opacity-100', 'pointer-events-auto', 'z-20'); }
        else { slide.classList.remove('opacity-100', 'pointer-events-auto', 'z-20'); slide.classList.add('opacity-0', 'pointer-events-none', 'z-0'); }
    });
    dots.forEach((dot, i) => { if (i === currentSlideIndex) dot.classList.replace('bg-white/40', 'bg-white'); else dot.classList.replace('bg-white', 'bg-white/40'); });
}
function nextSlide() { showSlide(currentSlideIndex + 1); resetSlideTimer(); }
function prevSlide() { showSlide(currentSlideIndex - 1); resetSlideTimer(); }
function goToSlide(index) { showSlide(index); resetSlideTimer(); }
function resetSlideTimer() { clearInterval(slideInterval); showSlide(currentSlideIndex); slideInterval = setInterval(() => { showSlide(currentSlideIndex + 1); }, 5000); }

const products = [
    {
        id: 1, brand: "Scent Studio", name: "Matcha 101 EDP", category: "niche",
        image: "images/perfumes/matcha101-1.jpg",
        prices: { "2ml": 79, "5ml": 149, "10ml": 279 },
        originalPrices: { "2ml": 89, "5ml": 169, "10ml": 299 },
        notes: { top: "Bergamot, Lemon", middle: "Green Tea, Black Tea", base: "White Musk, Cedarwood" }
    },
    {
        id: 2, brand: "Yves Saint Laurent", name: "Libre EDP", category: "designer",
        image: "images/perfumes/ysllibre-1.jpg",
        prices: { "2ml": 149, "5ml": 299, "10ml": 549 },
        originalPrices: { "2ml": 159, "5ml": 319, "10ml": 579 },
        notes: { top: "Lavender, Mandarin Orange", middle: "Orange Blossom, Jasmine", base: "Madagascar Vanilla, Musk" }
    },
    {
        id: 3, brand: "Christian Dior", name: "Sauvage EDP", category: "designer",
        image: "images/perfumes/diorsauvage-2.jpg",
        prices: { "2ml": 149, "5ml": 289, "10ml": 529 },
        originalPrices: { "2ml": 159, "5ml": 309, "10ml": 549 },
        notes: { top: "Calabrian Bergamot, Pepper", middle: "Sichuan Pepper, Lavender, Patchouli", base: "Ambroxan, Cedarwood" }
    },
    {
        id: 4, brand: "Mercedes-Benz", name: "Intense EDT", category: "designer",
        image: "images/perfumes/benzintense-1.jpg",
        prices: { "2ml": 99, "5ml": 199, "10ml": 359 },
        originalPrices: { "2ml": 109, "5ml": 219, "10ml": 399 },
        notes: { top: "Bergamot, Lemon, Violet Leaf", middle: "Bourbon Pepper, Nutmeg", base: "Vetiver, Cedar, Cetalox" }
    },
    { id: 5, brand: "Lamun.Cur", name: "Secret Scent...", category: "niche", isComingSoon: true }
];

let cart = JSON.parse(localStorage.getItem('lamun_cart')) || [];
let currentFilter = 'all';
let currentSort = 'default'; 
let scrollObserver;

document.addEventListener("DOMContentLoaded", () => {
    try {
        applyTheme(isDarkMode); initObserver(); applyLanguage(currentLang);
        setupFilters(); handleNavbar(); resetSlideTimer(); updateCartUI(); initFAQ();

        if (window.innerWidth >= 1024) {
            initCustomCursor();
            setTimeout(init3DTilt, 500);
        }
    } catch (error) {
        console.error("System Error:", error);
        document.querySelectorAll('.reveal').forEach(el => el.style.opacity = "1");
    }
});

function initObserver() {
    scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => scrollObserver.observe(el));
}

function handleNavbar() {
    const nav = document.getElementById('navbar'); const logo = document.getElementById('brand-logo');
    if (!nav) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('nav-scrolled', 'py-3'); nav.classList.remove('py-4', 'md:py-6');
            if (logo) { logo.classList.remove('h-10', 'md:h-12', 'lg:h-14'); logo.classList.add('h-8', 'md:h-10', 'lg:h-12'); }
        } else {
            nav.classList.remove('nav-scrolled', 'py-3'); nav.classList.add('py-4', 'md:py-6');
            if (logo) { logo.classList.remove('h-8', 'md:h-10', 'lg:h-12'); logo.classList.add('h-10', 'md:h-12', 'lg:h-14'); }
        }
    });
}

function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = '';

    let toRender = currentFilter === 'all' ? [...products] : products.filter(p => p.category === currentFilter || p.isComingSoon);
    const availableProducts = toRender.filter(p => !p.isComingSoon);
    const comingSoonProducts = toRender.filter(p => p.isComingSoon);

    if (currentSort === 'price_asc') {
        availableProducts.sort((a, b) => a.prices['2ml'] - b.prices['2ml']);
    } else if (currentSort === 'price_desc') {
        availableProducts.sort((a, b) => b.prices['2ml'] - a.prices['2ml']);
    }
    toRender = [...availableProducts, ...comingSoonProducts];

    const langKey = translations[currentLang] ? currentLang : 'en';
    const btnText = translations[langKey].btn_add;

    toRender.forEach((product, i) => {
        const delay = (i % 3) * 100;
        const card = document.createElement('div');
        card.className = `reveal group flex flex-col`;
        card.style.transitionDelay = `${delay}ms`;

        if (product.isComingSoon) {
            card.innerHTML = `<div class="w-full aspect-[4/5] mb-4 md:mb-6 flex flex-col items-center justify-center bg-transparent border border-dashed border-lux-gray/30 dark:border-white/20"><span class="font-serif text-2xl md:text-3xl lg:text-4xl font-bold italic text-lux-gray dark:text-gray-500 leading-relaxed text-center tracking-wider opacity-70">Coming<br>Soon</span></div><div class="flex-1 flex flex-col px-2"></div>`;
        } else {
            card.innerHTML = `
                <a href="product-detail.html?id=${product.id}" class="block img-container bg-lux-light dark:bg-lux-dark mb-4 md:mb-6 aspect-[4/5] cursor-pointer">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover img-zoom">
                </a>
                <div class="flex-1 flex flex-col px-1 md:px-2">
                    <p class="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-lux-gray mb-1">${product.brand}</p>
                    <a href="product-detail.html?id=${product.id}" class="hover:text-lux-gold transition-colors inline-block w-fit cursor-pointer">
                        <h3 class="font-serif text-lg md:text-xl lg:text-2xl text-lux-black dark:text-white mb-3 md:mb-4 cursor-pointer">${product.name}</h3>
                    </a>
                    <div class="mt-auto">
                        <div class="flex flex-wrap gap-3 md:gap-4 mb-4 md:mb-6 border-b border-lux-light dark:border-white/10 pb-3 md:pb-4 size-selectors">
                            <button class="text-[10px] md:text-xs uppercase tracking-widest pb-1 border-b border-lux-black dark:border-white text-lux-black dark:text-white font-medium transition-colors cursor-pointer" data-size="2ml" data-price="${product.prices['2ml']}">2ml</button>
                            <button class="text-[10px] md:text-xs uppercase tracking-widest pb-1 border-b border-transparent text-lux-gray hover:text-lux-black dark:hover:text-white transition-colors cursor-pointer" data-size="5ml" data-price="${product.prices['5ml']}">5ml</button>
                            <button class="text-[10px] md:text-xs uppercase tracking-widest pb-1 border-b border-transparent text-lux-gray hover:text-lux-black dark:hover:text-white transition-colors cursor-pointer" data-size="10ml" data-price="${product.prices['10ml']}">10ml</button>
                        </div>
                        <div class="flex justify-between items-center w-full gap-2">
                            <div class="flex items-end gap-1.5 md:gap-2">
                                <span class="font-serif text-lg md:text-xl text-lux-black dark:text-white price-display transition-opacity duration-300">฿${product.prices['2ml']}</span>
                                <span class="font-sans text-[10px] md:text-xs text-lux-gray/60 line-through decoration-1 pb-[2px] md:pb-[3px] orig-price-display transition-opacity duration-300" style="display: ${product.originalPrices && product.originalPrices['2ml'] ? 'inline-block' : 'none'}">
                                    ฿${product.originalPrices && product.originalPrices['2ml'] ? product.originalPrices['2ml'] : ''}
                                </span>
                            </div>
                            <button class="add-btn text-[10px] md:text-xs uppercase tracking-widest font-medium btn-minimal text-lux-black dark:text-white cursor-pointer whitespace-nowrap flex-shrink-0">${btnText}</button>
                        </div>
                    </div>
                </div>`;

            let selectedSize = '2ml';
            const sizeBtns = card.querySelectorAll('.size-selectors button');
            const priceDisplay = card.querySelector('.price-display');
            const origPriceDisplay = card.querySelector('.orig-price-display');

            sizeBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    sizeBtns.forEach(b => { b.classList.remove('border-lux-black', 'dark:border-white', 'text-lux-black', 'dark:text-white', 'font-medium'); b.classList.add('border-transparent', 'text-lux-gray'); });
                    e.target.classList.add('border-lux-black', 'dark:border-white', 'text-lux-black', 'dark:text-white', 'font-medium'); e.target.classList.remove('border-transparent', 'text-lux-gray');
                    selectedSize = e.target.dataset.size;

                    priceDisplay.style.opacity = 0; if (origPriceDisplay) origPriceDisplay.style.opacity = 0;
                    setTimeout(() => {
                        priceDisplay.textContent = `฿${product.prices[selectedSize]}`;
                        if (product.originalPrices && product.originalPrices[selectedSize]) {
                            origPriceDisplay.textContent = `฿${product.originalPrices[selectedSize]}`; origPriceDisplay.style.display = 'inline-block';
                        } else { origPriceDisplay.style.display = 'none'; }
                        priceDisplay.style.opacity = 1; if (origPriceDisplay) origPriceDisplay.style.opacity = 1;
                    }, 200);
                });
            });
            const addBtn = card.querySelector('.add-btn');
            if (addBtn) addBtn.addEventListener('click', () => { addToCart(product, selectedSize, product.prices[selectedSize]); });
        }
        grid.appendChild(card);
        if (typeof scrollObserver !== 'undefined' && scrollObserver) { scrollObserver.observe(card); }
    });
}

function setupFilters() {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            btns.forEach(b => { b.classList.remove('text-lux-black', 'dark:text-white', 'font-medium'); b.classList.add('text-lux-gray', 'dark:text-gray-500'); });
            e.target.classList.remove('text-lux-gray', 'dark:text-gray-500'); e.target.classList.add('text-lux-black', 'dark:text-white', 'font-medium');
            currentFilter = e.target.dataset.category;
            const grid = document.getElementById('product-grid');
            if (grid) {
                grid.style.transition = "opacity 0.3s ease"; grid.style.opacity = 0;
                setTimeout(() => {
                    renderProducts();
                    grid.style.opacity = 1;
                    setTimeout(() => {
                        document.querySelectorAll('#product-grid .reveal').forEach(el => el.classList.add('is-visible'));
                        init3DTilt();
                        rebindCursorHover();
                    }, 50);
                }, 300);
            }
        });
    });

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            const grid = document.getElementById('product-grid');
            if (grid) {
                grid.style.transition = "opacity 0.3s ease"; grid.style.opacity = 0;
                setTimeout(() => {
                    renderProducts();
                    grid.style.opacity = 1;
                    setTimeout(() => {
                        document.querySelectorAll('#product-grid .reveal').forEach(el => el.classList.add('is-visible'));
                        init3DTilt();
                        rebindCursorHover();
                    }, 50);
                }, 300);
            }
        });
    }
}

function saveCart() { localStorage.setItem('lamun_cart', JSON.stringify(cart)); }
function addToCart(product, size, price) {
    const existing = cart.find(item => item.id === product.id && item.size === size);
    if (existing) existing.quantity += 1; else cart.push({ ...product, size, price, quantity: 1 });
    saveCart(); updateCartUI(); 
    showToast(`ADDED ${product.name.toUpperCase()} (${size.toUpperCase()})`); 
}
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
}
function updateQuantity(index, delta) { cart[index].quantity += delta; if (cart[index].quantity <= 0) cart.splice(index, 1); saveCart(); updateCartUI(); }
function updateCartUI() {
    const badge = document.getElementById('cart-badge'); const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (badge) { if (totalItems > 0) { badge.textContent = totalItems; badge.classList.remove('opacity-0', 'scale-0'); } else badge.classList.add('opacity-0', 'scale-0'); }
    const container = document.getElementById('cart-items'); const emptyMsg = document.getElementById('empty-cart-msg');
    if (!container) return;
    if (cart.length === 0) {
        if (emptyMsg) emptyMsg.style.display = 'flex'; container.innerHTML = ''; if (emptyMsg) container.appendChild(emptyMsg);
    } else {
        if (emptyMsg) emptyMsg.style.display = 'none'; container.innerHTML = '';
        cart.forEach((item, idx) => {
            container.innerHTML += `
                <div class="flex gap-4 border-b border-lux-light dark:border-white/5 pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">
                    <div class="w-20 h-24 bg-lux-light dark:bg-lux-dark flex-shrink-0">
                        <img src="${item.image}" class="w-full h-full object-cover">
                    </div>
                    <div class="flex-1 flex flex-col justify-between py-1 relative">
                        <button onclick="removeFromCart(${idx})" class="absolute top-0 right-0 text-lux-gray/40 hover:text-red-500 transition-colors p-1 cursor-pointer z-10" title="Remove item">
                            <i class="fa-regular fa-trash-can text-sm"></i>
                        </button>
                        <div class="pr-8">
                            <p class="text-[10px] uppercase tracking-widest text-lux-gray">${item.brand}</p>
                            <h4 class="font-serif text-lg leading-tight text-lux-black dark:text-white mt-1">${item.name}</h4>
                            <p class="text-xs text-lux-gray mt-1">${item.size}</p>
                        </div>
                        <div class="flex justify-between items-center text-lux-black dark:text-white mt-2">
                            <div class="flex items-center gap-3">
                                <button onclick="updateQuantity(${idx}, -1)" class="text-lux-gray hover:text-lux-black dark:hover:text-white cursor-pointer"><i class="fa-solid fa-minus text-xs"></i></button>
                                <span class="text-sm w-4 text-center">${item.quantity}</span>
                                <button onclick="updateQuantity(${idx}, 1)" class="text-lux-gray hover:text-lux-black dark:hover:text-white cursor-pointer"><i class="fa-solid fa-plus text-xs"></i></button>
                            </div>
                            <span class="font-serif text-lg">฿${(item.price * item.quantity).toLocaleString()}</span>
                        </div>
                    </div>
                </div>`;
        });
    }
    const totalElement = document.getElementById('cart-total');
    if (totalElement) totalElement.textContent = `฿${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}`;
}

function toggleCart() {
    const overlay = document.getElementById('cart-overlay'); const drawer = document.getElementById('cart-drawer');
    if (!overlay || !drawer) return;
    const isClosed = drawer.classList.contains('translate-x-full');
    if (isClosed) { overlay.classList.remove('opacity-0', 'pointer-events-none'); drawer.classList.remove('translate-x-full'); document.body.style.overflow = 'hidden'; }
    else { overlay.classList.add('opacity-0', 'pointer-events-none'); drawer.classList.add('translate-x-full'); document.body.style.overflow = ''; }
}

let toastTimer;
function showToast(msg) {
    const toast = document.getElementById('toast'); 
    const toastMsg = document.getElementById('toast-msg');
    if (!toast || !toastMsg) return;
    
    toastMsg.textContent = msg; 
    
    toast.classList.remove('-translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    
    clearTimeout(toastTimer); 
    toastTimer = setTimeout(() => { 
        toast.classList.add('-translate-y-20', 'opacity-0');
        toast.classList.remove('translate-y-0', 'opacity-100'); 
    }, 5000);
}

function toggleDeliveryMethod() {
    const methodElement = document.querySelector('input[name="delivery_method"]:checked');
    if(!methodElement) return;
    const method = methodElement.value;
    const labels = { 'shipping': document.getElementById('label-shipping'), 'pickup_in': document.getElementById('label-pickup-in'), 'pickup_out': document.getElementById('label-pickup-out') };

    Object.values(labels).forEach(l => { if(l) { l.classList.remove('border-lux-black', 'dark:border-white', 'bg-lux-light/50', 'dark:bg-[#222]'); l.classList.add('border-lux-light', 'dark:border-white/20'); } });
    if(labels[method]) { labels[method].classList.add('border-lux-black', 'dark:border-white', 'bg-lux-light/50', 'dark:bg-[#222]'); labels[method].classList.remove('border-lux-light', 'dark:border-white/20'); }

    const addressGroup = document.getElementById('full-address-group');
    const noteLabel = document.getElementById('label-note');
    const contactLabel = document.getElementById('label-contact');
    const langKey = typeof currentLang !== 'undefined' ? currentLang : 'en';

    const provField = document.getElementById('s_prov');
    const distField = document.getElementById('s_dist');
    const zipField = document.getElementById('s_zip');
    
    const subdistInput = document.getElementById('s_subdist');
    const subdistSelectWrapper = document.getElementById('s_subdist_wrapper');

    if (method === 'pickup_in') {
        if(addressGroup) addressGroup.style.display = 'none';
        if(noteLabel) { noteLabel.textContent = translations[langKey].chk_note_meetup; noteLabel.setAttribute('data-i18n', 'chk_note_meetup'); }
        if(contactLabel) { contactLabel.textContent = translations[langKey].chk_contact; contactLabel.setAttribute('data-i18n', 'chk_contact'); }
    } else {
        if(addressGroup) addressGroup.style.display = 'block';
        if(noteLabel) { noteLabel.textContent = translations[langKey].chk_note; noteLabel.setAttribute('data-i18n', 'chk_note'); }
        if(contactLabel) { contactLabel.textContent = translations[langKey].chk_phone; contactLabel.setAttribute('data-i18n', 'chk_phone'); }
        
        if (method === 'pickup_out') {
            if(provField) { provField.value = langKey === 'th' ? "เชียงใหม่" : "Chiang Mai"; provField.readOnly = true; provField.classList.add('opacity-50', 'cursor-not-allowed', 'pointer-events-none'); }
            if(distField) { distField.value = langKey === 'th' ? "สันทราย" : "San Sai"; distField.readOnly = true; distField.classList.add('opacity-50', 'cursor-not-allowed', 'pointer-events-none'); }
            if(zipField) { zipField.value = "50290"; }
            
            if(subdistInput) subdistInput.style.display = 'none';
            if(subdistSelectWrapper) subdistSelectWrapper.classList.remove('hidden');
            
        } else if (method === 'shipping') {
            let wasLocked = provField && provField.readOnly;
            if(provField) { if (wasLocked) provField.value = ""; provField.readOnly = false; provField.classList.remove('opacity-50', 'cursor-not-allowed', 'pointer-events-none'); }
            if(distField) { if (wasLocked) distField.value = ""; distField.readOnly = false; distField.classList.remove('opacity-50', 'cursor-not-allowed', 'pointer-events-none'); }
            if(zipField && wasLocked && zipField.value === "50290") { zipField.value = ""; }
            
            if(subdistInput) subdistInput.style.display = 'block';
            if(subdistSelectWrapper) subdistSelectWrapper.classList.add('hidden');
            
            const hiddenSelect = document.getElementById('s_subdist_select');
            const subdistText = document.getElementById('current-subdist-text');
            if(hiddenSelect) hiddenSelect.value = "";
            if(subdistText) {
                subdistText.textContent = "-- เลือกตำบล --";
                subdistText.classList.remove('text-lux-black', 'dark:text-white');
                subdistText.classList.add('text-lux-gray');
            }
        }
    }
    updateCheckoutSummary();
}

function updateCheckoutSummary() {
    let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const methodElement = document.querySelector('input[name="delivery_method"]:checked');
    const method = methodElement ? methodElement.value : 'shipping';
    const langKey = typeof currentLang !== 'undefined' ? currentLang : 'en';

    const shipping = (method === 'pickup_in' || method === 'pickup_out') ? 0 : (subtotal >= 799 ? 0 : 35);
    const total = subtotal + shipping;

    let shippingText = `฿ ${shipping}`;
    if (method === 'pickup_in' || method === 'pickup_out') {
        shippingText = translations[langKey].free_meetup;
    } else if (shipping === 0) {
        shippingText = translations[langKey].free_shipping;
    }

    document.getElementById('checkout-subtotal').textContent = `฿ ${(subtotal).toLocaleString()}`;
    document.getElementById('checkout-shipping').textContent = shippingText;
    document.getElementById('checkout-total').textContent = `฿ ${(total).toLocaleString()}`;
}

function checkout() {
    if (cart.length === 0) return showToast("Cart is empty");

    const checkoutItems = document.getElementById('checkout-items');
    checkoutItems.innerHTML = '';

    cart.forEach(item => {
        checkoutItems.innerHTML += `
            <div class="flex gap-4 items-center">
                <div class="w-12 h-14 md:w-14 md:h-16 bg-lux-light dark:bg-[#222] flex-shrink-0">
                    <img src="${item.image}" class="w-full h-full object-cover">
                </div>
                <div class="flex-1">
                    <h4 class="font-serif text-sm md:text-base text-lux-black dark:text-white leading-tight">${item.name}</h4>
                    <p class="text-[9px] md:text-[10px] text-lux-gray uppercase tracking-widest mt-1">${item.size} x ${item.quantity}</p>
                </div>
                <span class="font-serif text-sm md:text-base text-lux-black dark:text-white">฿ ${(item.price * item.quantity).toLocaleString()}</span>
            </div>
        `;
    });

    updateCheckoutSummary();

    document.getElementById('step-1-shipping').style.transform = 'translateX(0)';
    document.getElementById('step-2-payment').style.transform = 'translateX(100%)';

    toggleCart();

    setTimeout(() => {
        const modal = document.getElementById('checkout-modal');
        if (modal) {
            modal.classList.remove('opacity-0', 'pointer-events-none');
            document.getElementById('checkout-container').classList.remove('scale-95');
            document.body.style.overflow = 'hidden';
        }
    }, 300);
}

function closeCheckout() {
    const modal = document.getElementById('checkout-modal');
    if (!modal) return;
    modal.classList.add('opacity-0', 'pointer-events-none');
    document.getElementById('checkout-container').classList.add('scale-95');
    document.body.style.overflow = '';
}

function validateAndProceed() {
    const errorBox = document.getElementById('form-error');
    const langKey = typeof currentLang !== 'undefined' ? currentLang : 'en'; 
    const methodElement = document.querySelector('input[name="delivery_method"]:checked');
    const method = methodElement ? methodElement.value : 'shipping';
    
    const activeSubdistId = method === 'pickup_out' ? 's_subdist_select' : 's_subdist';
    
    const inputs = {
        s_fname: document.getElementById('s_fname').value.trim(),
        s_lname: document.getElementById('s_lname').value.trim(),
        s_phone: document.getElementById('s_phone').value.trim(),
        s_addr: document.getElementById('s_addr').value.trim(),
        s_subdist: document.getElementById(activeSubdistId).value.trim(), 
        s_dist: document.getElementById('s_dist').value.trim(),
        s_prov: document.getElementById('s_prov').value.trim(),
        s_zip: document.getElementById('s_zip').value.trim(),
        s_note: document.getElementById('s_note').value.trim() 
    };

    let hasError = false;
    let errorMsg = (translations && translations[langKey] && translations[langKey].err_empty) ? translations[langKey].err_empty : "Please fill in all required fields."; 

    document.querySelectorAll('#shipping-form input[type="text"], #shipping-form input[type="tel"], #shipping-form textarea, #subdist-display-box').forEach(el => {
        if(el) {
            el.classList.remove('border-red-500');
            el.classList.add('border-lux-light', 'dark:border-white/20', 'focus:border-lux-gold');
        }
    });

    if (method === 'pickup_in') {
        ['s_fname', 's_lname', 's_phone', 's_note'].forEach(id => {
            if (!inputs[id]) { hasError = true; document.getElementById(id).classList.add('border-red-500'); }
        });
    } else {
        ['s_fname', 's_lname', 's_phone', 's_addr', 's_dist', 's_prov', 's_zip'].forEach(id => {
            if (!inputs[id]) { hasError = true; document.getElementById(id).classList.add('border-red-500'); }
        });
        
        if (!inputs.s_subdist) { 
            hasError = true; 
            const errorTarget = method === 'pickup_out' ? document.getElementById('subdist-display-box') : document.getElementById('s_subdist');
            if(errorTarget) {
                errorTarget.classList.add('border-red-500');
                errorTarget.classList.remove('border-lux-light', 'dark:border-white/20');
            }
        }
    }

    if (!hasError) {
        
        const hasNumbers = /\d/;
        const hasSymbols = /[!@#$%^&*()_+={}\[\]:;"'<>,?/\\]/;

        if (inputs.s_fname.length < 2 || hasNumbers.test(inputs.s_fname) || hasSymbols.test(inputs.s_fname)) {
            hasError = true; errorMsg = langKey === 'th' ? "กรุณากรอกชื่อจริงให้ถูกต้อง (ห้ามมีตัวเลข/สัญลักษณ์)" : "Please enter a valid first name."; document.getElementById('s_fname').classList.add('border-red-500');
        }

        else if (inputs.s_lname.length < 2 || hasNumbers.test(inputs.s_lname) || hasSymbols.test(inputs.s_lname)) {
            hasError = true; errorMsg = langKey === 'th' ? "กรุณากรอกนามสกุลให้ถูกต้อง (ห้ามมีตัวเลข/สัญลักษณ์)" : "Please enter a valid last name."; document.getElementById('s_lname').classList.add('border-red-500');
        }
        
        else if (inputs.s_phone) {
            const isNumberOnly = /^[0-9\s-]+$/.test(inputs.s_phone);
            const phoneClean = inputs.s_phone.replace(/[\s-]/g, '');

            if (isNumberOnly && (phoneClean.length < 9 || phoneClean.length > 10)) {
                hasError = true; errorMsg = langKey === 'th' ? "เบอร์โทรศัพท์ไม่ถูกต้อง (ต้องเป็นตัวเลข 9-10 หลัก)" : "Invalid phone number."; document.getElementById('s_phone').classList.add('border-red-500');
            } else if (!isNumberOnly && inputs.s_phone.length < 3) {
                hasError = true; errorMsg = langKey === 'th' ? "ชื่อบัญชีติดต่อ/IG สั้นเกินไปครับ" : "Contact / IG handle is too short."; document.getElementById('s_phone').classList.add('border-red-500');
            }
        }

        if (!hasError) {
            if (method === 'pickup_in' && inputs.s_note.length < 5) {
                hasError = true; errorMsg = langKey === 'th' ? "กรุณาระบุสถานที่นัดรับให้ชัดเจนกว่านี้ครับ" : "Please provide a clearer meetup location."; document.getElementById('s_note').classList.add('border-red-500');
            } else if (method !== 'pickup_in' && inputs.s_addr.length < 5) {
                hasError = true; errorMsg = langKey === 'th' ? "กรุณากรอกบ้านเลขที่/ถนนให้ชัดเจนกว่านี้ครับ" : "Please provide a more complete address."; document.getElementById('s_addr').classList.add('border-red-500');
            }
        }

        if (!hasError && method !== 'pickup_in' && inputs.s_zip && !/^[0-9]{5}$/.test(inputs.s_zip)) {
            hasError = true; errorMsg = langKey === 'th' ? "รหัสไปรษณีย์ไม่ถูกต้อง (ต้องเป็นตัวเลข 5 หลัก)" : "Invalid postal code."; document.getElementById('s_zip').classList.add('border-red-500');
        }

        if (!hasError && method === 'pickup_out') {
            const fullAddressCheck = (inputs.s_addr + inputs.s_subdist + inputs.s_dist + inputs.s_prov + inputs.s_note).replace(/\s/g, '').toLowerCase(); 
            if (!fullAddressCheck.includes('แม่โจ้') && !fullAddressCheck.includes('maejo') && 
                !fullAddressCheck.includes('สันทราย') && !fullAddressCheck.includes('sansai') &&
                !fullAddressCheck.includes('หน้ามอ') && !fullAddressCheck.includes('หลังมอ')) {
                hasError = true;
                errorMsg = langKey === 'th' ? "การส่งรอบมอกำหนดเฉพาะโซน ม.แม่โจ้ / อ.สันทราย เท่านั้นครับ" : "Around University is only available in Maejo/San Sai area.";
                document.getElementById('s_dist').classList.add('border-red-500');
            }
        }
    }

    if (hasError) {
        errorBox.textContent = errorMsg;
        errorBox.classList.remove('hidden');
        document.getElementById('step-1-shipping').scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        errorBox.classList.add('hidden');
        proceedToPayment(); 
    }
}

function proceedToPayment() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const methodElement = document.querySelector('input[name="delivery_method"]:checked');
    const method = methodElement ? methodElement.value : 'shipping';
    const shipping = (method === 'pickup_in' || method === 'pickup_out') ? 0 : (subtotal >= 799 ? 0 : 35);
    const total = subtotal + shipping;

    const cleanID = PROMPTPAY_ID.replace(/[^0-9]/g, '');

    const qrContainer = document.getElementById('qr-image');
    const loading = document.getElementById('qr-loading');

    if (qrContainer && loading) {
        qrContainer.style.opacity = 0;
        loading.style.opacity = 1;
        loading.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin text-2xl"></i>';
        qrContainer.innerHTML = '';

        try {
            function generatePromptPayPayload(id, amount) {
                let target = "";
                if (id.length === 10) target = "01130066" + id.substring(1);
                else if (id.length === 13) target = "0213" + id;
                else if (id.length === 15) target = "0315" + id;
                else throw new Error("Invalid ID");

                const merchantInfo = "0016A000000677010111" + target;
                const merchantInfoLen = merchantInfo.length.toString().padStart(2, '0');
                const amtStr = amount.toFixed(2);
                const amtLen = amtStr.length.toString().padStart(2, '0');

                let payload = "00020101021229" + merchantInfoLen + merchantInfo + "5802TH530376454" + amtLen + amtStr + "6304";
                let crc = 0xFFFF;
                for (let i = 0; i < payload.length; i++) {
                    crc ^= payload.charCodeAt(i) << 8;
                    for (let j = 0; j < 8; j++) {
                        if (crc & 0x8000) crc = (crc << 1) ^ 0x1021;
                        else crc = crc << 1;
                    }
                }
                return payload + (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
            }

            const payloadString = generatePromptPayPayload(cleanID, total);

            new QRCode(qrContainer, {
                text: payloadString,
                width: 200,
                height: 200,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.M
            });

            setTimeout(() => {
                loading.style.opacity = 0;
                qrContainer.style.opacity = 1;
                const canvas = qrContainer.querySelector('canvas');
                const img = qrContainer.querySelector('img');
                if (canvas) { canvas.style.width = '100%'; canvas.style.height = '100%'; canvas.style.objectFit = 'contain'; }
                if (img) { img.style.width = '100%'; img.style.height = '100%'; img.style.objectFit = 'contain'; }
            }, 300);

        } catch (error) {
            loading.innerHTML = '<span class="text-[10px] text-red-500 font-sans text-center">เกิดข้อผิดพลาด<br>โปรดตรวจสอบเลขบัญชี 15 หลัก</span>';
        }
    }

    document.getElementById('qr-amount').textContent = `฿ ${(total).toLocaleString()}`;
    const displayPromptpay = document.getElementById('display-promptpay');
    if (displayPromptpay) displayPromptpay.textContent = cleanID;

    document.getElementById('step-1-shipping').style.transform = 'translateX(-100%)';
    document.getElementById('step-2-payment').style.transform = 'translateX(0)';
}

function backToShipping() {
    document.getElementById('step-1-shipping').style.transform = 'translateX(0)';
    document.getElementById('step-2-payment').style.transform = 'translateX(100%)';
}

function previewSlip(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('slip-preview');
    const fileName = document.getElementById('slip-file-name');
    const icon = document.getElementById('slip-icon');
    const errorBox = document.getElementById('slip-error');
    const submitBtn = document.querySelector('button[onclick="confirmPayment()"]');
    const langKey = typeof currentLang !== 'undefined' ? currentLang : 'en';

    if (file) {
        fileName.textContent = langKey === 'th' ? "กำลังตรวจสอบรูปภาพ..." : "Verifying image...";
        fileName.classList.remove('text-lux-gold');
        icon.classList.add('hidden');
        if (submitBtn) { submitBtn.disabled = true; submitBtn.classList.add('opacity-50', 'cursor-not-allowed'); }

        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const maxWidth = 800;
                let width = img.width;
                let height = img.height;
                if (width > maxWidth) { height = Math.round((height * maxWidth) / width); width = maxWidth; }
                
                canvas.width = width; canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);
                
                const imageData = ctx.getImageData(0, 0, width, height);
                const code = jsQR(imageData.data, imageData.width, imageData.height);
                
                if (code) {
                    preview.src = e.target.result;
                    preview.classList.remove('hidden');
                    fileName.textContent = file.name;
                    fileName.classList.add('text-lux-gold');
                    if (errorBox) errorBox.classList.add('hidden');
                    if (submitBtn) { submitBtn.disabled = false; submitBtn.classList.remove('opacity-50', 'cursor-not-allowed'); }
                } else {
                    event.target.value = '';
                    preview.src = '';
                    preview.classList.add('hidden');
                    icon.classList.remove('hidden');
                    fileName.textContent = (translations[langKey] && translations[langKey].chk_slip_btn) ? translations[langKey].chk_slip_btn : "Click to upload slip";
                    
                    if (errorBox) {
                        errorBox.textContent = langKey === 'th' ? "รูปภาพนี้ไม่มี QR Code ไม่สามารถใช้เป็นสลิปได้" : "No QR Code detected. Please upload a valid transfer slip.";
                        errorBox.classList.remove('hidden');
                    }
                    if (submitBtn) { submitBtn.disabled = false; submitBtn.classList.remove('opacity-50', 'cursor-not-allowed'); }
                }
            };
            img.src = e.target.result;
        }
        reader.readAsDataURL(file);
    } else {
        preview.src = '';
        preview.classList.add('hidden');
        icon.classList.remove('hidden');
        fileName.textContent = (translations[langKey] && translations[langKey].chk_slip_btn) ? translations[langKey].chk_slip_btn : "Click to upload slip";
        fileName.classList.remove('text-lux-gold');
        if (errorBox) errorBox.classList.add('hidden');
    }
}

async function confirmPayment() { 
    const fileInput = document.getElementById('slip_upload');
    const errorBox = document.getElementById('slip-error');
    const langKey = typeof currentLang !== 'undefined' ? currentLang : 'en';

    if (!fileInput.files || fileInput.files.length === 0) {
        errorBox.textContent = (translations[langKey] && translations[langKey].err_slip) ? translations[langKey].err_slip : "Please upload your transfer slip before confirming.";
        errorBox.classList.remove('hidden');
        document.getElementById('step-2-payment').scrollTo({ top: 1000, behavior: 'smooth' });
        return; 
    }
    errorBox.classList.add('hidden');

    const submitBtn = document.querySelector('button[onclick="confirmPayment()"]');
    const originalText = submitBtn.innerText;
    submitBtn.innerHTML = '<svg class="animate-spin inline-block mr-2.5 w-4 h-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> PROCESSING...';
    submitBtn.disabled = true;
    submitBtn.classList.add('opacity-50', 'cursor-wait');

    try {
        const file = fileInput.files[0];
        const compressedBase64 = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(e) {
                const img = new Image();
                img.src = e.target.result;
                img.onload = function() {
                    const canvas = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;
                    
                    const maxWidth = 800;
                    if (width > maxWidth) {
                        height = Math.round((height * maxWidth) / width);
                        width = maxWidth;
                    }
                    
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);
                    
                    resolve(canvas.toDataURL('image/jpeg', 0.75));
                };
            };
        });

        const methodVal = document.querySelector('input[name="delivery_method"]:checked').value;
        const methodText = methodVal === 'pickup_in' ? 'นัดรับในมอ' : (methodVal === 'pickup_out' ? 'ส่งรอบมอ' : 'จัดส่งพัสดุ');
        
        const activeSubdistId = methodVal === 'pickup_out' ? 's_subdist_select' : 's_subdist';
        const addressData = methodVal === 'pickup_in' 
            ? `จุดนัดรับ: ${document.getElementById('s_note').value}` 
            : `${document.getElementById('s_addr').value} ต.${document.getElementById(activeSubdistId).value} อ.${document.getElementById('s_dist').value} จ.${document.getElementById('s_prov').value} ${document.getElementById('s_zip').value} (หมายเหตุ: ${document.getElementById('s_note').value})`;

        const itemString = cart.map(item => `- ${item.name} (${item.size}) x ${item.quantity}`).join('\n');
        let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = (methodVal === 'pickup_in' || methodVal === 'pickup_out') ? 0 : (subtotal >= 799 ? 0 : 35);

        const newOrderId = "LM" + new Date().getTime().toString().slice(-6);

        const payload = {
            orderId: newOrderId, 
            fname: document.getElementById('s_fname').value,
            lname: document.getElementById('s_lname').value,
            phone: document.getElementById('s_phone').value,
            method: methodText,
            fullAddress: addressData,
            items: itemString,
            total: subtotal + shipping,
            slip: compressedBase64 
        };

        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            redirect: 'follow',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        
        if (result.status === "success") {
        
            const orderRecord = {
                id: newOrderId, 
                date: new Date().toLocaleString('th-TH', { dateStyle: 'short', timeStyle: 'short' }),
                items: cart.map(item => `- ${item.name} (${item.size}) x ${item.quantity}`),
                total: subtotal + shipping,
                status: "Processing"
            };
            let history = JSON.parse(localStorage.getItem('lamun_order_history')) || [];
            history.unshift(orderRecord); 
            localStorage.setItem('lamun_order_history', JSON.stringify(history));

            closeCheckout(); 
            cart = [];       
            saveCart();      
            updateCartUI();  
            
            fileInput.value = '';
            document.getElementById('slip-preview').classList.add('hidden');
            document.getElementById('slip-icon').classList.remove('hidden');
            document.getElementById('slip-file-name').textContent = translations[langKey].chk_slip_btn || "Click to upload slip";
            document.getElementById('slip-file-name').classList.remove('text-lux-gold');

            setTimeout(() => {
                showToast(langKey === 'th' ? "ยืนยันการสั่งซื้อ ขอบคุณที่อุดหนุนครับ ✨" : "Payment confirmed. Thank you ✨");
            }, 500); 
        } else {
            throw new Error("API Error");
        }
        
    } catch (error) {
        alert("เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้งครับ");
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.classList.remove('opacity-50', 'cursor-wait');
    }
}

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const btn = item.querySelector('button');
        btn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
}

window.addEventListener('scroll', () => {
    const scrollPx = document.documentElement.scrollTop; const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollPx / winHeightPx) * 100;
    const progressBar = document.getElementById('scroll-progress'); if (progressBar) progressBar.style.width = scrolled + '%';
});

const scrollToTopBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) { scrollToTopBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none'); scrollToTopBtn.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto'); }
    else { scrollToTopBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none'); scrollToTopBtn.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto'); }
});
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

function init3DTilt() {
    if (window.innerWidth < 1024) return; 
    const cards = document.querySelectorAll('.img-container');
    cards.forEach(card => {
        if (card.dataset.tiltInit) return; 
        card.dataset.tiltInit = 'true';

        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            card.style.transition = "transform 0.1s ease";
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
            card.style.transition = "transform 0.5s ease";
        });
    });
}

function initCustomCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    if (!cursorDot || !cursorOutline) return;

    document.body.classList.add('custom-cursor-active');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`, top: `${posY}px`
        }, { duration: 150, fill: "forwards" });
    });

    rebindCursorHover();
}

function rebindCursorHover() {
    if (window.innerWidth < 1024) return;
    document.querySelectorAll('a, button, .cursor-pointer, .img-container, .size-btn, .filter-btn').forEach(el => {
        if (el.dataset.hoverInit) return;
        el.dataset.hoverInit = 'true';
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
}

function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader && preloader.style.opacity !== '0') {
        preloader.style.opacity = '0';
        setTimeout(() => preloader.style.display = 'none', 1000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(hidePreloader, 300);
});
setTimeout(hidePreloader, 2500);

function copyData(type) {
    let textToCopy = "";
    if (type === 'amount') {
        textToCopy = document.getElementById('qr-amount').innerText.replace(/[^0-9.]/g, '');
    } else if (type === 'promptpay') {
        textToCopy = PROMPTPAY_ID;
    }

    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast("Copied to clipboard!");
    }).catch(err => {
        showToast("Failed to copy");
    });
}

function toggleSortDropdown(event) {
    event.stopPropagation();
    const menu = document.getElementById('sort-dropdown-menu');
    const icon = document.getElementById('sort-icon');

    if (menu.classList.contains('invisible')) {
        menu.classList.remove('invisible', 'opacity-0', 'translate-y-2');
        icon.classList.add('rotate-180');
    } else {
        menu.classList.add('invisible', 'opacity-0', 'translate-y-2');
        icon.classList.remove('rotate-180');
    }
}

document.addEventListener('click', (e) => {
    const menu = document.getElementById('sort-dropdown-menu');
    const icon = document.getElementById('sort-icon');
    if (menu && !menu.classList.contains('invisible') && !e.target.closest('#custom-sort-container')) {
        menu.classList.add('invisible', 'opacity-0', 'translate-y-2');
        if (icon) icon.classList.remove('rotate-180');
    }
});

function initCustomSort() {
    const options = document.querySelectorAll('.sort-option');
    const currentText = document.getElementById('current-sort-text');
    const hiddenSelect = document.getElementById('sort-select');

    if (!hiddenSelect) return;

    options.forEach(opt => {
        opt.addEventListener('click', (e) => {
            currentText.textContent = e.target.textContent;
            currentText.setAttribute('data-i18n', e.target.getAttribute('data-i18n'));

            options.forEach(o => {
                o.classList.remove('text-lux-black', 'dark:text-white');
                o.classList.add('text-lux-gray');
            });
            e.target.classList.remove('text-lux-gray');
            e.target.classList.add('text-lux-black', 'dark:text-white');

            hiddenSelect.value = e.target.dataset.value;
            hiddenSelect.dispatchEvent(new Event('change'));

            toggleSortDropdown(e);
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(initCustomSort, 100);
});

function toggleSubdistDropdown(event) {
    event.preventDefault(); 
    event.stopPropagation();
    const menu = document.getElementById('subdist-dropdown-menu');
    const icon = document.getElementById('subdist-icon');
    
    if (menu.classList.contains('invisible')) {
        menu.classList.remove('invisible', 'opacity-0', 'translate-y-2');
        icon.classList.add('rotate-180');
    } else {
        menu.classList.add('invisible', 'opacity-0', 'translate-y-2');
        icon.classList.remove('rotate-180');
    }
}

document.addEventListener('click', (e) => {
    const menu = document.getElementById('subdist-dropdown-menu');
    const icon = document.getElementById('subdist-icon');
    if (menu && !menu.classList.contains('invisible') && !e.target.closest('#s_subdist_wrapper')) {
        menu.classList.add('invisible', 'opacity-0', 'translate-y-2');
        if(icon) icon.classList.remove('rotate-180');
    }
});

function initSubdistCustomDropdown() {
    const options = document.querySelectorAll('.subdist-option');
    const currentText = document.getElementById('current-subdist-text');
    const hiddenInput = document.getElementById('s_subdist_select');
    const displayBox = document.getElementById('subdist-display-box');

    options.forEach(opt => {
        opt.addEventListener('click', (e) => {
            currentText.textContent = e.target.textContent;
            currentText.classList.remove('text-lux-gray');
            currentText.classList.add('text-lux-black', 'dark:text-white');

            if(displayBox) {
                displayBox.classList.remove('border-red-500');
                displayBox.classList.add('border-lux-light', 'dark:border-white/20');
            }

            hiddenInput.value = e.target.dataset.value;
            options.forEach(o => { o.classList.remove('bg-lux-light', 'dark:bg-[#222]'); });
            e.target.classList.add('bg-lux-light', 'dark:bg-[#222]');
            toggleSubdistDropdown(e);
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(initSubdistCustomDropdown, 100);
});

function toggleHistory() {
    const modal = document.getElementById('history-modal');
    const drawer = document.getElementById('history-drawer');
    const overlay = document.getElementById('history-overlay');
    
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        renderHistory(); 
        setTimeout(() => {
            overlay.classList.remove('opacity-0');
            drawer.classList.remove('translate-x-full');
        }, 10);
    } else {
        overlay.classList.add('opacity-0');
        drawer.classList.add('translate-x-full');
        setTimeout(() => modal.classList.add('hidden'), 500);
    }
}

async function renderHistory() {
    const container = document.getElementById('history-items');
    let history = JSON.parse(localStorage.getItem('lamun_order_history')) || [];
    
    drawHistoryUI(history, container);
    if (history.length === 0) return;

    try {
        const orderIds = history.map(h => h.id).join(',');
        const fetchUrl = SCRIPT_URL + "?ids=" + orderIds; 
        
        const response = await fetch(fetchUrl, { redirect: "follow" });
        const liveStatuses = await response.json();
        
        let hasChanges = false;
        history = history.map(order => {
            if (liveStatuses[order.id] && liveStatuses[order.id] !== order.status) {
                order.status = liveStatuses[order.id]; 
                hasChanges = true;
            }
            return order;
        });

        if (hasChanges) {
            localStorage.setItem('lamun_order_history', JSON.stringify(history));
            drawHistoryUI(history, container); 
        }
    } catch (error) {
        console.log("Offline mode: showing local status");
    }
}

function drawHistoryUI(history, container) {
    const langKey = typeof currentLang !== 'undefined' ? currentLang : 'en';
    if (history.length === 0) {
        container.innerHTML = `<div class="text-center text-lux-gray text-xs mt-10">${langKey === 'th' ? "ยังไม่มีประวัติการสั่งซื้อครับ" : "No order history yet."}</div>`;
        return;
    }
    
    container.innerHTML = history.map(order => {
        let statusText = order.status.toUpperCase();
        
        let statusBadge = `<span class="text-[9px] bg-lux-gold/10 text-lux-gold px-2 py-1 rounded-sm uppercase tracking-widest font-bold">${statusText}</span>`;
        
        if (statusText.includes('TH') || statusText.includes('J&T') || statusText.includes('FL') || statusText.includes('KEX') || statusText.includes('ส่งแล้ว')) {
            
            let trackingNumber = statusText.replace(/[^A-Z0-9]/g, ''); 
            
            let trackingUrl = `https://www.flashexpress.co.th/tracking/?se=${trackingNumber}`;

            statusBadge = `<a href="${trackingUrl}" target="_blank" title="คลิกเพื่อเช็คพัสดุ" class="text-[9px] bg-green-500/10 text-green-600 hover:bg-green-500/20 px-2 py-1 rounded-sm uppercase tracking-widest font-bold transition-colors cursor-pointer flex items-center gap-1.5"><i class="fa-solid fa-truck-fast"></i> ${statusText}</a>`;
            
        } else if (statusText.includes('SUCCESS') || statusText.includes('DELIVERED') || statusText.includes('รับของแล้ว')) {
            
            statusBadge = `<span class="text-[9px] bg-green-500/10 text-green-600 px-2 py-1 rounded-sm uppercase tracking-widest font-bold flex items-center gap-1 w-fit"><i class="fa-solid fa-circle-check"></i> ${statusText}</span>`;
            
        } else if (statusText.includes('CANCEL')) {
            statusBadge = `<span class="text-[9px] bg-red-500/10 text-red-600 px-2 py-1 rounded-sm uppercase tracking-widest font-bold">${statusText}</span>`;
        }

        return `
        <div class="bg-white dark:bg-[#1a1a1a] p-5 border border-lux-light dark:border-white/5 rounded-sm shadow-sm">
            <div class="flex justify-between items-center mb-3 border-b border-lux-light/50 dark:border-white/5 pb-3">
                <span class="text-[10px] text-lux-gray font-mono uppercase tracking-widest">#${order.id}</span>
                ${statusBadge}
            </div>
            <div class="text-[11px] md:text-xs text-lux-black dark:text-white/80 space-y-1 mb-4 leading-relaxed">
                ${order.items.map(i => `<div>${i}</div>`).join('')}
            </div>
            <div class="flex justify-between items-end pt-1">
                <span class="text-[9px] text-lux-gray tracking-wider">${order.date}</span>
                <span class="text-sm font-serif text-lux-black dark:text-white">฿${order.total.toLocaleString()}</span>
            </div>
        </div>
        `;
    }).join('');
}