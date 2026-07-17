import Headphone from '../assets/Headphone.png'
import SmartWatch from '../assets/SmartWatch.png'
import CompactPowder from '../assets/CompactPowder.png'
import fashionHeels from '../assets/fashionHeels.png'
import electronicsIphone17promax from '../assets/electronicsIphone17promax.png'
import electronicsSamsungS25Ultra from '../assets/electronicsSamsungS25Ultra.png'
import fashionBag from '../assets/fashionBag.png'
import beautyLipstick from '../assets/beautyLipstick.png'
import electronicsAirConditioner from '../assets/electronicsAirConditioner.png'

const FeatureProducts = [
    {
        id: 1,
        category:'electronics',
        title:'Wireless Headphones',
        price:'15',
        rating:'⭐⭐⭐⭐⭐4.8',
        detail:'🎧 Premium sound quality with deep bass and crystal-clear audio. 🔋 Long-lasting battery life for uninterrupted music and calls. 🎙️ Built-in microphone for clear voice calls and online meetings. 📶 Stable Bluetooth connectivity with fast and seamless pairing. 😌 Soft, comfortable ear cushions for extended listening sessions. ⚡ Lightweight and foldable design, making it easy to carry anywhere. 💧 Durable build with a modern, stylish look suitable for everyday use.',
        image:Headphone
    },
    {
        id: 2,
        category:'watches',
        title:'Smart Watch',
        price:'100',
        rating:'⭐⭐⭐⭐⭐4.5',
        detail:'⌚ Sleek and modern design, perfect for everyday wear. ❤️ Monitor your heart rate, sleep, and daily fitness activities. 📱 Receive calls, messages, and app notifications directly on your wrist. 🔋 Long-lasting battery life for uninterrupted performance. 💧 Water-resistant design, suitable for workouts and outdoor activities. 🏃 Multiple sports modes to accurately track your exercises. 🌐 Compatible with both Android and iOS devices for seamless connectivity.',
        image:SmartWatch
    },
    {
        id: 3,
        category:'beauty',
        title:'Compact Powder',
        price:'65',
        rating:'⭐⭐⭐⭐4.0',
        detail:'✨ Smooth, lightweight formula for a natural matte finish. 🌸 Controls excess oil and reduces unwanted shine throughout the day. 💖 Blends evenly to give a soft, flawless complexion. 🛡️ Helps set foundation and makeup for longer-lasting wear. 🎒 Compact, travel-friendly case for quick touch-ups anywhere. 🌿 Suitable for everyday use and comfortable on all skin types. 💄 Leaves your skin looking fresh, radiant, and beautifully polished.',
        image:CompactPowder
    },
    {
        id: 4,
        category:'fashion',
        title:'Girl Heels',
        price:'40',
        rating:'⭐⭐⭐⭐⭐4.7',
        detail:'👠 Elegant & Stylish Design – Perfect for parties, weddings, birthdays, and special occasions. ✨ Premium Quality Material – Made with durable materials for a fashionable look and long-lasting wear. 🦶 Comfortable Fit – Soft cushioned insole provides all-day comfort with every step. 💖 Stable Heel Support – Designed with a secure heel to offer better balance and confidence while walking. 🎀 Versatile Fashion – Pairs beautifully with dresses, skirts, jeans, and traditional outfits. 🌟 Lightweight Construction – Easy to wear for extended periods without feeling heavy on the feet. 🛍️ Perfect Gift Choice – A stylish footwear option for birthdays, holidays, and other special celebrations.',
        image:fashionHeels
    },
    {
        id: 5,
        category:'electronics',
        title:'iPhone 17 Pro Max',
        price:'920',
        rating:'⭐⭐⭐⭐⭐5.0',
        detail:`📱 Stunning Cosmic Orange Finish - A bold and premium color that stands out with a sleek, modern design. ⚡ Blazing-Fast Performance - Powered by Apple's latest-generation chip for smooth multitasking, gaming, and everyday use. 📸 Advanced Pro Camera System – Capture breathtaking photos and cinematic-quality videos with enhanced AI photography features. 🔋 All-Day Battery Life – Engineered to keep up with your day, offering long-lasting power and fast charging support. 🖥️ Immersive Super Retina Display – Enjoy vibrant colors, deep blacks, and ultra-smooth scrolling with a high-refresh-rate display. 🛡️ Premium Build Quality – Crafted with durable materials and designed for improved water and dust resistance. 📶 Next-Generation Connectivity - Experience lightning-fast 5G speeds, Wi-Fi, and seamless integration with the Apple ecosystem.`,
        image:electronicsIphone17promax
    },
    {
        id: 6,
        category:'electronics',
        title:'Samsung S25 Ultra, 512GB, Titanium',
        price:'790',
        rating:'⭐⭐⭐⭐⭐5.0',
        detail:'📱 Premium Titanium Finish – Crafted with a durable titanium frame for a sleek, modern, and luxurious look. ⚡ Flagship-Level Performance – Powered by a next-generation processor for ultra-fast gaming, multitasking, and AI-powered features. 📸 Professional Camera System – Capture stunning photos and crystal-clear videos with advanced zoom and AI image enhancement. 🖥️ Dynamic AMOLED 2X Display – Experience vibrant colors, deep contrast, and ultra-smooth visuals with a high refresh rate. 🔋 Long-Lasting Battery – Stay productive all day with a powerful battery that supports fast wired and wireless charging. ✍️ Built-in S Pen Support – Boost creativity and productivity by taking notes, sketching, and navigating with precision. 🌐 Advanced Connectivity & Security – Enjoy blazing-fast 5G, Wi-Fi, and enhanced security features to keep your data protected.',
        image:electronicsSamsungS25Ultra
    },
    {
        id: 7,
        category:'fashion',
        title:'Women Hand Bag',
        price:'25',
        rating:'⭐⭐⭐⭐⭐4.6',
        detail:`Crafted from premium-quality materials for long-lasting durability and everyday elegance.
        Spacious main compartment with multiple pockets to keep your essentials organized.
        Stylish and modern design that complements casual, office, and party outfits.
        Comfortable top handles and an adjustable shoulder strap for versatile carrying options.
        Secure zipper closure helps keep your belongings safe while you're on the go.
        Lightweight construction offers all-day comfort without compromising on storage space.
        Perfect for work, shopping, travel, or daily use, making it a fashionable and practical accessory.`,
        image:fashionBag
    },
    {
        id: 8,
        category:'beauty',
        title:'Lipstick',
        price:'10',
        rating:'⭐⭐⭐⭐4.1',
        detail:'📱 Premium Titanium Finish – Crafted with a durable titanium frame for a sleek, modern, and luxurious look. ⚡ Flagship-Level Performance – Powered by a next-generation processor for ultra-fast gaming, multitasking, and AI-powered features. 📸 Professional Camera System – Capture stunning photos and crystal-clear videos with advanced zoom and AI image enhancement. 🖥️ Dynamic AMOLED 2X Display – Experience vibrant colors, deep contrast, and ultra-smooth visuals with a high refresh rate. 🔋 Long-Lasting Battery – Stay productive all day with a powerful battery that supports fast wired and wireless charging. ✍️ Built-in S Pen Support – Boost creativity and productivity by taking notes, sketching, and navigating with precision. 🌐 Advanced Connectivity & Security – Enjoy blazing-fast 5G, Wi-Fi, and enhanced security features to keep your data protected.',
        image:beautyLipstick
    },
    {
        id: 9,
        category:'electronics',
        title:'Air Conditioner 1.5-Ton',
        price:'499',
        rating:'⭐⭐⭐⭐⭐4.9',
        detail:`Powerful 1.5 Ton cooling capacity ideal for medium to large-sized rooms.
        Energy-efficient performance helps reduce electricity consumption while maintaining comfort.
        Fast cooling technology quickly brings your room to the desired temperature.
        Multiple operating modes including Cool, Fan, Dry, and Sleep for year-round convenience.
        Low-noise operation ensures a peaceful environment for work, relaxation, and sleep.
        Easy-to-use remote control with timer and temperature adjustment for added convenience.
        Durable, reliable design with efficient airflow for consistent cooling and long-lasting performance.`,
        image:electronicsAirConditioner
    },
]

export default FeatureProducts