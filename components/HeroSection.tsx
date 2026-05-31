export default function HeroSection() {
  return (
    <div className="bg-[#1A1A1A] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-[#D4622A] text-sm font-semibold uppercase tracking-widest mb-3">
          Aligarh ka #1 Cafe Guide
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white">
          Explore Local.{' '}
          <span className="text-[#D4622A]">Brew Memories.</span>
        </h1>
        <p className="text-gray-400 text-base mb-8">
          Real menu prices • Exact locations • Couple-friendly cafes
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="flex items-center bg-white rounded-full px-5 py-3 shadow-xl gap-3">
            <span className="text-gray-400 text-lg">🔍</span>
            <input
              type="text"
              placeholder="Search cafe, area, or vibe..."
              className="flex-1 text-black text-base outline-none bg-transparent"
            />
            <button className="bg-[#D4622A] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#c5571f] transition">
              Search
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          <span className="bg-[#D4622A] text-white px-4 py-2 rounded-full text-sm cursor-pointer font-medium">
            ☕ All Cafes
          </span>
          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-white/20 transition">
            💑 Couple Friendly
          </span>
          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-white/20 transition">
            🎓 Student Budget
          </span>
          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-white/20 transition">
            🌙 Rooftop
          </span>
          <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-white/20 transition">
            📸 Aesthetic
          </span>
        </div>
      </div>
    </div>
  )
}
