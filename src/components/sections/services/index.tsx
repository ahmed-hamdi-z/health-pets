import React from "react";
import ServiceCard from "./services-card";
import SectionContainer from "../../containers/SectionContainer";
import useScrollInToView from "../../../hooks/useScrollInToView";
import useActivation from "../../../hooks/useActivation";
import SectionHeader from "../../SectionHeader";
export interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
  parentInToView?: boolean;
}
const services: ServiceCardProps[] = [
  {
    image: "/images/advice.png",
    title: "Surgical operations",
    description:
      "The quick brown fox jumps over the lazy dog. Donec nec justo eget felis facilisis fermentum.",
  },
  {
    image: "/images/advice.png",
    title: "24-hour emergency service",
    description:
      "Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.",
  },
  {
    image: "/images/advice.png",
    title: "Mobile Veterinary Clinic",
    description:
      "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a.",
  },
  {
    image: "/images/advice.png",
    title: "Rays",
    description:
      "Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat.",
  },
  {
    image: "/images/advice.png",
    title: "24-hour emergency service",
    description:
      "Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.",
  },
  {
    image: "/images/advice.png",
    title: "Specialized veterinarians",
    description:
      "Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate.",
  },
];

const ServicesSection: React.FC = () => {
  const { targetRef, isInView } = useScrollInToView();

  const { activationArr } = useActivation(services.length, 300, {
    initializtion: isInView,
  });

  return (
    <SectionContainer
      ref={targetRef}
      className={` ease-in-out duration-1000 ${
        isInView ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        <SectionHeader title="Services" />
        <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              {...service}
              parentInToView={activationArr[i].active}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ServicesSection;
