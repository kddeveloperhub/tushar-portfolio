import React from "react";
import { motion } from "framer-motion";
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
      className="relative py-32 px-6 bg-[rgb(0,0,18)] text-white overflow-hidden"
    >
      {/* Ambient Background */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-500/20 blur-[140px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-pink-500/20 blur-[140px]" />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 flex justify-center items-center gap-2">
          <Sparkles className="text-indigo-400" size={28} />
          Pricing Plans
        </h2>

        <p className="mb-20 text-gray-400 max-w-2xl mx-auto text-lg">
          Choose a plan that fits your vision — from a simple portfolio to a
          fully interactive business website.
        </p>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-10 items-stretch">
          {pricingPlans.map((plan, index) => {
            const fromX =
              index === 0 ? -80 : index === 2 ? 80 : 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, x: fromX }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl p-8 flex flex-col
                backdrop-blur-xl border transition-all duration-500
                ${
                  plan.highlight
                    ? "bg-gradient-to-br from-indigo-600/90 via-purple-600/90 to-pink-600/90 border-transparent shadow-2xl shadow-indigo-500/30 scale-[1.03]"
                    : "bg-white/5 border-white/10 hover:border-indigo-400/40"
                }`}
              >
                {/* Tag */}
                {plan.tag && (
                  <span
                    className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${
                      plan.highlight
                        ? "bg-white text-indigo-700"
                        : "bg-indigo-600 text-white"
                    }`}
                  >
                    {plan.tag}
                  </span>
                )}

                {/* Title & Price */}
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {plan.title}
                  </h3>

                  <p
                    className={`text-4xl font-extrabold mb-8 ${
                      plan.highlight ? "text-white" : "text-indigo-400"
                    }`}
                  >
                    {plan.price}
                  </p>

                  {/* Features */}
                  <ul className="space-y-4 text-gray-300 mb-10">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className={`mt-[2px] ${
                            plan.highlight
                              ? "text-green-300"
                              : "text-green-500"
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a href="/contact" className="mt-auto">
                  <button
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.highlight
                        ? "bg-white text-indigo-700 hover:bg-gray-200"
                        : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/30"
                    }`}
                  >
                    Get Started
                  </button>
                </a>

                {/* Soft inner glow */}
                {plan.highlight && (
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
