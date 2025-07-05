
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Ashwin",
      position: "Founder of DayHomDigital",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Our office is something we are pleased with. We consider it the little magnet; it is wanting to come here and afterward difficult to leave it.",
      company: "DayHomDigital"
    },
    {
      name: "Abhishek",
      position: "Founder of BlissCart",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "He works very smart, always fast and ahead of time. He's also a team player. Looking forward to working with him in the future.",
      company: "BlissCart"
    },
    {
      name: "Viral",
      position: "Founder of Super7Visa",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      text: "Gavenue Agency has transformed the way we approach our business goals. Their team is proactive, innovative, and results-driven. I highly recommend their services!",
      company: "Super7Visa"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-yellow-600 font-medium mb-4 text-lg">Happy customer feedback</h4>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What our clients say about us
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We love our clients and our clients love us. See what they have to say about our work.
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { number: "22+", label: "Happy Clients" },
                { number: "50+", label: "Projects Done" },
                { number: "4+", label: "Years Experience" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    x: index === currentIndex ? 0 : 100,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`${index === currentIndex ? 'block' : 'absolute inset-0'} bg-white rounded-2xl p-8 shadow-xl`}
                >
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <Quote className="h-12 w-12 text-teal-500 opacity-50" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-teal-500 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Background Decoration */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-teal-100 rounded-full opacity-50 -z-10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow-100 rounded-full opacity-50 -z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
