import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const pricingPlans = [
  {
    title: 'Starter',
    price: '₹4,999',
    features: [
      '1 Page Portfolio',
      'Mobile-Responsive Layout',
      'Basic Animations',
      'Delivery in 3 Days',
    ],
    highlight: false,
    tag: 'For Beginners',
  },
  {
    title: 'Professional',
    price: '₹11,999',
    features: [
      'Multi-page Website (3–5 pages)',
      'Lottie + Scroll Animations',
      'Contact Form & Backend',
      'Optimized for SEO & Speed',
      'Delivery in 5 Days',
    ],
    highlight: true,
    tag: 'Best Value',
  },
  {
    title: 'Elite',
    price: '₹21,999',
    features: [
      'Fully Custom Business/Portfolio Site',
      '3D Models, Lottie, Video Animations',
      'Contact + Admin Panel + Email',
      'Premium UI/UX + Domain Support',
      'Delivery in 7–10 Days',
    ],
    highlight: false,
    tag: 'For Enterprises',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-950 text-white px-4 sm:px-10 mt-32">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-10">Pricing Plans</h2>
        <p className="mb-16 text-gray-400 max-w-xl mx-auto">
          Get a stunning, animated, and fully responsive portfolio or business website that stands out.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                plan.highlight
                  ? 'bg-gradient-to-br from-indigo-700 to-purple-700 border-none scale-105 shadow-xl'
                  : 'bg-gray-900 border-gray-700'
              }`}
            >
              {/* Tag Badge */}
              {plan.tag && (
                <div className="absolute top-4 right-4 text-xs font-semibold bg-indigo-500 text-white px-3 py-1 rounded-full">
                  {plan.tag}
                </div>
              )}

              <div>
                <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-4xl font-bold mb-6">{plan.price}</p>
                <ul className="text-left space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="text-green-400" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#contact">
                <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl rounded-lg font-medium transition">
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
