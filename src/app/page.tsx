"use client";
import './page.css';
import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import {
  XIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from "lucide-react";
import { ArrowRight, ShoppingBag } from "lucide-react";
import CompanyLogoSection from "@/app/components/company-logo";
import DealsSection from "@/app/components/deals-section";
import CategorySection from "@/app/components/category-section";
import TestimonialSection from "@/app/components/testimonial-section";
import FeaturesSection from "@/app/components/features-section";
import CTASignUpSection from "@/app/components/cta-section";
import SiteFooter from "@/app/components/site-footer";
import ProductPage from "@/app/components/product-section";
import Header from "@/app/components/site-header";
import { FlipWordsDemo } from "@/app/components/FlipWordsDemo";
import { TimeLineScroll } from '@/app/components/ui/time-line-scroll';

import img1 from "/public/band.jpg";
import Image from 'next/image';



export const products = [
  {
    id: 1,
    name: "Bandeja de 1000 unidades",
    price: 99.99,
    image: img1
  },
  {
    id: 2,
    name: "Bandeja de 500 unidades",
    price: 59.99,
    image: img1,
  },
  {
    id: 3,
    name: "Bandeja de 250 unidades",
    price: 29.99,
    image: img1,
  },
  {
    id: 4,
    name: "Bandeja de 100 unidades",
    price: 14.99,
    image: img1,
  },
  {
    id: 5,
    name: "Bandeja de 50 unidades",
    price: 7.99,
    image: img1,
  },
  {
    id: 6,
    name: "Bandeja de 25 unidades",
    price: 3.99,
    image: img1,
  },
  {
    id: 7,
    name: "Bandeja de 1000 unidades",
    price: 279.99,
    originalPrice: 399.99,
    image: img1,
    tag: "Oferta",
  },
  {
    id: 8,
    name: "Bandeja de 500 unidades",
    price: 149.99,
    originalPrice: 199.99,
    image: img1,
    tag: "Oferta",
  },
  {
    id: 9,
    name: "Bandeja de 250 unidades",
    price: 79.99,
    originalPrice: 99.99,
    image: img1,
    tag: "Oferta",
  },
  {
    id: 10,
    name: "Bandeja de 100 unidades",
    price: 39.99,
    originalPrice: 49.99,
    image: img1,
    tag: "Oferta",
  },
  {
    id: 11,
    name: "Bandeja de 50 unidades",
    price: 19.99,
    originalPrice: 29.99,
    image: img1,
    tag: "Oferta",
  },
  {
    id: 12,
    name: "Bandeja de 25 unidades",
    price: 9.99,
    originalPrice: 14.99,
    image: img1,
    tag: "Oferta",
  }
];

const categories = [
  { name: "Alimentos", icon: "🍔" },
  { name: "Farmacia", icon: "💊" },
  { name: "Químicos", icon: "⚗️" },
  { name: "Limpieza", icon: "🧼" },
];

const deals = [
  {
    id: 7,
    name: "Bandeja de 1000 unidades",
    price: 279.99,
    originalPrice: 399.99,
    image: img1,
    tag: "Oferta",
  },
  {
    id: 8,
    name: "Bandeja de 500 unidades",
    price: 149.99,
    originalPrice: 199.99,
    image: img1,
    tag: "Oferta",
  },
  {
    id: 9,
    name: "Bandeja de 250 unidades",
    price: 79.99,
    originalPrice: 99.99,
    image: img1,
    tag: "Oferta",
  },
  {
    id: 10,
    name: "Bandeja de 100 unidades",
    price: 39.99,
    originalPrice: 49.99,
    image: img1,
    tag: "Oferta",
  },
  {
    id: 11,
    name: "Bandeja de 50 unidades",
    price: 19.99,
    originalPrice: 29.99,
    image: img1,
    tag: "Oferta",
  },
  {
    id: 12,
    name: "Bandeja de 25 unidades",
    price: 9.99,
    originalPrice: 14.99,
    image: img1,
    tag: "Oferta",
  }
];

export default function ECommerceApp() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // @ts-ignore
  const addToCart = (product) => {
    // @ts-ignore
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      // @ts-ignore
      setCart(
        // @ts-ignore
        cart.map((item) =>
          // @ts-ignore
          item.id === product.id
            ? // @ts-ignore
            { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // @ts-ignore
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // @ts-ignore
  const removeFromCart = (productId) => {
    // @ts-ignore
    setCart(cart.filter((item) => item.id !== productId));
  };

  // @ts-ignore
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      // @ts-ignore
      removeFromCart(productId);
    } else {
      // @ts-ignore
      setCart(
        // @ts-ignore
        cart.map((item) =>
          // @ts-ignore
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // @ts-ignore
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  // @ts-ignore
  const totalPrice = cart.reduce(
    // @ts-ignore
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const renderLandingPage = () => (
    // Landing Page  Section 
    <main className="flex-1 ">
      <section className="w-full min-h-screen  overflow-hidden relative flex items-center justify-center" id='hero'>
        <TimeLineScroll />
        <div className="container px-4 md:px-6 mb-16 mx-auto ">

          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left ">

            <FlipWordsDemo />
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                className="inline-flex items-center justify-center rounded-md bg-white hover:bg-slate-300 shadow transition-colors  focus-visible:outline-none focus-visible:ring-1 "
                onClick={() => setCurrentPage("products")}
              >
                Productos
                <ShoppingBag className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="inline-flex items-center justify-center text-white hover:text-black bg-black hover:bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1"
                onClick={() => window.location.href = '/about'}
              >
                Sobre la Empresa
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CompanyLogoSection />


      <DealsSection deals={deals} addToCart={addToCart} />


      <CategorySection categories={categories} />

      <TestimonialSection />

      <FeaturesSection />

      <CTASignUpSection />
    </main >
  );

  const renderCart = () => (
    // Cart Section
    <>
      {isCartOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full sm:w-96 bg-background shadow-lg p-6 overflow-y-auto z-50">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Tu carrito</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsCartOpen(false)}
              >
                <XIcon className="h-6 w-6" />
              </Button>
            </div>
            {cart.length === 0 ? (
              <p className="text-muted-foreground flex flex-col items-start gap-2">
                Tu carrito está vacío.{" "}
                <Button
                  onClick={() => setCurrentPage("products")}
                >
                  Agregar productos
                </Button>
              </p>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    // @ts-ignore
                    key={item.id}
                    className="flex items-center justify-between mb-4"
                  >
                    <div className="flex items-center">
                      <Image
                        // @ts-ignore
                        src={item.image}
                        // @ts-ignore
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md mr-4"
                      />
                      <div>
                        {/* @ts-ignore */}
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {/* @ts-ignore */}
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          //@ts-ignore
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <MinusIcon className="h-4 w-4" />
                      </Button>
                      {/* @ts-ignore */}
                      <span className="mx-2">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          //@ts-ignore
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <PlusIcon className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-2"
                        //@ts-ignore
                        onClick={() => removeFromCart(item.id)}
                      >
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                <div className="mt-6 border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold">Total:</span>
                    <span className="font-bold">${totalPrice.toFixed(2)}</span>
                  </div>
                  <Button className="w-full">Proceed to Checkout</Button>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        setCurrentPage={setCurrentPage}
        cart={cart}
        setCart={setCart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
      {currentPage === "landing" ? (
        renderLandingPage()
      ) : (
        <ProductPage products={products} addToCart={addToCart} />
      )}
      {renderCart()}
      <SiteFooter />
    </div>
  );
}