export function AboutSection() {
  return (
    <section className="py-10 lg:py-12 px-6 lg:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-16">
        
        {/* Video Side (60%) */}
        <div className="w-full lg:col-span-7 relative group">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl bg-gray-100 ring-1 ring-gray-200">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/7Y__cwHAVZ8?start=6" 
              title="Thamani Sacco Corporate Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Content Side (40%) */}
        <div className="w-full lg:col-span-5 space-y-5 lg:pl-4">
          <div className="space-y-2">
            <h3 className="text-[#ffde21] font-bold uppercase tracking-[0.3em] text-[10px]">Welcome to Thamani</h3>
            <h2 className="text-3xl lg:text-4xl font-black text-[#1a3c34] leading-[1.1]">
              A Legacy of Trust <br /> Since 1987.
            </h2>
          </div>
          
          <div className="space-y-4 text-gray-600 text-sm lg:text-base leading-relaxed">
            <p>
              <strong className="text-[#1a3c34]">Thamani Sacco Society Ltd</strong>, formerly Nithi Tea Growers Sacco, has empowered members since 1987.
            </p>
            <p>
              Licensed by SASRA, we serve individuals across agriculture and business, providing solutions that transform lives and build wealth.
            </p>
          </div>

          <button className="bg-[#1a3c34] text-white px-8 py-3 rounded-sm font-bold text-[10px] uppercase tracking-widest hover:bg-[#ffde21] hover:text-[#1a3c34] transition-all duration-300">
            Discover Our Story
          </button>
        </div>
      </div>
    </section>
  );
}