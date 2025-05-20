
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { getOptimizedImageUrl } from '@/lib/cloudinary';

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary-blue py-16 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Kalki Packers and Movers</h1>
            <p className="text-lg md:text-xl">
              Your trusted partner in relocation services across India since 2010.
            </p>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
              <p className="text-neutral-text mb-4">
                Founded in 2010 in Kakinada, Andhra Pradesh, Kalki Packers and Movers began as a small local moving company 
                with just two trucks and a team of five dedicated professionals. Our founder, Mr. Rajesh Kumar, 
                started the business with a simple mission: to provide reliable, stress-free moving services with a personal touch.
              </p>
              <p className="text-neutral-text mb-4">
                Over the years, we've grown to become one of the most trusted names in the relocation industry in Andhra Pradesh 
                and beyond. Today, our fleet has expanded to over 25 vehicles of various sizes, and our team includes more than 
                100 trained professionals specialized in different aspects of the moving process.
              </p>
              <p className="text-neutral-text">
                Despite our growth, we've maintained our commitment to personalized service and attention to detail. 
                Every move is treated with the same care and precision, whether it's a small apartment or a large corporate office.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in">
              <img 
                src={getOptimizedImageUrl('office-team', 600)} 
                alt="Kalki Packers and Movers Team" 
                className="w-full h-auto" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="section bg-neutral-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Our Mission & Values</h2>
            <p className="text-lg text-neutral-text">
              At Kalki Packers and Movers, we're guided by a clear mission and a strong set of core values 
              that define how we operate and serve our customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary-blue">Our Mission</h3>
              <p className="text-neutral-text mb-4">
                To provide exceptional relocation services that exceed customer expectations through reliability, 
                efficiency, and personalized care, making every move a positive experience.
              </p>
              <p className="text-neutral-text">
                We aim to revolutionize the moving industry by setting new standards in customer service, 
                technological innovation, and environmental responsibility.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-primary-blue">Core Values</h3>
              <ul className="space-y-3 text-neutral-text">
                <li className="flex items-start">
                  <span className="text-secondary-orange font-bold mr-2">✓</span>
                  <span><strong>Integrity:</strong> Honesty and transparency in all our dealings.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-orange font-bold mr-2">✓</span>
                  <span><strong>Excellence:</strong> Striving for the highest quality in every service we provide.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-orange font-bold mr-2">✓</span>
                  <span><strong>Customer-Centric:</strong> Putting customer needs at the heart of everything we do.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-orange font-bold mr-2">✓</span>
                  <span><strong>Innovation:</strong> Continuously improving our methods and adopting new technologies.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary-orange font-bold mr-2">✓</span>
                  <span><strong>Teamwork:</strong> Collaborating effectively to deliver the best possible service.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage Map */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Our Service Coverage</h2>
            <p className="text-lg text-neutral-text">
              We provide comprehensive moving services throughout India, with special focus on 
              cities and towns in Andhra Pradesh, Telangana, Tamil Nadu, and Karnataka.
            </p>
          </div>
          
          <div className="bg-neutral-light p-6 rounded-lg mb-12">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              {/* Map would ideally be implemented with Google Maps API */}
              <div className="w-full h-96 bg-neutral-medium flex items-center justify-center">
                <p className="text-center text-neutral-text">
                  Map of India highlighting our service areas<br/>
                  <span className="text-sm">(Google Maps integration would go here)</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-neutral-light p-4 rounded-lg text-center">
              <h3 className="font-semibold mb-2">Andhra Pradesh</h3>
              <p className="text-sm text-neutral-text">Kakinada, Visakhapatnam, Rajahmundry, Vijayawada, Tirupati</p>
            </div>
            <div className="bg-neutral-light p-4 rounded-lg text-center">
              <h3 className="font-semibold mb-2">Telangana</h3>
              <p className="text-sm text-neutral-text">Hyderabad, Warangal, Nizamabad, Karimnagar</p>
            </div>
            <div className="bg-neutral-light p-4 rounded-lg text-center">
              <h3 className="font-semibold mb-2">Tamil Nadu</h3>
              <p className="text-sm text-neutral-text">Chennai, Coimbatore, Madurai, Salem</p>
            </div>
            <div className="bg-neutral-light p-4 rounded-lg text-center">
              <h3 className="font-semibold mb-2">Karnataka</h3>
              <p className="text-sm text-neutral-text">Bangalore, Mysore, Mangalore, Hubli</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-neutral-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="text-lg text-neutral-text">
              The people behind Kalki Packers and Movers are our greatest asset. Our experienced and dedicated team 
              works tirelessly to ensure your moving experience is smooth and stress-free.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src={getOptimizedImageUrl('team-member-1', 400)} 
                  alt="Rajesh Kumar" 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Rajesh Kumar</h3>
                <p className="text-secondary-orange font-medium mb-4">Founder & CEO</p>
                <p className="text-neutral-text">
                  With over 15 years of experience in the logistics industry, Rajesh founded Kalki Packers and Movers 
                  in 2010 with a vision to redefine moving services in India.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src={getOptimizedImageUrl('team-member-2', 400)} 
                  alt="Priya Sharma" 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Priya Sharma</h3>
                <p className="text-secondary-orange font-medium mb-4">Operations Director</p>
                <p className="text-neutral-text">
                  Priya oversees all daily operations, ensuring each move is executed with precision and care. 
                  Her attention to detail and problem-solving skills keep the team running efficiently.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-64 overflow-hidden">
                <img 
                  src={getOptimizedImageUrl('team-member-3', 400)} 
                  alt="Vihaan Reddy" 
                  className="w-full h-full object-cover" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Vihaan Reddy</h3>
                <p className="text-secondary-orange font-medium mb-4">Customer Relations Manager</p>
                <p className="text-neutral-text">
                  Vihaan leads our customer service team, ensuring that each client receives personalized attention 
                  and that all their concerns are addressed promptly and effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="bg-primary-blue rounded-lg shadow-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Experience Our Service?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Let our experienced team handle your next move with the care and professionalism you deserve.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-white text-primary-blue hover:bg-gray-100">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild className="btn-secondary">
                <Link to="/estimate">Get Free Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
