import React from "react";

interface DoctorCardProps {
  name: string;
  description: string;
  image: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <div className="bg-white shadow-md rounded-3xl overflow-hidden flex flex-col ">
      {/* Header */}
      <div className="bg-[#99D8E0] text-white font-semibold px-4 py-2">
        {name}
      </div>

      {/* Content */}
      <div className="flex flex-row items-center p-3 gap-2">
        <div className="flex-1 text-sm text-gray-700 ">{description}</div>
        <img
          src={image}
          alt={name}
          className="w-28 h-32 translate-y-6 object-contain"
        />
      </div>
    </div>
  );
};

export default DoctorCard;
