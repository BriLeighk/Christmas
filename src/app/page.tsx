import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 p-4">
      <h1 className="text-4xl font-cormorant text-white mb-8">Christmas Cards 2024</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    </main>
  );
}
