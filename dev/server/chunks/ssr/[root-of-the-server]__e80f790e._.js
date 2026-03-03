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
"[project]/components/features/ai-mobile-sheet.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIMobileSheet",
    ()=>AIMobileSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
'use client';
;
;
;
const QUICK_SUGGESTIONS = [
    'Styling tips',
    'Size guide',
    'Trending items',
    'Care tips'
];
function AIMobileSheet({ isOpen, onClose }) {
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            text: 'Hey! I\'m your ZORROW AI fashion mentor. What can I help you with today?',
            sender: 'ai'
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        scrollToBottom();
    }, [
        messages
    ]);
    const handleSendMessage = (e)=>{
        e.preventDefault();
        if (!input.trim()) return;
        const userMessage = {
            id: Date.now().toString(),
            text: input,
            sender: 'user'
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInput('');
        // AI response simulation
        setTimeout(()=>{
            const aiMessage = {
                id: (Date.now() + 1).toString(),
                text: 'Great question! Let me help you with that.',
                sender: 'ai'
            };
            setMessages((prev)=>[
                    ...prev,
                    aiMessage
                ]);
        }, 500);
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0,0,0,0.25)',
                    backdropFilter: 'blur(6px)',
                    zIndex: 9998
                },
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/features/ai-mobile-sheet.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'fixed',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '75vh',
                    background: 'rgba(18,18,18,0.98)',
                    borderTopLeftRadius: '22px',
                    borderTopRightRadius: '22px',
                    boxShadow: '0 -10px 40px rgba(0,0,0,0.5)',
                    zIndex: 9999,
                    animation: 'slideUp 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    '@keyframes slideUp': {
                        from: {
                            transform: 'translateY(100%)'
                        },
                        to: {
                            transform: 'translateY(0)'
                        }
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '40px',
                            height: '4px',
                            borderRadius: '999px',
                            background: 'rgba(255,255,255,0.3)',
                            margin: '10px auto 0'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/features/ai-mobile-sheet.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '16px',
                            background: 'rgba(0,150,150,0.1)',
                            borderBottom: '1px solid rgba(0,150,150,0.3)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                style: {
                                    background: 'none',
                                    border: 'none',
                                    color: 'rgba(255,255,255,0.6)',
                                    cursor: 'pointer',
                                    padding: '4px',
                                    transition: 'color 0.2s'
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.color = 'white',
                                onMouseLeave: (e)=>e.currentTarget.style.color = 'rgba(255,255,255,0.6)',
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/features/ai-mobile-sheet.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/features/ai-mobile-sheet.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    flex: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '14px',
                                            fontWeight: 'bold',
                                            color: 'white',
                                            margin: 0
                                        },
                                        children: "ZORROW AI"
                                    }, void 0, false, {
                                        fileName: "[project]/components/features/ai-mobile-sheet.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontSize: '12px',
                                            color: 'rgba(0,150,150,0.8)',
                                            margin: '2px 0 0'
                                        },
                                        children: "Fashion Mentor"
                                    }, void 0, false, {
                                        fileName: "[project]/components/features/ai-mobile-sheet.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/features/ai-mobile-sheet.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '20px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/features/ai-mobile-sheet.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/features/ai-mobile-sheet.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1,
                            overflowY: 'auto',
                            padding: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px'
                        },
                        children: [
                            messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            maxWidth: '80%',
                                            padding: '12px 16px',
                                            borderRadius: '18px',
                                            background: msg.sender === 'user' ? 'rgba(0,150,150,0.8)' : 'rgba(255,255,255,0.1)',
                                            color: 'white',
                                            fontSize: '14px',
                                            lineHeight: '1.4',
                                            borderBottomRightRadius: msg.sender === 'user' ? '4px' : '18px',
                                            borderBottomLeftRadius: msg.sender === 'user' ? '18px' : '4px'
                                        },
                                        children: msg.text
                                    }, void 0, false, {
                                        fileName: "[project]/components/features/ai-mobile-sheet.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this)
                                }, msg.id, false, {
                                    fileName: "[project]/components/features/ai-mobile-sheet.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: messagesEndRef
                            }, void 0, false, {
                                fileName: "[project]/components/features/ai-mobile-sheet.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/features/ai-mobile-sheet.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '12px 16px',
                            borderTop: '1px solid rgba(0,150,150,0.3)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '8px',
                                flexWrap: 'wrap'
                            },
                            children: QUICK_SUGGESTIONS.map((suggestion)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMessages((prev)=>[
                                                ...prev,
                                                {
                                                    id: Date.now().toString(),
                                                    text: suggestion,
                                                    sender: 'user'
                                                }
                                            ]),
                                    style: {
                                        padding: '6px 12px',
                                        fontSize: '12px',
                                        borderRadius: '16px',
                                        border: '1px solid rgba(0,150,150,0.4)',
                                        background: 'rgba(0,150,150,0.2)',
                                        color: 'rgba(0,150,150,1)',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.background = 'rgba(0,150,150,0.4)'(e.currentTarget).style.borderColor = 'rgba(0,150,150,0.6)';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = 'rgba(0,150,150,0.2)'(e.currentTarget).style.borderColor = 'rgba(0,150,150,0.4)';
                                    },
                                    children: suggestion
                                }, suggestion, false, {
                                    fileName: "[project]/components/features/ai-mobile-sheet.tsx",
                                    lineNumber: 206,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/features/ai-mobile-sheet.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/features/ai-mobile-sheet.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSendMessage,
                        style: {
                            display: 'flex',
                            gap: '8px',
                            padding: '12px 16px',
                            borderTop: '1px solid rgba(0,150,150,0.3)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: input,
                                onChange: (e)=>setInput(e.target.value),
                                placeholder: "Ask me...",
                                style: {
                                    flex: 1,
                                    padding: '10px 14px',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(0,150,150,0.3)',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'white',
                                    fontSize: '14px',
                                    outline: 'none',
                                    transition: 'all 0.2s',
                                    boxSizing: 'border-box'
                                },
                                onFocus: (e)=>{
                                    e.currentTarget.style.borderColor = 'rgba(0,150,150,0.6)';
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                },
                                onBlur: (e)=>{
                                    e.currentTarget.style.borderColor = 'rgba(0,150,150,0.3)';
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/features/ai-mobile-sheet.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                style: {
                                    padding: '10px 16px',
                                    borderRadius: '12px',
                                    border: 'none',
                                    background: 'rgba(0,150,150,0.8)',
                                    color: 'white',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.2s'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.background = 'rgba(0,150,150,1)';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.background = 'rgba(0,150,150,0.8)';
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/features/ai-mobile-sheet.tsx",
                                    lineNumber: 300,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/features/ai-mobile-sheet.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/features/ai-mobile-sheet.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/features/ai-mobile-sheet.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/features/ai-mobile-sheet.tsx",
                lineNumber: 305,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
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
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0', {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
            outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-10 px-4 py-2',
            sm: 'h-9 rounded-md px-3',
            lg: 'h-11 rounded-md px-8',
            icon: 'h-10 w-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = 'Button';
;
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
"[project]/components/features/chat-product-card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatProductCard",
    ()=>ChatProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$toast$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/toast-store.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function ChatProductCard({ product }) {
    const [isAdded, setIsAdded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const addToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCartStore"])((state)=>state.addToCart);
    const addToWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCartStore"])((state)=>state.addToWishlist);
    const removeFromWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCartStore"])((state)=>state.removeFromWishlist);
    const isWishlisted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCartStore"])((state)=>state.isWishlisted(product.id));
    const addToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$toast$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToastStore"])((state)=>state.addToast);
    const handleAddToCart = ()=>{
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            category: 'Accessories',
            size: [],
            color: [],
            description: product.name,
            rating: 4.8,
            inStock: true
        }, 1);
        setIsAdded(true);
        setTimeout(()=>setIsAdded(false), 2000);
    };
    const handleWishlist = ()=>{
        if (isWishlisted) {
            removeFromWishlist(product.id);
            addToast('Removed from Wishlist', 'info', 2000);
        } else {
            addToWishlist(product.id);
            addToast('Saved to Wishlist ❤️', 'success', 2000);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass p-3 rounded-lg mb-2 inline-block max-w-xs w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-32 rounded-lg overflow-hidden mb-2 bg-white/5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: product.image,
                        alt: product.name,
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/components/features/chat-product-card.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-2 right-2 bg-primary/80 text-background px-2 py-1 rounded text-xs font-semibold",
                        children: product.category
                    }, void 0, false, {
                        fileName: "[project]/components/features/chat-product-card.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/features/chat-product-card.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-semibold text-sm text-white truncate",
                        children: product.name
                    }, void 0, false, {
                        fileName: "[project]/components/features/chat-product-card.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-primary font-bold text-lg",
                        children: [
                            "₹",
                            product.price.toLocaleString('en-IN')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/features/chat-product-card.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleAddToCart,
                                className: `flex-1 h-8 text-sm transition-all duration-300 ${isAdded ? 'bg-green-500 hover:bg-green-500 text-white' : 'bg-primary hover:bg-primary/90 text-background'}`,
                                size: "sm",
                                children: isAdded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-3 h-3 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/chat-product-card.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this),
                                        "Added!"
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                            className: "w-3 h-3 mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/chat-product-card.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this),
                                        "Cart"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/components/features/chat-product-card.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleWishlist,
                                className: `h-8 px-3 transition-all duration-300 ${isWishlisted ? 'bg-primary/30 hover:bg-primary/40 text-primary' : 'bg-white/10 hover:bg-white/20 text-white/60'}`,
                                size: "sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                    className: `w-4 h-4 ${isWishlisted ? 'fill-primary' : ''}`
                                }, void 0, false, {
                                    fileName: "[project]/components/features/chat-product-card.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/features/chat-product-card.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/features/chat-product-card.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/features/chat-product-card.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/features/chat-product-card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
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
"[project]/components/features/floating-ai-widget.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingAIWidget",
    ()=>FloatingAIWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$ai$2d$mobile$2d$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/features/ai-mobile-sheet.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$chat$2d$product$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/features/chat-product-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$typing$2d$indicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/features/typing-indicator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
const QUICK_SUGGESTIONS = [
    {
        label: 'How to Order',
        preset: 'How to Order'
    },
    {
        label: 'Payment Methods',
        preset: 'Payment Methods'
    },
    {
        label: 'Shipping Info',
        preset: 'Shipping Info'
    },
    {
        label: 'Return Policy',
        preset: 'Return Policy'
    },
    {
        label: 'Track My Order',
        preset: 'Track My Order'
    }
];
function FloatingAIWidget() {
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            type: 'ai',
            content: "Hi 👋 I'm your ZORROW AI fashion mentor. Need outfit ideas or styling help?"
        }
    ]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const addToCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCartStore"])((state)=>state.addToCart);
    // Detect mobile on mount and window resize
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return ()=>window.removeEventListener('resize', checkMobile);
    }, []);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        scrollToBottom();
    }, [
        messages
    ]);
    const getProductSuggestions = (message)=>{
        const lower = message.toLowerCase();
        if (lower.includes('trending')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].slice(0, 3);
        }
        if (lower.includes('outfit') && lower.includes('party')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].filter((p)=>[
                    'Women',
                    'Unisex'
                ].includes(p.category)).slice(0, 3);
        }
        if (lower.includes('outfit') || lower.includes('what should')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].filter((p)=>p.price < 3000).slice(0, 3);
        }
        if (lower.includes('2000') || lower.includes('under')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].filter((p)=>p.price < 2000);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].slice(0, 3);
    };
    const getAIResponse = (message)=>{
        const lower = message.toLowerCase();
        let chatProducts = [];
        let products = [];
        const cartItems = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCartStore"].getState().items;
        const wishlistItems = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCartStore"].getState().wishlist;
        // Handle help requests
        if (lower.includes('how to order')) {
            return {
                response: 'Ordering on ZORROW X is easy:\n1. Browse products in Feed or Explore\n2. Tap ❤️ to save items to Wishlist\n3. Add items to Cart\n4. Open Cart and tap Checkout\n5. Enter address & choose payment\n6. Place your order 🎉',
                products: [],
                chatProducts: []
            };
        }
        if (lower.includes('payment')) {
            return {
                response: 'We support:\n• UPI\n• Credit/Debit Cards\n• Razorpay Secure Payments\n• Cash on Delivery',
                products: [],
                chatProducts: []
            };
        }
        if (lower.includes('shipping')) {
            return {
                response: 'Shipping ₹99 across India.\nFree shipping on orders above ₹1999.\nDelivery time: 3–7 days.',
                products: [],
                chatProducts: []
            };
        }
        if (lower.includes('return')) {
            return {
                response: 'Easy 7-day returns for unused items.\nRefunds processed quickly after pickup.',
                products: [],
                chatProducts: []
            };
        }
        if (lower.includes('track')) {
            return {
                response: 'You can track orders from Profile → Order History.',
                products: [],
                chatProducts: []
            };
        }
        // AI sales assistant behavior
        if (cartItems.length > 0 && (lower.includes('ready') || lower.includes('checkout') || lower.includes('order'))) {
            return {
                response: 'Your cart looks great 👀 Ready to checkout?',
                products: [],
                chatProducts: []
            };
        }
        if (wishlistItems.length > 0 && (lower.includes('wishlist') || lower.includes('saved') || lower.includes('favorite'))) {
            return {
                response: 'Your wishlist has some amazing picks. Want to add them to cart?',
                products: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].filter((p)=>wishlistItems.includes(p.id)).slice(0, 4),
                chatProducts: []
            };
        }
        // Handle shoes
        if (lower.includes('shoe')) {
            products = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].filter((p)=>p.category === 'Shoes');
            return {
                response: 'Here are some premium shoes perfect for streetwear! Check out our sneakers and casual shoes. 👟',
                products,
                chatProducts
            };
        }
        // Handle caps
        if (lower.includes('cap') || lower.includes('hat')) {
            products = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].filter((p)=>p.category === 'Caps');
            return {
                response: 'Fresh caps to complete your look! Perfect for any streetwear fit. 🧢',
                products,
                chatProducts
            };
        }
        // Handle accessories
        if (lower.includes('accessorie') || lower.includes('watch') || lower.includes('sunglasses') || lower.includes('bag')) {
            products = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].filter((p)=>p.category === 'Accessories');
            return {
                response: 'Amazing accessories to elevate your style! From watches to sunglasses and bags. ✨',
                products,
                chatProducts
            };
        }
        // Handle gadgets
        if (lower.includes('gadget') || lower.includes('earbuds') || lower.includes('fitness') || lower.includes('tech')) {
            products = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].filter((p)=>p.category === 'Gadgets');
            return {
                response: 'Check out our latest tech gadgets! Smart watches, earbuds, and fitness bands. 🎧',
                products,
                chatProducts
            };
        }
        // Handle men's fashion
        if (lower.includes("men's") || lower.includes('men') && !lower.includes('women')) {
            products = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].filter((p)=>p.category === 'Men');
            return {
                response: "Perfect! Here are our trending men's pieces. From hoodies to jackets and pants. 👕",
                products,
                chatProducts
            };
        }
        // Handle women's fashion
        if (lower.includes("women's") || lower.includes('women') && !lower.includes('men')) {
            products = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].filter((p)=>p.category === 'Women');
            return {
                response: "Great! Here are our trending women's pieces. Oversized hoodies, jackets, and more. 👗",
                products,
                chatProducts
            };
        }
        // Handle trending
        if (lower.includes('trending')) {
            products = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].filter((p)=>p.rating && p.rating >= 4.7);
            return {
                response: 'Check out these trending pieces right now! They are super popular and selling fast. 🔥',
                products,
                chatProducts: []
            };
        }
        // Handle outfit building
        if (lower.includes('outfit')) {
            products = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].slice(0, 6);
            return {
                response: 'Perfect! Here are some amazing pieces to create your outfit. Mix and match to get the vibe you want! ✨',
                products,
                chatProducts: []
            };
        }
        // Handle budget
        if (lower.includes('2000') || lower.includes('budget') || lower.includes('under')) {
            products = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].filter((p)=>p.price < 2000);
            return {
                response: 'Great! Here are some affordable options without compromising on style. 💯',
                products,
                chatProducts: []
            };
        }
        // Default response with mixed products
        products = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].slice(0, 6);
        return {
            response: 'These pieces would look amazing on you! Would you like to add any to your cart? 🛍️',
            products,
            chatProducts: []
        };
    };
    const handleSendMessage = (text)=>{
        const messageText = text || input;
        if (!messageText.trim()) return;
        const userMessage = {
            id: Date.now().toString(),
            type: 'user',
            content: messageText
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInput('');
        setIsLoading(true);
        // Simulate 1-2 second typing delay for realistic feel
        setTimeout(()=>{
            const { response, products, chatProducts } = getAIResponse(messageText);
            const aiMessage = {
                id: (Date.now() + 1).toString(),
                type: 'ai',
                content: response,
                products: products.length > 0 ? products : undefined,
                chatProducts: chatProducts.length > 0 ? chatProducts : undefined
            };
            setMessages((prev)=>[
                    ...prev,
                    aiMessage
                ]);
            setIsLoading(false);
        }, 1200);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isMobile && !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(true),
                style: {
                    position: 'fixed',
                    bottom: '90px',
                    right: '20px',
                    zIndex: 9999,
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'linear-gradient(to bottom right, rgba(0,150,150,1), rgba(0,150,150,0.6))',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                    transition: 'all 0.3s'
                },
                onMouseEnter: (e)=>{
                    e.currentTarget.style.transform = 'scale(1.1)'(e.currentTarget).style.boxShadow = '0 25px 50px rgba(0,150,150,0.4)';
                },
                onMouseLeave: (e)=>{
                    e.currentTarget.style.transform = 'scale(1)'(e.currentTarget).style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
                },
                "aria-label": "Open AI chat",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/logo.png",
                    alt: "ZORROW AI",
                    style: {
                        width: '32px',
                        height: '32px',
                        objectFit: 'contain'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/features/floating-ai-widget.tsx",
                    lineNumber: 313,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/features/floating-ai-widget.tsx",
                lineNumber: 284,
                columnNumber: 9
            }, this),
            isMobile && isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$ai$2d$mobile$2d$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AIMobileSheet"], {
                isOpen: true,
                onClose: ()=>setIsOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/features/floating-ai-widget.tsx",
                lineNumber: 327,
                columnNumber: 9
            }, this),
            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full w-full rounded-3xl flex flex-col overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b flex items-center justify-between",
                        style: {
                            background: 'rgba(0,150,150,0.1)',
                            borderColor: 'rgba(0,150,150,0.3)'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20BLACK-h1nVhNKIhTXz5sNvtj75J9us3BZuML.png",
                                    alt: "ZORROW AI",
                                    className: "w-8 h-8"
                                }, void 0, false, {
                                    fileName: "[project]/components/features/floating-ai-widget.tsx",
                                    lineNumber: 342,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: '14px',
                                                fontWeight: 'bold',
                                                color: 'white',
                                                margin: 0
                                            },
                                            children: "ZORROW AI"
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/floating-ai-widget.tsx",
                                            lineNumber: 348,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontSize: '12px',
                                                color: 'rgba(0,150,150,0.8)',
                                                margin: 0
                                            },
                                            children: "Fashion Mentor"
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/floating-ai-widget.tsx",
                                            lineNumber: 349,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/features/floating-ai-widget.tsx",
                                    lineNumber: 347,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/features/floating-ai-widget.tsx",
                            lineNumber: 341,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/features/floating-ai-widget.tsx",
                        lineNumber: 334,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-4 space-y-4",
                        style: {
                            scrollBehavior: 'smooth'
                        },
                        children: [
                            messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start',
                                                marginBottom: '8px'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    maxWidth: '280px',
                                                    padding: '12px 16px',
                                                    borderRadius: '18px',
                                                    background: msg.type === 'user' ? 'rgba(0,150,150,0.8)' : 'rgba(255,255,255,0.1)',
                                                    color: msg.type === 'user' ? 'white' : 'white',
                                                    fontSize: '14px',
                                                    borderBottomRightRadius: msg.type === 'user' ? '4px' : '18px',
                                                    borderBottomLeftRadius: msg.type === 'user' ? '18px' : '4px'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        margin: 0
                                                    },
                                                    children: msg.content
                                                }, void 0, false, {
                                                    fileName: "[project]/components/features/floating-ai-widget.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/features/floating-ai-widget.tsx",
                                                lineNumber: 365,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/floating-ai-widget.tsx",
                                            lineNumber: 358,
                                            columnNumber: 17
                                        }, this),
                                        msg.chatProducts && msg.chatProducts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 flex flex-wrap gap-2",
                                            children: msg.chatProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$chat$2d$product$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatProductCard"], {
                                                    product: product
                                                }, product.id, false, {
                                                    fileName: "[project]/components/features/floating-ai-widget.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/floating-ai-widget.tsx",
                                            lineNumber: 385,
                                            columnNumber: 19
                                        }, this),
                                        msg.products && msg.products.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 space-y-2",
                                            children: msg.products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white/5 rounded-lg p-3 border border-primary/20 hover:border-primary/40 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: product.image,
                                                                alt: product.name,
                                                                className: "w-16 h-16 rounded object-cover"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/features/floating-ai-widget.tsx",
                                                                lineNumber: 401,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1 text-xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-white font-semibold line-clamp-2",
                                                                        children: product.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/features/floating-ai-widget.tsx",
                                                                        lineNumber: 407,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-primary",
                                                                        children: [
                                                                            "₹",
                                                                            product.price
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/features/floating-ai-widget.tsx",
                                                                        lineNumber: 408,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>addToCart(product, 1),
                                                                        className: "mt-1 text-primary hover:text-primary/80 font-semibold text-xs",
                                                                        children: "Add to Cart"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/features/floating-ai-widget.tsx",
                                                                        lineNumber: 409,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/features/floating-ai-widget.tsx",
                                                                lineNumber: 406,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/features/floating-ai-widget.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 25
                                                    }, this)
                                                }, product.id, false, {
                                                    fileName: "[project]/components/features/floating-ai-widget.tsx",
                                                    lineNumber: 396,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/features/floating-ai-widget.tsx",
                                            lineNumber: 394,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, msg.id, true, {
                                    fileName: "[project]/components/features/floating-ai-widget.tsx",
                                    lineNumber: 357,
                                    columnNumber: 15
                                }, this)),
                            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-start",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$features$2f$typing$2d$indicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypingIndicator"], {}, void 0, false, {
                                    fileName: "[project]/components/features/floating-ai-widget.tsx",
                                    lineNumber: 427,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/features/floating-ai-widget.tsx",
                                lineNumber: 426,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: messagesEndRef
                            }, void 0, false, {
                                fileName: "[project]/components/features/floating-ai-widget.tsx",
                                lineNumber: 430,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/features/floating-ai-widget.tsx",
                        lineNumber: 355,
                        columnNumber: 11
                    }, this),
                    messages.length <= 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            padding: '12px 16px',
                            borderTop: '1px solid rgba(0,150,150,0.3)',
                            display: 'flex',
                            gap: '8px',
                            overflowX: 'auto',
                            scrollBehavior: 'smooth'
                        },
                        children: QUICK_SUGGESTIONS.map((suggestion)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleSendMessage(suggestion.preset),
                                style: {
                                    whiteSpace: 'nowrap',
                                    padding: '6px 12px',
                                    fontSize: '12px',
                                    background: 'rgba(0,150,150,0.2)',
                                    border: '1px solid rgba(0,150,150,0.4)',
                                    color: 'rgba(0,150,150,1)',
                                    borderRadius: '20px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s'
                                },
                                onMouseEnter: (e)=>{
                                    e.target.style.background = 'rgba(0,150,150,0.4)'(e.target).style.borderColor = 'rgba(0,150,150,0.6)';
                                },
                                onMouseLeave: (e)=>{
                                    e.target.style.background = 'rgba(0,150,150,0.2)'(e.target).style.borderColor = 'rgba(0,150,150,0.4)';
                                },
                                disabled: isLoading,
                                children: suggestion.label
                            }, suggestion.label, false, {
                                fileName: "[project]/components/features/floating-ai-widget.tsx",
                                lineNumber: 446,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/features/floating-ai-widget.tsx",
                        lineNumber: 435,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: (e)=>{
                            e.preventDefault();
                            handleSendMessage();
                        },
                        style: {
                            borderTop: '1px solid rgba(0,150,150,0.3)',
                            padding: '12px 16px',
                            display: 'flex',
                            gap: '8px',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: input,
                                onChange: (e)=>setInput(e.target.value),
                                placeholder: "Ask me...",
                                style: {
                                    flex: 1,
                                    height: '40px',
                                    fontSize: '14px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(0,150,150,0.3)',
                                    borderRadius: '12px',
                                    padding: '8px 12px',
                                    color: 'white',
                                    outline: 'none',
                                    transition: 'all 0.2s'
                                },
                                onFocus: (e)=>{
                                    e.currentTarget.style.borderColor = 'rgba(0,150,150,0.6)';
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                },
                                onBlur: (e)=>{
                                    e.currentTarget.style.borderColor = 'rgba(0,150,150,0.3)';
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                },
                                disabled: isLoading
                            }, void 0, false, {
                                fileName: "[project]/components/features/floating-ai-widget.tsx",
                                lineNumber: 490,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                style: {
                                    height: '40px',
                                    width: '40px',
                                    padding: 0,
                                    background: 'rgba(0,150,150,0.8)',
                                    border: 'none',
                                    borderRadius: '12px',
                                    color: 'white',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.2s',
                                    opacity: isLoading || !input.trim() ? 0.5 : 1
                                },
                                onMouseEnter: (e)=>{
                                    if (!isLoading && input.trim()) {
                                        e.currentTarget.style.background = 'rgba(0,150,150,1)';
                                    }
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.background = 'rgba(0,150,150,0.8)';
                                },
                                disabled: isLoading || !input.trim(),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/features/floating-ai-widget.tsx",
                                    lineNumber: 543,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/features/floating-ai-widget.tsx",
                                lineNumber: 516,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/features/floating-ai-widget.tsx",
                        lineNumber: 477,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/features/floating-ai-widget.tsx",
                lineNumber: 332,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__e80f790e._.js.map