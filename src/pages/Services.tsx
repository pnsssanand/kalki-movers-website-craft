
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck, DoorOpen } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ServiceCard from '@/components/ServiceCard';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";

const Services = () => {
  const [loadSize, setLoadSize] = useState("full");

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary-blue py-16 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-lg md:text-xl">
              Comprehensive moving and packing solutions tailored to your needs.
              We pride ourselves on reliability, efficiency, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="section bg-white">
        <div className="container-custom">
          <Tabs defaultValue="local" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="local">Local Moving Services</TabsTrigger>
                <TabsTrigger value="vehicle">Vehicle Transport Services</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Local Moving Services Tab */}
            <TabsContent value="local" className="animate-fade-in">
              <div className="mb-10">
                <h2 className="text-3xl font-semibold text-center mb-4">Local Moving Services</h2>
                <p className="text-lg text-neutral-text text-center max-w-3xl mx-auto mb-12">
                  Our professional team handles local moves of all sizes. From apartments to large houses,
                  we ensure your belongings reach your new home safely and efficiently.
                </p>
                
                {/* Service Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <ServiceCard 
                    icon={Package}
                    title="Professional Packing"
                    description="Careful wrapping and packing of all items using quality materials to ensure protection during transit."
                  />
                  
                  <ServiceCard 
                    icon={Truck}
                    title="Loading & Transportation"
                    description="Expert handling during loading, secure transportation, and careful unloading at destination."
                  />
                  
                  <ServiceCard 
                    icon={DoorOpen}
                    title="Door-to-Door Service"
                    description="Complete service from your current doorstep to your new location with attention to detail."
                  />
                </div>
                
                {/* Load Size Selector */}
                <div className="bg-neutral-light p-6 rounded-lg max-w-3xl mx-auto">
                  <h3 className="text-xl font-semibold mb-4 text-center">Select Your Load Size</h3>
                  <div className="flex justify-center mb-6">
                    <ToggleGroup type="single" value={loadSize} onValueChange={(value) => value && setLoadSize(value)}>
                      <ToggleGroupItem value="part" className="px-6">Part Load</ToggleGroupItem>
                      <ToggleGroupItem value="mini" className="px-6">Mini Load</ToggleGroupItem>
                      <ToggleGroupItem value="full" className="px-6">Full Load</ToggleGroupItem>
                    </ToggleGroup>
                  </div>
                  
                  <div className="mb-6">
                    {loadSize === "part" && (
                      <div className="text-center animate-fade-in">
                        <p className="mb-4">Ideal for small apartments or select items. Share truck space with other customers for cost-effective moving.</p>
                        <p className="font-semibold">Approximate Cost: ₹3,000 - ₹8,000</p>
                      </div>
                    )}
                    
                    {loadSize === "mini" && (
                      <div className="text-center animate-fade-in">
                        <p className="mb-4">Perfect for 1-2 bedroom apartments. Dedicated small truck for your belongings.</p>
                        <p className="font-semibold">Approximate Cost: ₹8,000 - ₹15,000</p>
                      </div>
                    )}
                    
                    {loadSize === "full" && (
                      <div className="text-center animate-fade-in">
                        <p className="mb-4">Best for houses and large apartments. Full-sized truck exclusively for your move.</p>
                        <p className="font-semibold">Approximate Cost: ₹15,000 - ₹30,000</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="text-center">
                    <Button asChild className="btn-primary">
                      <Link to="/estimate">Get Exact Quote</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Vehicle Transport Tab */}
            <TabsContent value="vehicle" className="animate-fade-in">
              <div className="mb-10">
                <h2 className="text-3xl font-semibold text-center mb-4">Vehicle Transport Services</h2>
                <p className="text-lg text-neutral-text text-center max-w-3xl mx-auto mb-12">
                  We specialize in safe and secure transportation of vehicles across India. 
                  Our experienced team ensures your vehicle reaches its destination in the same condition as received.
                </p>
                
                {/* Vehicle Services */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-primary-blue text-white p-6 text-center">
                      <h3 className="text-xl font-semibold">Safe Handling</h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-secondary-orange mr-2">✓</span>
                          <span>Vehicle inspection before loading</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-orange mr-2">✓</span>
                          <span>Specialized equipment for loading/unloading</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-orange mr-2">✓</span>
                          <span>Secure fastening during transport</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-orange mr-2">✓</span>
                          <span>Protected from elements in enclosed carriers</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-primary-blue text-white p-6 text-center">
                      <h3 className="text-xl font-semibold">Timely Delivery</h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-secondary-orange mr-2">✓</span>
                          <span>Planned routes for efficient transport</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-orange mr-2">✓</span>
                          <span>Experienced drivers for safe journey</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-orange mr-2">✓</span>
                          <span>GPS tracking of your vehicle</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-orange mr-2">✓</span>
                          <span>Regular updates on transport progress</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-primary-blue text-white p-6 text-center">
                      <h3 className="text-xl font-semibold">Customer Satisfaction</h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="text-secondary-orange mr-2">✓</span>
                          <span>Documentation handled by our team</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-orange mr-2">✓</span>
                          <span>Insurance coverage during transport</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-orange mr-2">✓</span>
                          <span>Doorstep pickup and delivery</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-secondary-orange mr-2">✓</span>
                          <span>Post-delivery inspection and report</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Vehicle Types */}
                <div className="bg-neutral-light p-8 rounded-lg max-w-4xl mx-auto text-center">
                  <h3 className="text-2xl font-semibold mb-6">We Transport All Vehicle Types</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="font-medium">Cars</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="font-medium">Motorcycles</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="font-medium">SUVs</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="font-medium">Luxury Vehicles</p>
                    </div>
                  </div>
                  <Button asChild className="btn-primary">
                    <Link to="/estimate">Get Vehicle Transport Quote</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-neutral-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold mb-4">Ready for a Stress-Free Move?</h2>
            <p className="text-lg text-neutral-text mb-8">
              Contact us today to discuss your moving needs and receive a personalized quote. 
              Our team is ready to make your relocation experience seamless and enjoyable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="btn-primary">
                <Link to="/estimate">Get Free Estimate</Link>
              </Button>
              <Button asChild className="btn-outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
