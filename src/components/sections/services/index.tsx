import React from "react";
import ServiceCard from "./services-card";
import SectionContainer from "../../containers/SectionContainer";
import useScrollInToView from "../../../hooks/useScrollInToView";
import useActivation from "../../../hooks/useActivation";
import SectionHeader from "../../SectionHeader";
import { useTranslation } from "react-i18next";
export interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
  parentInToView?: boolean;
}
const services: ServiceCardProps[] = [
  {
    image: "/images/serj.png",
    title: "ourConcepts.General.title",
    description:"ourConcepts.General.description",
  },
  {
    image: "/images/24h.png",
    title: "ourConcepts.Grooming.title",
    description:"ourConcepts.Grooming.description",
  },
  {
    image: "/images/mobile.png",
    title: "ourConcepts.Vaccinations.title",
    description:"ourConcepts.Vaccinations.description",
  },
  {
    image: "/images/x-rays.png",
    title: "ourConcepts.X-Ray.title",
    description:"ourConcepts.X-Ray.description",
  },
  {
    image: "/images/hotel.png",
    title: "ourConcepts.Isolation.title",
    description:"ourConcepts.Isolation.description",
  },
  {
    image: "/images/spec.png",
    title: "ourConcepts.Pharmacy.title",
    description:"ourConcepts.Pharmacy.description",
  },
];

const ServicesSection: React.FC = () => {
  const { targetRef, isInView } = useScrollInToView();
    const { t } = useTranslation("header");

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
        <SectionHeader title={t("nav.services")} />
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
