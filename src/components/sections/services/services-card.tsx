import React, { useRef } from "react";
import type { ServiceCardProps } from "./index";
import useScrollInToView from "../../../hooks/useScrollInToView";
import { useTranslation } from "react-i18next";

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
  parentInToView,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isInView } = useScrollInToView({
    ref: ref,
  });
    const { t } = useTranslation(["services","common"]);
  return (
    
    <div
      ref={ref}
      className={`bg-[#99D8E0]/70 rounded-2xl  shadow-xl
          transition-[transform, opacity] shadow-[#99D8E0] p-6 flex flex-col items-center text-center transition-transform hover:scale-105  ${
        isInView && parentInToView ? "opacity-100" : "opacity-0"
      }`}
    >
      <img src={image} alt={title} className="w-32 h-32 object-contain mb-4" />
      <h3 className="text-lg font-semibold mb-2">{t(title)}</h3>
      <p className="text-sm text-gray-600 mb-4">{t(description)}</p>
   
    </div>
  );
};

export default ServiceCard;
