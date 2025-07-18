"use client"

import { useState } from "react";

export default function DinerSection() {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Browse Local Menus",
      description: "Explore menus from local chefs near you.",
    },
    {
      id: 2,
      title: "Fast Checkout",
      description: "Seamlessly order and pay in just a few taps.",
    },
    {
      id: 3,
      title: "Share and Save",
      description: "Share favorite dishes and save them for later.",
    },
  ];

  return (
    <section className="py-12 px-4 max-w-5xl mx-auto my-30">
      <h2 className="text-3xl font-semibold text-center mb-8">For Diners</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => setActiveCard(card.id)}
            className={`p-6 rounded-lg border cursor-pointer transition ${
              activeCard === card.id
                ? "border-orange-500"
                : "border-gray-200"
            } hover:shadow-md`}
          >
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-sm text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
