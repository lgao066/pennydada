import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Button } from '../components/ui/button';

const Hero = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4 -mt-10 bg-white py-10 mx-auto max-w-4xl rounded-t-3xl shadow-sm"
      >
        <h1 className="text-5xl font-bold mb-4 text-neutral-900">
          Penelope's Daddy
        </h1>
        <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
          Software Engineer & Family Man | Building Modern Web Experiences
        </p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-8 justify-center mb-12"
        >
          <Button variant="outline" size="lg">
            View Projects
          </Button>
          <Button size="lg">
            Contact Me
          </Button>
        </motion.div>
        
        {/* Social Links */}
        <div className="flex gap-10 justify-center items-center">
          {[
            { icon: Github, href: "https://github.com" },
            { icon: Linkedin, href: "https://linkedin.com" },
            { icon: Twitter, href: "https://twitter.com" }
          ].map(({ icon: Icon, href }, index) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <Icon strokeWidth={1.5} size={28} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero; 