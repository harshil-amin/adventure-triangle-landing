'use client';

export default function Home() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Adventure Triangle - Explore Water | Air | Land</title>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap');

            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }

            html {
              scroll-behavior: smooth;
            }

            body {
              font-family: 'Inter', sans-serif;
              overflow-x: hidden;
            }

            .font-display {
              font-family: 'Playfair Display', serif;
            }

            /* Animations */
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes slideInRight {
              from {
                opacity: 0;
                transform: translateX(50px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes slideInLeft {
              from {
                opacity: 0;
                transform: translateX(-50px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes float {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-10px);
              }
            }

            .animate-in {
              animation: fadeInUp 0.8s ease-out forwards;
            }

            .animate-slide-right {
              animation: slideInRight 0.8s ease-out forwards;
            }

            .animate-slide-left {
              animation: slideInLeft 0.8s ease-out forwards;
            }

            .animate-float {
              animation: float 3s ease-in-out infinite;
            }

            .btn-primary {
              padding: 12px 32px;
              background: linear-gradient(to right, #10b981, #0d9488);
              color: white;
              font-weight: 600;
              border-radius: 8px;
              transition: all 300ms;
              border: none;
              cursor: pointer;
              text-decoration: none;
              display: inline-block;
              text-align: center;
            }

            .btn-primary:hover {
              background: linear-gradient(to right, #059669, #0d7377);
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            }

            .btn-secondary {
              padding: 12px 32px;
              border: 2px solid #10b981;
              color: #10b981;
              font-weight: 600;
              border-radius: 8px;
              transition: all 300ms;
              background: transparent;
              cursor: pointer;
              text-decoration: none;
              display: inline-block;
              text-align: center;
            }

            .btn-secondary:hover {
              background: #f0fdf4;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            }

            .input-field {
              width: 100%;
              padding: 10px 16px;
              border: 1px solid #d1d5db;
              border-radius: 8px;
              font-size: 14px;
              transition: all 200ms;
            }

            .input-field:focus {
              outline: none;
              border-color: #10b981;
              box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
            }

            .gradient-text {
              background: linear-gradient(135deg, #10b981 0%, #0d9488 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }

            .section-title {
              font-size: 48px;
              font-weight: 700;
              font-family: 'Playfair Display', serif;
              margin-bottom: 16px;
            }

            .section-subtitle {
              font-size: 20px;
              color: #4b5563;
              margin-bottom: 32px;
            }

            .form-success {
              padding: 16px;
              background: #f0fdf4;
              border: 1px solid #86efac;
              color: #166534;
              border-radius: 8px;
              margin-bottom: 16px;
            }

            .form-error {
              padding: 16px;
              background: #fef2f2;
              border: 1px solid #fca5a5;
              color: #991b1b;
              border-radius: 8px;
              margin-bottom: 16px;
            }

            @media (max-width: 768px) {
              .section-title {
                font-size: 30px;
              }
              .section-subtitle {
                font-size: 18px;
              }
            }
          `}
        </style>
      </head>
      <body className="bg-white text-gray-900">
        {/* Navigation Bar */}
        <nav className="fixed top-0 w-full bg-white shadow-md z-50 animate-in" style={{ animationDelay: '0s' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="font-display text-2xl font-bold gradient-text">△ Adventure Triangle</div>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-gray-600 hover:text-emerald-600 transition">About</a>
              <a href="#mission" className="text-gray-600 hover:text-emerald-600 transition">Mission</a>
              <a href="#beta" className="text-gray-600 hover:text-emerald-600 transition">Beta</a>
              <a href="#event" className="text-gray-600 hover:text-emerald-600 transition">Event</a>
            </div>
            <a href="#beta" className="btn-primary text-sm">Join Beta</a>
          </div>
        </nav>

        {/* Hero Section */}
        <section id="hero" className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-in">
                <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
                  Experience Adventure Like Never Before
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Discover extraordinary adventures across water, air, and land. Join our beta program and be among the first to explore the future of adventure travel.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#event" className="btn-primary text-center">Register for Launch Event</a>
                  <a href="#beta" className="btn-secondary text-center">Join Beta Program</a>
                </div>
                <p className="text-sm text-gray-500 mt-8">✨ Limited spots available • Early bird benefit • Exclusive access</p>
              </div>
              <div className="animate-slide-right relative">
                <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/6b3dea94-5e6a-437b-8b02-49123a4d1238.png" alt="Adventure collage" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-400 rounded-full opacity-20 blur-2xl animate-float"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-white font-display text-2xl mb-4">△ Adventure Triangle</h3>
                <p className="text-sm">Redefining adventure travel for the modern explorer.</p>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-center text-sm">
                © 2025 Adventure Triangle Inc. All rights reserved. | Made with 💚 for adventurers everywhere
              </p>
            </div>
          </div>
        </footer>

        <script>
          {`
            const storage = {
              partners: [],
              launchEvent: [],
              betaUsers: []
            };

            window.DEBUG_STORAGE = () => console.log('Submitted Data:', storage);
            console.log('%c💚 Welcome to Adventure Triangle', 'color: #10b981; font-size: 20px; font-weight: bold;');
          `}
        </script>
      </body>
    </html>
  );
}
