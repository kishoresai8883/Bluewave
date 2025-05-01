import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/Services';
import AboutSection from '../components/home/About';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Hero />
      <ServicesSection />
      <AboutSection />
      <CTA />
    </motion.div>
  );
};

export default Home;