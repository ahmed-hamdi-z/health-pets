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
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("/images/hand-vector.svg")`,
      }}
      id="#section-container"
      wraperClassName="bg-white opacity-90"
      className={` ease-in-out duration-1000 ${
        isInView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12  items-center">
          {/* Advice Column */}
          <AdviceColumn
            petImage="/images/advice.png"
            title="Advice"
            paragraphs={adviceText}
          />
          <div className="flex flex-col">
            <div className="translate-y-10 p-2">
              <div
                className="bg-no-repeat bg-contain -translate-x-5 mx-auto"
                style={{
                  width: "90px",
                  height: "90px",
                  backgroundImage: `url("/images/hand.svg")`,
                }}
              />
            </div>

            {/* Core Values Column */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-5xl font-bold text-[#4C4C4C]">
                Core Values
              </h2>
              <div>
                {coreValues.map((value, index) => (
                  <CoreValueCard
                    key={index}
                    title={value.title}
                    description={value.description}
                  />
                ))}
              </div>
              <button className="translate-y-5 translate-x-32 bg-gradient-to-tl from-[#F79437] to-white px-6 py-2 rounded-xl text-xs ">
                {ctaText}
              </button>
            </div>
          </div>
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
