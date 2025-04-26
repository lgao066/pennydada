import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { cn } from '../lib/utils';

const Hero = () => {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center relative overflow-hidden">
      {/* Bauhaus-inspired geometric shapes */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -right-20 -top-20 w-96 h-96 bg-yellow-400 rounded-full"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute left-20 bottom-20 w-64 h-64 bg-blue-500"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="absolute right-40 bottom-40 w-48 h-48 bg-red-500 rotate-45"
      />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-500">
          Penelope's Daddy
        </h1>
        <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
          Crafting digital experiences with a perfect blend of design and technology.
          Inspired by Bauhaus principles of form follows function.
        </p>
        
        {/* Social Links */}
        <div className="flex gap-6 justify-center">
          {[
            { Icon: Github, href: "https://github.com" },
            { Icon: Twitter, href: "https://twitter.com" },
            { Icon: Linkedin, href: "https://linkedin.com" }
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + index * 0.2 }}
              className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center",
                "bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
              )}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero; 