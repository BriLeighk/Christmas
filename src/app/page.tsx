import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-12 p-4">
      <h1 className="text-5xl font-cormorant font-bold text-[#3E4E54]">Christmas Cards 2024</h1>
      
      {/* Welcome message box with shadow */}
      <div className="relative max-w-2xl mx-auto px-8 py-6 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        <div className="absolute inset-0 bg-white/10 rounded-sm" />
        <div className="absolute inset-[-2px] border-2 border-white/20 rounded-sm" />
        
        <p className="font-cormorant font-bold text-center text-lg relative text-[#4F656E]">
          Merry Christmas! I love you all so much and hope you have an amazing Christmas. 
          Here is a little something I coded for each of you!
        </p>
      </div>
      
      {/* Cards container with shadow */}
      <div className="relative w-full max-w-4xl mx-auto px-8 py-10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        <div className="absolute inset-0 bg-white/10 rounded-sm" />
        <div className="absolute inset-[-2px] border-2 border-white/20 rounded-sm" />
        
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Momma's Card */}
          <a 
            href="/momma" 
            className="px-8 py-6 rounded-sm bg-[#f5f5f0] hover:bg-[#eaeae0] transition-colors duration-300 text-center"
          >
            <p className="text-2xl font-cormorant text-gray-800">For Momma</p>
          </a>

          {/* Dad's Card */}
          <a 
            href="/dad" 
            className="px-8 py-6 rounded-sm bg-[#e6f3ff] hover:bg-[#d9edff] transition-colors duration-300 text-center"
          >
            <p className="text-2xl font-cormorant text-gray-800">For Dad</p>
          </a>

          {/* Sister's Card */}
          <a 
            href="/sister" 
            className="px-8 py-6 rounded-sm bg-[#ffe6eb] hover:bg-[#ffd6e0] transition-colors duration-300 text-center"
          >
            <p className="text-2xl font-cormorant text-gray-800">For Coco</p>
          </a>
        </div>
      </div>

      <Gallery />
    </main>
  );
}
