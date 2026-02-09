export function MissionVision() {
  const values = ["Professionalism", "Integrity", "Customer Focus", "Teamwork", "Excellency", "Innovation"];

  return (
    <section className="py-10 lg:py-12 bg-[#1a3c34] px-6 lg:px-16 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Mission */}
          <div className="group bg-[#1a3c34] p-8 rounded-xl border border-white/10 hover:border-[#ffde21] transition-all duration-500 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl">🚀</span>
              <h3 className="text-[#ffde21] font-bold uppercase tracking-[0.2em] text-[10px]">Our Mission</h3>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed">
              To mobilize savings and provide market driven financial solutions for social economic empowerment and transformation of members.
            </p>
          </div>

          {/* Vision (Yellow Card) */}
          <div className="group bg-[#ffde21] p-8 rounded-xl shadow-2xl hover:-translate-y-1 transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl">👁️</span>
              <h3 className="text-[#1a3c34] font-bold uppercase tracking-[0.2em] text-[10px]">Our Vision</h3>
            </div>
            <p className="text-[#1a3c34] text-lg lg:text-xl font-black leading-tight">
              To be the premier financial institution of choice.
            </p>
          </div>

          {/* Values */}
          <div className="group bg-[#1a3c34] p-8 rounded-xl border border-white/10 hover:border-[#ffde21] transition-all duration-500 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl">💎</span>
              <h3 className="text-[#ffde21] font-bold uppercase tracking-[0.2em] text-[10px]">Core Values</h3>
            </div>
            <ul className="grid grid-cols-2 gap-y-2">
              {values.map((val) => (
                <li key={val} className="flex items-center gap-2 text-[10px] font-bold text-gray-300 group-hover:text-white transition-colors">
                  <span className="w-1.5 h-1.5 rotate-45 bg-[#ffde21]"></span>
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