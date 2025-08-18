import React from "react";
import DoctorCard from "./doctors-card";
import SectionContainer from "../../containers/SectionContainer";

const doctors = [
  {
    name: "Dr. Sara",
    description:
      "specializing in the diseases and nutrition of pets, with expertise in diagnosing and treating digestive and skin problems in cats and dogs, as well as providing vaccination programs and preventive care for domestic animals.",
    image: "/images/advice.png",
  },
  {
    name: "Dr. Sara",
    description:
      "specializing in the diseases and nutrition of pets, with expertise in diagnosing and treating digestive and skin problems in cats and dogs, as well as providing vaccination programs and preventive care for domestic animals.",
    image: "/images/advice.png",
  },
  {
    name: "Dr. Sara",
    description:
      "specializing in the diseases and nutrition of pets, with expertise in diagnosing and treating digestive and skin problems in cats and dogs, as well as providing vaccination programs and preventive care for domestic animals.",
    image: "/images/advice.png",
  },
  {
    name: "Dr. Sara",
    description:
      "specializing in the diseases and nutrition of pets, with expertise in diagnosing and treating digestive and skin problems in cats and dogs, as well as providing vaccination programs and preventive care for domestic animals.",
    image: "/images/advice.png",
  },
  {
    name: "Dr. Sara",
    description:
      "specializing in the diseases and nutrition of pets, with expertise in diagnosing and treating digestive and skin problems in cats and dogs, as well as providing vaccination programs and preventive care for domestic animals.",
    image: "/images/advice.png",
  },
  {
    name: "Dr. Sara",
    description:
      "specializing in the diseases and nutrition of pets, with expertise in diagnosing and treating digestive and skin problems in cats and dogs, as well as providing vaccination programs and preventive care for domestic animals.",
    image: "/images/advice.png",
  },
];

const DoctorsSection: React.FC = () => {
  return (
    <SectionContainer className="w-full bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-10">
        {doctors.map((doc, index) => (
          <DoctorCard
            key={index}
            name={doc.name}
            description={doc.description}
            image={doc.image}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default DoctorsSection;
