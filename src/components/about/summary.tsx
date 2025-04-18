import React from "react";
const metrics = [
  {
    title: "Strategic AI Advisory",
    description:
      "Guiding businesses from AI exploration to successful adoption with practical, ROI-focused approaches",
  },
  {
    title: "Gen AI Architecture",
    description:
      "Building secure, scalable AWS architecture that support advanced AI capabilities while optimizing for performance and cost",
  },
  {
    title: "Legacy System Integration",
    description:
      "Connecting modern AI capabilities with established enterprise infrastructure through robust APIs and event-driven architectures",
  },
];
const Summary = () => {
  return (
    <div id="professional-summary" className="flex flex-col gap-y-10">
      <h4 className="heading-3 font-normal">
      I design cutting-edge AI systems that solve complex business challenges, from healthcare conversational AI to financial data processing, with proven results in reducing operational costs and enhancing efficiency
      </h4>
      <div
        id="metrics"
        className="grid grid-cols-1 mobile:grid-cols-3 gap-4 tablet:gap-6"
      >
        {metrics.map((metric, idx) => (
          <div key={idx} className="flex flex-col h-full">
            <h4 className="heading-3 font-semibold mb-2 tablet:mb-4">
              {metric.title}
            </h4>
            <span className="text-lg mobile:text-xl leading-7 tracking-[-0.005em] italic flex-grow">{metric.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;