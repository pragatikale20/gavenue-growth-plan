
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Code, Palette, Headphones, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Video Editing & Graphic Design",
      description: "Creative visual solutions for your brand and marketing needs",
      features: ["Brand Identity", "Social Media Graphics", "Video Production", "Animation"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Headphones,
      title: "Custom Solutions",
      description: "Tailored business solutions to meet your specific requirements",
      features: ["Consulting", "Strategy", "Implementation", "Support"],
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-yellow-600 font-medium mb-4 text-lg">What we can do for you?</h4>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Services we can help you with
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We'll ensure you always get the best digital service tailored to your business needs.
            </p>
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              See all Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Services Grid */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mr-4`}>
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      {/* Expandable Features */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: hoveredCard === index ? 'auto' : 0,
                          opacity: hoveredCard === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <div className="w-2 h-2 bg-teal-500 rounded-full mr-2" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                    
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="ml-4"
                    >
                      <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-teal-600 transition-colors duration-300" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
