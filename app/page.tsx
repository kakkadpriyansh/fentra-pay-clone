import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <header className="relative z-10 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="flex justify-between items-center p-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-white to-blue-100 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/30">
              <span className="text-blue-600 font-bold text-xl">N</span>
            </div>
            <span className="font-bold text-white text-xl tracking-wide">NovaPay</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
              Home
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
              Services
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
              About
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors duration-300 font-medium">
              Contact
            </a>
          </nav>

          <div className="flex gap-3">
            <Button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full backdrop-blur-sm border border-white/30 transition-all duration-300 hover:scale-105 font-semibold">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold">
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      <section className="relative z-10 flex items-center justify-between max-w-7xl mx-auto px-6 py-20">
        <div className="flex-1 max-w-2xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium border border-white/30 mb-6">
              🚀 India's #1 Payment Platform
            </span>
          </div>

          <h1 className="text-7xl font-black text-white mb-6 leading-tight">
            One app for
            <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              all your needs
            </span>
          </h1>

          <p className="text-white/80 text-xl mb-8 leading-relaxed max-w-lg">
            Experience lightning-fast recharges, seamless bill payments, and exclusive rewards all in one powerful app.
          </p>

          <div className="flex gap-4 mb-12">
            <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl font-bold text-lg">
              Get Started
            </Button>
            <Button className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full backdrop-blur-sm border border-white/30 transition-all duration-300 hover:scale-105 font-semibold text-lg">
              Watch Demo
            </Button>
          </div>

          <div className="flex gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10M+</div>
              <div className="text-white/70 text-sm">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-white/70 text-sm">Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-white/70 text-sm">Uptime</div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative">
          <div className="relative transform hover:scale-105 transition-transform duration-500">
            {/* Main phone */}
            <div className="w-80 h-[500px] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] shadow-2xl p-2 relative">
              <div className="w-full h-full bg-white rounded-[2.5rem] p-6 relative overflow-hidden">
                {/* Phone screen content */}
                <div className="flex justify-between items-center mb-6">
                  <div className="w-16 h-4 bg-gray-900 rounded-full"></div>
                  <div className="flex gap-1">
                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                    <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                    <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center">
                    <span className="text-white font-bold">Quick Recharge</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-20 bg-gradient-to-br from-pink-400 to-red-500 rounded-xl shadow-md"></div>
                    <div className="h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl shadow-md"></div>
                    <div className="h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-md"></div>
                    <div className="h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl shadow-md"></div>
                  </div>
                  <div className="h-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg"></div>
                </div>
              </div>
            </div>

            <div className="absolute -right-12 top-12 animate-bounce">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-xl flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
            </div>

            <div className="absolute -left-8 top-32 animate-pulse">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full shadow-lg flex items-center justify-center">
                <span className="text-xl">💳</span>
              </div>
            </div>

            <div className="absolute -bottom-8 left-8 flex gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <span className="text-white text-xs font-bold">Jio</span>
              </div>
              <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <span className="text-white text-xs font-bold">Airtel</span>
              </div>
              <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <span className="text-white text-xs font-bold">VI</span>
              </div>
              <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <span className="text-white text-xs font-bold">BSNL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 backdrop-blur-md bg-white/95 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">Recharges</span>{" "}
              &
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Payments
              </span>
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Experience the future of digital payments with our comprehensive suite of services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <EnhancedServiceCard icon="📱" title="Mobile Recharge" gradient="from-blue-400 to-blue-600" />
            <EnhancedServiceCard icon="📺" title="DTH Recharge" gradient="from-purple-400 to-purple-600" />
            <EnhancedServiceCard icon="💡" title="Electricity Bill" gradient="from-yellow-400 to-orange-500" />
            <EnhancedServiceCard icon="💧" title="Water Bill" gradient="from-cyan-400 to-blue-500" />
            <EnhancedServiceCard icon="⛽" title="Gas Bill" gradient="from-orange-400 to-red-500" />
            <EnhancedServiceCard icon="🏷️" title="Fastag" gradient="from-green-400 to-green-600" />
            <EnhancedServiceCard icon="🛡️" title="Insurance" gradient="from-indigo-400 to-purple-600" />
            <EnhancedServiceCard icon="📡" title="Broadband" gradient="from-pink-400 to-red-500" />
            <EnhancedServiceCard icon="💳" title="Credit Card" gradient="from-emerald-400 to-teal-600" />
            <EnhancedServiceCard icon="🏛️" title="Municipal Tax" gradient="from-violet-400 to-purple-600" />
            <EnhancedServiceCard icon="🎓" title="Education Fee" gradient="from-blue-400 to-indigo-600" />
            <EnhancedServiceCard icon="🏥" title="Hospital Bill" gradient="from-red-400 to-pink-600" />
            <EnhancedServiceCard icon="📱" title="Postpaid Bill" gradient="from-pink-400 to-purple-500" />
            <EnhancedServiceCard icon="📺" title="Cable TV" gradient="from-red-400 to-pink-500" />
            <EnhancedServiceCard icon="🏛️" title="Club & Association" gradient="from-green-400 to-blue-500" />
            <EnhancedServiceCard icon="💳" title="Loan EMI" gradient="from-indigo-400 to-purple-500" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Instant Processing</h3>
              <p className="text-gray-600">Lightning-fast transactions completed in seconds</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl text-white">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">100% Secure</h3>
              <p className="text-gray-600">Bank-grade security for all your transactions</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl text-white">🎁</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Cashback Rewards</h3>
              <p className="text-gray-600">Earn rewards on every transaction you make</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-sm font-semibold mb-8 shadow-lg">
                About NovaPay
              </span>
              <h2 className="text-6xl font-black mb-8 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Empowering
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Digital India
                </span>
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg mb-10">
                <p className="text-xl">
                  NovaPay is revolutionizing India's digital payment ecosystem with cutting-edge technology and
                  unmatched user experience. We're not just a payment platform – we're your trusted financial companion.
                </p>
                <p>
                  Our mission is to democratize digital payments, making them accessible, secure, and rewarding for
                  every Indian. From bustling metros to remote villages, we're connecting millions to the digital
                  economy.
                </p>
                <p>
                  With industry-leading security protocols, instant processing, and the most competitive rates, we've
                  earned the trust of over 10 million users nationwide.
                </p>
              </div>

              {/* Enhanced stats */}
              <div className="grid grid-cols-3 gap-8 mb-10">
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
                  <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    10M+
                  </div>
                  <div className="text-gray-600 font-medium">Happy Users</div>
                </div>
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
                  <div className="text-3xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    ₹1000Cr+
                  </div>
                  <div className="text-gray-600 font-medium">Processed</div>
                </div>
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
                  <div className="text-3xl font-black bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                    99.9%
                  </div>
                  <div className="text-gray-600 font-medium">Uptime</div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 font-semibold text-lg">
                  Join Us Today
                </Button>
                <Button className="bg-white/80 hover:bg-white text-gray-800 px-8 py-4 rounded-2xl backdrop-blur-sm border border-gray-200 transition-all duration-300 hover:scale-105 font-semibold text-lg shadow-lg">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative transform hover:scale-105 transition-transform duration-700">
                {/* Main illustration container */}
                <div className="w-full max-w-lg mx-auto h-[500px] bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-[3rem] shadow-2xl p-8 relative overflow-hidden border border-white/50">
                  {/* Decorative background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5"></div>

                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    <div className="h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl shadow-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">NovaPay Dashboard</span>
                    </div>

                    <div className="h-40 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-3xl shadow-lg p-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-blue-500/10"></div>
                      <div className="relative space-y-3">
                        <div className="h-4 bg-white/80 rounded-full shadow-sm"></div>
                        <div className="h-4 bg-white/60 rounded-full shadow-sm w-3/4"></div>
                        <div className="h-4 bg-white/40 rounded-full shadow-sm w-1/2"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl shadow-md flex items-center justify-center">
                        <span className="text-2xl">📱</span>
                      </div>
                      <div className="h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl shadow-md flex items-center justify-center">
                        <span className="text-2xl">💳</span>
                      </div>
                    </div>

                    <div className="h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl shadow-lg flex items-center justify-center">
                      <span className="text-gray-600 font-semibold">Secure Transactions</span>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 animate-bounce">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl shadow-xl flex items-center justify-center">
                    <span className="text-3xl">⚡</span>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 animate-pulse">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl shadow-lg flex items-center justify-center">
                    <span className="text-2xl">🔒</span>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-8 animate-pulse delay-1000">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl shadow-lg flex items-center justify-center">
                    <span className="text-xl">🎁</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full max-w-md mx-auto h-80 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl shadow-xl p-6 relative overflow-hidden border border-gray-100">
                <div className="space-y-4">
                  <div className="h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-sm"></div>
                  <div className="h-32 bg-white rounded-2xl shadow-sm p-4">
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-200 rounded-full"></div>
                      <div className="h-3 bg-gray-200 rounded-full w-4/5"></div>
                      <div className="h-3 bg-gray-200 rounded-full w-3/5"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-16 bg-white rounded-xl shadow-sm"></div>
                    <div className="h-16 bg-white rounded-xl shadow-sm"></div>
                  </div>
                  <div className="h-12 bg-white rounded-xl shadow-sm"></div>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-full text-sm font-medium mb-6">
                Legal Information
              </span>
              <h2 className="text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Terms & Conditions
                </span>
              </h2>
              <div className="space-y-6">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">Service Eligibility</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Users must be 18+ years old with valid identification. Our platform ensures compliance with all
                    regulatory requirements for secure digital transactions.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">Transaction Security</h3>
                  <p className="text-gray-600 leading-relaxed">
                    All transactions are encrypted and processed through secure channels. We maintain the highest
                    standards of data protection and financial security.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">Refund Policy</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Failed transactions are automatically refunded within 24-48 hours. For disputes, our dedicated
                    support team ensures quick resolution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <span className="font-bold text-xl">NovaPay</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                India's most trusted digital payment platform serving millions of users nationwide.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mobile Recharge
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Bill Payments
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    DTH Recharge
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Fastag
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NovaPay. All rights reserved. Made with ❤️ in India</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface EnhancedServiceCardProps {
  icon: string
  title: string
  gradient: string
}

function EnhancedServiceCard({ icon, title, gradient }: EnhancedServiceCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
        <div
          className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-3xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
        >
          <span className="text-3xl">{icon}</span>
        </div>
        <span className="text-sm font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
          {title}
        </span>
      </div>
    </div>
  )
}
