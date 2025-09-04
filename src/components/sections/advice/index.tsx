import React from "react";
import AdviceColumn from "./advice-column";
import CoreValueCard from "./core-value-card";
import SectionContainer from "../../containers/SectionContainer";
import useScrollInToView from "../../../hooks/useScrollInToView";

export type CoreValueItem = {
  title: string;
  description: string;
};

export type AdviceColumnProps = {
  title: string;
  paragraphs: string[];
  className?: string;
  petImage: string;
  petImageAlt?: string;
};

export type AdviceSectionProps = {
  adviceText: string[];
  coreValues: CoreValueItem[];
  ctaText: string;
};

const AdviceSectionContainer: React.FC<AdviceSectionProps> = ({
  adviceText,
  coreValues,
  ctaText,
}) => {
  const { targetRef, isInView } = useScrollInToView();
  return (
    <SectionContainer
      ref={targetRef}
      id="#section-container"
      className={`w-full section-bg ease-in-out duration-1000  ${isInView ? "opacity-100" : "opacity-0"
        }`}
    >
      <div className="flex flex-col md:flex-row md:rtl:flex-row-reverse items-center ">
        <AdviceColumn
          petImage="/images/advice.png"
          title="Advice"
          paragraphs={adviceText}
        />

        <div className="space-y-2 px-8 w-full h-[70%] place-content-end md:translate-x-1/12 -translate-y-16 md:rtl:-translate-x-1/2">
          <div className="bg-no-repeat bg-contain md:w-42 md:h-42 w-24 h-24 bg-[url('/images/hand.svg')] md:mx-auto ml-auto translate-y-1/4" />
          <h2 className="text-3xl sm:text-5xl font-bold text-[#4C4C4C]">
            Core Values
          </h2>
          {coreValues.map((value, index) => (
            <CoreValueCard
              key={index}
              title={value.title}
              description={value.description}
            />
          ))}
          <button className="translate-y-12 translate-x-40 md:rtl:-translate-x-1/2 bg-gradient-to-tl from-[#F79437] to-white px-6 py-2 rounded-xl text-xs cursor-pointer scale-100 hover:scale-105 duration-300 translate-all ">
            {ctaText}
          </button>
        </div>
      </div>
    </SectionContainer>
  );
};

const AdviceSection = () => {
  const adviceText = [
    "THE QUICK, BROWN FOX JUMPS OVER A LAZY DOG.",
    "HIV XA OUTS PROG. JUNK HIV OUTS CHACED BY",
    "JOB, FLICK QUARTZ, VEX NYMPHS, WALTZ, BAD.",
    "VISIT FOX WINDING",
  ];

  const coreValues: CoreValueItem[] = [
    {
      title: "Compassion",
      description: "Treating pets as family.",
    },
    {
      title: "Excellence",
      description: "Providing top-quality veterinary care",
    },
    {
      title: "Trust",
      description: "Transparency and reliability",
    },
    {
      title: "Innovation",
      description: "Cutting-edge treatments.",
    },
  ];

  return (
    <AdviceSectionContainer
      adviceText={adviceText}
      coreValues={coreValues}
      ctaText="Book Now"
    />
  );
};

export default AdviceSection;
