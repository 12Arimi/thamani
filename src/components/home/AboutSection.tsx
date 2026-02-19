export function AboutSection() {
  return (
    <section className="py-16 bg-white px-6 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Consistent Section Header */}
        <div className="text-center mb-12">
          <span className="bg-[#e8f0ed] text-[#1a3c34] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            Welcome to Thamani
          </span>
          <h2 className="text-3xl lg:text-4xl font-black text-[#1a3c34] mt-4">
            A Legacy of Trust Since 1987
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-16">
          
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
          <div className="w-full lg:col-span-5 space-y-6 lg:pl-4">
            <div className="space-y-4 text-gray-600 text-sm lg:text-base leading-relaxed">
              <p>
                <strong className="text-[#1a3c34]">Thamani Sacco Society Ltd</strong>, formerly Nithi Tea Growers Sacco Ltd, is a co-operative society registered on 3rd November 1987 under the Co-operative Act (CAP 12 of 1997). Our mandate remains rooted in the mobilization of savings and providing accessible credit to our members.
              </p>
              <p>
                Since opening our Front Office Services (FOSA) in 2000, we expanded our bond beyond tea growers to include all agricultural and business entrepreneurs. In October 2011, we achieved a major milestone by being licensed by <strong className="text-[#1a3c34]">SASRA</strong> as a deposit-taking society.
              </p>
            </div>

            <button className="bg-sacco-light text-white px-8 py-3 rounded-sm font-bold text-[10px] uppercase tracking-widest hover:bg-sacco-accent hover:text-sacco-dark transition-all duration-300 shadow-md">
              Discover Our Story
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}