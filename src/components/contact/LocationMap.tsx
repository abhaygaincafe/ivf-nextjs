"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const LocationMap = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-white to-ivf-orange/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-ivf-dark-grey mb-4"
          >
            Our Location
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-ivf-grey max-w-2xl mx-auto"
          >
            Visit our state-of-the-art fertility center, conveniently located in the heart of the medical district.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative rounded-2xl overflow-hidden shadow-lg"
        >
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986652089845!3d40.69714940000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25762.108688475262!2d75.767921!3d26.887397!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db55ee1a7f075%3A0xc2a67c1c7ece2b86!2sRitu%20IVF%20Fertility%20Centre%20-%20Best%20IVF%20Center%20in%20Jaipur!5e0!3m2!1sen!2sus!4v1745250544430!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
              className="w-full h-[500px]"
            />
          </div>
          <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
            <MapPin className="text-ivf-orange w-5 h-5" />
            {/* <span className="text-ivf-dark-grey font-medium">123 Fertility Avenue, NY</span> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationMap;
