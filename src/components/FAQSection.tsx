
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";

// Define the type for FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const { t } = useTranslation('common');

  const faq =  {
    "title": "Frequently Asked Questions",
    "subtitle": "Get answers to common questions about fertility treatments at Ritu IVF. If you don't find your question here, please don't hesitate to contact us.",
    "questions": [
      {
        "question": "Does Embryo Transfer Hurt?",
        "answer": "No, embryo transfer is generally not painful during treatment. Most patients feel minimal discomfort. The procedure is typically done while the patient is awake, using a soft catheter that passes through the cervix to place the embryo in the uterus."
      },
      {
        "question": "How Many Visits Will Be Required To Complete IVF Treatment?",
        "answer": "The number of visits required to complete IVF treatment can vary depending on individual circumstances, the protocol used by the fertility clinic, and the patient's response to treatment."
      },
      {
        "question": "Is IVF Treatment Safe?",
        "answer": "IVF is a completely safe treatment as most people do not experience any health issues throughout the entire process."
      },
      {
        "question": "What Is The Average Success Rate Of IVF Treatment?",
        "answer": "The average success rate of IVF treatment at Ritu IVF Center typically ranges from 80% to 95% per cycle, depending on various factors such as the woman's age, causes of infertility, and specific techniques used."
      },
      {
        "question": "How Long Does It Take To Get Pregnant With IVF Treatment?",
        "answer": "The duration to conceive with IVF treatment varies, typically ranging from several weeks to a few months. This timeline includes initial consultations, pre-treatment preparations, the actual IVF cycle, and monitoring until pregnancy confirmation."
      },
      {
        "question": "Are IVF Babies Normal?",
        "answer": "Yes, having babies through IVF is considered normal and is a common and effective solution for couples facing fertility issues."
      },
      {
        "question": "How Can I Book An Appointment With A Doctor At Ritu IVF Center?",
        "answer": "You can book an online appointment with the doctor by filling out the contact form. For a quick response, you can call us at +91 9057000555."
      },
      {
        "question": "How Is Ritu IVF Different From Other Clinics?",
        "answer": "At Ritu IVF, being 'Jaipur's Best IVF Center', we provide personalized care, cutting-edge technology, and compassionate support to help make your dream of parenthood come true."
      }
    ],
    "stillHaveQuestions": "Still have questions? Our fertility specialists are ready to help.",
    "contactUs": "Contact Us"
  }
  
  return (
    <section className="py-10 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ivf-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-ivf-light-orange/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-ivf-orange/10 text-ivf-orange rounded-full font-medium text-sm mb-2">
            Common Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ivf-dark-grey mb-4">
            {faq.title} <span className="text-ivf-orange">Questions</span>
          </h2>
          <p className="text-ivf-grey text-lg max-w-3xl mx-auto">
            {faq.subtitle}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {/* Cast the translation result to an array of FAQItems */}
            {faq.questions.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-ivf-grey/10 rounded-lg overflow-hidden shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-ivf-dark-grey hover:text-ivf-orange hover:no-underline font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-ivf-grey">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-12">
            <p className="text-ivf-grey mb-4">{faq.stillHaveQuestions}</p>
            <Button className="bg-ivf-orange hover:bg-ivf-orange/90 text-white rounded-full px-6 py-2">
              {faq.contactUs}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
