// pages/index.js

export default function Home() {
  return (
    // <div className="min-h-screen bg-gradient-to-br from-black via-black to-[#2b0000] text-white">
    <div className="text-white">

      {/* Header */}
      {/* <header className="flex justify-between items-center px-6 py-4 border-b border-white/10">
        <div className="text-2xl font-bold text-red-600">디자인을담다</div>
        <nav className="space-x-6 text-sm font-medium uppercase">
          <a href="#about" className="hover:text-red-400">About</a>
          <a href="#service" className="hover:text-red-400">Service</a>
          <a href="#portfolio" className="hover:text-red-400">Portfolio</a>
          <a href="#contact" className="hover:text-red-400">Contact</a>
        </nav>
      </header> */}

      {/* Hero Section */}
      <main className="flex flex-col lg:flex-row justify-between px-10 py-24 max-w-7xl mx-auto">
        {/* Left */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-5xl font-extrabold mb-6">PORTFOLIO</h1>
          <p className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent">
            디자인의담다의 기획력은<br />결과물로 증명합니다.
          </p>
          <p className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-indigo-400 bg-clip-text text-transparent">
            디자인의담다의 기획력은<br />결과물로 증명합니다.
          </p>
        </div>

        {/* Right */}
        <div className="lg:w-1/2 text-gray-400 text-lg leading-relaxed">
          정형화된 플랫폼에 찍어내듯 제작하지 않습니다.<br />
          귀사의 산업군, 브랜드 특성, 고객타겟과 니즈 등을 정밀하게 분석하여<br />
          오직 귀사만의 디자인을 기획합니다.
        </div>
      </main>
    </div>
  );
}
