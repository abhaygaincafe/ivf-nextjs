
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { BadgeDollarSign, Check, TestTube, Dna, Baby, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

const services = [
  {
    name: "IUI (Intrauterine Insemination)",
    price: "₹10,000",
    description: "Affordable and minimally invasive option ideal for couples with mild fertility challenges.",
    features: [
      "Initial consultation & fertility assessment",
      "Ovulation induction & follicular monitoring",
      "Semen preparation",
      "IUI procedure",
      "Post-IUI support & follow-up"
    ],
    icon: Baby,
    recommendation: "Recommended for couples with unexplained infertility, mild male factor, or ovulation issues."
  },
  {
    name: "IVF (In Vitro Fertilization)",
    price: "₹1,00,000",
    description: "Comprehensive, customized IVF treatments designed for successful outcomes.",
    features: [
      "Standard IVF cycle",
      "Advanced stimulation protocols",
      "Egg retrieval & fertilization",
      "Fresh/Frozen embryo transfer",
      "Pregnancy testing",
      "Optional embryo freezing"
    ],
    icon: TestTube,
    highlighted: true,
    upgrades: [
      "Genetic testing (PGT-A)",
      "Donor egg IVF",
      "Embryo freezing for 1 year",
      "Priority consultation & follow-up"
    ],
    recommendation: "Tailored for complex fertility cases, PCOS, endometriosis, low ovarian reserve, or male infertility."
  },
  {
    name: "Genetic Testing & Advanced Diagnostics",
    price: "₹25,000",
    description: "Empowering couples with informed reproductive decisions.",
    features: [
      "PGT-A (Preimplantation Genetic Testing for Aneuploidies)",
      "PGT-M (Monogenic disorder screening)",
      "Recurrent pregnancy loss panel",
      "Carrier screening",
      "Sperm DNA fragmentation test",
      "Endometrial receptivity array (ERA)"
    ],
    icon: Dna,
    recommendation: "Ideal for couples with recurrent IVF failures, miscarriages, or known genetic conditions."
  }
];

const AffordabilitySection = () => {
  const { t } = useTranslation("common");
  
  return (
    <section className="py-10 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ivf-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-ivf-light-orange/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-ivf-orange/10 text-ivf-orange rounded-full font-medium text-sm mb-2">
            Our Fertility Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ivf-dark-grey mb-4">
            <span className="text-ivf-orange">Fertility Services</span> at RITU IVF
          </h2>
          <p className="text-ivf-grey text-lg max-w-3xl mx-auto">
            We believe everyone deserves access to quality fertility care. Our transparent pricing 
            and flexible treatment options make your fertility journey more accessible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden border ${
                service.highlighted 
                  ? "border-ivf-orange shadow-xl" 
                  : "border-ivf-grey/10 shadow-md"
              }`}
            >
              {service.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-ivf-orange text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <CardHeader className={`text-center pt-8 ${service.highlighted ? "pt-12" : ""}`}>
                <div className="mx-auto bg-ivf-orange/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-ivf-orange" />
                </div>
                <h3 className="text-xl font-bold text-ivf-dark-grey">{service.name}</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-ivf-orange">Starting from {service.price}</span>
                </div>
                <p className="text-ivf-grey text-sm mt-2">{service.description}</p>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm font-semibold mb-3">Our {service.name} services include:</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-ivf-dark-grey">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {service.upgrades && (
                  <>
                    <p className="text-sm font-semibold mb-2">Popular Upgrades:</p>
                    <ul className="space-y-2 mb-6">
                      {service.upgrades.map((upgrade, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-ivf-orange shrink-0 mt-0.5" />
                          <span className="text-ivf-grey text-sm">{upgrade}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                
                {service.recommendation && (
                  <div className="mt-2 p-3 bg-ivf-orange/5 rounded-lg text-sm text-ivf-grey">
                    <strong>📌 </strong>{service.recommendation}
                  </div>
                )}
                
                <div className="mt-6">
                  <Button 
                    className={`w-full ${
                      service.highlighted 
                        ? "bg-ivf-orange hover:bg-ivf-orange/90" 
                        : "bg-ivf-dark-grey hover:bg-ivf-dark-grey/90"
                    } text-white rounded-full`}
                    onClick={() => window.open('https://api.whatsapp.com/send?phone=919057000555', '_blank')}
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Chat with us on WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-ivf-light-grey rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-ivf-dark-grey mb-4">Personalized Fertility Care</h3>
            <p className="text-ivf-grey max-w-3xl mx-auto">
              Every couple is unique — so is their treatment plan. At RITU IVF, we combine clinical expertise 
              with compassionate care to help you take confident steps towards parenthood.
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              className="bg-ivf-orange hover:bg-ivf-orange/90 text-white rounded-full px-8 py-6"
              onClick={() => window.open('https://api.whatsapp.com/send?phone=919057000555', '_blank')}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Chat with us on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffordabilitySection;
