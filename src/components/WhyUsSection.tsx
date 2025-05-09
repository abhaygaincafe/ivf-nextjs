import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Trophy, Microscope, BadgeDollarSign, Users, CheckCircle2, XCircle } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";
import { useIsMobile } from "@/hooks/use-mobile";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const comparisonData = [
  {
    category: "Success Rate",
    "Ritu IVF": 90,
    "Industry Avg": 68,
  },
  {
    category: "Lab Technology",
    "Ritu IVF": 95,
    "Industry Avg": 62,
  },
  {
    category: "Doctor-Patient Ratio",
    "Ritu IVF": 90,
    "Industry Avg": 55,
  },
  {
    category: "Cost Efficiency",
    "Ritu IVF": 85,
    "Industry Avg": 60,
  },
];

const benefitsData = [
  {
    icon: <Trophy className="h-12 w-12 text-ivf-orange" />,
    title: "Highest Success Rates",
    description: "90% success rate for patients under 35, compared to the national average of 68%."
  },
  {
    icon: <Microscope className="h-12 w-12 text-ivf-orange" />,
    title: "State-of-the-Art Lab",
    description: "Our in-house embryology lab features the latest technology for optimal embryo development."
  },
  {
    icon: <BadgeDollarSign className="h-12 w-12 text-ivf-orange" />,
    title: "Transparent Pricing",
    description: "No hidden costs or surprise fees. We offer clear, upfront pricing and flexible payment plans."
  },
  {
    icon: <Users className="h-12 w-12 text-ivf-orange" />,
    title: "Personalized Care",
    description: "Our specialists maintain a low patient-to-doctor ratio to ensure individualized attention."
  },
];

const WhyUsSection = () => {
  const isMobile = useIsMobile();
  const [openBenefit, setOpenBenefit] = useState<number | null>(null);

  return (
    <section className="py-10 bg-gradient-to-b from-white to-ivf-light-grey relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-ivf-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-ivf-light-orange/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-ivf-orange/10 text-ivf-orange rounded-full font-medium text-sm mb-2">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ivf-dark-grey mb-4">
            What Makes <span className="text-ivf-orange">Ritu IVF</span> Different
          </h2>
          <p className="text-ivf-grey text-lg max-w-3xl mx-auto">
            With hundreds of fertility clinics available, here's why leading reproductive specialists
            and thousands of patients choose Ritu IVF for their fertility journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {isMobile ? (
              <div className="space-y-4">
                {benefitsData.map((benefit, index) => (
                  <Collapsible
                    key={index}
                    open={openBenefit === index}
                    onOpenChange={() => setOpenBenefit(openBenefit === index ? null : index)}
                  >
                    <Card className="p-4 border border-ivf-grey/10 rounded-xl">
                      <CollapsibleTrigger className="flex items-center w-full">
                        <div className="mr-3">{benefit.icon}</div>
                        <h3 className="text-lg font-bold text-ivf-dark-grey">{benefit.title}</h3>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pt-4">
                        <p className="text-ivf-grey">{benefit.description}</p>
                      </CollapsibleContent>
                    </Card>
                  </Collapsible>
                ))}
              </div>
            ) : (
              benefitsData.map((benefit, index) => (
                <Card 
                  key={index}
                  className="p-6 border border-ivf-grey/10 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:border-ivf-orange/20"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-ivf-dark-grey mb-2">{benefit.title}</h3>
                  <p className="text-ivf-grey">{benefit.description}</p>
                </Card>
              ))
            )}
          </div>
          
          {!isMobile && (
            <Card className="p-6 border border-ivf-grey/10 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-ivf-dark-grey mb-6 text-center">
                How We Compare to Other Clinics
              </h3>
              <div className="h-80">
                <ChartContainer
                  config={{
                    "Ritu IVF": {
                      color: "#F97316"
                    },
                    "Industry Avg": {
                      color: "#8E9196"
                    }
                  }}
                >
                  <BarChart
                    data={comparisonData}
                    layout="vertical"
                    margin={{ top: 10, right: 10, left: 90, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis type="category" dataKey="category" width={80} tick={{ fontSize: 12 }} />
                    <Bar dataKey="Ritu IVF" barSize={20} radius={[0, 4, 4, 0]}>
                      {comparisonData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill="#F97316" />
                      ))}
                    </Bar>
                    <Bar dataKey="Industry Avg" barSize={20} radius={[0, 4, 4, 0]}>
                      {comparisonData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill="#8E9196" />
                      ))}
                    </Bar>
                    <ChartTooltip
                      content={<ChartTooltipContent />}
                    />
                  </BarChart>
                </ChartContainer>
              </div>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-ivf-orange rounded-full"></div>
                  <span className="text-sm text-ivf-dark-grey">Ritu IVF</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-ivf-grey rounded-full"></div>
                  <span className="text-sm text-ivf-dark-grey">Industry Average</span>
                </div>
              </div>
            </Card>
          )}
        </div>
        
        {!isMobile && (
          <Card className="max-w-3xl mx-auto p-6 border border-ivf-grey/10 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-ivf-dark-grey mb-6 text-center">
              Comprehensive Comparison
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-ivf-grey/20">
                    <th className="text-left py-3 px-4 font-bold text-ivf-dark-grey">Feature</th>
                    <th className="text-center py-3 px-4 font-bold text-ivf-orange">Ritu IVF</th>
                    <th className="text-center py-3 px-4 font-bold text-ivf-grey">Other Clinics</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-ivf-grey/10">
                    <td className="py-3 px-4 text-ivf-dark-grey">In-house embryology lab</td>
                    <td className="py-3 px-4 text-center"><CheckCircle2 className="mx-auto h-5 w-5 text-green-500" /></td>
                    <td className="py-3 px-4 text-center"><XCircle className="mx-auto h-5 w-5 text-red-500" /></td>
                  </tr>
                  <tr className="border-b border-ivf-grey/10">
                    <td className="py-3 px-4 text-ivf-dark-grey">Genetic testing available</td>
                    <td className="py-3 px-4 text-center"><CheckCircle2 className="mx-auto h-5 w-5 text-green-500" /></td>
                    <td className="py-3 px-4 text-center"><CheckCircle2 className="mx-auto h-5 w-5 text-ivf-grey" /></td>
                  </tr>
                  <tr className="border-b border-ivf-grey/10">
                    <td className="py-3 px-4 text-ivf-dark-grey">24/7 patient support</td>
                    <td className="py-3 px-4 text-center"><CheckCircle2 className="mx-auto h-5 w-5 text-green-500" /></td>
                    <td className="py-3 px-4 text-center"><XCircle className="mx-auto h-5 w-5 text-red-500" /></td>
                  </tr>
                  <tr className="border-b border-ivf-grey/10">
                    <td className="py-3 px-4 text-ivf-dark-grey">Transparent pricing</td>
                    <td className="py-3 px-4 text-center"><CheckCircle2 className="mx-auto h-5 w-5 text-green-500" /></td>
                    <td className="py-3 px-4 text-center"><XCircle className="mx-auto h-5 w-5 text-red-500" /></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-ivf-dark-grey">Same-week appointments</td>
                    <td className="py-3 px-4 text-center"><CheckCircle2 className="mx-auto h-5 w-5 text-green-500" /></td>
                    <td className="py-3 px-4 text-center"><XCircle className="mx-auto h-5 w-5 text-red-500" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
};

export default WhyUsSection;
