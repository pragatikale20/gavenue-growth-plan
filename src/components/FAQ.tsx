import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "What services does Gavenue Agency offer?",
      answer: "We offer comprehensive digital solutions including web development, graphic design, video editing, business consulting, and custom software solutions tailored to your specific needs."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary depending on complexity and scope. Typically, a standard website takes 2-4 weeks, while more complex projects may take 6-12 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages to ensure your website and digital solutions continue to perform optimally. This includes security updates, content updates, and technical support."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing varies based on project scope and requirements. We offer both fixed-price packages and custom quotes. Contact us for a detailed proposal tailored to your specific needs."
    },
    {
      question: "Can you help with SEO and digital marketing?",
      answer: "Absolutely! We provide SEO optimization, digital marketing strategies, social media management, and analytics setup to help grow your online presence and drive more traffic to your business."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes, we work with startups, small businesses, and large enterprises. Our solutions are scalable and can be customized to fit businesses of any size and industry."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-purple-600 font-medium mb-4 text-lg">FAQ</h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Find answers to common questions about our services and process
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <AccordionItem value={`item-${index}`} className="border-none">
                  <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-100 text-gray-900 font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
