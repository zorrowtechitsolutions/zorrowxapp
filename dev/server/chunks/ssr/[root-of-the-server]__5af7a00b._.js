module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/mock-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DISCOUNT_CODES",
    ()=>DISCOUNT_CODES,
    "PRODUCTS",
    ()=>PRODUCTS,
    "getAIRecommendedProducts",
    ()=>getAIRecommendedProducts,
    "getAllCategories",
    ()=>getAllCategories,
    "getCategoryTrending",
    ()=>getCategoryTrending,
    "getFlashSaleProducts",
    ()=>getFlashSaleProducts,
    "getProductsByCategory",
    ()=>getProductsByCategory,
    "getTrendingProducts",
    ()=>getTrendingProducts
]);
const PRODUCTS = [
    {
        id: '1',
        name: 'Premium Oversized Hoodie',
        price: 3499,
        image: '/products/01-hoodie.jpg',
        category: 'Men',
        size: [
            'XS',
            'S',
            'M',
            'L',
            'XL',
            'XXL'
        ],
        color: [
            'Black',
            'White',
            'Gray'
        ],
        description: 'Premium oversized hoodie with embroidered logo. 100% organic cotton blend.',
        rating: 4.8,
        inStock: true
    },
    {
        id: '2',
        name: 'Urban Cargo Pants',
        price: 2999,
        image: '/products/02-cargo-pants.jpg',
        category: 'Men',
        size: [
            '28',
            '30',
            '32',
            '34',
            '36'
        ],
        color: [
            'Black',
            'Olive',
            'Gray'
        ],
        description: 'Tactical cargo pants with multiple pockets. Perfect for streetwear aesthetics.',
        rating: 4.6,
        inStock: true
    },
    {
        id: '3',
        name: 'Crop Top Tee',
        price: 1499,
        image: '/products/03-crop-top.jpg',
        category: 'Women',
        size: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
        color: [
            'White',
            'Black',
            'Pink'
        ],
        description: 'Minimalist crop top with reinforced stitching. Perfect for layering.',
        rating: 4.7,
        inStock: true
    },
    {
        id: '4',
        name: 'High Waist Jeans',
        price: 3299,
        image: '/products/04-jeans.jpg',
        category: 'Women',
        size: [
            '24',
            '26',
            '28',
            '30',
            '32'
        ],
        color: [
            'Dark Indigo',
            'Light Blue',
            'Black'
        ],
        description: 'Premium denim with perfect fit. Ethically sourced cotton.',
        rating: 4.9,
        inStock: true
    },
    {
        id: '5',
        name: 'Unisex Windbreaker',
        price: 2699,
        image: '/products/05-windbreaker.jpg',
        category: 'Unisex',
        size: [
            'XS',
            'S',
            'M',
            'L',
            'XL',
            'XXL'
        ],
        color: [
            'Black',
            'Neon Green',
            'Electric Blue'
        ],
        description: 'Water-resistant windbreaker with hidden pockets. Perfect for outdoor activities.',
        rating: 4.5,
        inStock: true
    },
    {
        id: '6',
        name: 'Classic Canvas Sneakers',
        price: 1999,
        image: '/products/06-sneakers.jpg',
        category: 'Accessories',
        size: [
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12'
        ],
        color: [
            'White',
            'Black',
            'Navy'
        ],
        description: 'Timeless canvas sneakers with rubber sole. Versatile and comfortable.',
        rating: 4.6,
        inStock: true
    },
    {
        id: '7',
        name: 'Tech Backpack',
        price: 4499,
        image: '/products/07-backpack.jpg',
        category: 'Accessories',
        color: [
            'Black',
            'Gray'
        ],
        description: 'Smart tech backpack with USB charging port. Multiple compartments for organization.',
        rating: 4.7,
        inStock: true
    },
    {
        id: '8',
        name: 'Oversized Blazer',
        price: 5299,
        image: '/products/08-blazer.jpg',
        category: 'Women',
        size: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
        color: [
            'Black',
            'White',
            'Camel'
        ],
        description: 'Statement oversized blazer. Perfect for power dressing.',
        rating: 4.8,
        inStock: true
    },
    {
        id: '9',
        name: 'Vintage Band Tee',
        price: 1299,
        image: '/products/09-band-tee.jpg',
        category: 'Unisex',
        size: [
            'XS',
            'S',
            'M',
            'L',
            'XL',
            'XXL'
        ],
        color: [
            'Black',
            'Dark Gray'
        ],
        description: 'Authentic vintage band merchandise. Limited edition.',
        rating: 4.4,
        inStock: true
    },
    {
        id: '10',
        name: 'Leather Crossbody Bag',
        price: 6999,
        image: '/products/10-leather-bag.jpg',
        category: 'Accessories',
        color: [
            'Black',
            'Brown',
            'Tan'
        ],
        description: 'Genuine leather crossbody bag with adjustable strap. Timeless design.',
        rating: 4.9,
        inStock: true
    },
    // MEN'S APPAREL
    {
        id: '11',
        name: 'Classic Crew Neck T-Shirt',
        price: 999,
        image: '/products/11-tshirt.jpg',
        category: 'Men',
        size: [
            'S',
            'M',
            'L',
            'XL',
            'XXL'
        ],
        color: [
            'Black',
            'White',
            'Navy'
        ],
        description: 'Premium 100% cotton crew neck t-shirt. Essential for any wardrobe.',
        rating: 4.7,
        inStock: true
    },
    {
        id: '12',
        name: 'Denim Jacket',
        price: 4499,
        image: '/products/12-denim-jacket.jpg',
        category: 'Men',
        size: [
            'S',
            'M',
            'L',
            'XL'
        ],
        color: [
            'Dark Blue',
            'Light Blue',
            'Black'
        ],
        description: 'Classic denim jacket with button closure. Timeless streetwear piece.',
        rating: 4.8,
        inStock: true
    },
    // WOMEN'S APPAREL
    {
        id: '13',
        name: 'Women\'s Oversized Hoodie',
        price: 3299,
        image: '/products/13-womens-hoodie.jpg',
        category: 'Women',
        size: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
        color: [
            'Black',
            'Pink',
            'White'
        ],
        description: 'Comfortable oversized hoodie perfect for casual wear.',
        rating: 4.6,
        inStock: true
    },
    {
        id: '14',
        name: 'Women\'s Leather Jacket',
        price: 7499,
        image: '/products/14-womens-jacket.jpg',
        category: 'Women',
        size: [
            'XS',
            'S',
            'M',
            'L',
            'XL'
        ],
        color: [
            'Black',
            'Brown',
            'Red'
        ],
        description: 'Premium leather jacket for the ultimate streetwear look.',
        rating: 4.9,
        inStock: true
    },
    // SHOES
    {
        id: '15',
        name: 'Running Sneakers Pro',
        price: 5999,
        image: '/products/15-running-shoes.jpg',
        category: 'Shoes',
        size: [
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12'
        ],
        color: [
            'Black',
            'White',
            'Blue'
        ],
        description: 'High-performance running shoes with cushioned sole.',
        rating: 4.8,
        inStock: true
    },
    {
        id: '16',
        name: 'Casual Leather Shoes',
        price: 3999,
        image: '/products/16-casual-shoes.jpg',
        category: 'Shoes',
        size: [
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12'
        ],
        color: [
            'Black',
            'Brown',
            'Tan'
        ],
        description: 'Versatile casual leather shoes for everyday wear.',
        rating: 4.7,
        inStock: true
    },
    // CAPS
    {
        id: '17',
        name: 'Classic Baseball Cap',
        price: 1299,
        image: '/products/17-baseball-cap.jpg',
        category: 'Caps',
        color: [
            'Black',
            'White',
            'Navy'
        ],
        description: 'Timeless baseball cap with adjustable strap.',
        rating: 4.6,
        inStock: true
    },
    {
        id: '18',
        name: 'Street Logo Cap',
        price: 1599,
        image: '/products/18-logo-cap.jpg',
        category: 'Caps',
        color: [
            'Black',
            'Gray',
            'Khaki'
        ],
        description: 'Embroidered logo cap perfect for streetwear style.',
        rating: 4.7,
        inStock: true
    },
    // ACCESSORIES
    {
        id: '19',
        name: 'Stainless Steel Watch',
        price: 4999,
        image: '/products/19-watch.jpg',
        category: 'Accessories',
        color: [
            'Silver',
            'Gold',
            'Black'
        ],
        description: 'Premium stainless steel watch with leather strap.',
        rating: 4.8,
        inStock: true
    },
    {
        id: '20',
        name: 'Classic Sunglasses',
        price: 2999,
        image: '/products/20-sunglasses.jpg',
        category: 'Accessories',
        color: [
            'Black',
            'Brown',
            'Gold'
        ],
        description: 'UV protection sunglasses with polarized lenses.',
        rating: 4.7,
        inStock: true
    },
    // GADGETS
    {
        id: '21',
        name: 'Wireless Earbuds Pro',
        price: 5499,
        image: '/products/21-earbuds.jpg',
        category: 'Gadgets',
        color: [
            'Black',
            'White',
            'Silver'
        ],
        description: 'Premium wireless earbuds with active noise cancellation.',
        rating: 4.9,
        inStock: true
    },
    {
        id: '22',
        name: 'Smart Fitness Band',
        price: 3499,
        image: '/products/22-fitness-band.jpg',
        category: 'Gadgets',
        color: [
            'Black',
            'Blue',
            'Pink'
        ],
        description: 'Track your fitness with this advanced smart band.',
        rating: 4.6,
        inStock: true
    }
];
const DISCOUNT_CODES = {
    SAVE10: 0.1
};
const getProductsByCategory = (category)=>{
    return PRODUCTS.filter((p)=>p.category === category);
};
const getTrendingProducts = ()=>{
    return PRODUCTS.filter((p)=>p.rating && p.rating >= 4.7).slice(0, 8);
};
const getAIRecommendedProducts = ()=>{
    return PRODUCTS.sort(()=>Math.random() - 0.5).slice(0, 4);
};
const getFlashSaleProducts = ()=>{
    return PRODUCTS.slice(0, 3);
};
const getCategoryTrending = (category)=>{
    return PRODUCTS.filter((p)=>p.category === category && p.rating && p.rating >= 4.7).slice(0, 6);
};
const getAllCategories = ()=>{
    return [
        'Men',
        'Women',
        'Shoes',
        'Caps',
        'Accessories',
        'Gadgets'
    ];
};
}),
"[project]/components/features/typing-indicator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypingIndicator",
    ()=>TypingIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function TypingIndicator() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-start",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-xs px-4 py-2 rounded-2xl bg-white/10 text-white rounded-bl-none flex items-center gap-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    children: "ZORROW AI is typing"
                }, void 0, false, {
                    fileName: "[project]/components/features/typing-indicator.tsx",
                    lineNumber: 5,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce",
                            style: {
                                animationDelay: '0s',
                                animationDuration: '1.4s'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/features/typing-indicator.tsx",
                            lineNumber: 7,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce",
                            style: {
                                animationDelay: '0.2s',
                                animationDuration: '1.4s'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/features/typing-indicator.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce",
                            style: {
                                animationDelay: '0.4s',
                                animationDuration: '1.4s'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/features/typing-indicator.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/features/typing-indicator.tsx",
                    lineNumber: 6,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/features/typing-indicator.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/features/typing-indicator.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/calculations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyDiscount",
    ()=>applyDiscount,
    "calculateGST",
    ()=>calculateGST,
    "calculateShipping",
    ()=>calculateShipping,
    "calculateTotal",
    ()=>calculateTotal
]);
const calculateShipping = (subtotal)=>{
    return subtotal > 1999 ? 0 : 99;
};
const calculateGST = (subtotal)=>{
    return Math.round(subtotal * 0.18 * 100) / 100;
};
const applyDiscount = (subtotal, code)=>{
    if (code === 'SAVE10') {
        return Math.round(subtotal * 0.1 * 100) / 100;
    }
    return 0;
};
const calculateTotal = (subtotal, discountCode)=>{
    const gst = calculateGST(subtotal);
    const shipping = calculateShipping(subtotal);
    const discount = applyDiscount(subtotal, discountCode);
    const total = subtotal + gst + shipping - discount;
    return {
        subtotal,
        gst,
        shipping,
        discount,
        total: Math.round(total * 100) / 100
    };
};
}),
"[project]/lib/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCartStore",
    ()=>useCartStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/calculations.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const useCartStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        items: [],
        wishlist: [],
        appliedDiscount: null,
        addToCart: (product, quantity, size, color)=>{
            set((state)=>{
                const existingItem = state.items.find((item)=>item.productId === product.id && item.size === size && item.color === color);
                if (existingItem) {
                    return {
                        items: state.items.map((item)=>item.productId === product.id && item.size === size && item.color === color ? {
                                ...item,
                                quantity: item.quantity + quantity
                            } : item)
                    };
                }
                return {
                    items: [
                        ...state.items,
                        {
                            productId: product.id,
                            quantity,
                            size,
                            color
                        }
                    ]
                };
            });
        },
        removeFromCart: (productId)=>{
            set((state)=>({
                    items: state.items.filter((item)=>item.productId !== productId)
                }));
        },
        updateQuantity: (productId, quantity)=>{
            if (quantity <= 0) {
                get().removeFromCart(productId);
                return;
            }
            set((state)=>({
                    items: state.items.map((item)=>item.productId === productId ? {
                            ...item,
                            quantity
                        } : item)
                }));
        },
        applyDiscount: (code)=>{
            if (code === 'SAVE10') {
                set({
                    appliedDiscount: code
                });
                return true;
            }
            return false;
        },
        removedDiscount: ()=>{
            set({
                appliedDiscount: null
            });
        },
        clearCart: ()=>{
            set({
                items: [],
                appliedDiscount: null
            });
        },
        getSubtotal: (products)=>{
            return get().items.reduce((total, item)=>{
                const product = products.get(item.productId);
                return total + (product?.price || 0) * item.quantity;
            }, 0);
        },
        getCartCalculations: (products)=>{
            const subtotal = get().getSubtotal(products);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$calculations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["calculateTotal"])(subtotal, get().appliedDiscount);
        },
        // Wishlist methods
        addToWishlist: (productId)=>{
            set((state)=>{
                if (state.wishlist.includes(productId)) {
                    return state;
                }
                return {
                    wishlist: [
                        ...state.wishlist,
                        productId
                    ]
                };
            });
        },
        removeFromWishlist: (productId)=>{
            set((state)=>({
                    wishlist: state.wishlist.filter((id)=>id !== productId)
                }));
        },
        isWishlisted: (productId)=>{
            return get().wishlist.includes(productId);
        },
        getWishlistCount: ()=>{
            return get().wishlist.length;
        }
    }), {
    name: 'cart-storage'
}));
}),
"[project]/components/features/floating-ai-widget.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingAIWidget",
    ()=>FloatingAIWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$typing$2d$indicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/features/typing-indicator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function FloatingAIWidget() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: "1",
            type: "ai",
            content: "Hi 👋 I'm your ZORROW AI fashion mentor. Need outfit ideas or styling help?"
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const addToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCartStore"])((state)=>state.addToCart);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        messages
    ]);
    const handleSendMessage = ()=>{
        if (!input.trim()) return;
        const userMessage = {
            id: Date.now().toString(),
            type: "user",
            content: input
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInput("");
        setIsLoading(true);
        setTimeout(()=>{
            const aiMessage = {
                id: (Date.now() + 1).toString(),
                type: "ai",
                content: "These pieces would look amazing on you! Want to add them to cart? 🛍️",
                products: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].slice(0, 3)
            };
            setMessages((prev)=>[
                    ...prev,
                    aiMessage
                ]);
            setIsLoading(false);
        }, 1000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(true),
                className: "fixed bottom-8 right-8 w-16 h-16 rounded-full  z-[9999] flex items-center justify-center  transition-transform duration-300 hover:scale-110",
                style: {
                    background: "linear-gradient(145deg, #00d4c4, #007a7a)",
                    boxShadow: "0 0 40px rgba(0, 255, 200, 0.6)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/logo.png",
                    alt: "ZORROW AI",
                    className: "w-8 h-8 object-contain"
                }, void 0, false, {
                    fileName: "[project]/components/features/floating-ai-widget.tsx",
                    lineNumber: 77,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/features/floating-ai-widget.tsx",
                lineNumber: 67,
                columnNumber: 3
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] flex items-end justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md h-[600px] bg-background  rounded-t-3xl md:rounded-3xl p-4 shadow-2xl  flex flex-col animate-in slide-in-from-bottom duration-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-4 border-b border-white/10 pb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/logo.png",
                                            alt: "ZORROW AI",
                                            className: "w-7 h-7"
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/floating-ai-widget.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "font-bold text-white text-sm",
                                                    children: "ZORROW AI"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/features/floating-ai-widget.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-primary",
                                                    children: "Fashion Mentor"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/features/floating-ai-widget.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/features/floating-ai-widget.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/features/floating-ai-widget.tsx",
                                    lineNumber: 95,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsOpen(false),
                                    className: "text-white hover:text-primary transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/features/floating-ai-widget.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/features/floating-ai-widget.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/features/floating-ai-widget.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto space-y-4 pr-2",
                            children: [
                                messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex ${msg.type === "user" ? "justify-end" : "justify-start"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `max-w-xs px-4 py-2 rounded-2xl text-sm ${msg.type === "user" ? "bg-primary text-white rounded-br-sm" : "bg-white/10 text-white rounded-bl-sm"}`,
                                                    children: msg.content
                                                }, void 0, false, {
                                                    fileName: "[project]/components/features/floating-ai-widget.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/features/floating-ai-widget.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this),
                                            msg.products && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 space-y-2",
                                                children: msg.products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-white/5 rounded-lg p-3 border border-primary/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: product.image,
                                                                    alt: product.name,
                                                                    className: "w-14 h-14 rounded object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/features/floating-ai-widget.tsx",
                                                                    lineNumber: 140,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-white font-semibold",
                                                                            children: product.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/features/floating-ai-widget.tsx",
                                                                            lineNumber: 146,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-primary",
                                                                            children: [
                                                                                "₹",
                                                                                product.price
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/features/floating-ai-widget.tsx",
                                                                            lineNumber: 149,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>addToCart(product, 1),
                                                                            className: "text-primary text-xs font-semibold mt-1",
                                                                            children: "Add to Cart"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/features/floating-ai-widget.tsx",
                                                                            lineNumber: 150,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/features/floating-ai-widget.tsx",
                                                                    lineNumber: 145,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/features/floating-ai-widget.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, product.id, false, {
                                                        fileName: "[project]/components/features/floating-ai-widget.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/features/floating-ai-widget.tsx",
                                                lineNumber: 133,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, msg.id, true, {
                                        fileName: "[project]/components/features/floating-ai-widget.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this)),
                                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-start",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$typing$2d$indicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypingIndicator"], {}, void 0, false, {
                                        fileName: "[project]/components/features/floating-ai-widget.tsx",
                                        lineNumber: 167,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/features/floating-ai-widget.tsx",
                                    lineNumber: 166,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: messagesEndRef
                                }, void 0, false, {
                                    fileName: "[project]/components/features/floating-ai-widget.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/features/floating-ai-widget.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-white/10 pt-3 flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: input,
                                    onChange: (e)=>setInput(e.target.value),
                                    placeholder: "Ask me...",
                                    className: "flex-1 bg-white/5 border border-primary/30  rounded-xl px-3 py-2 text-sm text-white outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/components/features/floating-ai-widget.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSendMessage,
                                    className: "bg-primary px-3 rounded-xl flex items-center justify-center hover:bg-primary/80 transition",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                        className: "w-4 h-4 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/components/features/floating-ai-widget.tsx",
                                        lineNumber: 187,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/features/floating-ai-widget.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/features/floating-ai-widget.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/features/floating-ai-widget.tsx",
                    lineNumber: 88,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/features/floating-ai-widget.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/components/features/ai-widget-wrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIWidgetWrapper",
    ()=>AIWidgetWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$floating$2d$ai$2d$widget$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/features/floating-ai-widget.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function AIWidgetWrapper() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    // Hide AI on public pages (splash, entry, login, signup)
    const isPublicPage = pathname === '/' || pathname === '/splash' || pathname === '/entry' || pathname === '/login' || pathname === '/signup';
    if (isPublicPage) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$floating$2d$ai$2d$widget$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatingAIWidget"], {}, void 0, false, {
        fileName: "[project]/components/features/ai-widget-wrapper.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
}),
"[project]/lib/toast-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useToastStore",
    ()=>useToastStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useToastStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
        toasts: [],
        addToast: (message, type = 'success', duration = 3000)=>{
            const id = Date.now().toString();
            const toast = {
                id,
                message,
                type,
                duration
            };
            set((state)=>({
                    toasts: [
                        ...state.toasts,
                        toast
                    ]
                }));
            if (duration) {
                setTimeout(()=>{
                    set((state)=>({
                            toasts: state.toasts.filter((t)=>t.id !== id)
                        }));
                }, duration);
            }
        },
        removeToast: (id)=>{
            set((state)=>({
                    toasts: state.toasts.filter((t)=>t.id !== id)
                }));
        }
    }));
}),
"[project]/components/features/toast-notifications.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastNotifications",
    ()=>ToastNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$toast$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/toast-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
'use client';
;
;
;
function ToastNotifications() {
    const { toasts, removeToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$toast$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToastStore"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-24 right-4 z-50 space-y-2 pointer-events-none",
        children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-auto glass p-4 rounded-lg border border-primary/30 flex items-center gap-3 animate-in slide-in-from-right-5 duration-300",
                children: [
                    toast.type === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                        className: "w-5 h-5 text-primary flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/components/features/toast-notifications.tsx",
                        lineNumber: 16,
                        columnNumber: 40
                    }, this),
                    toast.type === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "w-5 h-5 text-red-500 flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/components/features/toast-notifications.tsx",
                        lineNumber: 17,
                        columnNumber: 38
                    }, this),
                    toast.type === 'info' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                        className: "w-5 h-5 text-primary flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/components/features/toast-notifications.tsx",
                        lineNumber: 18,
                        columnNumber: 37
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white text-sm font-medium",
                        children: toast.message
                    }, void 0, false, {
                        fileName: "[project]/components/features/toast-notifications.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>removeToast(toast.id),
                        className: "ml-2 text-white/60 hover:text-white transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/components/features/toast-notifications.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/features/toast-notifications.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                ]
            }, toast.id, true, {
                fileName: "[project]/components/features/toast-notifications.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/features/toast-notifications.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5af7a00b._.js.map