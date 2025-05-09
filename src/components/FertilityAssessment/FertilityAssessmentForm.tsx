
import React, { useState } from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon, Check, CircleCheck, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Form schema with validation for initial step
const personalInfoSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  age: z.string().min(1, { message: "Age is required." }),
  dateOfBirth: z.date({
    required_error: "Date of birth is required.",
  }),
  preferredLanguage: z.string({
    required_error: "Please select your preferred language.",
  }),
  gender: z.string({
    required_error: "Please select your gender.",
  }),
});

// Answers schema for questions
const answersSchema = z.record(z.string());

const FertilityAssessmentForm = () => {
  const { t } = useTranslation('common');
  const [currentStep, setCurrentStep] = useState(1);
  const [totalSteps, setTotalSteps] = useState(3);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [assessmentScore, setAssessmentScore] = useState(0);
  const [riskLevel, setRiskLevel] = useState('');
  const [activeTab, setActiveTab] = useState("personal");
  
  // Personal info form
  const personalInfoForm = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      age: "",
      preferredLanguage: "english",
      gender: "",
    },
  });

  // Answers form
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [gender, setGender] = useState<string>("");

  // Watch gender to update questions
  const selectedGender = personalInfoForm.watch("gender");
  
  // Progress calculation
  const progress = (currentStep / totalSteps) * 100;

  // Define questions based on gender
  const getQuestions = () => {
    if (gender === "female") {
      return [
        "regularCycles",
        "painfulPeriods",
        "diagnosedConditions",
        "under35",
        "tryingToConceive",
        "unwantedSymptoms",
        "previousConditions"
      ];
    } else if (gender === "male") {
      return [
        "semenAnalysis", 
        "knownIssues", 
        "lifestyle", 
        "surgeries", 
        "exposure"
      ];
    } else if (gender === "both") {
      return [
        "intercourse", 
        "stress", 
        "evaluated"
      ];
    }
    return [];
  };

  // Handle first form submission
  const onPersonalInfoSubmit = (values: z.infer<typeof personalInfoSchema>) => {
    setGender(values.gender);
    setCurrentStep(2);
    setActiveTab("questions");
  };

  // Handle answers
  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  // Calculate assessment score
  const calculateScore = () => {
    let score = 0;
    const questions = getQuestions();
    
    questions.forEach(question => {
      if (answers[question] === "yes") {
        // For positive questions, "yes" reduces risk
        if (["regularCycles", "under35", "semenAnalysis", "intercourse"].includes(question)) {
          score += 0;
        } else {
          score += 3; // For risk factors, "yes" increases score
        }
      } else if (answers[question] === "sometimes") {
        score += 1;
      } else if (answers[question] === "no") {
        // For positive questions, "no" increases risk
        if (["regularCycles", "under35", "semenAnalysis", "intercourse"].includes(question)) {
          score += 3;
        } else {
          score += 0; // For risk factors, "no" reduces score
        }
      }
    });
    
    return score;
  };

  // Determine risk level
  const determineRiskLevel = (score: number) => {
    if (score <= 5) return "lowRisk";
    if (score <= 15) return "moderateRisk";
    return "highRisk";
  };

  // Handle next step for answers
  const handleNextStepAnswers = () => {
    // Check if all questions are answered
    const questions = getQuestions();
    const allAnswered = questions.every(q => answers[q]);
    
    if (!allAnswered) {
      alert("Please answer all questions to proceed");
      return;
    }
    
    // Calculate score and set risk level
    const score = calculateScore();
    setAssessmentScore(score);
    setRiskLevel(determineRiskLevel(score));
    setCurrentStep(3);
    setActiveTab("results");
  };

  // Final submit
  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Get personal info
      const personalInfo = personalInfoForm.getValues();
      
      // Combine with answers and score
      const formData = {
        ...personalInfo,
        answers,
        score: assessmentScore,
        riskLevel
      };
      
      // Simulate API call
      console.log("Form submission data:", formData);
      
      // Wait for 1.5 seconds to simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Go back to previous step
  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setActiveTab(currentStep === 3 ? "questions" : "personal");
    }
  };

  // Render questions based on gender
  const renderQuestions = () => {
    const questions = getQuestions();
    
    return (
      <div className="space-y-6 animate-fade-in">
        <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          {gender === "female" && t('fertilityAssessment.steps.step2.titleFemale')}
          {gender === "male" && t('fertilityAssessment.steps.step2.titleMale')}
          {gender === "both" && t('fertilityAssessment.steps.step2.titleBoth')}
        </h3>
        <p className="text-ivf-grey mb-6">{t('fertilityAssessment.steps.step2.description')}</p>
        
        {questions.map((questionId, index) => (
          <div 
            key={questionId} 
            className="border rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between items-start mb-3">
              <p className="font-medium pr-2">
                {t(`fertilityAssessment.questions.${gender}.${questionId}`)}
              </p>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">Your answer helps us assess your fertility health more accurately.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <Button 
                type="button" 
                variant={answers[questionId] === "yes" ? "default" : "outline"}
                className={cn(
                  "w-full transition-all",
                  answers[questionId] === "yes" ? 
                    "bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white" : 
                    "hover:bg-green-50"
                )}
                onClick={() => handleAnswerChange(questionId, "yes")}
              >
                {answers[questionId] === "yes" && <Check className="mr-1 h-4 w-4" />}
                {t('fertilityAssessment.answers.yes')}
              </Button>
              
              <Button 
                type="button" 
                variant={answers[questionId] === "sometimes" ? "default" : "outline"}
                className={cn(
                  "w-full transition-all",
                  answers[questionId] === "sometimes" ? 
                    "bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white" : 
                    "hover:bg-amber-50"
                )}
                onClick={() => handleAnswerChange(questionId, "sometimes")}
              >
                {answers[questionId] === "sometimes" && <Check className="mr-1 h-4 w-4" />}
                {t('fertilityAssessment.answers.sometimes')}
              </Button>
              
              <Button 
                type="button" 
                variant={answers[questionId] === "no" ? "default" : "outline"}
                className={cn(
                  "w-full transition-all",
                  answers[questionId] === "no" ? 
                    "bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white" : 
                    "hover:bg-rose-50"
                )}
                onClick={() => handleAnswerChange(questionId, "no")}
              >
                {answers[questionId] === "no" && <Check className="mr-1 h-4 w-4" />}
                {t('fertilityAssessment.answers.no')}
              </Button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // Render results
  const renderResults = () => {
    return (
      <div className="space-y-6 animate-fade-in">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          {t('fertilityAssessment.results.title')}
        </h3>
        
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-8">
            <div className="text-6xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              {assessmentScore} <span className="text-3xl">/ 30</span>
            </div>
            <div className="relative h-4 w-full bg-gray-200 rounded-full overflow-hidden mb-2">
              <div 
                className={cn(
                  "h-full rounded-full",
                  riskLevel === "lowRisk" ? "bg-gradient-to-r from-green-400 to-emerald-500" : 
                  riskLevel === "moderateRisk" ? "bg-gradient-to-r from-amber-400 to-orange-500" : 
                  "bg-gradient-to-r from-rose-400 to-pink-500"
                )}
                style={{ width: `${Math.min(assessmentScore / 30 * 100, 100)}%` }}
              />
            </div>
          </div>
          
          <h4 className="text-xl font-semibold mb-6">
            {t('fertilityAssessment.results.interpretationTitle')}
          </h4>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className={cn(
              "border rounded-lg p-6 transition-all hover:shadow-md",
              riskLevel === "lowRisk" ? "border-green-500 bg-green-50" : "border-gray-200"
            )}>
              <div className="mb-3">
                <span className="inline-block p-2 rounded-full bg-green-100">
                  <CircleCheck className="h-6 w-6 text-green-600" />
                </span>
              </div>
              <h5 className="font-semibold text-lg mb-2">{t('fertilityAssessment.results.lowRiskTitle')}</h5>
              <p className="text-sm text-gray-600">{t('fertilityAssessment.results.lowRiskDescription')}</p>
            </div>
            
            <div className={cn(
              "border rounded-lg p-6 transition-all hover:shadow-md",
              riskLevel === "moderateRisk" ? "border-amber-500 bg-amber-50" : "border-gray-200"
            )}>
              <div className="mb-3">
                <span className="inline-block p-2 rounded-full bg-amber-100">
                  <Info className="h-6 w-6 text-amber-600" />
                </span>
              </div>
              <h5 className="font-semibold text-lg mb-2">{t('fertilityAssessment.results.moderateRiskTitle')}</h5>
              <p className="text-sm text-gray-600">{t('fertilityAssessment.results.moderateRiskDescription')}</p>
            </div>
            
            <div className={cn(
              "border rounded-lg p-6 transition-all hover:shadow-md",
              riskLevel === "highRisk" ? "border-rose-500 bg-rose-50" : "border-gray-200"
            )}>
              <div className="mb-3">
                <span className="inline-block p-2 rounded-full bg-rose-100">
                  <Info className="h-6 w-6 text-rose-600" />
                </span>
              </div>
              <h5 className="font-semibold text-lg mb-2">{t('fertilityAssessment.results.highRiskTitle')}</h5>
              <p className="text-sm text-gray-600">{t('fertilityAssessment.results.highRiskDescription')}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h4 className="font-semibold text-xl mb-4">
            {t('fertilityAssessment.contactForm.title')}
          </h4>
          <Button 
            onClick={handleFinalSubmit}
            className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white py-6 text-lg font-medium"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : t('fertilityAssessment.navigation.submit')}
          </Button>
        </div>
      </div>
    );
  };

  // Success state
  if (isSubmitted) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 text-center animate-scale-in">
        <div className="mb-6">
          <div className="inline-block p-4 rounded-full bg-green-100 mb-4">
            <CircleCheck className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Assessment Submitted!
          </h2>
          <p className="text-ivf-grey mb-8 text-lg">
            Thank you for completing your fertility assessment. Our team will review your information and contact you soon.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Button 
            onClick={() => window.open('https://api.whatsapp.com/send?phone=919057000555', '_blank')}
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            Chat with us on WhatsApp
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(1);
              setGender("");
              setAnswers({});
              setActiveTab("personal");
              personalInfoForm.reset();
            }}
          >
            Take Another Assessment
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-ivf-orange/10 via-ivf-light-orange/20 to-ivf-light-grey p-6">
        {/* Step Indicator */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">{t(`fertilityAssessment.progressSteps.${currentStep === 1 ? 'start' : currentStep === 2 ? 'questions' : 'results'}`)}</span>
            <span className="text-sm font-medium">{currentStep} / {totalSteps}</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full mb-6">
            <TabsTrigger 
              value="personal" 
              className="flex-1"
              disabled={currentStep < 1}
              onClick={() => currentStep >= 1 && setCurrentStep(1)}
            >
              Personal Info
            </TabsTrigger>
            <TabsTrigger 
              value="questions" 
              className="flex-1"
              disabled={currentStep < 2}
              onClick={() => currentStep >= 2 && setCurrentStep(2)}
            >
              Questionnaire
            </TabsTrigger>
            <TabsTrigger 
              value="results" 
              className="flex-1"
              disabled={currentStep < 3}
              onClick={() => currentStep >= 3 && setCurrentStep(3)}
            >
              Results
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="personal" className={currentStep === 1 ? 'block' : 'hidden'}>
            {/* Step 1: Personal Information */}
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-ivf-orange to-ivf-orange/80">
                {t('fertilityAssessment.steps.step1.title')}
              </h2>
              <p className="text-ivf-grey mb-6">
                {t('fertilityAssessment.steps.step1.description')}
              </p>
              
              <Form {...personalInfoForm}>
                <form onSubmit={personalInfoForm.handleSubmit(onPersonalInfoSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={personalInfoForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} className="border-ivf-light-orange focus:border-ivf-orange" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={personalInfoForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" {...field} className="border-ivf-light-orange focus:border-ivf-orange" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={personalInfoForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 9876543210" {...field} className="border-ivf-light-orange focus:border-ivf-orange" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={personalInfoForm.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Age</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="Enter your age" {...field} className="border-ivf-light-orange focus:border-ivf-orange" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={personalInfoForm.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date of Birth</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "pl-3 text-left font-normal border-ivf-light-orange focus:border-ivf-orange",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() || date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={personalInfoForm.control}
                      name="preferredLanguage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Language</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-ivf-light-orange focus:border-ivf-orange">
                                <SelectValue placeholder="Select your preferred language" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="english">English</SelectItem>
                              <SelectItem value="hindi">Hindi</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="border-t border-ivf-light-orange/50 pt-6">
                    <FormField
                      control={personalInfoForm.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>{t('fertilityAssessment.steps.step1.question')}</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-1 md:grid-cols-3 gap-4"
                            >
                              <FormItem className="flex flex-col items-center space-y-3 rounded-lg border border-ivf-light-orange p-4 hover:border-ivf-orange [&:has([data-state=checked])]:border-ivf-orange [&:has([data-state=checked])]:bg-ivf-orange/10">
                                <FormControl>
                                  <RadioGroupItem value="female" className="sr-only" />
                                </FormControl>
                                <div className="text-center">
                                  <FormLabel className="font-normal cursor-pointer">{t('fertilityAssessment.gender.female')}</FormLabel>
                                </div>
                              </FormItem>
                              <FormItem className="flex flex-col items-center space-y-3 rounded-lg border border-ivf-light-orange p-4 hover:border-ivf-orange [&:has([data-state=checked])]:border-ivf-orange [&:has([data-state=checked])]:bg-ivf-orange/10">
                                <FormControl>
                                  <RadioGroupItem value="male" className="sr-only" />
                                </FormControl>
                                <div className="text-center">
                                  <FormLabel className="font-normal cursor-pointer">{t('fertilityAssessment.gender.male')}</FormLabel>
                                </div>
                              </FormItem>
                              <FormItem className="flex flex-col items-center space-y-3 rounded-lg border border-ivf-light-orange p-4 hover:border-ivf-orange [&:has([data-state=checked])]:border-ivf-orange [&:has([data-state=checked])]:bg-ivf-orange/10">
                                <FormControl>
                                  <RadioGroupItem value="both" className="sr-only" />
                                </FormControl>
                                <div className="text-center">
                                  <FormLabel className="font-normal cursor-pointer">{t('fertilityAssessment.gender.both')}</FormLabel>
                                </div>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-ivf-orange to-ivf-orange/80 hover:from-ivf-orange hover:to-ivf-orange text-white py-6 text-lg font-medium"
                  >
                    {t('fertilityAssessment.navigation.next')} 
                    <ChevronRight className="ml-1 h-5 w-5" />
                  </Button>
                </form>
              </Form>
            </div>
          </TabsContent>
          
          <TabsContent value="questions" className={currentStep === 2 ? 'block' : 'hidden'}>
            {/* Step 2: Questions */}
            <div>
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-ivf-orange to-ivf-orange/80">
                  {gender === "female" && t('fertilityAssessment.steps.step2.titleFemale')}
                  {gender === "male" && t('fertilityAssessment.steps.step2.titleMale')}
                  {gender === "both" && t('fertilityAssessment.steps.step2.titleBoth')}
                </h3>
                <p className="text-ivf-grey mb-6">{t('fertilityAssessment.steps.step2.description')}</p>
                
                {getQuestions().map((questionId, index) => (
                  <div 
                    key={questionId} 
                    className="border rounded-lg p-5 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <p className="font-medium pr-2">
                        {t(`fertilityAssessment.questions.${gender}.${questionId}`)}
                      </p>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Info className="h-4 w-4 text-muted-foreground" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">Your answer helps us assess your fertility health more accurately.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-3">
                      <Button 
                        type="button" 
                        variant={answers[questionId] === "yes" ? "default" : "outline"}
                        className={cn(
                          "w-full transition-all",
                          answers[questionId] === "yes" ? 
                            "bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white" : 
                            "hover:bg-green-50"
                        )}
                        onClick={() => handleAnswerChange(questionId, "yes")}
                      >
                        {answers[questionId] === "yes" && <Check className="mr-1 h-4 w-4" />}
                        {t('fertilityAssessment.answers.yes')}
                      </Button>
                      
                      <Button 
                        type="button" 
                        variant={answers[questionId] === "sometimes" ? "default" : "outline"}
                        className={cn(
                          "w-full transition-all",
                          answers[questionId] === "sometimes" ? 
                            "bg-gradient-to-r from-ivf-orange/80 to-ivf-orange hover:from-ivf-orange hover:to-ivf-orange text-white" : 
                            "hover:bg-ivf-orange/10"
                        )}
                        onClick={() => handleAnswerChange(questionId, "sometimes")}
                      >
                        {answers[questionId] === "sometimes" && <Check className="mr-1 h-4 w-4" />}
                        {t('fertilityAssessment.answers.sometimes')}
                      </Button>
                      
                      <Button 
                        type="button" 
                        variant={answers[questionId] === "no" ? "default" : "outline"}
                        className={cn(
                          "w-full transition-all",
                          answers[questionId] === "no" ? 
                            "bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white" : 
                            "hover:bg-rose-50"
                        )}
                        onClick={() => handleAnswerChange(questionId, "no")}
                      >
                        {answers[questionId] === "no" && <Check className="mr-1 h-4 w-4" />}
                        {t('fertilityAssessment.answers.no')}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between mt-8">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={goToPreviousStep}
                  className="border-ivf-light-orange hover:bg-ivf-orange/10"
                >
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  {t('fertilityAssessment.navigation.back')}
                </Button>
                
                <Button 
                  type="button" 
                  className="bg-gradient-to-r from-ivf-orange to-ivf-orange/80 hover:from-ivf-orange hover:to-ivf-orange text-white"
                  onClick={handleNextStepAnswers}
                >
                  {t('fertilityAssessment.navigation.next')}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="results" className={currentStep === 3 ? 'block' : 'hidden'}>
            {/* Step 3: Results */}
            <div>
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ivf-orange to-ivf-orange/80">
                  {t('fertilityAssessment.results.title')}
                </h3>
                
                <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <div className="mb-8">
                    <div className="text-6xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-ivf-orange to-ivf-orange/80">
                      {assessmentScore} <span className="text-3xl">/ 30</span>
                    </div>
                    <div className="relative h-4 w-full bg-gray-200 rounded-full overflow-hidden mb-2">
                      <div 
                        className={cn(
                          "h-full rounded-full",
                          riskLevel === "lowRisk" ? "bg-gradient-to-r from-green-400 to-emerald-500" : 
                          riskLevel === "moderateRisk" ? "bg-gradient-to-r from-ivf-orange/80 to-ivf-orange" : 
                          "bg-gradient-to-r from-rose-400 to-pink-500"
                        )}
                        style={{ width: `${Math.min(assessmentScore / 30 * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-6">
                    {t('fertilityAssessment.results.interpretationTitle')}
                  </h4>
                  
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className={cn(
                      "border rounded-lg p-6 transition-all hover:shadow-md",
                      riskLevel === "lowRisk" ? "border-green-500 bg-green-50" : "border-gray-200"
                    )}>
                      <div className="mb-3">
                        <span className="inline-block p-2 rounded-full bg-green-100">
                          <CircleCheck className="h-6 w-6 text-green-600" />
                        </span>
                      </div>
                      <h5 className="font-semibold text-lg mb-2">{t('fertilityAssessment.results.lowRiskTitle')}</h5>
                      <p className="text-sm text-gray-600">{t('fertilityAssessment.results.lowRiskDescription')}</p>
                    </div>
                    
                    <div className={cn(
                      "border rounded-lg p-6 transition-all hover:shadow-md",
                      riskLevel === "moderateRisk" ? "border-ivf-orange bg-ivf-orange/10" : "border-gray-200"
                    )}>
                      <div className="mb-3">
                        <span className="inline-block p-2 rounded-full bg-ivf-orange/20">
                          <Info className="h-6 w-6 text-ivf-orange" />
                        </span>
                      </div>
                      <h5 className="font-semibold text-lg mb-2">{t('fertilityAssessment.results.moderateRiskTitle')}</h5>
                      <p className="text-sm text-gray-600">{t('fertilityAssessment.results.moderateRiskDescription')}</p>
                    </div>
                    
                    <div className={cn(
                      "border rounded-lg p-6 transition-all hover:shadow-md",
                      riskLevel === "highRisk" ? "border-rose-500 bg-rose-50" : "border-gray-200"
                    )}>
                      <div className="mb-3">
                        <span className="inline-block p-2 rounded-full bg-rose-100">
                          <Info className="h-6 w-6 text-rose-600" />
                        </span>
                      </div>
                      <h5 className="font-semibold text-lg mb-2">{t('fertilityAssessment.results.highRiskTitle')}</h5>
                      <p className="text-sm text-gray-600">{t('fertilityAssessment.results.highRiskDescription')}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-semibold text-xl mb-4">
                    {t('fertilityAssessment.contactForm.title')}
                  </h4>
                  <Button 
                    onClick={handleFinalSubmit}
                    className="w-full bg-gradient-to-r from-ivf-orange to-ivf-orange/80 hover:from-ivf-orange hover:to-ivf-orange text-white py-6 text-lg font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : t('fertilityAssessment.navigation.submit')}
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-start mt-6">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={goToPreviousStep}
                  className="border-ivf-light-orange hover:bg-ivf-orange/10"
                >
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  {t('fertilityAssessment.navigation.back')}
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FertilityAssessmentForm;
