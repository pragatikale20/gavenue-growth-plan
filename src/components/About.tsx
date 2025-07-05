
import { motion } from 'framer-motion';
import { CheckCircle, Users, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "4+ years of experience in business consulting and growth strategies"
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "We focus on delivering measurable results for your business"
    },
    {
      icon: Award,
      title: "Quality Service",
      description: "100% satisfaction guaranteed with our premium services"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-teal-500 to-indigo-600 rounded-2xl p-8 shadow-xl"
              >
                <div className="text-white text-center">
                  <div className="text-4xl font-bold mb-4">Who we are?</div>
                  <div className="text-lg opacity-90">
                    Dynamic team of creative design and development experts
                  </div>
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-teal-400 rounded-full opacity-20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-indigo-400 rounded-full opacity-30"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h4 className="text-teal-600 font-medium mb-4 text-lg">Who we are?</h4>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              We are dynamic team of creative design and development
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We have almost 4+ years of experience helping businesses with consulting services 
              and growth solutions. Our team specializes in delivering innovative strategies 
              that drive real results.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              About our Agency
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
