export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Product Lead at TechFlow",
      avatar: "/Avatar1.png",
      text: "This platform transformed how our team collaborates. The seamless integration and intuitive interface made adoption effortless across all departments.",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Engineering Manager at DataSync",
      avatar: "/Avatar2.png",
      text: "Outstanding performance and reliability. Our deployment cycles are now 40% faster, and the team loves the developer experience.",
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "CTO at CloudVenture",
      avatar: "/Avatar3.png",
      text: "Exactly what we needed for scaling our infrastructure. The support team is incredibly responsive, and the documentation is comprehensive.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
            Trusted by Industry Leaders
          </p>

          <h2 className="text-4xl font-bold mb-4">
            What our customers say
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Join hundreds of companies using our platform to build and scale their businesses.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className="group p-8 bg-[#111] border border-gray-800 rounded-xl 
              hover:border-blue-500 hover:-translate-y-3 hover:shadow-xl 
              transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.25}s` }}
            >
              <p className="text-gray-300 leading-relaxed mb-8">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                />

                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
