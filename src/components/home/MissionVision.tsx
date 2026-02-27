export function MissionVision() {
  const values = ["Professionalism", "Integrity", "Customer Focus", "Teamwork", "Excellency", "Innovation"];

  return (
    <section className="py-10 lg:py-16 bg-sacco-light px-6 lg:px-16 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Mission Card */}
          <div className="group bg-sacco-dark p-8 rounded-xl border border-white/10 hover:border-sacco-accent transition-all duration-500 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🚀</span>
              <h3 className="text-sacco-accent font-bold uppercase tracking-widest text-sm">Our Mission</h3>
            </div>
            <p className="text-gray-100 text-base leading-relaxed">
              To mobilize savings and provide market driven financial solutions for social economic empowerment and transformation of members.
            </p>
          </div>

          {/* Vision Card (Yellow/Accent Card) */}
          <div className="group bg-sacco-accent p-8 rounded-xl shadow-2xl hover:-translate-y-2 transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">👁️</span>
              <h3 className="text-sacco-dark font-bold uppercase tracking-widest text-sm">Our Vision</h3>
            </div>
            <p className="text-sacco-dark text-xl lg:text-2xl font-black leading-tight">
              To be the premier financial institution of choice.
            </p>
          </div>

          {/* Values Card */}
          <div className="group bg-sacco-dark p-8 rounded-xl border border-white/10 hover:border-sacco-accent transition-all duration-500 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">💎</span>
              <h3 className="text-sacco-accent font-bold uppercase tracking-widest text-sm">Core Values</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3">
              {values.map((val) => (
                <li key={val} className="flex items-center gap-3 text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                  <span className="w-2 h-2 rotate-45 bg-sacco-accent"></span>
                  {val}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}