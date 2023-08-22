"use client";
import { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";

const Cart = ({ children }: { children: ReactNode }) => (
  <CartProvider
    mode="payment"
    cartMode="client-only"
    // Connects to your Stripe account
    stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
    // Redirected here after successful payments
    successUrl={`${process.env.NEXT_PUBLIC_URL}/success`}
    // Redirected here when you click back on Stripe Checkout
    cancelUrl={`${process.env.NEXT_PUBLIC_URL}/?success=false`}
    currency="USD"
    // Only customers from UK will be able to purchase
    // Having this setting means that we will capture shipping address
    allowedCountries={["GB", "US"]}
    // Enables local storage
    shouldPersist={true}
  >
    <>{children}</>
  </CartProvider>
);

export default Cart;
