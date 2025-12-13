export default function Hero() {
  return (
    <section id="hero" className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-in">
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
              Experience Adventure Like Never Before
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover extraordinary adventures across water, air, and land...
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#event" className="btn-primary text-center">Register for Launch Event</a>
              <a href="#beta" className="btn-secondary text-center">Join Beta Program</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
