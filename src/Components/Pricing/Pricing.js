import React from "react";
import SinglePlan from "../SinglePlans/SinglePlan";
import "./Pricing.css";

const Pricing = () => {
    const pricingPlans = [
        {id:1, price: 25, detail: "Per persoon", packageName:"Apero of taart", description:"Na de wandeling geniet je van een drankje én tapasmix of een heerlijk stukje taart met koffie.", features: [
                "-12 jaar aan halve prijs,",
                "< 3 jaar gratis"
        ]
        },
        {id:2, price: 35, detail: "Per persoon", packageName:"Luxe tapas", description:"In deze formule geniet je van een drankje én een uitgebreide en luxueuze tapasmix", features: [
                "-12 jaar aan halve prijs,",
                "< 3 jaar gratis"
        ]
        }
    ]
  return (
    <div className="py-5 md:py-10">
        <h2 className="text-3xl text-center mb-3 md:text-5xl">Formules</h2>
        <hr className="dvider w-32 m-auto" />
        <p className="text-center m-2 text-sm font-medium">We bieden jou twee kant-en-klare formules aan<br/>(min 2/max 6 personen)</p>
      <div className="grid grid-cols-1 gap-2 m-5 md:grid md:grid-cols-2 md:gap-10 md:mx-24 lg:mx-36 lg:gap-12">
        {
            pricingPlans.map(singlePrice=> <SinglePlan
                key = {singlePrice.id}
                singlePrice = {singlePrice}
            ></SinglePlan>)
        }
      </div>
    </div>
  );
};

export default Pricing;
