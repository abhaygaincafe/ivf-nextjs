
import { Card } from "@/components/ui/card";
import { Calculator, CreditCard, PiggyBank, CalendarClock, CheckCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axis from "../../public/images/axislogo.png"
import icici from "../../public/images/icicilogo.png"
import hdfc from "../../public/images/hdfclogo.png"
import bajajlogo from "../../public/images/bajajfinservlogo.png"

const EMIOptionsSection = () => {
  const plans = [
    {
      name: "Standard Plan",
      amount: 2999,
      duration: 12,
      interestRate: "0%*",
      downPayment: "$999",
      monthlyPayment: "$166.67",
      processingFee: "2%",
      features: [
        "No interest for 12 months",
        "Flexible payment schedule",
        "No prepayment penalty",
        "Easy online payments",
        "Instant approval for most applicants"
      ]
    },
    {
      name: "Extended Plan",
      amount: 2999,
      duration: 24,
      interestRate: "4.9%",
      downPayment: "$699",
      monthlyPayment: "$99.96",
      processingFee: "1.5%",
      features: [
        "Lower monthly payments",
        "Extended payment period",
        "Flexible payment schedule",
        "No prepayment penalty",
        "Easy online payments"
      ]
    },
    {
      name: "Premium Plan",
      amount: 4999,
      duration: 36,
      interestRate: "3.9%",
      downPayment: "$999",
      monthlyPayment: "$121.11",
      processingFee: "1%",
      features: [
        "Comprehensive IVF package",
        "Includes advanced genetic testing",
        "Priority scheduling",
        "Dedicated financial counselor",
        "Free consultations for 1 year"
      ]
    }
  ];

  const partners = [
    { name: "Bajaj Finserv", logo: "/placeholder.svg" },
    { name: "HDFC Bank", logo: "/placeholder.svg" },
    { name: "ICICI Bank", logo: "/placeholder.svg" },
    { name: "Axis Bank", logo: "/placeholder.svg" }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-ivf-orange/10 text-ivf-orange rounded-full font-medium text-sm mb-2">
            Flexible Payment Options
          </div>
          <h2 className="text-3xl font-bold text-ivf-dark-grey mb-4">
            EMI Plans to Make Your <span className="text-ivf-orange">Dreams Affordable</span>
          </h2>
          <p className="text-ivf-grey text-lg max-w-3xl mx-auto">
            At Ritu IVF, we believe financial constraints shouldn't stand between you and parenthood.
            Our flexible EMI options make fertility treatments accessible to everyone.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="standard" className="w-full">
            {/* <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="standard">Standard Plan</TabsTrigger>
              <TabsTrigger value="extended">Extended Plan</TabsTrigger>
              <TabsTrigger value="premium">Premium Plan</TabsTrigger>
            </TabsList> */}
            
            {plans.map((plan, index) => (
              <TabsContent key={index} value={plan.name.toLowerCase().replace(" ", "-")} className="animate-fade-in">
                <Card className="border border-ivf-grey/10 shadow-lg p-6 md:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="col-span-1">
                      <div className="bg-ivf-orange/10 p-6 rounded-lg text-center mb-4">
                        <h3 className="font-bold text-2xl text-ivf-dark-grey mb-1">{plan.name}</h3>
                        <p className="text-ivf-orange text-3xl font-bold mb-1">${plan.amount}</p>
                        <p className="text-ivf-grey">for {plan.duration} months</p>
                      </div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-ivf-grey">Interest Rate:</span>
                        <span className="font-semibold text-ivf-dark-grey">{plan.interestRate}</span>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-ivf-grey">Down Payment:</span>
                        <span className="font-semibold text-ivf-dark-grey">{plan.downPayment}</span>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-ivf-grey">Monthly Payment:</span>
                        <span className="font-semibold text-ivf-dark-grey">{plan.monthlyPayment}</span>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-ivf-grey">Processing Fee:</span>
                        <span className="font-semibold text-ivf-dark-grey">{plan.processingFee}</span>
                      </div>
                    </div>
                    
                    <div className="col-span-2">
                      <h4 className="font-bold text-lg text-ivf-dark-grey mb-4">Plan Features</h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-ivf-grey">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8 bg-ivf-light-grey p-4 rounded-lg">
                        <div className="flex items-center mb-2">
                          <Calculator className="h-5 w-5 text-ivf-orange mr-2" />
                          <h5 className="font-semibold text-ivf-dark-grey">EMI Calculator</h5>
                        </div>
                        <p className="text-sm text-ivf-grey">
                          Use our EMI calculator to estimate your monthly payments and see how our 
                          flexible financing options can work with your budget.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="mt-16">
            <h3 className="text-xl font-bold text-ivf-dark-grey text-center mb-8">Our Financing Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {partners.map((partner, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-ivf-light-grey w-24 h-24 rounded-full flex items-center justify-center mb-2">
                    {index === 0 ? <img className="h-10 w-10 text-ivf-orange" src={bajajlogo} alt="" /> : 
                     index === 1 ? <img className="h-10 w-10 text-ivf-orange" src={hdfc} alt="" /> : 
                     index === 2 ? <img className="h-10 w-10 text-ivf-orange" src={icici} alt="" /> :
                     <img className="h-10 w-10 text-ivf-orange" src={axis} alt="" />}
                  </div>
                  <p className="font-medium text-ivf-dark-grey">{partner.name}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-ivf-grey text-sm mt-8">
              *0% interest rate is subject to credit approval. Terms and conditions apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMIOptionsSection;
