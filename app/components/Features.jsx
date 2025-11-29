export default function Features() {
  const features = [
    {
      id: 1,
      title: "Lightning Fast",
      description:
        "Built for speed with optimized performance and instant load times across all devices.",
      icon: (
        <svg
          className="w-8 h-8 transition-transform duration-500 group-hover:rotate-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Fully Secure",
      description:
        "Enterprise-grade security with encryption, compliance, and dedicated support.",
      icon: (
        <svg
          className="w-8 h-8 transition-transform duration-500 group-hover:rotate-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Easy Integration",
      description:
        "Seamlessly integrates with your existing tools and workflows. No complex setup needed.",
      icon: (
        <svg
          className="w-8 h-8 transition-transform duration-500 group-hover:rotate-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3v-8"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">
            Powerful features for modern teams
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Everything you need to build, deploy, and scale your applications.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, index) => (
            <div
              key={f.id}
              className="group p-8 bg-[#111] border border-gray-800 rounded-xl 
              hover:border-blue-500 hover:-translate-y-3 hover:shadow-blue-500/20 
              transition-all duration-500 animate-fade-in-up
              hover:shadow-2xl hover:bg-[#151515] hover:scale-[1.03]
              relative overflow-hidden"
              style={{ animationDelay: `${index * 0.25}s` }}
            >

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-transparent via-white to-transparent blur-xl transition-opacity duration-500" />

              {/* Icon */}
              <div className="mb-4 text-blue-500">
                {f.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
