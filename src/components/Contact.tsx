import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required'),
});

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      reset();
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@gavenue.agency",
      link: "mailto:info@gavenue.agency"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9984294923",
      link: "https://api.whatsapp.com/send?phone=919984294923&text=Hello,%20Message%20from%20the%20website"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Varanasi, UP, 212011",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-teal-400 font-medium mb-4 text-lg">Get In Touch</h4>
          <h2 className="text-4xl font-bold text-white mb-8">
            Let's start your next project together
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to transform your business? Contact us today and let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-center p-4 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{info.title}</h4>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <h4 className="text-white font-medium mb-4">Follow us</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/gavenue-agency/' },
                  { name: 'Instagram', url: 'https://www.instagram.com/gavenue.agency/' },
                  { name: 'Facebook', url: 'https://www.facebook.com/gavenue.agency/' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-teal-500 transition-colors duration-300"
                  >
                    <span className="text-white font-bold">{social.name.charAt(0)}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    {...register('name')}
                    placeholder="Your Name"
                    className={`transition-all duration-300 ${errors.name ? 'border-red-500' : 'focus:border-teal-500'}`}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.name.message}
                    </motion.p>
                  )}
                </div>
                
                <div>
                  <Input
                    {...register('email')}
                    type="email"
                    placeholder="Your Email"
                    className={`transition-all duration-300 ${errors.email ? 'border-red-500' : 'focus:border-teal-500'}`}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.email.message}
                    </motion.p>
                  )}
                </div>
              </div>
              
              <div>
                <Input
                  {...register('subject')}
                  placeholder="Subject"
                  className={`transition-all duration-300 ${errors.subject ? 'border-red-500' : 'focus:border-teal-500'}`}
                />
                {errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.subject.message}
                  </motion.p>
                )}
              </div>
              
              <div>
                <Textarea
                  {...register('message')}
                  placeholder="Your Message"
                  rows={5}
                  className={`transition-all duration-300 resize-none ${errors.message ? 'border-red-500' : 'focus:border-teal-500'}`}
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <motion.div
                  className="flex items-center justify-center"
                  animate={isSubmitting ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5, repeat: isSubmitting ? Infinity : 0 }}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Message Sent!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </motion.div>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
