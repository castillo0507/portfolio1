"use client";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-gray-900 to-primary text-white px-4 py-20 relative overflow-hidden"
    >
      {/* Tech Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        {/* Code Symbols */}
        <div className="absolute top-10 left-10 text-accent text-4xl">{'</>'}</div>
        <div className="absolute top-32 right-20 text-accent text-3xl">{'{'}</div>
        <div className="absolute bottom-32 left-20 text-accent text-3xl">{'}'}</div>
        <div className="absolute bottom-20 right-10 text-accent text-4xl">{'<>'}</div>
        <div className="absolute top-1/3 left-1/3 text-accent text-2xl">{'()'}</div>
        <div className="absolute top-2/3 right-1/3 text-accent text-2xl">{'[]'}</div>
        
        {/* Icons */}
        <svg className="absolute top-1/4 right-1/4 w-32 h-32 text-accent opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5a4 4 0 100-8 4 4 0 000 8z" />
        </svg>
        <svg className="absolute bottom-1/4 left-1/4 w-24 h-24 text-accent opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
        <svg className="absolute top-40 left-1/3 w-20 h-20 text-accent opacity-25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4m0 6L8 4m-4 4l4 4" />
        </svg>
        <svg className="absolute bottom-40 right-1/4 w-20 h-20 text-accent opacity-25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        
        {/* Decorative Dots */}
        <div className="absolute top-20 right-1/3 w-2 h-2 bg-accent rounded-full opacity-40"></div>
        <div className="absolute top-40 left-1/4 w-1.5 h-1.5 bg-accent rounded-full opacity-50"></div>
        <div className="absolute top-1/2 right-1/5 w-2 h-2 bg-accent rounded-full opacity-35"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-accent rounded-full opacity-45"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-accent rounded-full opacity-40"></div>
        <div className="absolute top-1/3 right-10 w-1 h-1 bg-accent rounded-full opacity-60"></div>
        <div className="absolute top-2/3 left-10 w-1.5 h-1.5 bg-accent rounded-full opacity-35"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-accent rounded-full opacity-50"></div>
        
        {/* Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 800">
          <line x1="100" y1="100" x2="400" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-accent opacity-20" vectorEffect="non-scaling-stroke" />
          <line x1="400" y1="100" x2="400" y2="300" stroke="currentColor" strokeWidth="0.5" className="text-accent opacity-20" vectorEffect="non-scaling-stroke" />
          <circle cx="400" cy="100" r="3" fill="currentColor" className="text-accent opacity-20" />
          <circle cx="400" cy="300" r="3" fill="currentColor" className="text-accent opacity-20" />
          
          <line x1="800" y1="500" x2="1000" y2="500" stroke="currentColor" strokeWidth="0.5" className="text-accent opacity-20" vectorEffect="non-scaling-stroke" />
          <line x1="1000" y1="500" x2="1000" y2="700" stroke="currentColor" strokeWidth="0.5" className="text-accent opacity-20" vectorEffect="non-scaling-stroke" />
          <circle cx="800" cy="500" r="3" fill="currentColor" className="text-accent opacity-20" />
          <circle cx="1000" cy="700" r="3" fill="currentColor" className="text-accent opacity-20" />
          
          <line x1="200" y1="600" x2="600" y2="600" stroke="currentColor" strokeWidth="0.5" className="text-accent opacity-20" vectorEffect="non-scaling-stroke" />
          <line x1="600" y1="600" x2="600" y2="300" stroke="currentColor" strokeWidth="0.5" className="text-accent opacity-20" vectorEffect="non-scaling-stroke" />
          <circle cx="200" cy="600" r="3" fill="currentColor" className="text-accent opacity-20" />
          <circle cx="600" cy="300" r="3" fill="currentColor" className="text-accent opacity-20" />
        </svg>
      </div>
      <div className="max-w-4xl mx-auto text-center animate-slideInUp relative z-10">
        {/* Profile Picture and Name */}
        <div className="mb-8 flex flex-col items-center">
          <img 
            src="/profile.jpg" 
            alt="Genie Rose Castillo" 
            className="w-32 h-32 rounded-full mb-4 border-4 border-accent shadow-lg"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Genie Rose Castillo</h2>
          <p className="text-accent text-lg font-semibold">IT Specialist, Full Stack Developer</p>
        </div>

        {/* Greeting */}
        <p className="text-accent font-semibold mb-4 text-lg">Welcome to my portfolio!</p>

        {/* Hero Statement */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Crafting Beautiful, 
          <span className="text-accent"> Accessible Experiences</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed text-justify">
         I'm an IT Specialist and Full-Stack Developer passionate about turning complex problems into intuitive digital solutions. With a keen eye for detail and a drive for innovation, I build web applications that are not only visually stunning but also user-friendly and accessible.
         <br/><br/>
From front-end design that delights users to back-end systems that power seamless functionality, I specialize in creating experiences that bridge the gap between technology and people. Whether it’s optimizing performance, enhancing security, or implementing scalable solutions, I strive to deliver quality that makes an impact.
         <br/><br/>
Let’s build something amazing together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-blue-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
