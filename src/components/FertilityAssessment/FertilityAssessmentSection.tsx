"use client"
import React from "react";
import FertilityAssessmentForm from "./FertilityAssessmentForm";
import { useTranslation } from 'react-i18next';

const FertilityAssessmentSection: React.FC = () => {
  const { t } = useTranslation('common');

  const fertilityAssessment={
    "badge": "Fertility Health Assessment",
    "title": {
      "start": "Evaluate Your",
      "highlight": "Fertility Health"
    },
    "description": "Answer a few questions to get insights about your fertility status and next steps to help you achieve your family-building goals.",
    "progressSteps": {
      "start": "Getting Started",
      "questions": "Questions",
      "results": "Your Results"
    },
    "steps": {
      "step1": {
        "title": "Fertility Health Self-Assessment",
        "description": "Answer the questions honestly to understand your fertility readiness.",
        "question": "I am completing this assessment as:"
      },
      "step2": {
        "titleFemale": "Questions for Women",
        "titleMale": "Questions for Men",
        "titleBoth": "Questions for Your Fertility Assessment",
        "description": "Please answer all questions honestly for an accurate assessment."
      }
    },
    "gender": {
      "female": "Female / Woman",
      "male": "Male / Man",
      "both": "A Couple (Both Partners)"
    },
    "answers": {
      "yes": "Yes",
      "sometimes": "Sometimes",
      "no": "No"
    },
    "questions": {
      "female": {
        "regularCycles": "Are your menstrual cycles regular (every 24–35 days)?",
        "painfulPeriods": "Do you experience painful periods or heavy bleeding?",
        "diagnosedConditions": "Have you ever been diagnosed with PCOS, thyroid issues, or endometriosis?",
        "under35": "Are you under 35 years of age?",
        "tryingToConceive": "Have you been trying to conceive for more than 12 months (or 6 months if over 35)?",
        "unwantedSymptoms": "Do you experience symptoms like unwanted facial hair, acne, or weight gain?",
        "previousConditions": "Have you had previous pelvic infections, surgeries, or miscarriages?"
      },
      "male": {
        "semenAnalysis": "Have you ever had a semen analysis done?",
        "knownIssues": "Do you have any known issues like low sperm count or varicocele?",
        "lifestyle": "Do you smoke, drink excessively, or have a sedentary lifestyle?",
        "surgeries": "Have you had any surgeries or trauma in the groin area?",
        "exposure": "Are you exposed to high heat, radiation, or toxic substances at work?"
      },
      "both": {
        "intercourse": "Do you have intercourse 2–3 times per week, timed around ovulation?",
        "stress": "Do you feel stressed or anxious about fertility or parenthood?",
        "evaluated": "Have you or your partner been evaluated for fertility before?"
      }
    },
    "navigation": {
      "back": "Back",
      "next": "Next",
      "submit": "Submit"
    },
    "results": {
      "title": "Your Fertility Assessment Score",
      "interpretationTitle": "What Your Score Means:",
      "lowRisk": "Low Risk",
      "moderateRisk": "Moderate Risk",
      "highRisk": "High Risk",
      "lowRiskTitle": "0-5 Points – Low Risk",
      "lowRiskDescription": "You seem to be on the right track. Stay healthy and monitor.",
      "moderateRiskTitle": "6-15 Points – Moderate Risk",
      "moderateRiskDescription": "A basic fertility evaluation is recommended.",
      "highRiskTitle": "16+ Points – High Risk",
      "highRiskDescription": "You should consult a fertility expert without delay."
    },
    "contactForm": {
      "title": "Want to discuss your results with our experts?",
      "name": "Name",
      "namePlaceholder": "Your Name",
      "email": "Email",
      "emailPlaceholder": "your.email@example.com",
      "phone": "Phone Number",
      "phonePlaceholder": "Your Phone Number",
      "contactConsent": "I'd like a fertility specialist to contact me"
    },
    "toasts": {
      "submitted": "Assessment submitted successfully!"
    }
  }
  
  return (
    <section className="py-16 bg-gradient-to-b from-white via-ivf-light-orange/30 to-ivf-light-grey">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-ivf-orange/20 to-ivf-orange/30 text-transparent bg-clip-text bg-gradient-to-r from-ivf-orange to-ivf-orange/80 rounded-full font-semibold text-base mb-4">
              {fertilityAssessment.badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {fertilityAssessment.title.start} <span className="text-transparent bg-clip-text bg-gradient-to-r from-ivf-orange to-ivf-orange/80">{t('fertilityAssessment.title.highlight')}</span>
            </h2>
            <p className="text-xl text-ivf-grey max-w-3xl mx-auto">
              {fertilityAssessment.description}
            </p>
          </div>

          <FertilityAssessmentForm />
          
          <div className="mt-12 text-center text-sm text-ivf-grey">
            <p>Your privacy is important to us. All information provided is kept strictly confidential and is used solely for assessment purposes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FertilityAssessmentSection;
