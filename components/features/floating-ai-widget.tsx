"use client";

import { useState, useRef, useEffect } from "react";
import { Send, X } from "lucide-react";
import { PRODUCTS } from "@/lib/mock-data";
import { TypingIndicator } from "./typing-indicator";
import { useCartStore } from "@/lib/store";

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  products?: typeof PRODUCTS;
}

export function FloatingAIWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "ai",
      content:
        "Hi 👋 I'm your ZORROW AI fashion mentor. Need outfit ideas or styling help?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content:
          "These pieces would look amazing on you! Want to add them to cart? 🛍️",
        products: PRODUCTS.slice(0, 3),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
    {/* FLOATING BUTTON */}
{!isOpen && (
  <button
    onClick={() => setIsOpen(true)}
    className="fixed bottom-8 right-8 w-16 h-16 rounded-full 
    z-[9999] flex items-center justify-center 
    transition-transform duration-300 hover:scale-110"
    style={{
      background: "linear-gradient(145deg, #00d4c4, #007a7a)",
      boxShadow: "0 0 40px rgba(0, 255, 200, 0.6)",
    }}
  >
    <img
      src="/logo.png"
      alt="ZORROW AI"
      className="w-8 h-8 object-contain"
    />
  </button>
)}

      {/* OVERLAY CHAT */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] flex items-end justify-end">
          <div
            className="w-full max-w-md h-[600px] bg-background 
          rounded-t-3xl md:rounded-3xl p-4 shadow-2xl 
          flex flex-col animate-in slide-in-from-bottom duration-300"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-3">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="ZORROW AI" className="w-7 h-7" />
                <div>
                  <h2 className="font-bold text-white text-sm">ZORROW AI</h2>
                  <p className="text-xs text-primary">Fashion Mentor</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-primary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* MESSAGES */}
            <div className="flex-1 overflow-y-auto space-y-4 pr-2">
              {messages.map((msg) => (
                <div key={msg.id}>
                  <div
                    className={`flex ${
                      msg.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                        msg.type === "user"
                          ? "bg-primary text-white rounded-br-sm"
                          : "bg-white/10 text-white rounded-bl-sm"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>

                  {/* PRODUCT SUGGESTIONS */}
                  {msg.products && (
                    <div className="mt-3 space-y-2">
                      {msg.products.map((product) => (
                        <div
                          key={product.id}
                          className="bg-white/5 rounded-lg p-3 border border-primary/20"
                        >
                          <div className="flex gap-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-14 h-14 rounded object-cover"
                            />
                            <div className="text-xs">
                              <p className="text-white font-semibold">
                                {product.name}
                              </p>
                              <p className="text-primary">₹{product.price}</p>
                              <button
                                onClick={() => addToCart(product, 1)}
                                className="text-primary text-xs font-semibold mt-1"
                              >
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <TypingIndicator />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* INPUT AREA */}
            <div className="border-t border-white/10 pt-3 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me..."
                className="flex-1 bg-white/5 border border-primary/30 
                rounded-xl px-3 py-2 text-sm text-white outline-none"
              />
              <button
                onClick={handleSendMessage}
                className="bg-primary px-3 rounded-xl flex items-center justify-center hover:bg-primary/80 transition"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
