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
      className={`bg-[#e8f7f9] rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105 ${
        isInView && parentInToView ? "opacity-100" : "opacity-0"
      }`}
    >
      <img src={image} alt={title} className="w-32 h-32 object-contain mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <a href={appRoutes.services} className="bg-orange-600 text-white font-medium px-4 py-2 rounded-full hover:bg-orange-500 transition">
        {buttonText}
      </a>
    </div>
  );
};

export default ServiceCard;
