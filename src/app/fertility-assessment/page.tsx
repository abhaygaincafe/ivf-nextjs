
import React from "react";
import { Helmet } from "react-helmet";
import FertilityAssessmentSection from "@/components/FertilityAssessment/FertilityAssessmentSection";

const FertilityAssessmentPage: React.FC = () => {
  return (
    <>
      {/* <Helmet>
        <title>Fertility Assessment | Ritu IVF</title>
        <meta name="description" content="Take our fertility health self-assessment to evaluate your reproductive health and fertility potential. Get personalized insights based on your answers." />
      </Helmet> */}
      
      <div className="min-h-screen bg-white">
        <FertilityAssessmentSection />
      </div>
    </>
  );
};

export default FertilityAssessmentPage;
