import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PricingPlans = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
    });
  }, []);

  const plans = [
    {
      id: 1,
      title: "Standard User",
      price: "$49.90",
      features: [
        "10 Exercise In A Day",
        "5 Live Speaking",
        "Get Certificated",
        "2 Level Test",
      ],
      animation: "fade-up",
    },
    {
      id: 2,
      title: "Diamond User",
      price: "$99.90",
      features: [
        "20 Exercise In A Day",
        "Achievement Award",
        "15 Live Speaking",
        "Get Certificated",
        "8 Level Test",
      ],
      animation: "fade-down",
      isHighlighted: true,
    },
    {
      id: 3,
      title: "Premium User",
      price: "$79.90",
      features: [
        "15 Exercise In A Day",
        "10 Live Speaking",
        "Get Certificated",
        "5 Level Test",
      ],
      animation: "fade-up",
    },
  ];

  return (
    <section className="py-16 bg-neutral-gray">
      <div className="container mx-auto text-center">
        <h2
          className="text-4xl font-bold text-dark-blue-gray mb-6"
          data-aos="fade-in"
        >
          Flexible Pricing Plans
        </h2>
        <p className="text-soft-gray-2 mb-12" data-aos="fade-in">
          Choose the plan that fits your Japanees learning goals. Start your
          journey today!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-0 gap-8 max-w-2xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`p-6 rounded-lg ${
                plan.isHighlighted ? "bg-light-blue text-dark-blue-gray shadow-2xl" : "bg-transparent"
              }`}
              data-aos={plan.animation}
            >
              <h3 className="text-xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-3xl font-bold text-strong-blue mb-6">
                {plan.price}
                <span className="text-soft-gray-2 text-sm">/month</span>
              </p>
              <div className="divider"></div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex text-start justify-start items-center gap-2 text-soft-gray-2">
                    <p> 

                    <span className="text-green">✔</span> {feature}
                    </p>
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 px-4 bg-strong-blue text-white rounded-md hover:bg-sky-blue transition-all">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
