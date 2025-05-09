
import React from 'react';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import LocationMap from '@/components/contact/LocationMap';
import SEOHead from '@/components/SEOHead';

const ContactPage = () => {
  // Create contact page structured data with only primitive serializable values
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Ritu IVF",
    "description": "Get in touch with our fertility specialists at Ritu IVF or schedule an appointment through our contact channels.",
    "url": "https://rituivf.com/contact",
    "mainEntity": {
      "@type": "MedicalOrganization",
      "name": "Ritu IVF",
      "telephone": "+91 9057000555",
      "email": "drrituivf@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "First Floor, Sunshine Sheodan Heights, Plot No. 15, New Sanganer Rd",
        "addressLocality": "Jaipur",
        "addressRegion": "Rajasthan",
        "postalCode": "302019",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* <SEOHead 
        title="Contact Us - Ritu IVF | Schedule an Appointment"
        description="Contact Ritu IVF in Jaipur for fertility consultations and treatments. Book an appointment with our specialists by phone, email, or through our contact form."
        keywords="contact Ritu IVF, fertility clinic contact, IVF appointment, fertility doctor Jaipur, schedule consultation"
        canonicalUrl="https://rituivf.com/contact"
        structuredData={structuredData}
      /> */}
      <ContactHero />
      <div className="container mx-auto px-4 py-6 md:py-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <LocationMap />
      
    </div>
  );
};

export default ContactPage;
