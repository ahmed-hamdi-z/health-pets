import React, { useRef } from "react";
import type { ServiceCardProps } from "./index";
import useScrollInToView from "../../../hooks/useScrollInToView";
import { appRoutes } from "../../../config";

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  buttonText = "Learn More",
  parentInToView,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isInView } = useScrollInToView({
    ref: ref,
  });
  return (
    <div
      ref={ref}
      className={`bg-[#99D8E0]/70 rounded-2xl shadow-md shadow-[#99D8E0] p-6 flex flex-col items-center text-center transition-transform hover:scale-105  ${
        isInView && parentInToView ? "opacity-100" : "opacity-0"
      }`}
    >
      <img src={image} alt={title} className="w-32 h-32 object-contain mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <a href={appRoutes.services} className="bg-gradient-to-tl from-[#F79437] to-white text-[#4C4C4C] font-normal px-6 py-2 rounded-full transition-transform hover:scale-105 duration-300 shadow-md ">
        {buttonText}
      </a>
    </div>
  );
};

export default ServiceCard;
