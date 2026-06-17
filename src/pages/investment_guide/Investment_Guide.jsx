import React from "react";
import InvestmentHero from "../../components/investment/InvestmentHero";
import WhyInvestInLand from "../../components/investment/WhyInvestInLand";
import BuyingProcess from "../../components/investment/BuyingProcess";
import LegalRequirements from "../../components/investment/LegalRequirements";
import InvestmentCalculator from "../../components/investment/InvestmentCalculator";

const Investment_Guide = () => {
  return (
    <div>
      <InvestmentHero />
      <WhyInvestInLand />
      <BuyingProcess />
      <LegalRequirements />
      <InvestmentCalculator />
    </div>
  );
};

export default Investment_Guide;
