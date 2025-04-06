import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone } from 'lucide-react';
import emailjs from 'emailjs-com'; // Make sure to install emailjs-com
import { toast } from 'react-hot-toast';


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_a7wmelb',     // Email Service ID
        'template_4vupjoe',    // Email Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'oshadhafernando1234@gmail.com',  // Replace with your email
        },
        'ophzURbz2aXLZmZ6w'     // EmailJS Public Key
      );
      
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <section id="contact" className="section bg-gradient-to-b from-blue-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-petblue-dark mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-lg">
            Have questions about our services or want to join our rescue network?
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold text-petblue-dark mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-petblue/10 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-petblue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-petblue-dark">Our Location</h4>
                    <p className="text-gray-600">123 Pet Care Lane, San Francisco, CA 94107</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-petblue/10 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-petblue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-petblue-dark">Email Us</h4>
                    <p className="text-gray-600">support@pawsomecare.com</p>
                    <p className="text-gray-600">rescue@pawsomecare.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-petblue/10 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-petblue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-petblue-dark">Call Us</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-gray-600">Mon-Fri, 9am-5pm PT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-petblue-dark mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-petblue-dark">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-petblue-dark">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-petblue-dark">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-petblue-dark">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-petblue hover:bg-petblue-dark text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
