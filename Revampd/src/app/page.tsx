export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">revampd</h1>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">Home</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Shop</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Sell</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">About</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Contact</a>
              </div>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button className="text-gray-300 hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <div
          className="h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23333" width="1200" height="800"/><g fill="%23666"><rect x="100" y="100" width="200" height="300"/><rect x="350" y="150" width="150" height="250"/><rect x="550" y="120" width="180" height="280"/><rect x="780" y="140" width="160" height="260"/><rect x="980" y="110" width="170" height="290"/></g></svg>')`
          }}
        >
          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
                Sell Smart. Buy Better.
              </h1>
              <h2 className="text-6xl md:text-8xl font-bold text-white mb-8">
                revampd.
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto">
                India's smartest thrift store - quality-checked & AI-priced.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Sell Your Item
                </button>
                <button className="border-2 border-white text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-white hover:text-black transition-colors">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <svg className="w-6 h-6 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
