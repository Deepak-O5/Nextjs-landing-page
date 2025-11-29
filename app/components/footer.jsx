export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 animate-fade-in">

        {/* Logo + Description */}
        <div className="mb-12 max-w-md animate-fade-in-up">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-blue-600 animate-pulse" />
            <h2 className="text-xl font-bold">BuildFlow</h2>
          </div>
          <p className="text-gray-400 text-sm">
            Modern platform designed to help teams build faster and ship with confidence.
          </p>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          
          {/* Product */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              {["Features", "Pricing", "Security", "Roadmap", "Changelog"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="hover:text-blue-500 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              {["About", "Blog", "Careers", "Press", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="hover:text-blue-500 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              {["Help Center", "Documentation", "Status", "API Reference", "Community"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="hover:text-blue-500 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm animate-fade-in-up">
          © {currentYear} BuildFlow. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
