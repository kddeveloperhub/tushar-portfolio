import React from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

const pricingPlans = [
  {
    title: "Starter",
    price: "₹4,999",
    features: [
      "1 Page Portfolio",
      "Mobile-Responsive Layout",
      "Basic Animations",
      "Delivery in 3 Days",
    ],
    highlight: false,
    tag: "For Beginners",
  },
  {
    title: "Professional",
    price: "₹11,999",
    features: [
      "Multi-page Website (3–5 pages)",
      "Lottie + Scroll Animations",
      "Contact Form & Backend",
      "Optimized for SEO & Speed",
      "Delivery in 5 Days",
    ],
    highlight: true,
    tag: "Best Value",
  },
  {
    title: "Elite",
    price: "₹21,999",
    features: [
      "Fully Custom Business/Portfolio Site",
      "3D Models, Lottie, Video Animations",
      "Contact + Admin Panel + Email",
      "Premium UI/UX + Domain Support",
      "Delivery in 7–10 Days",
    ],
    highlight: false,
    tag: "For Enterprises",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 bg-[rgb(0,0,18)] text-white px-4 sm:px-8 mt-28 relative overflow-hidden"
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-800/10 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 flex justify-center items-center gap-2">
          <Sparkles className="text-indigo-400 animate-pulse" size={28} />
          Pricing Plans
        </h2>

        <p className="mb-16 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Choose a plan that fits your vision — from a simple portfolio to a
          fully interactive business site with premium animations.
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border transition-all duration-500 flex flex-col justify-between hover:scale-105 hover:shadow-2xl ${
                plan.highlight
                  ? "bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 border-none shadow-indigo-700/30"
                  : "bg-gray-900 border-gray-800 hover:border-indigo-500/40"
              }`}
            >
              {/* Tag Badge */}
              {plan.tag && (
                <div
                  className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${
                    plan.highlight
                      ? "bg-white text-indigo-700"
                      : "bg-indigo-600 text-white"
                  }`}
                >
                  {plan.tag}
                </div>
              )}

              {/* Title & Price */}
              <div>
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <p
                  className={`text-4xl font-extrabold mb-8 ${
                    plan.highlight ? "text-white" : "text-indigo-400"
                  }`}
                >
                  {plan.price}
                </p>

                {/* Features List */}
                <ul className="text-left space-y-4 mb-8 text-gray-300">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 group transition"
                    >
                      <CheckCircle2
                        className={`mt-[2px] ${
                          plan.highlight
                            ? "text-green-300"
                            : "text-green-500/90"
                        }`}
                        size={18}
                      />
                      <span className="group-hover:text-white transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <a href="/contact" className="mt-auto">
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.highlight
                      ? "bg-white text-indigo-700 hover:bg-gray-200"
                      : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30"
                  }`}
                >
                  Get Started
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
