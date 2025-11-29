export default function Hero() {
  return (
    <section className="relative flex items-center justify-center px-4 py-20 md:py-32 
    bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white overflow-hidden">

      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 
      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] 
      bg-[size:20px_20px] opacity-20 pointer-events-none"></div>

      {/* Blue Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] opacity-30"></div>

      <div className="max-w-4xl w-full animate-fade-in-up relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">

          {/* Top Text */}
          <p className="text-sm font-medium text-gray-400 uppercase tracking-wide">
            For enterprise teams
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Ship faster, innovate better.
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Empower your entire organization to create at the speed of thought. 
            Secure, scalable infrastructure for teams building the future.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold 
            hover:bg-blue-700 transition-all duration-300 hover:-translate-y-1">
              Get started
            </button>

            <button className="px-8 py-3 border border-gray-500 text-white rounded-full font-semibold 
            hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1">
              Learn more
            </button>
          </div>

          {/* CLI */}
          <p className="text-xs text-gray-500 font-mono pt-4">
            npm create next-app@latest
          </p>
        </div>
      </div>
    </section>
  );
}
