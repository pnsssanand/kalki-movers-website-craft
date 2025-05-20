
import React, { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const Estimate = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    moveType: '',
    originCity: '',
    destinationCity: '',
    loadSize: '',
    name: '',
    email: '',
    phone: '',
    date: '',
    warehousing: false,
    fragileItems: false,
    dismantling: false,
    packaging: false,
    insurance: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string) => {
    setFormData(prev => ({ ...prev, [name]: !prev[name as keyof typeof prev] }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.moveType || !formData.originCity || !formData.destinationCity || 
        !formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, "estimates"), {
        ...formData,
        timestamp: serverTimestamp()
      });
      
      toast({
        title: "Estimate Request Received!",
        description: "We'll analyze your requirements and contact you soon with a quote."
      });
      
      // Reset form
      setFormData({
        moveType: '',
        originCity: '',
        destinationCity: '',
        loadSize: '',
        name: '',
        email: '',
        phone: '',
        date: '',
        warehousing: false,
        fragileItems: false,
        dismantling: false,
        packaging: false,
        insurance: false,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Unable to submit your request. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary-blue py-16 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get a Free Estimate</h1>
            <p className="text-lg md:text-xl">
              Fill out the form below to receive a personalized quote for your moving needs.
              Our team will analyze your requirements and get back to you promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Estimate Form Section */}
      <section className="section bg-white">
        <div className="container-custom max-w-4xl">
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-neutral-light rounded-t-lg">
              <CardTitle>Moving Estimate Request</CardTitle>
              <CardDescription>
                Please provide details about your move to help us prepare an accurate quote
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Move Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type of Move *</label>
                  <Select 
                    name="moveType" 
                    value={formData.moveType} 
                    onValueChange={(value) => handleSelectChange('moveType', value)}
                  >
                    <SelectTrigger className="input-field">
                      <SelectValue placeholder="Select move type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="household">Household Move</SelectItem>
                      <SelectItem value="office">Office Relocation</SelectItem>
                      <SelectItem value="vehicle">Vehicle Transport</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Origin and Destination */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="originCity" className="block text-sm font-medium text-gray-700 mb-1">Origin City *</label>
                    <input
                      id="originCity"
                      name="originCity"
                      type="text"
                      required
                      className="input-field"
                      value={formData.originCity}
                      onChange={handleChange}
                      placeholder="e.g., Kakinada"
                    />
                  </div>
                  <div>
                    <label htmlFor="destinationCity" className="block text-sm font-medium text-gray-700 mb-1">Destination City *</label>
                    <input
                      id="destinationCity"
                      name="destinationCity"
                      type="text"
                      required
                      className="input-field"
                      value={formData.destinationCity}
                      onChange={handleChange}
                      placeholder="e.g., Hyderabad"
                    />
                  </div>
                </div>
                
                {/* Load Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Load Size</label>
                  <Select 
                    name="loadSize" 
                    value={formData.loadSize} 
                    onValueChange={(value) => handleSelectChange('loadSize', value)}
                  >
                    <SelectTrigger className="input-field">
                      <SelectValue placeholder="Select load size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small (1 BHK or less)</SelectItem>
                      <SelectItem value="medium">Medium (2-3 BHK)</SelectItem>
                      <SelectItem value="large">Large (4+ BHK)</SelectItem>
                      <SelectItem value="vehicle">Single Vehicle</SelectItem>
                      <SelectItem value="office-small">Small Office</SelectItem>
                      <SelectItem value="office-large">Large Office</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Date */}
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Moving Date</label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    className="input-field"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
                
                {/* Extra Services */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Additional Services Required</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="warehousing" 
                        checked={formData.warehousing}
                        onCheckedChange={() => handleCheckboxChange('warehousing')}
                      />
                      <label htmlFor="warehousing" className="text-sm text-gray-700">Warehousing & Storage</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="fragileItems" 
                        checked={formData.fragileItems}
                        onCheckedChange={() => handleCheckboxChange('fragileItems')}
                      />
                      <label htmlFor="fragileItems" className="text-sm text-gray-700">Fragile Items Handling</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="dismantling" 
                        checked={formData.dismantling}
                        onCheckedChange={() => handleCheckboxChange('dismantling')}
                      />
                      <label htmlFor="dismantling" className="text-sm text-gray-700">Furniture Dismantling & Assembly</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="packaging" 
                        checked={formData.packaging}
                        onCheckedChange={() => handleCheckboxChange('packaging')}
                      />
                      <label htmlFor="packaging" className="text-sm text-gray-700">Professional Packaging</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="insurance" 
                        checked={formData.insurance}
                        onCheckedChange={() => handleCheckboxChange('insurance')}
                      />
                      <label htmlFor="insurance" className="text-sm text-gray-700">Moving Insurance</label>
                    </div>
                  </div>
                </div>
                
                {/* Contact Information */}
                <div className="border-t pt-6">
                  <h3 className="font-semibold text-lg mb-4">Your Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="input-field"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="input-field"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="input-field"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Estimate"}
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  We'll review your requirements and contact you with a detailed quote within 24 hours.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Estimate;
