import React from "react";
import "./SinglePlan.css";

const SinglePlan = ({singlePrice}) => {
    const {price, packageName, description, detail, features} = singlePrice;
  return (
    <div className="text-center border-solid border plan relative mb-5 p-4">
      <h2 className="font-medium"><span className="euro">€</span><span className="text-5xl">{price}</span></h2>
      <p className="leading-9 text-slate-500">{detail}</p>
      <p className="leading-9">{packageName}</p>
      <hr className="m-auto w-40" />
      {features.map(feature=> <p className="features">{feature}</p>)}
      <hr className="m-auto w-40"/>
      <p className="m-3 mb-12 md:mb-24">{description}</p>
      <button className= "btn-body site-btn absolute inset-x-12 bottom-5 ">BOEKEN</button>
    </div>
  );
};

export default SinglePlan;
