
import { Card } from "@/components/ui/card";
import { ClipboardList, Calendar, TestTube, Microscope, Baby, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <ClipboardList className="h-8 w-8 text-ivf-orange" />,
    title: "Initial Consultation",
    description: "Meet with our fertility specialists to discuss your medical history and create a personalized treatment plan.",
    animationDelay: "0.1s"
  },
  {
    number: "02",
    icon: <Calendar className="h-8 w-8 text-ivf-orange" />,
    title: "Ovarian Stimulation",
    description: "Medication is prescribed to stimulate your ovaries to produce multiple eggs during a cycle.",
    animationDelay: "0.2s"
  },
  {
    number: "03",
    icon: <TestTube className="h-8 w-8 text-ivf-orange" />,
    title: "Egg Retrieval",
    description: "A minor procedure performed under sedation to collect mature eggs from the ovaries.",
    animationDelay: "0.3s"
  },
  {
    number: "04",
    icon: <Microscope className="h-8 w-8 text-ivf-orange" />,
    title: "Fertilization",
    description: "Eggs are fertilized with sperm in our state-of-the-art laboratory to create embryos.",
    animationDelay: "0.4s"
  },
  {
    number: "05",
    icon: <Baby className="h-8 w-8 text-ivf-orange" />,
    title: "Embryo Transfer",
    description: "Selected embryos are transferred to the uterus in a quick, painless procedure.",
    animationDelay: "0.5s"
  }
];

const ProcessSection = () => {
  return (
    <section className="py-10 bg-ivf-light-grey relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ivf-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-ivf-light-orange/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-ivf-orange/10 text-ivf-orange rounded-full font-medium text-sm mb-2">
            Treatment Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ivf-dark-grey mb-4">
            The <span className="text-ivf-orange">IVF Process</span> at Ritu IVF
          </h2>
          <p className="text-ivf-grey text-lg max-w-3xl mx-auto">
            Our streamlined IVF process is designed to maximize your chances of success
            while providing compassionate care at every step.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Horizontal Process Flow */}
          <div className="relative hidden md:block">
            {/* Connector Line */}
            <div className="absolute top-52 left-0 right-0 h-1 border-b-2 border-dashed border-ivf-orange/30 z-0"></div>
            
            <div className="flex justify-between">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative z-10 w-52 flex flex-col items-center animate-fade-in"
                  style={{ animationDelay: step.animationDelay }}
                >
                  {/* Step number bubble */}
                  <div className="w-10 h-10 mb-6 bg-white rounded-full border-2 border-ivf-orange flex items-center justify-center shadow-md text-ivf-orange font-bold text-sm">
                    {step.number}
                  </div>
                  
                  {/* Card */}
                  <Card className="p-5 md:p-5 lg:p-5 w-full h-full border border-ivf-grey/10 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="bg-ivf-orange/10 w-14 h-14 rounded-full flex items-center justify-center">
                        {step.icon}
                      </div>
                      <h3 className="text-lg font-bold text-ivf-dark-grey">{step.title}</h3>
                      <p className="text-ivf-grey text-sm">{step.description}</p>
                    </div>
                  </Card>

                  {/* Arrow to next step */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-44 left-full -translate-x-1/2 -translate-y-1/2 z-20">
                      <ArrowRight className="h-6 w-6 text-ivf-orange animate-pulse-gentle" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View - Vertical Timeline */}
          <div className="md:hidden relative">
            {/* Timeline connector */}
            <div className="absolute top-0 bottom-0 left-10 w-px border-l-2 border-dashed border-ivf-orange/30 z-0"></div>
            
            {/* Steps */}
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative z-10 flex flex-col items-start mb-16 last:mb-0 animate-fade-in"
                style={{ animationDelay: step.animationDelay }}
              >
                {/* Step number bubble */}
                <div className="absolute left-10 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full border-2 border-ivf-orange flex items-center justify-center shadow-md text-ivf-orange font-bold text-sm">
                  {step.number}
                </div>
                
                {/* Card */}
                <div className=" ml-12">
                  <Card className="p-2 border border-ivf-grey/10 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-ivf-orange/10 w-14 h-14 rounded-full flex items-center justify-center">
                        {step.icon}
                      </div>
                      <h3 className="text-sm font-bold text-ivf-dark-grey">{step.title}</h3>
                    </div>
                    <p className="text-ivf-grey text-base">{step.description}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
