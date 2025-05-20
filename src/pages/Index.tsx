
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import ContactForm from '@/components/ContactForm';
import { getOptimizedImageUrl } from '@/lib/cloudinary';
import { Package, Truck, DoorOpen } from 'lucide-react';

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-blue to-blue-900 text-white py-16 md:py-28">
        <div className="container-custom grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Professional Moving Solutions for Your Peace of Mind
            </h1>
            <p className="text-lg md:text-xl">
              Kalki Packers and Movers offers premium relocation services throughout India with expert handling and care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="btn-secondary">
                <Link to="/estimate">Get Free Estimate</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary-blue">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src={getOptimizedImageUrl('truck', 600)} 
              alt="Moving Truck" 
              className="rounded-lg shadow-lg animate-fade-in" 
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x400?text=Moving+Services";
              }}
            />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="section-title">Welcome to Kalki Packers and Movers</h2>
            <p className="text-lg text-neutral-text">
              With years of experience in the industry, we specialize in providing comprehensive moving solutions 
              tailored to your specific needs. From local home moves to long-distance relocations, our team ensures 
              a seamless experience from start to finish.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="service-card animate-fade-in animate-delay-100">
              <div className="mb-4 p-4 bg-blue-50 rounded-full text-primary-blue">
                <Package size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Packing</h3>
              <p className="text-neutral-text">
                Our trained professionals use quality materials to ensure your belongings are packed securely for transport.
              </p>
            </div>
            
            <div className="service-card animate-fade-in animate-delay-200">
              <div className="mb-4 p-4 bg-blue-50 rounded-full text-primary-blue">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Safe Transportation</h3>
              <p className="text-neutral-text">
                Modern fleet of vehicles and experienced drivers to transport your goods safely to your destination.
              </p>
            </div>
            
            <div className="service-card animate-fade-in animate-delay-300">
              <div className="mb-4 p-4 bg-blue-50 rounded-full text-primary-blue">
                <DoorOpen size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Door-to-Door Service</h3>
              <p className="text-neutral-text">
                Complete end-to-end solutions from packing at origin to unpacking at your new location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-neutral-light">
        <div className="container-custom">
          <div className="bg-primary-blue rounded-lg shadow-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to simplify your move?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Let us handle the heavy lifting while you focus on the excitement of your new beginning.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-white text-primary-blue hover:bg-gray-100">
                <a href="tel:+919876543210">Call Now: +91 9876543210</a>
              </Button>
              <Button asChild className="btn-secondary">
                <Link to="/estimate">Get Free Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Quick Contact</h2>
            <p className="text-lg text-neutral-text max-w-2xl mx-auto">
              Have questions or need assistance? Fill out the form below and our team will contact you shortly.
            </p>
          </div>
          
          <ContactForm 
            title="Contact Us Today" 
            description="We'll get back to you within 24 hours."
          />
        </div>
      </section>
    </main>
  );
};

export default Index;
