
import React from 'react';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary-blue py-16 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl">
              Get in touch with our team for inquiries, estimates, or any questions about our services.
              We're here to help make your moving experience smooth and hassle-free.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <ContactForm 
                title="Contact Form" 
                description="Fill out the form and we'll get back to you within 24 hours."
              />
            </div>
            
            {/* Contact Details */}
            <div className="animate-fade-in-left">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <div className="bg-neutral-light p-6 rounded-lg mb-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Address</h3>
                    <address className="not-italic">
                      123 Main Street,<br/>
                      Kakinada, Andhra Pradesh,<br/>
                      India - 533001
                    </address>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <a href="tel:+919876543210" className="text-primary-blue hover:underline">+91 9876543210</a><br/>
                    <a href="tel:+919876543211" className="text-primary-blue hover:underline">+91 9876543211</a>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <a href="mailto:info@kalkimovers.com" className="text-primary-blue hover:underline">info@kalkimovers.com</a><br/>
                    <a href="mailto:support@kalkimovers.com" className="text-primary-blue hover:underline">support@kalkimovers.com</a>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                    <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p>Sunday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
              
              {/* Google Map */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61170.63502207974!2d82.21419086549693!3d16.93539881300403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3827ddaf59b4b7%3A0x92f8ddb9c89a4803!2sKakinada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1621845827382!5m2!1sen!2sin" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Office Location Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-neutral-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="text-lg text-neutral-text">
              Find quick answers to common questions about our services and moving process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">How far in advance should I book your services?</h3>
              <p className="text-neutral-text">
                We recommend booking at least 2-3 weeks in advance for local moves and 4-6 weeks for long-distance moves to ensure availability, especially during peak moving season.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">Do you provide packing materials?</h3>
              <p className="text-neutral-text">
                Yes, we provide all necessary packing materials including boxes, bubble wrap, packing paper, tape, and specialized containers for delicate items.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">Is insurance included in your service?</h3>
              <p className="text-neutral-text">
                We offer basic transit insurance as part of our standard service. Additional comprehensive insurance coverage is available at an extra cost.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">How do you handle fragile or valuable items?</h3>
              <p className="text-neutral-text">
                Our team is trained to handle fragile and valuable items with special care. We use custom packing methods and materials to ensure maximum protection during transit.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">What payment methods do you accept?</h3>
              <p className="text-neutral-text">
                We accept cash, credit/debit cards, bank transfers, and popular UPI payment methods. A deposit is required at the time of booking.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">Do you offer storage solutions?</h3>
              <p className="text-neutral-text">
                Yes, we provide both short-term and long-term storage solutions in our secure, climate-controlled facilities for customers who need temporary storage during their move.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
