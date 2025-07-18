"use client";

import { useState } from "react";

export default function DinerSection() {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Browse Local Menus",
      description: "Explore menus from local chefs near you - filtered by cuisine, price, and reviews.",
    },
    {
      id: 2,
      title: "Fast, Secure Checkout",
      description: "Pay in seconds via Stripe Elements and track your order in real time.",
    },
    {
      id: 3,
      title: "Share & Save",
      description: "Invite friends and family to split costs and earn group discounts",
    },
  ];

  return (
    <section className="py-12 px-10 max-w-5xl mx-auto my-30">
      <h2 className="text-3xl font-semibold text-center mb-8">For Diners</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => setActiveCard(card.id)}
            className={`p-6 min-h-[360px] rounded-lg border cursor-pointer transition ${
              activeCard === card.id
                ? "border-orange-500 shadow-lg"
                : "border-gray-200"
            } hover:shadow-md bg-white`}
          >
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-sm text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
