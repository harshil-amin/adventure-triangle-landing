'use client';

export default function Home() {
  return (
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adventure Triangle - Explore Water | Air | Land</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/framer-motion@10"></script>
    <style>
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

        @keyframes pulse-glow {
            0%, 100% {
                box-shadow: 0 0 20px rgba(34, 197, 94, 0.3);
            }
            50% {
                box-shadow: 0 0 40px rgba(34, 197, 94, 0.5);
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
            @apply px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-lg transition-all duration-300 hover:from-emerald-600 hover:to-teal-700 hover:shadow-lg active:scale-95;
        }

        .btn-secondary {
            @apply px-8 py-3 border-2 border-emerald-500 text-emerald-600 font-semibold rounded-lg transition-all duration-300 hover:bg-emerald-50 hover:shadow-lg active:scale-95;
        }

        .btn-outline {
            @apply px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg transition-all duration-300 hover:border-gray-500 hover:shadow-md;
        }

        .input-field {
            @apply w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200;
        }

        .card-hover {
            @apply transition-all duration-300 hover:shadow-xl hover:-translate-y-2;
        }

        .gradient-text {
            background: linear-gradient(135deg, #10b981 0%, #0d9488 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .section-title {
            @apply text-4xl md:text-5xl font-display font-bold mb-4;
        }

        .section-subtitle {
            @apply text-xl text-gray-600 mb-8;
        }

        /* Form feedback */
        .form-success {
            @apply p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg mb-4;
        }

        .form-error {
            @apply p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg mb-4;
        }

        /* Responsive text */
        @media (max-width: 768px) {
            .section-title {
                @apply text-3xl;
            }
            .section-subtitle {
                @apply text-lg;
            }
        }
    </style>
</head>
<body class="bg-white text-gray-900">

    <!-- Navigation Bar -->
    <nav class="fixed top-0 w-full bg-white shadow-md z-50 animate-in" style="animation-delay: 0s">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div class="font-display text-2xl font-bold gradient-text">△ Adventure Triangle</div>
            <div class="hidden md:flex gap-8">
                <a href="#about" class="text-gray-600 hover:text-emerald-600 transition">About</a>
                <a href="#mission" class="text-gray-600 hover:text-emerald-600 transition">Mission</a>
                <a href="#beta" class="text-gray-600 hover:text-emerald-600 transition">Beta</a>
                <a href="#event" class="text-gray-600 hover:text-emerald-600 transition">Event</a>
            </div>
            <a href="#beta" class="btn-primary text-sm">Join Beta</a>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="min-h-screen pt-20 bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 flex items-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="animate-in">
                    <h1 class="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Experience Adventure Like Never Before
                    </h1>
                    <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                        Discover extraordinary adventures across water, air, and land. Join our beta program and be among the first to explore the future of adventure travel.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="#event" class="btn-primary text-center">Register for Launch Event</a>
                        <a href="#beta" class="btn-secondary text-center">Join Beta Program</a>
                    </div>
                    <p class="text-sm text-gray-500 mt-8">✨ Limited spots available • Early bird benefit • Exclusive access</p>
                </div>
                <div class="animate-slide-right relative">
                    <div class="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-2xl">
                        <img src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/6b3dea94-5e6a-437b-8b02-49123a4d1238.png" alt="Adventure collage" class="w-full h-full object-cover" />
                        <div class="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                    </div>
                    <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-400 rounded-full opacity-20 blur-2xl animate-float"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="section-title text-center">About Adventure Triangle</h2>
            <p class="section-subtitle text-center">Redefining adventure for the modern explorer</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
                <div class="animate-slide-left">
                    <p class="text-lg text-gray-700 mb-4 leading-relaxed">
                        Adventure Triangle is a revolutionary platform connecting adventure seekers with curated experiences across three distinct ecosystems: water adventures, air activities, and land expeditions.
                    </p>
                    <p class="text-lg text-gray-700 mb-4 leading-relaxed">
                        We believe everyone deserves access to transformative adventures. Our platform matches your interests, skill level, and preferences with hand-picked local guides and experiences around the globe.
                    </p>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        From kayaking in pristine waters to paragliding over mountains and hiking through untouched wilderness—Adventure Triangle makes extraordinary experiences accessible, safe, and unforgettable.
                    </p>
                </div>
                <div class="animate-slide-right grid grid-cols-2 gap-4">
                    <div class="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl card-hover">
                        <div class="text-4xl mb-2">💧</div>
                        <h4 class="font-bold text-gray-900 mb-2">Water</h4>
                        <p class="text-sm text-gray-600">Kayaking, diving, sailing, and more</p>
                    </div>
                    <div class="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl card-hover">
                        <div class="text-4xl mb-2">🛩️</div>
                        <h4 class="font-bold text-gray-900 mb-2">Air</h4>
                        <p class="text-sm text-gray-600">Paragliding, skydiving, ballooning</p>
                    </div>
                    <div class="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl card-hover">
                        <div class="text-4xl mb-2">🏔️</div>
                        <h4 class="font-bold text-gray-900 mb-2">Land</h4>
                        <p class="text-sm text-gray-600">Hiking, climbing, trekking, camping</p>
                    </div>
                    <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl card-hover">
                        <div class="text-4xl mb-2">🌍</div>
                        <h4 class="font-bold text-gray-900 mb-2">Global</h4>
                        <p class="text-sm text-gray-600">500+ destinations worldwide</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Mission Section -->
    <section id="mission" class="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="section-title text-center">Our Mission: Water | Air | Land</h2>
            <p class="section-subtitle text-center">Three ecosystems, infinite possibilities</p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Water -->
                <div class="bg-white rounded-2xl p-8 shadow-lg card-hover animate-in" style="animation-delay: 0.1s">
                    <div class="text-6xl mb-6 text-center">💧</div>
                    <h3 class="text-2xl font-bold mb-4 text-center">Water Adventures</h3>
                    <p class="text-gray-600 mb-6 text-center">
                        Dive into the world's most pristine waters. From tropical coral reefs to mountain lakes, explore aquatic wonders with expert guides.
                    </p>
                    <div class="space-y-2 text-sm text-gray-700">
                        <p><strong>🚣</strong> Kayaking & Canoeing</p>
                        <p><strong>🏊</strong> Scuba & Snorkeling</p>
                        <p><strong>⛵</strong> Sailing & Windsurfing</p>
                        <p><strong>🤿</strong> Deep Sea Diving</p>
                    </div>
                </div>

                <!-- Air -->
                <div class="bg-white rounded-2xl p-8 shadow-lg card-hover animate-in" style="animation-delay: 0.2s">
                    <div class="text-6xl mb-6 text-center">🛩️</div>
                    <h3 class="text-2xl font-bold mb-4 text-center">Air Adventures</h3>
                    <p class="text-gray-600 mb-6 text-center">
                        Soar above stunning landscapes. Experience the thrill of flight with certified professionals and state-of-the-art equipment.
                    </p>
                    <div class="space-y-2 text-sm text-gray-700">
                        <p><strong>🪂</strong> Skydiving</p>
                        <p><strong>🪁</strong> Paragliding</p>
                        <p><strong>🎈</strong> Hot Air Ballooning</p>
                        <p><strong>✈️</strong> Scenic Flights</p>
                    </div>
                </div>

                <!-- Land -->
                <div class="bg-white rounded-2xl p-8 shadow-lg card-hover animate-in" style="animation-delay: 0.3s">
                    <div class="text-6xl mb-6 text-center">🏔️</div>
                    <h3 class="text-2xl font-bold mb-4 text-center">Land Adventures</h3>
                    <p class="text-gray-600 mb-6 text-center">
                        Conquer mountains and trails. Trek through untamed wilderness and discover hidden gems with seasoned adventure leaders.
                    </p>
                    <div class="space-y-2 text-sm text-gray-700">
                        <p><strong>🥾</strong> Hiking & Trekking</p>
                        <p><strong>🧗</strong> Rock & Mountain Climbing</p>
                        <p><strong>⛺</strong> Camping & Survival</p>
                        <p><strong>🚵</strong> Mountain Biking</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Partner CTA -->
    <section id="partners" class="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="animate-slide-left">
                    <h2 class="text-4xl md:text-5xl font-display font-bold mb-6">
                        Become a Partner
                    </h2>
                    <p class="text-lg opacity-95 mb-8">
                        Are you a tour operator, guide, or accommodation provider? Join our growing network and connect with adventure seekers worldwide.
                    </p>
                    <ul class="space-y-4 mb-8">
                        <li class="flex items-center gap-3">
                            <span class="text-2xl">✓</span>
                            <span>Grow your business with a global audience</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="text-2xl">✓</span>
                            <span>Marketing support and featured listings</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="text-2xl">✓</span>
                            <span>Secure payments and insurance coverage</span>
                        </li>
                    </ul>
                    <button onclick="document.getElementById('partner-form').scrollIntoView({behavior: 'smooth'})" class="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:shadow-lg transition-all">
                        Become a Partner
                    </button>
                </div>
                <div class="animate-slide-right bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur">
                    <form id="partner-form" onsubmit="handlePartnerSubmit(event)" class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">Full Name</label>
                            <input type="text" name="name" placeholder="Your name" class="input-field" required />
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Company/Organization</label>
                            <input type="text" name="company" placeholder="Your company" class="input-field" required />
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Email</label>
                            <input type="email" name="email" placeholder="your@email.com" class="input-field" required />
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Partnership Type</label>
                            <select name="partnershipType" class="input-field" required>
                                <option value="">Select type...</option>
                                <option value="tour-operator">Tour Operator</option>
                                <option value="guide">Adventure Guide</option>
                                <option value="accommodation">Accommodation</option>
                                <option value="equipment">Equipment Rental</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Message</label>
                            <textarea name="message" placeholder="Tell us about your business..." class="input-field h-20" required></textarea>
                        </div>
                        <div id="partner-feedback" class="text-sm"></div>
                        <button type="submit" class="w-full bg-white text-emerald-600 font-semibold py-3 rounded-lg hover:shadow-lg transition-all">
                            Submit Partnership Inquiry
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Launch Event CTA -->
    <section id="event" class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="section-title text-center">Adventure Triangle Launch Event</h2>
            <p class="section-subtitle text-center">Join us for an unforgettable evening celebrating the future of adventure travel</p>
            
            <div class="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 shadow-lg mb-8">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div class="text-center">
                        <div class="text-4xl mb-2">📅</div>
                        <p class="font-semibold text-gray-900">Coming Soon</p>
                        <p class="text-sm text-gray-600">Save the date in your calendar</p>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl mb-2">📍</div>
                        <p class="font-semibold text-gray-900">Global Event</p>
                        <p class="text-sm text-gray-600">Multiple cities simultaneously</p>
                    </div>
                    <div class="text-center">
                        <div class="text-4xl mb-2">🎊</div>
                        <p class="font-semibold text-gray-900">Exclusive Launch</p>
                        <p class="text-sm text-gray-600">First look at beta features</p>
                    </div>
                </div>

                <form onsubmit="handleLaunchEventSubmit(event)" class="space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">Full Name</label>
                            <input type="text" name="name" placeholder="Your name" class="input-field" required />
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Email Address</label>
                            <input type="email" name="email" placeholder="your@email.com" class="input-field" required />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">City</label>
                            <input type="text" name="city" placeholder="Your city" class="input-field" required />
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Will you attend?</label>
                            <select name="attending" class="input-field" required>
                                <option value="">Select...</option>
                                <option value="yes">Yes, I'll attend</option>
                                <option value="maybe">Maybe, interested</option>
                                <option value="no">No, notify me</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-2">Your Role</label>
                        <select name="role" class="input-field" required>
                            <option value="">Select your role...</option>
                            <option value="adventurer">Adventure Seeker</option>
                            <option value="entrepreneur">Entrepreneur</option>
                            <option value="media">Media</option>
                            <option value="partner">Partner</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div id="event-feedback" class="text-sm"></div>
                    <button type="submit" class="w-full btn-primary">Register for Launch Event</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Beta Registration -->
    <section id="beta" class="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="section-title text-center">Join Our Beta Program</h2>
            <p class="section-subtitle text-center">Be among the first to experience Adventure Triangle</p>
            
            <div class="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                <form onsubmit="handleBetaSubmit(event)" class="space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-2">Full Name</label>
                            <input type="text" name="name" placeholder="Your name" class="input-field" required />
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2">Email Address</label>
                            <input type="email" name="email" placeholder="your@email.com" class="input-field" required />
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium mb-2">I'm interested in:</label>
                        <div class="space-y-2">
                            <label class="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-emerald-50 transition">
                                <input type="checkbox" name="interests" value="water" class="w-4 h-4 text-emerald-600" />
                                <span>💧 Water Adventures</span>
                            </label>
                            <label class="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-emerald-50 transition">
                                <input type="checkbox" name="interests" value="air" class="w-4 h-4 text-emerald-600" />
                                <span>🛩️ Air Activities</span>
                            </label>
                            <label class="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-emerald-50 transition">
                                <input type="checkbox" name="interests" value="land" class="w-4 h-4 text-emerald-600" />
                                <span>🏔️ Land Adventures</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium mb-2">Experience Level</label>
                        <select name="experienceLevel" class="input-field" required>
                            <option value="">Select your level...</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                            <option value="expert">Expert</option>
                        </select>
                    </div>

                    <div>
                        <label class="block text-sm font-medium mb-2">Country</label>
                        <input type="text" name="country" placeholder="Your country" class="input-field" required />
                    </div>

                    <div id="beta-feedback" class="text-sm"></div>
                    <button type="submit" class="w-full btn-primary">Join Beta Program</button>
                </form>
            </div>
        </div>
    </section>

    <!-- #FeelTheAdventure Campaign -->
    <section id="campaign" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="section-title text-center">#FeelTheAdventure</h2>
            <p class="section-subtitle text-center">Join our social movement and share your adventures with the world</p>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div class="animate-slide-left">
                    <h3 class="text-2xl font-bold mb-4">Share Your Journey</h3>
                    <p class="text-lg text-gray-600 mb-6">
                        Every adventure tells a story. When you travel with Adventure Triangle, use #FeelTheAdventure to share your moments with our global community.
                    </p>
                    <div class="space-y-4">
                        <div class="flex gap-4">
                            <span class="text-2xl">📸</span>
                            <div>
                                <h4 class="font-semibold text-gray-900">Share Photos & Videos</h4>
                                <p class="text-sm text-gray-600">Capture your best moments on Instagram & TikTok</p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <span class="text-2xl">🏆</span>
                            <div>
                                <h4 class="font-semibold text-gray-900">Win Exclusive Rewards</h4>
                                <p class="text-sm text-gray-600">Featured posts, discounts, and special prizes</p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <span class="text-2xl">🌐</span>
                            <div>
                                <h4 class="font-semibold text-gray-900">Join Our Community</h4>
                                <p class="text-sm text-gray-600">Connect with adventurers from around the world</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="animate-slide-right">
                    <div class="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 rounded-2xl p-8 card-hover">
                        <p class="text-center text-gray-700 mb-6 text-lg italic">
                            "Climbing that mountain in Peru felt impossible until I saw others do it. #FeelTheAdventure showed me it's possible for everyone."
                        </p>
                        <p class="text-center font-semibold text-gray-900 mb-2">Sarah M.</p>
                        <p class="text-center text-sm text-gray-600 mb-6">Adventure Triangle Beta User</p>
                        <p class="text-center text-2xl">⭐⭐⭐⭐⭐</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Social Media -->
    <section id="social" class="py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl md:text-5xl font-display font-bold mb-6">Follow Our Journey</h2>
            <p class="text-xl opacity-95 mb-12">Connect with us on social media for daily inspiration and exclusive updates</p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur rounded-xl p-6 transition-all duration-300 hover:scale-105">
                    <div class="text-5xl mb-3">f</div>
                    <h3 class="font-semibold mb-1">Facebook</h3>
                    <p class="text-sm opacity-90">Community & Updates</p>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur rounded-xl p-6 transition-all duration-300 hover:scale-105">
                    <div class="text-5xl mb-3">in</div>
                    <h3 class="font-semibold mb-1">LinkedIn</h3>
                    <p class="text-sm opacity-90">Business & Partnerships</p>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur rounded-xl p-6 transition-all duration-300 hover:scale-105">
                    <div class="text-5xl mb-3">📷</div>
                    <h3 class="font-semibold mb-1">Instagram</h3>
                    <p class="text-sm opacity-90">#FeelTheAdventure</p>
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" class="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur rounded-xl p-6 transition-all duration-300 hover:scale-105">
                    <div class="text-5xl mb-3">🎵</div>
                    <h3 class="font-semibold mb-1">TikTok</h3>
                    <p class="text-sm opacity-90">Short-Form Stories</p>
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-400 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                    <h3 class="text-white font-display text-2xl mb-4">△ Adventure Triangle</h3>
                    <p class="text-sm">Redefining adventure travel for the modern explorer.</p>
                </div>
                <div>
                    <h4 class="text-white font-semibold mb-4">Quick Links</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="#about" class="hover:text-emerald-400 transition">About</a></li>
                        <li><a href="#mission" class="hover:text-emerald-400 transition">Our Mission</a></li>
                        <li><a href="#beta" class="hover:text-emerald-400 transition">Join Beta</a></li>
                        <li><a href="#event" class="hover:text-emerald-400 transition">Launch Event</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-semibold mb-4">Legal</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="#" class="hover:text-emerald-400 transition">Privacy Policy</a></li>
                        <li><a href="#" class="hover:text-emerald-400 transition">Terms of Service</a></li>
                        <li><a href="#" class="hover:text-emerald-400 transition">Cookie Policy</a></li>
                        <li><a href="#" class="hover:text-emerald-400 transition">Disclaimer</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-semibold mb-4">Contact</h4>
                    <ul class="space-y-2 text-sm">
                        <li><a href="mailto:hello@adventuretriangle.com" class="hover:text-emerald-400 transition">hello@adventuretriangle.com</a></li>
                        <li><a href="tel:+1234567890" class="hover:text-emerald-400 transition">+1 (234) 567-890</a></li>
                        <li>Global Headquarters</li>
                        <li>Adventure City, World</li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-gray-800 pt-8">
                <p class="text-center text-sm">
                    © 2025 Adventure Triangle Inc. All rights reserved. | Made with 💚 for adventurers everywhere
                </p>
            </div>
        </div>
    </footer>

    <script>
        // Dummy data storage
        const storage = {
            partners: [],
            launchEvent: [],
            betaUsers: []
        };

        // Partner Form
        async function handlePartnerSubmit(e) {
            e.preventDefault();
            const form = e.target;
            const feedback = document.getElementById('partner-feedback');
            
            const data = {
                name: form.name.value,
                company: form.company.value,
                email: form.email.value,
                partnershipType: form.partnershipType.value,
                message: form.message.value,
                timestamp: new Date().toISOString()
            };

            try {
                feedback.innerHTML = '<div class="form-success">✓ Submitting...</div>';
                
                // Simulate API call with dummy storage
                storage.partners.push(data);
                
                feedback.innerHTML = '<div class="form-success">✓ Partnership inquiry submitted! We\'ll be in touch within 24 hours.</div>';
                form.reset();
                setTimeout(() => {
                    feedback.innerHTML = '';
                }, 5000);
            } catch (error) {
                feedback.innerHTML = '<div class="form-error">✗ Error submitting. Please try again.</div>';
            }
        }

        // Launch Event Form
        async function handleLaunchEventSubmit(e) {
            e.preventDefault();
            const form = e.target;
            const feedback = document.getElementById('event-feedback');
            
            const data = {
                name: form.name.value,
                email: form.email.value,
                city: form.city.value,
                attending: form.attending.value,
                role: form.role.value,
                timestamp: new Date().toISOString()
            };

            try {
                feedback.innerHTML = '<div class="form-success">✓ Registering...</div>';
                
                storage.launchEvent.push(data);
                
                feedback.innerHTML = '<div class="form-success">✓ You\'re registered! Check your email for event details.</div>';
                form.reset();
                setTimeout(() => {
                    feedback.innerHTML = '';
                }, 5000);
            } catch (error) {
                feedback.innerHTML = '<div class="form-error">✗ Error registering. Please try again.</div>';
            }
        }

        // Beta Registration Form
        async function handleBetaSubmit(e) {
            e.preventDefault();
            const form = e.target;
            const feedback = document.getElementById('beta-feedback');
            
            const interests = Array.from(form.querySelectorAll('input[name="interests"]:checked'))
                .map(cb => cb.value);
            
            const data = {
                name: form.name.value,
                email: form.email.value,
                interests: interests,
                experienceLevel: form.experienceLevel.value,
                country: form.country.value,
                timestamp: new Date().toISOString()
            };

            try {
                feedback.innerHTML = '<div class="form-success">✓ Submitting...</div>';
                
                storage.betaUsers.push(data);
                
                feedback.innerHTML = '<div class="form-success">✓ Welcome to the beta program! Check your email for next steps.</div>';
                form.reset();
                setTimeout(() => {
                    feedback.innerHTML = '';
                }, 5000);
            } catch (error) {
                feedback.innerHTML = '<div class="form-error">✗ Error joining beta. Please try again.</div>';
            }
        }

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('section > *:first-child').forEach(el => {
            observer.observe(el);
        });

        // Log storage for debugging (open browser console)
        window.DEBUG_STORAGE = () => console.log('Submitted Data:', storage);
        console.log('%c💚 Welcome to Adventure Triangle', 'color: #10b981; font-size: 20px; font-weight: bold;');
        console.log('Tip: Type DEBUG_STORAGE() in console to view submitted form data');
    </script>

</body>
</html>
  );
}
