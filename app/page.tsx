"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type FeedbackState = {
  partner?: { type: "success" | "error"; message: string } | null;
  event?: { type: "success" | "error"; message: string } | null;
  beta?: { type: "success" | "error"; message: string } | null;
};

export default function Home() {
  const [feedback, setFeedback] = useState<FeedbackState>({
    partner: null,
    event: null,
    beta: null,
  });


const storageRef = useRef({
  partners: [] as any[],
  launchEvent: [] as any[],
  betaUsers: [] as any[],
});

// expose helper in the browser console
  useEffect(() => {
    (window as any).DEBUG_STORAGE = () => console.log(storageRef.current);
  }, []);

  const clearLater = (key: keyof FeedbackState) => {
    window.setTimeout(() => {
      setFeedback((prev) => ({ ...prev, [key]: null }));
    }, 5000);
  };

  const handlePartnerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const form = e.currentTarget;
      const fd = new FormData(form);

      const data = {
        name: String(fd.get("name") || ""),
        company: String(fd.get("company") || ""),
        email: String(fd.get("email") || ""),
        partnershipType: String(fd.get("partnershipType") || ""),
        message: String(fd.get("message") || ""),
        timestamp: new Date().toISOString(),
      };

      // save to dummy storage
      storageRef.current.partners.push(data);

      console.log("Partner inquiry:", data);

      setFeedback((prev) => ({
        ...prev,
        partner: {
          type: "success",
          message: "✓ Partnership inquiry submitted! We'll be in touch within 24 hours.",
        },
      }));
      form.reset();
      clearLater("partner");
    } catch {
      setFeedback((prev) => ({
        ...prev,
        partner: { type: "error", message: "✗ Error submitting. Please try again." },
      }));
      clearLater("partner");
    }
  };

  const handleLaunchEventSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const form = e.currentTarget;
      const fd = new FormData(form);

      const data = {
        name: String(fd.get("name") || ""),
        email: String(fd.get("email") || ""),
        city: String(fd.get("city") || ""),
        attending: String(fd.get("attending") || ""),
        role: String(fd.get("role") || ""),
        timestamp: new Date().toISOString(),
      };

      // save to dummy storage
      storageRef.current.launchEvent.push(data);

      console.log("Launch event registration:", data);

      setFeedback((prev) => ({
        ...prev,
        event: { type: "success", message: "✓ You're registered! Check your email for event details." },
      }));
      form.reset();
      clearLater("event");
    } catch {
      setFeedback((prev) => ({
        ...prev,
        event: { type: "error", message: "✗ Error registering. Please try again." },
      }));
      clearLater("event");
    }
  };

  const handleBetaSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const form = e.currentTarget;
      const fd = new FormData(form);

      const interests = fd.getAll("interests").map((v) => String(v));

      const data = {
        name: String(fd.get("name") || ""),
        email: String(fd.get("email") || ""),
        interests,
        experienceLevel: String(fd.get("experienceLevel") || ""),
        country: String(fd.get("country") || ""),
        timestamp: new Date().toISOString(),
      };

      // save to dummy storage
      storageRef.current.betaUsers.push(data);

      console.log("Beta signup:", data);

      setFeedback((prev) => ({
        ...prev,
        beta: { type: "success", message: "✓ Welcome to the beta program! Check your email for next steps." },
      }));
      form.reset();
      clearLater("beta");
    } catch {
      setFeedback((prev) => ({
        ...prev,
        beta: { type: "error", message: "✗ Error joining beta. Please try again." },
      }));
      clearLater("beta");
    }
  };

  const partnerFeedbackNode = useMemo(() => {
    if (!feedback.partner) return null;
    return (
      <div className={feedback.partner.type === "success" ? "form-success" : "form-error"}>
        {feedback.partner.message}
      </div>
    );
  }, [feedback.partner]);

  const eventFeedbackNode = useMemo(() => {
    if (!feedback.event) return null;
    return (
      <div className={feedback.event.type === "success" ? "form-success" : "form-error"}>
        {feedback.event.message}
      </div>
    );
  }, [feedback.event]);

  const betaFeedbackNode = useMemo(() => {
    if (!feedback.beta) return null;
    return (
      <div className={feedback.beta.type === "success" ? "form-success" : "form-error"}>
        {feedback.beta.message}
      </div>
    );
  }, [feedback.beta]);


  return (
    <div className="bg-white text-gray-900">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50 animate-in" style={{ animationDelay: "0s" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="font-display text-2xl font-bold gradient-text">△ Adventure Triangle</div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-600 hover:text-emerald-600 transition">
              About
            </a>
            <a href="#mission" className="text-gray-600 hover:text-emerald-600 transition">
              Mission
            </a>
            <a href="#beta" className="text-gray-600 hover:text-emerald-600 transition">
              Beta
            </a>
            <a href="#event" className="text-gray-600 hover:text-emerald-600 transition">
              Event
            </a>
          </div>
          <a href="#beta" className="btn-primary text-sm">
            Join Beta
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in">
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
                Experience Adventure Like Never Before
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover extraordinary adventures across water, air, and land. Join our beta program and be among the
                first to explore the future of adventure travel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#event" className="btn-primary text-center">
                  Register for Launch Event
                </a>
                <a href="#beta" className="btn-secondary text-center">
                  Join Beta Program
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-8">✨ Limited spots available • Early bird benefit • Exclusive access</p>
            </div>

            <div className="animate-slide-right relative">
              <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/6b3dea94-5e6a-437b-8b02-49123a4d1238.png"
                  alt="Adventure collage"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-400 rounded-full opacity-20 blur-2xl animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">About Adventure Triangle</h2>
          <p className="section-subtitle text-center">Redefining adventure for the modern explorer</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="animate-slide-left">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Adventure Triangle is a revolutionary platform connecting adventure seekers with curated experiences across
                three distinct ecosystems: water adventures, air activities, and land expeditions.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We believe everyone deserves access to transformative adventures. Our platform matches your interests, skill
                level, and preferences with hand-picked local guides and experiences around the globe.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From kayaking in pristine waters to paragliding over mountains and hiking through untouched wilderness—Adventure
                Triangle makes extraordinary experiences accessible, safe, and unforgettable.
              </p>
            </div>

            <div className="animate-slide-right grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl card-hover">
                <div className="text-4xl mb-2">💧</div>
                <h4 className="font-bold text-gray-900 mb-2">Water</h4>
                <p className="text-sm text-gray-600">Kayaking, diving, sailing, and more</p>
              </div>
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl card-hover">
                <div className="text-4xl mb-2">🛩️</div>
                <h4 className="font-bold text-gray-900 mb-2">Air</h4>
                <p className="text-sm text-gray-600">Paragliding, skydiving, ballooning</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl card-hover">
                <div className="text-4xl mb-2">🏔️</div>
                <h4 className="font-bold text-gray-900 mb-2">Land</h4>
                <p className="text-sm text-gray-600">Hiking, climbing, trekking, camping</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl card-hover">
                <div className="text-4xl mb-2">🌍</div>
                <h4 className="font-bold text-gray-900 mb-2">Global</h4>
                <p className="text-sm text-gray-600">500+ destinations worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Our Mission: Water | Air | Land</h2>
          <p className="section-subtitle text-center">Three ecosystems, infinite possibilities</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover animate-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-6xl mb-6 text-center">💧</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Water Adventures</h3>
              <p className="text-gray-600 mb-6 text-center">
                Dive into the world's most pristine waters. From tropical coral reefs to mountain lakes, explore aquatic wonders
                with expert guides.
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <strong>🚣</strong> Kayaking & Canoeing
                </p>
                <p>
                  <strong>🏊</strong> Scuba & Snorkeling
                </p>
                <p>
                  <strong>⛵</strong> Sailing & Windsurfing
                </p>
                <p>
                  <strong>🤿</strong> Deep Sea Diving
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover animate-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-6xl mb-6 text-center">🛩️</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Air Adventures</h3>
              <p className="text-gray-600 mb-6 text-center">
                Soar above stunning landscapes. Experience the thrill of flight with certified professionals and state-of-the-art
                equipment.
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <strong>🪂</strong> Skydiving
                </p>
                <p>
                  <strong>🪁</strong> Paragliding
                </p>
                <p>
                  <strong>🎈</strong> Hot Air Ballooning
                </p>
                <p>
                  <strong>✈️</strong> Scenic Flights
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover animate-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-6xl mb-6 text-center">🏔️</div>
              <h3 className="text-2xl font-bold mb-4 text-center">Land Adventures</h3>
              <p className="text-gray-600 mb-6 text-center">
                Conquer mountains and trails. Trek through untamed wilderness and discover hidden gems with seasoned adventure leaders.
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <strong>🥾</strong> Hiking & Trekking
                </p>
                <p>
                  <strong>🧗</strong> Rock & Mountain Climbing
                </p>
                <p>
                  <strong>⛺</strong> Camping & Survival
                </p>
                <p>
                  <strong>🚵</strong> Mountain Biking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section id="partners" className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Become a Partner</h2>
              <p className="text-lg opacity-95 mb-8">
                Are you a tour operator, guide, or accommodation provider? Join our growing network and connect with adventure seekers worldwide.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Grow your business with a global audience</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Marketing support and featured listings</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Secure payments and insurance coverage</span>
                </li>
              </ul>

              <button
                onClick={() => document.getElementById("partner-form")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:shadow-lg transition-all"
                type="button"
              >
                Become a Partner
              </button>
            </div>

            <div className="animate-slide-right bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur">
              <form id="partner-form" onSubmit={handlePartnerSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="partner-name">
                    Full Name
                  </label>
                  <input id="partner-name" type="text" name="name" placeholder="Your name" className="input-field" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="partner-company">
                    Company/Organization
                  </label>
                  <input
                    id="partner-company"
                    type="text"
                    name="company"
                    placeholder="Your company"
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="partner-email">
                    Email
                  </label>
                  <input id="partner-email" type="email" name="email" placeholder="your@email.com" className="input-field" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="partner-type">
                    Partnership Type
                  </label>
                  <select id="partner-type" name="partnershipType" className="input-field" defaultValue="" required>
                    <option value="" disabled>
                      Select type...
                    </option>
                    <option value="tour-operator">Tour Operator</option>
                    <option value="guide">Adventure Guide</option>
                    <option value="accommodation">Accommodation</option>
                    <option value="equipment">Equipment Rental</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="partner-message">
                    Message
                  </label>
                  <textarea
                    id="partner-message"
                    name="message"
                    placeholder="Tell us about your business..."
                    className="input-field h-20"
                    required
                  />
                </div>

                <div className="text-sm">{partnerFeedbackNode}</div>

                <button type="submit" className="w-full bg-white text-emerald-600 font-semibold py-3 rounded-lg hover:shadow-lg transition-all">
                  Submit Partnership Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Launch Event CTA */}
      <section id="event" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Adventure Triangle Launch Event</h2>
          <p className="section-subtitle text-center">
            Join us for an unforgettable evening celebrating the future of adventure travel
          </p>

          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 shadow-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-2">📅</div>
                <p className="font-semibold text-gray-900">Coming Soon</p>
                <p className="text-sm text-gray-600">Save the date in your calendar</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">📍</div>
                <p className="font-semibold text-gray-900">Global Event</p>
                <p className="text-sm text-gray-600">Multiple cities simultaneously</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎊</div>
                <p className="font-semibold text-gray-900">Exclusive Launch</p>
                <p className="text-sm text-gray-600">First look at beta features</p>
              </div>
            </div>

            <form onSubmit={handleLaunchEventSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="event-name">
                    Full Name
                  </label>
                  <input id="event-name" type="text" name="name" placeholder="Your name" className="input-field" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="event-email">
                    Email Address
                  </label>
                  <input
                    id="event-email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="input-field"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="event-city">
                    City
                  </label>
                  <input id="event-city" type="text" name="city" placeholder="Your city" className="input-field" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="event-attending">
                    Will you attend?
                  </label>
                  <select id="event-attending" name="attending" className="input-field" defaultValue="" required>
                    <option value="" disabled>
                      Select...
                    </option>
                    <option value="yes">Yes, I'll attend</option>
                    <option value="maybe">Maybe, interested</option>
                    <option value="no">No, notify me</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="event-role">
                  Your Role
                </label>
                <select id="event-role" name="role" className="input-field" defaultValue="" required>
                  <option value="" disabled>
                    Select your role...
                  </option>
                  <option value="adventurer">Adventure Seeker</option>
                  <option value="entrepreneur">Entrepreneur</option>
                  <option value="media">Media</option>
                  <option value="partner">Partner</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="text-sm">{eventFeedbackNode}</div>

              <button type="submit" className="w-full btn-primary">
                Register for Launch Event
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Beta Registration */}
      <section id="beta" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Join Our Beta Program</h2>
          <p className="section-subtitle text-center">Be among the first to experience Adventure Triangle</p>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <form onSubmit={handleBetaSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="beta-name">
                    Full Name
                  </label>
                  <input id="beta-name" type="text" name="name" placeholder="Your name" className="input-field" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="beta-email">
                    Email Address
                  </label>
                  <input id="beta-email" type="email" name="email" placeholder="your@email.com" className="input-field" required />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">I'm interested in:</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-emerald-50 transition">
                    <input type="checkbox" name="interests" value="water" className="w-4 h-4 text-emerald-600" />
                    <span>💧 Water Adventures</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-emerald-50 transition">
                    <input type="checkbox" name="interests" value="air" className="w-4 h-4 text-emerald-600" />
                    <span>🛩️ Air Activities</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-emerald-50 transition">
                    <input type="checkbox" name="interests" value="land" className="w-4 h-4 text-emerald-600" />
                    <span>🏔️ Land Adventures</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="beta-level">
                  Experience Level
                </label>
                <select id="beta-level" name="experienceLevel" className="input-field" defaultValue="" required>
                  <option value="" disabled>
                    Select your level...
                  </option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="expert">Expert</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="beta-country">
                  Country
                </label>
                <input id="beta-country" type="text" name="country" placeholder="Your country" className="input-field" required />
              </div>

              <div className="text-sm">{betaFeedbackNode}</div>

              <button type="submit" className="w-full btn-primary">
                Join Beta Program
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* #FeelTheAdventure Campaign */}
      <section id="campaign" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">#FeelTheAdventure</h2>
          <p className="section-subtitle text-center">Join our social movement and share your adventures with the world</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left">
              <h3 className="text-2xl font-bold mb-4">Share Your Journey</h3>
              <p className="text-lg text-gray-600 mb-6">
                Every adventure tells a story. When you travel with Adventure Triangle, use #FeelTheAdventure to share your moments with our global community.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <span className="text-2xl">📸</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Share Photos & Videos</h4>
                    <p className="text-sm text-gray-600">Capture your best moments on Instagram & TikTok</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Win Exclusive Rewards</h4>
                    <p className="text-sm text-gray-600">Featured posts, discounts, and special prizes</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Join Our Community</h4>
                    <p className="text-sm text-gray-600">Connect with adventurers from around the world</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-slide-right">
              <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 rounded-2xl p-8 card-hover">
                <p className="text-center text-gray-700 mb-6 text-lg italic">
                  "Climbing that mountain in Peru felt impossible until I saw others do it. #FeelTheAdventure showed me it's possible for everyone."
                </p>
                <p className="text-center font-semibold text-gray-900 mb-2">Sarah M.</p>
                <p className="text-center text-sm text-gray-600 mb-6">Adventure Triangle Beta User</p>
                <p className="text-center text-2xl">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section id="social" className="py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Follow Our Journey</h2>
          <p className="text-xl opacity-95 mb-12">Connect with us on social media for daily inspiration and exclusive updates</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur rounded-xl p-6 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-3">f</div>
              <h3 className="font-semibold mb-1">Facebook</h3>
              <p className="text-sm opacity-90">Community & Updates</p>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur rounded-xl p-6 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-3">in</div>
              <h3 className="font-semibold mb-1">LinkedIn</h3>
              <p className="text-sm opacity-90">Business & Partnerships</p>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur rounded-xl p-6 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-3">📷</div>
              <h3 className="font-semibold mb-1">Instagram</h3>
              <p className="text-sm opacity-90">#FeelTheAdventure</p>
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur rounded-xl p-6 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl mb-3">🎵</div>
              <h3 className="font-semibold mb-1">TikTok</h3>
              <p className="text-sm opacity-90">Short-Form Stories</p>
            </a>
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

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="hover:text-emerald-400 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#mission" className="hover:text-emerald-400 transition">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#beta" className="hover:text-emerald-400 transition">
                    Join Beta
                  </a>
                </li>
                <li>
                  <a href="#event" className="hover:text-emerald-400 transition">
                    Launch Event
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:hello@adventuretriangle.com" className="hover:text-emerald-400 transition">
                    hello@adventuretriangle.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="hover:text-emerald-400 transition">
                    +1 (234) 567-890
                  </a>
                </li>
                <li>Global Headquarters</li>
                <li>Adventure City, World</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm">© 2025 Adventure Triangle Inc. All rights reserved. | Made with 💚 for adventurers everywhere</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
