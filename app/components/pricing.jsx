export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$19",
      period: "/mo",
      description: "Perfect for getting started",
      features: [
        "Up to 10 projects",
        "5GB storage",
        "Community support",
        "Basic analytics",
        "Email notifications",
        "Single user",
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$59",
      period: "/mo",
      description: "Best for growing teams",
      features: [
        "Unlimited projects",
        "100GB storage",
        "Priority support",
        "Advanced analytics",
        "Webhook integrations",
        "Up to 10 team members",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "For large-scale operations",
      features: [
        "Unlimited everything",
        "Unlimited storage",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced security",
        "SSO & SAML",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="py-24 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Choose the perfect plan for your needs. Always flexible as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`group p-8 rounded-xl border bg-[#111] transition-all duration-500 
              hover:-translate-y-3 hover:shadow-xl hover:shadow-blue-500/20 animate-fade-in-up
              ${plan.highlighted 
                ? "border-blue-600 shadow-lg scale-[1.03]" 
                : "border-gray-800 hover:border-blue-500"
              }`}
              style={{ animationDelay: `${i * 0.25}s` }} // staggered animation
            >
              {/* Recommended Badge */}
              {plan.highlighted && (
                <p className="text-center mb-4 text-blue-400 font-semibold animate-fade-in">
                  ★ Recommended
                </p>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>

              {/* Button */}
              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all 
                group-hover:scale-[1.05] duration-300
                ${
                  plan.highlighted
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-800 text-gray-200 hover:bg-gray-700"
                }`}
              >
                {plan.highlighted ? "Start Free Trial" : "Choose Plan"}
              </button>

              <p className="text-xs uppercase font-semibold text-gray-400 mb-3">
                What's included
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-blue-500 mt-0.5 transition-transform duration-300 group-hover:scale-125"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1..." />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
