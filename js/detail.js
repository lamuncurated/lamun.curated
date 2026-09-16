const PROMPTPAY_ID = "088983000020605";
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwOn18FEoUQskhb6hV5sLBQAk5KfsLyY8y6jkgBemhzCsaxjfY1NKPPmFL7vO-eUI0wZA/exec";

function getStore(key, def) { try { return localStorage.getItem(key) || def; } catch (e) { return def; } }
function setStore(key, val) { try { localStorage.setItem(key, val); } catch (e) { } }

const translations = {
    en: {
        nav_collection: "Collection", nav_cart: "Cart", recommended_title: "You Might Also Like", btn_add: "Add to Cart",
        marquee_msg: "🚚 FREE SHIPPING ON ORDERS OVER 799 THB &nbsp; ✦ &nbsp; 🎊 GRAND OPENING PROMO &nbsp; ✦ &nbsp; 100% AUTHENTIC GUARANTEED",
        cart_title: "Your Cart", cart_empty: "Your cart is empty.", cart_total: "Subtotal", btn_checkout: "Check Out",
        starts_at: "Starts at",
        method_shipping: "Delivery (35 THB / Free > 799)",
        method_pickup_in: "In-University (Free)",
        method_pickup_out: "Around University (Free)",
        chk_contact: "Phone Number / IG *",
        chk_note_meetup: "Meetup Location & Time *",
        ph_contact: "e.g., 0812345678 or IG: lamun.cur",
        err_prov_pickup: "Around University is only available in Maejo/San Sai area.",
        chk_summary: "Order Summary", chk_subtotal: "Subtotal", chk_shipping: "Shipping", chk_total: "Total",
        chk_ship_title: "Shipping Details", chk_ship_desc: "Please enter your exact address",
        chk_fname: "First Name *", chk_lname: "Last Name *", chk_phone: "Phone Number *", chk_addr: "House No., Building, Street *",
        chk_subdist: "Sub-district *", chk_dist: "District *", chk_prov: "Province *", chk_zip: "Postal Code *",
        chk_note: "Additional Notes (Optional)",
        btn_continue: "Continue to Payment", btn_back: "Back", chk_scan: "Scan to Pay", chk_promptpay: "PromptPay Payment",
        chk_amount: "Total Amount", btn_paid: "I have paid",
        chk_slip: "Upload Transfer Slip *", chk_slip_btn: "Click to upload slip",
        free_meetup: "FREE (Meetup)",
        free_shipping: "FREE",
        err_empty: "Please fill in all required fields.",
        err_phone: "Invalid phone number (must be 9-10 digits).",
        err_zip: "Invalid postal code (must be 5 digits).",
        err_slip: "Please upload your transfer slip before confirming.",
        ph_fname: "e.g., John", ph_lname: "e.g., Doe", ph_phone: "e.g., 0812345678", ph_addr: "e.g., 123/45 Bldg, Sukhumvit Rd.",
        ph_subdist: "e.g., Khlong Toei", ph_dist: "e.g., Khlong Toei", ph_prov: "e.g., Bangkok", ph_zip: "e.g., 10110", ph_note: "e.g., Leave the parcel at the lobby...",
        nav_orders: "MY ORDERS",
        chk_slip_warn: "* We verify every transfer slip. Any forgery will be strictly prosecuted.",
    },

    th: {
        nav_collection: "คอลเลกชัน", nav_cart: "ตะกร้า", recommended_title: "สินค้าแนะนำที่คุณอาจชื่นชอบ", btn_add: "ใส่ตะกร้า",
        marquee_msg: "🚚 ซื้อครบ 799฿ ส่งฟรีทั่วประเทศ &nbsp; ✦ &nbsp; 🎊 โปรเปิดร้านลดราคาถึง 31 ส.ค. นี้ &nbsp; ✦ &nbsp; การันตีของแท้ 100% ไม่ผสมแน่นอน",
        cart_title: "ตะกร้าของคุณ", cart_empty: "ตะกร้าของคุณยังว่างเปล่า", cart_total: "ยอดรวม", btn_checkout: "ชำระเงิน",
        starts_at: "เริ่มต้นที่",
        method_shipping: "จัดส่งพัสดุ (35฿ / ส่งฟรีครบ 799฿)",
        method_pickup_in: "นัดรับในมอ (ฟรี)",
        method_pickup_out: "ส่งรอบมอ (ฟรี)",
        chk_contact: "เบอร์โทรศัพท์ / ไอจี *",
        chk_note_meetup: "สถานที่ตึกนัดรับ และ เวลา *",
        ph_contact: "เช่น 0812345678 หรือ IG: lamun.cur",
        err_prov_pickup: "การส่งรอบมอกำหนดเฉพาะโซน ม.แม่โจ้ / อ.สันทราย เท่านั้นครับ",
        chk_summary: "สรุปคำสั่งซื้อ", chk_subtotal: "ยอดรวมสินค้า", chk_shipping: "ค่าจัดส่ง", chk_total: "ยอดชำระสุทธิ",
        chk_ship_title: "ข้อมูลการจัดส่ง", chk_ship_desc: "กรุณากรอกที่อยู่ให้ครบถ้วนและชัดเจน",
        chk_fname: "ชื่อจริง *", chk_lname: "นามสกุล *", chk_phone: "เบอร์โทรศัพท์ *", chk_addr: "บ้านเลขที่, อาคาร, ซอย, ถนน *",
        chk_subdist: "แขวง / ตำบล *", chk_dist: "เขต / อำเภอ *", chk_prov: "จังหวัด *", chk_zip: "รหัสไปรษณีย์ *",
        chk_note: "หมายเหตุเพิ่มเติม (ถ้ามี)",
        btn_continue: "ดำเนินการชำระเงิน", btn_back: "ย้อนกลับ", chk_scan: "สแกนเพื่อชำระเงิน", chk_promptpay: "ชำระเงินผ่านพร้อมเพย์",
        chk_amount: "ยอดชำระสุทธิ", btn_paid: "ฉันได้ชำระเงินแล้ว",
        chk_slip: "อัปโหลดสลิปชำระเงิน *", chk_slip_btn: "คลิกเพื่ออัปโหลดรูปภาพ",
        free_meetup: "ฟรี (นัดรับ)",
        free_shipping: "ส่งฟรี",
        err_empty: "กรุณากรอกข้อมูลให้ครบทุกช่องครับ",
        err_phone: "เบอร์โทรศัพท์ไม่ถูกต้อง (ต้องเป็นตัวเลข 9-10 หลัก)",
        err_zip: "รหัสไปรษณีย์ไม่ถูกต้อง (ต้องเป็นตัวเลข 5 หลัก)",
        err_slip: "กรุณาแนบรูปสลิปชำระเงินก่อนกดยืนยันครับ",
        ph_fname: "เช่น สมชาย", ph_lname: "เช่น ใจดี", ph_phone: "เช่น 0812345678", ph_addr: "เช่น 123/45 คอนโด A ซ.สุขุมวิท",
        ph_subdist: "เช่น คลองเตย", ph_dist: "เช่น คลองเตย", ph_prov: "เช่น กรุงเทพมหานคร", ph_zip: "เช่น 10110", ph_note: "เช่น ฝากพัสดุไว้ที่ป้อม รปภ. ...",
        nav_orders: "ออเดอร์ของฉัน",
        chk_slip_warn: "*ทางร้านมีการตรวจสอบสลิปก่อนทุกครั้งหากพบการปลอมแปลงจะถูกดำเนินคดีตามกฎหมาย",
    }
};

let currentLang = getStore('lamun_lang', 'en');
let isDarkMode = getStore('lamun_theme', 'light') === 'dark';

const products = [
    {
        id: 1, brand: "Scent Studio", name: "Matcha 101 EDP", category: "niche",
        image: "images/perfumes/matcha101-2.jpg",
        gallery: ["images/perfumes/matcha101-1.jpg", "images/perfumes/matcha101-2.jpg", "images/perfumes/matcha101-3.jpg", "images/perfumes/matcha101-4.jpg"],
        prices: { "2ml": 79, "5ml": 149, "10ml": 279 }, originalPrices: { "2ml": 89, "5ml": 169, "10ml": 299 },
        notes: { top: "Bergamot, Lemon", middle: "Green Tea, Black Tea", base: "White Musk, Cedarwood" },
        desc: {
            en: `✨️ 01 - Matcha 101 EDP\nBy Scent Studio\n\n👥 Unisex\n\n🌟 A clear, airy tea scent featuring notes of green tea & black tea.\n🌟 An ultra-clean vibe, feeling like you've just taken 100 showers, perfectly balanced with a soft smoothness.\n🌟 Emphasizes a neat, clean, and well-groomed aura > sexy.\n\nRatings:\nScent: 8.5\nClean: 9\nFresh: 9\nSweet: 2\nLongevity: 7 (6 - 7 hrs)\n\n🕙 Best for: Everyday wear\n\n🎊 Grand Opening Promo! Valid until Aug 31st or for the first 20 orders only.\n2ml : 89฿ (Lasts ~1 week)\n5ml : 169฿ (Lasts ~2 weeks)\n10ml : 299฿ (Lasts ~1 - 2 month)\n🫶 Meetup available at Maejo University.\n📦 Nationwide shipping fee: 35 THB\n🚚 Free shipping on orders over 799 THB 🙏\n\n100% Authentic guaranteed. Absolutely no dilutions.`,
            th: `✨️ 01 - Matcha 101 EDP\nจาก Scent Studio\n\n👥 Unisex\n\n🌟 กลิ่นโทนชาเขียวใสๆ ของ green tea & black tea\n🌟 กลิ่นแนวสะอาด เหมือนอาบน้ำ 100 รอบ พร้อมกับความละมุน\n🌟 เน้นตัวสะอาด เรียบร้อย ดูแลตัวเอง > เซ็กซี่\n\nRate :\nกลิ่น 8.5\nสะอาด 9\nสดชื่น 9\nหวาน 2\nติดทน 7 (6 - 7 hrs)\n\n🕙 เหมาะกับ ใช้ทุกวัน\n\n🎊 โปรเปิดร้านลดราคาถึง 31 ส.ค. นี้หรือจนกว่าจะครบ 20 ออเดอร์แรกเท่านั้นนน\n2ml : 89฿ (ใช้ได้ ~1 อาทิตย์)\n5ml : 169฿ (ใช้ได้ ~2 อาทิตย์)\n10ml : 299฿ (ใช้ได้ ~1 - 2 เดือน)\n🫶 นัดรับในมอแม่โจ้ได้นะครับ\n📦 ค่าจัดส่งทั่วประเทศ 35 บาท\n🚚 ซื้อครบ 799฿ ส่งฟรี🙏\n\nเน้นของแท้ ไม่ผสมแน่นอน 100%`
        }
    },
    {
        id: 2, brand: "Yves Saint Laurent", name: "Libre EDP", category: "designer",
        image: "images/perfumes/ysllibre-1.jpg",
        gallery: ["images/perfumes/ysllibre-1.jpg", "images/perfumes/ysllibre-2.jpg", "images/perfumes/ysllibre-3.jpg", "images/perfumes/ysllibre-4.jpg"],
        prices: { "2ml": 149, "5ml": 299, "10ml": 549 }, originalPrices: { "2ml": 159, "5ml": 319, "10ml": 579 },
        notes: { top: "Lavender, Mandarin Orange", middle: "Orange Blossom, Jasmine", base: "Madagascar Vanilla, Musk" },
        desc: {
            en: `✨️ YSL Libre EDP\nBy Yves Saint Laurent\n\n👥 Women\n\n🌟 A floral scent beautifully blended with lavender and vanilla.\n🌟 Radiates a clean, luxuriously expensive, and effortlessly sexy vibe.\n🌟 Emphasizes a classy and sophisticated aura.\n\nRatings:\nScent: 9.5\nClean: 8\nLuxury: 9.5\nSexy: 9\nSweet: 6\nLongevity: 9 (8 - 12 hrs)\n\n🕙 Best for: Work, dates, special events, or everyday wear.\n\n🎊 Grand Opening Promo! Valid until Aug 31st or for the first 20 orders only.\n2ml : 159฿ (Lasts ~1 week)\n5ml : 319฿ (Lasts ~2 weeks)\n10ml : 579฿ (Lasts ~1 - 2 month)\n📦 Nationwide shipping fee: 35 THB\n🫶 Meetup available at Maejo University.\n\n100% Authentic guaranteed. Freshly decanted from the original bottle. Absolutely no dilutions.`,
            th: `✨️ YSL Libre EDP\nจาก Yves Saint Laurent\n\n👥 Women / unisex\n\n🌟 กลิ่นดอกไม้ ผสมลาเวนเดอร์และวานิลลา\n🌟 ให้ความรู้สึกสะอาด ดูหรูแพง เซ็กซี่ แบบเริ่ดๆ\n🌟 เน้นตัวหอม มีคลาส\n\nRate :\nกลิ่น 9.5\nสะอาด 8\nหรู 9.5\nเซ็กซี่ 9\nหวาน 6\nติดทน 9 (8 - 12 hrs)\n\n🕙 เหมาะกับ ทำงาน ออกเดต ออกงานถ่ายงาน ใช้ได้ทุกวัน\n\n🎊 โปรเปิดร้าน ถึง 31 ส.ค.นี้ หรือจนกว่าจะครบ 20 ออเดอร์แรกเท่านั้นน\n2ml : 159฿ (ใช้ได้ ~1 อาทิตย์)\n5ml : 319฿ (ใช้ได้ ~2 อาทิตย์)\n10ml : 579฿ (ใช้ได้ ~1 - 2 เดือน)\n📦 ค่าจัดส่งทั่วไทย 35 บาท\n🫶 นัดรับในมอแม่โจ้ได้นะครับ\n\nเน้นของแท้ แบ่งจากขวดแท้ ไม่ผสมแน่นอน 100%`
        }
    },
    {
        id: 3, brand: "Christian Dior", name: "Sauvage EDP", category: "designer",
        image: "images/perfumes/diorsauvage-2.jpg",
        gallery: ["images/perfumes/diorsauvage-2.jpg", "images/perfumes/diorsauvage-4.jpg", "images/perfumes/diorsauvage-5.jpg", "images/perfumes/diorsauvage-3.jpg"],
        prices: { "2ml": 149, "5ml": 289, "10ml": 529 }, originalPrices: { "2ml": 159, "5ml": 309, "10ml": 549 },
        notes: { top: "Calabrian Bergamot, Pepper", middle: "Sichuan Pepper, Lavender, Patchouli", base: "Ambroxan, Cedarwood" },
        desc: {
            en: `✨️ Dior Sauvage EDP\nBy Christian Dior\n\n👥 Men / Unisex\n\n🌟 A fresh, clean, luxurious, and undeniably sexy scent. 👄\n🌟 A brilliant blend of Bergamot, Ambroxan, and woody notes that projects confidence, elegance, and immense charm.\n🌟 Emphasizes a clean, cool, and highly sophisticated aura.\n\nRatings:\nScent: 9.5\nClean: 9\nFresh: 9\nSexy: 9.5\nSweet: 2\nLongevity: 9 (8 - 12 hrs)\n\n🕙 Best for: Everyday wear, work, university, dates, or special events.\n\n🎊 Grand Opening Promo! Valid until Aug 31st or for the first 20 orders only.\n2ml : 159฿ (Lasts ~ 1 week)\n5ml : 309฿ (Lasts ~ 2 weeks)\n10ml : 549฿ (Lasts ~ 1 - 2 months)\n🫶 Meetup available at Maejo University.\n📦 Nationwide shipping fee: 35 THB\n🚚 Free shipping on orders over 799 THB 🙏\n\n100% Authentic guaranteed. Freshly decanted from the original bottle. Absolutely no dilutions.`,
            th: `✨️ Dior Sauvage EDP\nจาก Christian Dior\n\n👥 Men / Unisex\n\n🌟 กลิ่นสดชื่น สะอาด ดูหรูหราและ sexy 👄\n🌟 กลิ่นโทน Bergamot ผสม Ambroxan และไม้หอม ให้ลุคมั่นใจ ดูดี มีเสน่ห์ฝุดๆ\n🌟 เน้นสะอาด เท่ ดูแพงงงงง\n\nRate :\nกลิ่น 9.5\nสะอาด 9\nสดชื่น 9\nเซ็กซี่ 9.5\nหวาน 2\nติดทน 9 (8 - 12 hrs)\n\n🕙 เหมาะกับ ใช้ทุกวัน ทำงาน ไปมหาวิทยาลัย ออกเดต ออกงาน\n\n🎊 โปรเปิดร้านลดราคา ถึง 31 ส.ค.นี้ หรือจนกว่าจะครบ 20 ออเดอร์แรกเท่านั้นน\n2ml : 159฿ (ใช้ได้ ~1 อาทิตย์)\n5ml : 309฿ (ใช้ได้ ~2 อาทิตย์)\n10ml : 549฿ (ใช้ได้ ~1 - 2 เดือน)\n🫶 นัดรับในมอแม่โจ้ได้นะครับ\n📦 ค่าจัดส่งทั่วประเทศ 35 บาทหรือ\n🚚 ซื้อครบ 799 บาทส่งฟรี🙏\n\nเน้นของแท้ แบ่งจากขวดแท้ ไม่ผสมแน่นอน 100%`
        }
    },
    {
        id: 4, brand: "Mercedes-Benz", name: "Intense EDT", category: "designer",
        image: "images/perfumes/benzintense-1.jpg",
        gallery: ["images/perfumes/benzintense-1.jpg", "images/perfumes/benzintense-2.jpg", "images/perfumes/benzintense-3.jpg", "images/perfumes/benzintense-4.jpg"],
        prices: { "2ml": 99, "5ml": 199, "10ml": 359 }, originalPrices: { "2ml": 109, "5ml": 219, "10ml": 399 },
        notes: { top: "Bergamot, Lemon, Violet Leaf", middle: "Bourbon Pepper, Nutmeg", base: "Vetiver, Cedar, Cetalox" },
        desc: {
            en: `🖤 Mercedes-Benz Intense EDT\nBy Mercedes-Benz\n\n👥 For Men\n\n🌟 A fresh opening featuring notes of Bergamot, Lemon, Mandarin & Violet Leaf.\n🌟 Followed by a warm, mildly spicy kick from Bourbon Pepper, Nutmeg & Violet.\n🌟 Finishes with Vetiver, Cedar, Cetalox & Patchouli, delivering an intense, cool, and highly sophisticated vibe. It truly feels like a gentleman wearing a sharp suit and driving a Benz! 😎\n\nRatings:\nScent: 8.5\nClean: 7.5\nFresh: 8\nClassy/Cool: 9\nSweet: 1\nLongevity: 7 (4 - 6 hrs)\n\n🕙 Best for:\nThose who love a cool, expensive-smelling, non-sweet fragrance. Perfect for first jobbers, dates, night outs, or university wear.\n\n😳 Mood: Woody • Spicy • Fresh • Masculine • Sophisticated\n\n🎊 Grand Opening Promo! Valid until Aug 31st or for the first 20 orders only.\n2ml : 109฿ (Lasts ~ 1 week)\n5ml : 219฿ (Lasts ~ 2 weeks)\n10ml : 399฿ (Lasts ~ 1 - 2 months)\n🫶 Meetup available at Maejo University.\n📦 Nationwide shipping fee: 35 THB\n🚚 Free shipping on orders over 799 THB 🙏\n\n100% Authentic guaranteed. Freshly decanted from the original bottle. Absolutely no dilutions.`,
            th: `🖤 Mercedes-Benz Intense EDT\nจาก Mercedes-Benz\n\n👥 For Men\n\n🌟 กลิ่นสดชื่นจาก Bergamot, Lemon, Mandarin & Violet Leaf\n🌟 ตามด้วยความเผ็ดอุ่น ๆ แบบแซ่บซี๊ดเบาๆ จาก Bourbon Pepper, Nutmeg & Violet\n🌟 ปิดท้ายด้วยกลิ่นของ Vetiver, Cedar, Cetalox & Patchouli ให้ความรู้สึกเข้ม เท่ และดูโตแบบผู้ใหญ่มว้ากกกกกก เหมือนใส่สูทขับเบนซ์ 😎\n\nRate :\nกลิ่น 8.5\nสะอาด 7.5\nสดชื่น 8\nหรู/เท่ 9\nหวาน 1\nติดทน 7 (4 - 6 hrs)\n\n🕙 เหมาะกับ:\nคนที่ชอบกลิ่น เท่ ดูแพง ไม่หวาน เหมาะกับ First Jobber ออกเดต เที่ยวกลางคืน ไปมหาวิทยาลัย\n\n😳 Mood : Woody • Spicy • Fresh • Masculine • Sophisticated\n\n🎊 โปรเปิดร้านลดราคาถึง 31 ส.ค. นี้หรือจนกว่าจะครบ 20 ออเดอร์แรกเท่านั้นนน\n2ml : 109฿ (ใช้ได้ ~1 อาทิตย์)\n5ml : 219฿ (ใช้ได้ ~2 อาทิตย์)\n10ml : 399฿ (ใช้ได้ ~1 - 2 เดือน)\n🫶 นัดรับในมอแม่โจ้ได้นะครับ\n📦 ค่าจัดส่งทั่วประเทศ 35 บาท\n🚚 ซื้อครบ 799฿ ส่งฟรี🙏\n\nเน้นของแท้ แบ่งจากขวดแท้ ไม่ผสมแน่นอน 100%`
        }
    }
];

let cart = JSON.parse(localStorage.getItem('lamun_cart')) || [];
let currentProduct = null; let selectedSize = '2ml'; let currentImageIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    try {
        applyTheme(isDarkMode); applyLanguage(currentLang); loadProductDetail(); updateCartUI();

        if (window.innerWidth >= 1024) {
            initCustomCursor();
            setTimeout(init3DTilt, 500);
        }
    } catch (error) { console.error("System error:", error); document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible')); }
});

function loadProductDetail() {
    const urlParams = new URLSearchParams(window.location.search); const productId = parseInt(urlParams.get('id'));
    currentProduct = products.find(p => p.id === productId); if (!currentProduct) currentProduct = products[0];
    document.title = currentProduct.name + " | lamun.cur";

    document.getElementById('detail-brand').innerText = currentProduct.brand;
    document.getElementById('detail-name').innerText = currentProduct.name;
    const descText = currentProduct.desc ? currentProduct.desc[currentLang] : "";
    document.getElementById('detail-desc').innerHTML = descText.replace(/\n/g, '<br>');

    const notesContainer = document.getElementById('detail-notes');
    if (notesContainer && currentProduct.notes) {
        document.getElementById('note-top').innerText = currentProduct.notes.top;
        document.getElementById('note-mid').innerText = currentProduct.notes.middle;
        document.getElementById('note-base').innerText = currentProduct.notes.base;
        notesContainer.style.display = 'block';
    } else if (notesContainer) { notesContainer.style.display = 'none'; }

    const sizeContainer = document.getElementById('detail-sizes'); sizeContainer.innerHTML = '';
    Object.keys(currentProduct.prices).forEach((size, index) => {
        if (index === 0) selectedSize = size;
        const btn = document.createElement('button');
        btn.className = `size-btn text-xs uppercase tracking-widest pb-1 border-b transition-colors ${index === 0 ? 'border-lux-black dark:border-white text-lux-black dark:text-white font-medium' : 'border-transparent text-lux-gray hover:text-lux-black dark:hover:text-white'} cursor-pointer`;
        btn.innerText = size; btn.onclick = () => selectSize(size, btn); sizeContainer.appendChild(btn);
    });

    updatePriceDisplay(); document.getElementById('detail-add-btn').onclick = () => { addToCart(currentProduct, selectedSize, currentProduct.prices[selectedSize]); };
    renderProductGallery(); loadRecommendedProducts();
    setTimeout(() => { document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible')); }, 100);
}

function renderProductGallery() {
    const slider = document.getElementById('product-slider'); const dots = document.getElementById('product-dots');
    slider.innerHTML = ''; dots.innerHTML = ''; currentImageIndex = 0;
    const imageList = currentProduct.gallery && currentProduct.gallery.length > 0 ? currentProduct.gallery : [currentProduct.image];
    imageList.forEach((imgSrc, index) => {
        const imgEl = document.createElement('img'); imgEl.src = imgSrc;
        imgEl.className = `absolute inset-0 w-full h-full object-cover transition-opacity duration-500 cursor-pointer ${index === 0 ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'}`;
        imgEl.onclick = () => openLightbox(); slider.appendChild(imgEl);
        if (imageList.length > 1) {
            const dot = document.createElement('div');
            dot.className = `rounded-full cursor-pointer transition-all duration-300 ${index === 0 ? 'w-6 h-2 md:h-2.5 bg-lux-black dark:bg-white' : 'w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-lux-black dark:hover:bg-white'}`;
            dot.onclick = () => { currentImageIndex = index; updateGalleryUI(); }; dots.appendChild(dot);
        }
    });
    const arrows = document.querySelectorAll('.fa-chevron-left, .fa-chevron-right');
    arrows.forEach(arrow => { const btn = arrow.parentElement; if (imageList.length <= 1) btn.style.display = 'none'; else btn.style.display = 'flex'; });
}

function nextImage() { const total = currentProduct.gallery ? currentProduct.gallery.length : 1; currentImageIndex = (currentImageIndex + 1) % total; updateGalleryUI(); }
function prevImage() { const total = currentProduct.gallery ? currentProduct.gallery.length : 1; currentImageIndex = (currentImageIndex - 1 + total) % total; updateGalleryUI(); }
function updateGalleryUI() {
    const sliderImgs = document.getElementById('product-slider').children; const dots = document.getElementById('product-dots').children;
    Array.from(sliderImgs).forEach((img, index) => {
        if (index === currentImageIndex) { img.classList.remove('opacity-0', 'pointer-events-none', 'z-0'); img.classList.add('opacity-100', 'z-10'); }
        else { img.classList.add('opacity-0', 'pointer-events-none', 'z-0'); img.classList.remove('opacity-100', 'z-10'); }
    });
    Array.from(dots).forEach((dot, index) => {
        if (index === currentImageIndex) { dot.className = 'rounded-full cursor-pointer transition-all duration-300 w-6 h-2 md:h-2.5 bg-lux-black dark:bg-white'; }
        else { dot.className = 'rounded-full cursor-pointer transition-all duration-300 w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-lux-black dark:hover:bg-white'; }
    });
    const lightboxImg = document.getElementById('lightbox-img'); if (lightboxImg && document.getElementById('lightbox').classList.contains('hidden') === false) { lightboxImg.src = currentProduct.gallery[currentImageIndex]; }
}

function openLightbox() {
    const lightbox = document.getElementById('lightbox'); const lightboxImg = document.getElementById('lightbox-img');
    const imageList = currentProduct.gallery && currentProduct.gallery.length > 0 ? currentProduct.gallery : [currentProduct.image];
    lightboxImg.src = imageList[currentImageIndex]; lightbox.classList.remove('hidden'); void lightbox.offsetWidth;
    lightbox.classList.remove('opacity-0'); lightboxImg.classList.remove('scale-95'); lightboxImg.classList.add('scale-100'); document.body.style.overflow = 'hidden';
}
function closeLightbox() {
    const lightbox = document.getElementById('lightbox'); const lightboxImg = document.getElementById('lightbox-img');
    lightbox.classList.add('opacity-0'); lightboxImg.classList.remove('scale-100'); lightboxImg.classList.add('scale-95');
    setTimeout(() => { lightbox.classList.add('hidden'); document.body.style.overflow = ''; }, 300);
}

function selectSize(size, clickedBtn) {
    selectedSize = size;
    document.querySelectorAll('.size-btn').forEach(b => { b.classList.remove('border-lux-black', 'dark:border-white', 'text-lux-black', 'dark:text-white', 'font-medium'); b.classList.add('border-transparent', 'text-lux-gray'); });
    clickedBtn.classList.remove('border-transparent', 'text-lux-gray'); clickedBtn.classList.add('border-lux-black', 'dark:border-white', 'text-lux-black', 'dark:text-white', 'font-medium');
    updatePriceDisplay();
}

function updatePriceDisplay() {
    const priceEl = document.getElementById('detail-price'); const origPriceEl = document.getElementById('detail-original-price');
    priceEl.style.opacity = 0; if (origPriceEl) origPriceEl.style.opacity = 0;
    setTimeout(() => {
        priceEl.innerText = `฿${currentProduct.prices[selectedSize]}`;
        if (currentProduct.originalPrices && currentProduct.originalPrices[selectedSize]) { origPriceEl.innerText = `฿${currentProduct.originalPrices[selectedSize]}`; origPriceEl.style.display = 'inline-block'; }
        else { origPriceEl.style.display = 'none'; }
        priceEl.style.opacity = 1; if (origPriceEl) origPriceEl.style.opacity = 1;
    }, 200);
}

function loadRecommendedProducts() {
    const grid = document.getElementById('recommended-grid');
    const recommended = products.filter(p => p.id !== currentProduct.id).slice(0, 3);
    const langKey = translations[currentLang] ? currentLang : 'en';
    const startsAtText = translations[langKey].starts_at;

    recommended.forEach((product, i) => {
        const delay = (i % 3) * 100; const card = document.createElement('div'); card.className = `reveal group flex flex-col`; card.style.transitionDelay = `${delay}ms`;
        card.innerHTML = `<a href="product-detail.html?id=${product.id}" class="block img-container bg-lux-light dark:bg-lux-dark mb-4 md:mb-6 aspect-[4/5] cursor-pointer"><img src="${product.image}" class="w-full h-full object-cover img-zoom"></a><div class="flex-1 flex flex-col px-1 md:px-2 text-center"><p class="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-lux-gray mb-1">${product.brand}</p><a href="product-detail.html?id=${product.id}" class="hover:text-lux-gold transition-colors inline-block w-fit mx-auto cursor-pointer"><h3 class="font-serif text-lg md:text-xl lg:text-2xl text-lux-black dark:text-white mb-2 cursor-pointer">${product.name}</h3></a><span class="font-serif text-base md:text-lg text-lux-black dark:text-white mt-auto pt-2"><span data-i18n="starts_at">${startsAtText}</span> ฿${product.prices['2ml']}</span></div>`;
        grid.appendChild(card);
    });
    setTimeout(() => { init3DTilt(); rebindCursorHover(); }, 300);
}

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
function applyTheme(dark) {
    const html = document.documentElement; const icon = document.querySelector('#theme-toggle i');
    if (dark) { html.classList.add('dark'); if (icon) { icon.classList.remove('fa-moon'); icon.classList.add('fa-sun'); } }
    else { html.classList.remove('dark'); if (icon) { icon.classList.remove('fa-sun'); icon.classList.add('fa-moon'); } }
}
function toggleTheme() { isDarkMode = !isDarkMode; setStore('lamun_theme', isDarkMode ? 'dark' : 'light'); applyTheme(isDarkMode); }

function saveCart() { localStorage.setItem('lamun_cart', JSON.stringify(cart)); }
function addToCart(product, size, price) {
    const existing = cart.find(item => item.id === product.id && item.size === size);
    if (existing) existing.quantity += 1; else cart.push({ ...product, size, price, quantity: 1 });
    saveCart(); updateCartUI(); showToast(`ADDED ${product.name.toUpperCase()} (${size.toUpperCase()})`);
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
    if (!overlay || !drawer) return; const isClosed = drawer.classList.contains('translate-x-full');
    if (isClosed) { overlay.classList.remove('opacity-0', 'pointer-events-none'); drawer.classList.remove('translate-x-full'); document.body.style.overflow = 'hidden'; }
    else { overlay.classList.add('opacity-0', 'pointer-events-none'); drawer.classList.add('translate-x-full'); document.body.style.overflow = ''; }
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
        if(modal) {
            modal.classList.remove('opacity-0', 'pointer-events-none');
            document.getElementById('checkout-container').classList.remove('scale-95');
            document.body.style.overflow = 'hidden'; 
        }
    }, 300);
}

function closeCheckout() {
    const modal = document.getElementById('checkout-modal');
    if(!modal) return;
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
                colorDark : "#000000",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.M
            });
            
            setTimeout(() => {
                loading.style.opacity = 0;
                qrContainer.style.opacity = 1;
                const canvas = qrContainer.querySelector('canvas');
                const img = qrContainer.querySelector('img');
                if(canvas) { canvas.style.width = '100%'; canvas.style.height = '100%'; canvas.style.objectFit = 'contain'; }
                if(img) { img.style.width = '100%'; img.style.height = '100%'; img.style.objectFit = 'contain'; }
            }, 300);

        } catch (error) {
            loading.innerHTML = '<span class="text-[10px] text-red-500 font-sans text-center">เกิดข้อผิดพลาด<br>โปรดตรวจสอบเลขบัญชี 15 หลัก</span>';
        }
    }
    
    document.getElementById('qr-amount').textContent = `฿ ${(total).toLocaleString()}`;
    const displayPromptpay = document.getElementById('display-promptpay');
    if(displayPromptpay) displayPromptpay.textContent = cleanID;
    
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
                        errorBox.textContent = langKey === 'th' ? "รูปภาพนี้ไม่มี QR Code ไม่สามารถใช้เป็นสลิปได้ครับ" : "No QR Code detected. Please upload a valid transfer slip.";
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

let toastTimer;
function showToast(msg) {
    const toast = document.getElementById('toast'); const toastMsg = document.getElementById('toast-msg');
    if (!toast || !toastMsg) return;
    toastMsg.textContent = msg; toast.classList.remove('translate-y-10', 'opacity-0');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => { toast.classList.add('translate-y-10', 'opacity-0'); }, 3000);
}

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
        cursorOutline.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 150, fill: "forwards" });
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
document.addEventListener("DOMContentLoaded", () => { setTimeout(hidePreloader, 300); });
setTimeout(hidePreloader, 2500);

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

function copyData(type) {
    let textToCopy = "";
    if (type === 'amount') {
        textToCopy = document.getElementById('qr-amount').innerText.replace(/[^0-9.]/g, '');
    } else if (type === 'promptpay') {
        textToCopy = PROMPTPAY_ID;
    }
    navigator.clipboard.writeText(textToCopy).then(() => { showToast("Copied to clipboard!"); }).catch(err => { showToast("Failed to copy"); });
}

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
document.addEventListener("DOMContentLoaded", () => { setTimeout(initSubdistCustomDropdown, 100); });

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

let touchstartX = 0;
let touchendX = 0;

const imageArea = document.getElementById('product-slider');

if (imageArea) {
    imageArea.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    }, { passive: true });

    imageArea.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
}

function handleSwipe() {
    const swipeThreshold = 40;
    if (touchendX < touchstartX - swipeThreshold) {
        if (typeof nextImage === "function") nextImage(); 
    }
    if (touchendX > touchstartX + swipeThreshold) {
        if (typeof prevImage === "function") prevImage(); 
    }
}