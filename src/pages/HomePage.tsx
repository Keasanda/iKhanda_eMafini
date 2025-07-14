import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';

interface HomePageProps {
  onProductSelect: (productId: number) => void;
}

export default function HomePage({ onProductSelect }: HomePageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/WhatsApp Image 2025-07-04 at 21.23.05_3f0d5195.jpg')`
          }}
        ></div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light text-white mb-6 leading-tight drop-shadow-2xl">
            Handcrafted
            <span className="block font-medium text-amber-300">Homeware</span>
          </h2>
          <p className="text-xl sm:text-2xl text-stone-100 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Where concrete meets wood in perfect harmony. Each piece tells a story of artisan craftsmanship and natural beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-stone-800 px-8 py-4 rounded-full hover:bg-stone-100 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-xl"
            >
              <span className="text-lg font-medium">Explore Collection</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-stone-800 transition-all duration-300 shadow-xl"
            >
              <span className="text-lg font-medium">Custom Orders</span>
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-serif font-light text-stone-800 mb-4">
              Our Collection
            </h3>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-6">
              Each piece is carefully crafted to bring warmth and elegance to your living space
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 max-w-3xl mx-auto">
              <p className="text-lg text-amber-800 font-medium">
                ✨ We specialize in custom orders - bring your vision to life with our bespoke creations
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer" onClick={() => onProductSelect(product.id)}>
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-serif font-medium text-stone-800 group-hover:text-amber-700 transition-colors">
                    {product.name}
                  </h4>
                  <p className="text-stone-600 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-2xl font-medium text-stone-800">
                      R{product.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                      Custom Available
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Orders Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-stone-100 to-amber-50 rounded-3xl p-12">
              <h4 className="text-3xl font-serif font-medium text-stone-800 mb-4">
                Custom Orders Welcome
              </h4>
              <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
                Have a specific vision in mind? We love creating unique pieces tailored to your space and style. 
                From custom dimensions to personalized finishes, let's bring your ideas to life.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-stone-800 text-stone-50 px-8 py-4 rounded-full hover:bg-stone-700 transition-all duration-300 flex items-center justify-center space-x-2 group mx-auto"
              >
                <span className="text-lg font-medium">Discuss Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl sm:text-5xl font-serif font-light text-stone-800">
                Crafted with
                <span className="block font-medium text-amber-700">Intention</span>
              </h3>
              <p className="text-lg text-stone-600 leading-relaxed">
                Every piece in our collection is born from a deep appreciation for natural materials and timeless design. We believe that the imperfect beauty of concrete and the organic warmth of wood create harmony in any space.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Our artisans spend hours perfecting each creation, ensuring that every texture, every grain, and every curve tells a story of dedication to the craft. We take pride in creating custom pieces that reflect your personal style and vision.
              </p>
              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-serif font-semibold text-amber-700">50+</div>
                  <div className="text-stone-600">Unique Pieces</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif font-semibold text-amber-700">100%</div>
                  <div className="text-stone-600">Handcrafted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif font-semibold text-amber-700">5★</div>
                  <div className="text-stone-600">Customer Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://i.postimg.cc/0yw8qJVP/Whats-App-Image-2025-07-11-at-18-44-37-955b65f3.jpg"
                  alt="Artisan crafting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl overflow-hidden border-4 border-stone-50 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/4917821/pexels-photo-4917821.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Finished product"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-serif font-light text-stone-800 mb-4">
              Let's Create Together
            </h3>
            <p className="text-xl text-stone-600">
              Have a custom piece in mind? We'd love to bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div className="text-center lg:text-left">
                <h4 className="text-2xl font-serif font-medium text-stone-800 mb-4">Get in Touch</h4>
                <div className="space-y-3 text-stone-600">
                  <p>hello@ikhandaemafini.co.za</p>
                  <p>+27 (0)11 123-4567</p>
                  <p>123 Artisan Lane<br />Johannesburg, South Africa</p>
                </div>
              </div>
              
              <div className="text-center lg:text-left">
                <h4 className="text-2xl font-serif font-medium text-stone-800 mb-4">Studio Hours</h4>
                <div className="space-y-2 text-stone-600">
                  <p>Monday - Friday<br />9:00 AM - 6:00 PM</p>
                  <p>Saturday<br />10:00 AM - 4:00 PM</p>
                </div>
              </div>
              
              <div className="text-center lg:text-left">
                <h4 className="text-2xl font-serif font-medium text-stone-800 mb-4">Custom Orders</h4>
                <div className="space-y-2 text-stone-600">
                  <p>• Bespoke furniture pieces</p>
                  <p>• Custom dimensions available</p>
                  <p>• Personalized finishes</p>
                  <p>• Design consultation included</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h4 className="text-2xl font-serif font-medium text-stone-800 mb-6">Send us a Message</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="+27 (0)11 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your project or ask any questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-stone-800 text-stone-50 px-8 py-4 rounded-xl hover:bg-stone-700 transition-colors font-medium text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}