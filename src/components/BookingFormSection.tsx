import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Calendar, CalendarDays, Clock, Users, Phone, Check } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useIsMobile } from "@/hooks/use-mobile";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  date: z.string().min(1, { message: "Please select a date" }),
  time: z.string().min(1, { message: "Please select a time" }),
  consultationType: z.string().min(1, { message: "Please select a consultation type" }),
  message: z.string().optional(),
});

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"
];

const consultationTypes = [
  "Initial Fertility Consultation",
  "IVF Consultation",
  "Egg Freezing Consultation",
  "Second Opinion",
  "Follow-up Appointment"
];

const BookingFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const isMobile = useIsMobile();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      consultationType: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // In a real application, you would send this data to your backend
    setSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      form.reset();
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="py-10 bg-white relative overflow-hidden" id="booking">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-ivf-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-ivf-light-orange/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-ivf-orange/10 text-ivf-orange rounded-full font-medium text-sm mb-2">
            Get Started
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ivf-dark-grey mb-4">
            Schedule Your <span className="text-ivf-orange">Consultation</span>
          </h2>
          <p className="text-ivf-grey text-lg max-w-3xl mx-auto">
            Take the first step toward building your family. Schedule a consultation with one of 
            our fertility specialists today.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side: Form */}
            <Card className="border border-ivf-grey/10 rounded-xl shadow-md overflow-hidden">
              <CardHeader className="bg-ivf-orange text-white">
                <h3 className="text-2xl font-bold">Book Your Appointment</h3>
                <p className="text-white/80">We'll get back to you within 24 hours to confirm</p>
              </CardHeader>
              
              <CardContent className="p-6">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-ivf-dark-grey mb-2">Thank You!</h3>
                    <p className="text-ivf-grey">
                      Your appointment request has been received. One of our patient coordinators 
                      will contact you soon to confirm your appointment.
                    </p>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <input
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  {...field}
                                  placeholder="Your full name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <input
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  {...field}
                                  placeholder="Your email address"
                                  type="email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                {...field}
                                placeholder="Your phone number"
                                type="tel"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="date"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Date</FormLabel>
                              <FormControl>
                                <input
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  {...field}
                                  type="date"
                                  min={new Date().toISOString().split('T')[0]}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="time"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Preferred Time</FormLabel>
                              <FormControl>
                                <select
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  {...field}
                                >
                                  <option value="">Select a time</option>
                                  {timeSlots.map((time) => (
                                    <option key={time} value={time}>{time}</option>
                                  ))}
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="consultationType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Consultation Type</FormLabel>
                            <FormControl>
                              <select
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                {...field}
                              >
                                <option value="">Select a consultation type</option>
                                {consultationTypes.map((type) => (
                                  <option key={type} value={type}>{type}</option>
                                ))}
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Information (Optional)</FormLabel>
                            <FormControl>
                              <textarea
                                className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                {...field}
                                placeholder="Please share any specific concerns or questions you have"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-ivf-orange hover:bg-ivf-orange/90 text-white rounded-full"
                      >
                        Book Consultation
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
            
            {/* Right side: Contact info and benefits */}
            <div className="space-y-8">
              <Card className="border border-ivf-grey/10 rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-ivf-dark-grey mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-ivf-orange/10 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-ivf-orange" />
                    </div>
                    <div>
                      <h4 className="font-medium text-ivf-dark-grey">Phone</h4>
                      <p className="text-ivf-grey">+91 9057000555</p>
                      <p className="text-xs text-ivf-grey">Available 24/7 for urgent inquiries</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-ivf-orange/10 p-2 rounded-full">
                      <CalendarDays className="h-5 w-5 text-ivf-orange" />
                    </div>
                    <div>
                      <h4 className="font-medium text-ivf-dark-grey">Office Hours</h4>
                      <p className="text-ivf-grey">Monday - Friday: 7:00 AM - 5:00 PM</p>
                      <p className="text-ivf-grey">Saturday: 8:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                </div>
              </Card>
              
              {!isMobile && (
                <Card className="border border-ivf-grey/10 rounded-xl shadow-md p-6 bg-ivf-light-grey/50">
                  <h3 className="text-xl font-bold text-ivf-dark-grey mb-4">What to Expect</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-ivf-grey">Comprehensive consultation with a fertility specialist (45-60 minutes)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-ivf-grey">Review of your medical history and prior fertility treatments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-ivf-grey">Discussion of treatment options tailored to your needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-ivf-grey">Opportunity to ask questions and address concerns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-ivf-grey">Tour of our state-of-the-art facilities (in-person visits)</span>
                    </li>
                  </ul>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingFormSection;
