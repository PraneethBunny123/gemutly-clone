"use client";

import { useState } from "react";
import { Utensils, ShieldCheck, Users } from "lucide-react"; // or any icon set you prefer

export default function DinerSection() {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      id: 1,
      icon: <Utensils className="w-10 h-10 text-orange-500 mb-4" />,
      title: "Browse Local Menus",
      description: "Explore menus from local chefs near you - filtered by cuisine, price, and reviews.",
    },
    {
      id: 2,
      icon: <ShieldCheck className="w-10 h-10 text-orange-500 mb-4" />,
      title: "Fast, Secure Checkout",
      description: "Pay in seconds via Stripe Elements and track your order in real time.",
    },
    {
      id: 3,
      icon: <Users className="w-10 h-10 text-orange-500 mb-4" />,
      title: "Share & Save",
      description: "Invite friends and family to split costs and earn group discounts.",
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
            className={`p-6 min-h-[300px] rounded-lg border cursor-pointer transition text-center ${
              activeCard === card.id
                ? "border-orange-500 shadow-lg"
                : "border-gray-200"
            } hover:shadow-md bg-white flex flex-col items-center text-start`}
          >
            {card.icon}
            <h3 className="text-xl font-bold mb-2 mt-2">{card.title}</h3>
            <p className="text-base text-gray-700 mt-1">{card.description}</p>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {cards.map(card => (
          <button
            key={card.id}
            onClick={() => setActiveCard(card.id)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeCard === card.id ? "bg-orange-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
