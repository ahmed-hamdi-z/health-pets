import React from "react";
import Carousel from "./Carousel";
import SectionContainer from "../../containers/SectionContainer";
import useScrollInToView from "../../../hooks/useScrollInToView";

type Product = {
  id: number;
  image: string;
  title?: string;
};

interface PetShowcaseProps {
  title: string;
  subtitle: string;
  description: string;
  products: Product[];
  exploreLink: string;
  petImage: string;
  petImageAlt?: string;
}

const PetShowcase: React.FC<PetShowcaseProps> = ({
  title,
  subtitle,
  description,
  exploreLink,
  petImage,
  petImageAlt = "Pet image",
}) => {
  const { targetRef, isInView } = useScrollInToView();
  return (
    <SectionContainer
      ref={targetRef}
      id="#section-container"
      wraperClassName=""
      className={`section-bg ease-in-out duration-1000 ${isInView ? "opacity-100" : "opacity-0"
        }`}
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
        <div className="ml-4">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900">
            {title}
          </h2>
          <span className="font-normal text-4xl md:text-4xl text-gray-900">
            {subtitle}
          </span>
          <p className="mt-4 text-gray-600 text-sm md:text-base max-w-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-6 flex items-center gap-3 z-10">
          <Carousel />
        </div>

        {/* Explore Link */}
        <a
          href={exploreLink}
          className="mt-4 mx-auto text-gray-800 underline underline-offset-4 hover:text-gray-600"
        >
          Explore More...
        </a>
      </div>

      {/* Right Image */}
      <div className="w-1/2 hidden md:flex">
        <div
          className="bg-cover bg-no-repeat w-full h-full flex items-center justify-center translate-y-14 rtl:-scale-x-100 "
          style={{
            backgroundImage: `url("/images/Vector.svg")`,
          }}
        >
          <img
            src={petImage}
            alt={petImageAlt}
            className="w-full max-w-[100%] h-auto scale-100 -translate-y-28"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default PetShowcase;
