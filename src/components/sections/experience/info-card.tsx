import React from "react";

interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
  return (
    // Set a relative container to contain the absolute positioned background
    <div className="relative w-80 max-w-full text-center">
      {/* Background decorative circle */}
      <div className="absolute left-1/2 top-0 -z-10 h-32 w-80 -translate-x-1/2 rounded-full bg-[#E09341] opacity-30" />

      <div className="flex flex-col items-center justify-center pt-2 px-3">
        <h3 className="text-xl font-bold text-gray-800 md:text-xl">
          {title}
        </h3>
        <p className="mt-1 px-4 text-base text-black rtl:text-right line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;