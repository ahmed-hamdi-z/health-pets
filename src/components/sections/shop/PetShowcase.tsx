import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import SectionContainer from "../../containers/SectionContainer";
import useScrollInToView from "../../../hooks/useScrollInToView";
import { useTranslation } from "react-i18next";
import { appRoutes } from "../../../config";


const useRtl = () => {
  const [isRtl, setIsRtl] = useState(false);

  useEffect(() => {
    const direction = document.documentElement.dir;
    setIsRtl(direction === "rtl");
  }, []);

  return isRtl;
};


const CARD_WIDTH = 200;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

type Product = {
  id: number;
  image: string;
  title: string;
  description: string;
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

// --- Main Component ---
const PetShowcase: React.FC<PetShowcaseProps> = ({
  title,
  subtitle,
  description,
  products,
  petImage,
  petImageAlt = "Pet image",
}) => {
  const { t } = useTranslation("about");
  const { targetRef, isInView } = useScrollInToView();
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);
  const isRtl = useRtl();

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_PREVIOUS = offset < 0;

  const CAN_SHIFT_NEXT =
    Math.abs(offset) < CARD_SIZE * (products.length - CARD_BUFFER);

  const shiftPrevious = () => {
    if (!CAN_SHIFT_PREVIOUS) return;
    setOffset((pv) => pv + CARD_SIZE);
  };

  const shiftNext = () => {
    if (!CAN_SHIFT_NEXT) return;
    setOffset((pv) => pv - CARD_SIZE);
  };

  const PreviousIcon = isRtl ? FiArrowRight : FiArrowLeft;
  const NextIcon = isRtl ? FiArrowLeft : FiArrowRight;

  return (
    <SectionContainer
      ref={targetRef}
      id="section-container"
      wraperClassName="flex-row 2xl:w-full"
      className={`section-bg ease-in-out duration-1000 ${isInView ? "opacity-100" : "opacity-0"
        }`}
    >
      {/* Left Content Column */}
      <div className="md:w-1/2 flex flex-col justify-center p-4">
        <div className="md:ml-4 rtl:md:mr-4 rtl:md:ml-0">
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900">
            {t(title)}
          </h2>
          <span className="font-normal text-3xl md:text-4xl text-gray-900">
            {t(subtitle)}
          </span>
          <p className="mt-4 text-gray-600 text-sm md:text-base max-w-lg leading-relaxed">
            {t(description)}
          </p>
        </div>

        {/* Carousel Section */}
        <div className="mt-6 w-full">
          <div className="relative overflow-hidden p-4" ref={ref}>
            {/* Previous Button */}
            <button
              className={`z-10 absolute top-1/2 -translate-y-1/2 left-0 rounded-lg border cursor-pointer border-neutral-400 bg-white p-1.5 text-2xl transition-opacity hover:bg-neutral-100 ${CAN_SHIFT_PREVIOUS ? "opacity-100" : "opacity-30 cursor-not-allowed"
                }`}
              disabled={!CAN_SHIFT_PREVIOUS}
              onClick={shiftPrevious}
            >
              {isRtl ? <NextIcon /> : <PreviousIcon />}
            </button>

            <motion.div
              animate={{ x: offset }}
              transition={{ ease: "easeInOut" }}
              className="flex rtl:flex-row-reverse"
            >
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </motion.div>

            {/* Next Button */}
            <button
              className={`z-10 absolute top-1/2 -translate-y-1/2 right-0 rounded-lg border cursor-pointer border-neutral-400 bg-white p-1.5 text-2xl transition-opacity hover:bg-neutral-100 ${CAN_SHIFT_NEXT ? "opacity-100" : "opacity-30 cursor-not-allowed"
                }`}
              disabled={!CAN_SHIFT_NEXT}
              onClick={shiftNext}
            >
              {isRtl ? <PreviousIcon /> : <NextIcon />}
            </button>
          </div>
        </div>

        {/* Explore Link */}
        <a
          href={appRoutes.products}
          className=" mx-auto font-bold text-lg text-gray-800 underline underline-offset-4 hover:text-gray-600"
        >
          {t("learn-more", { ns: "common" })}
        </a>
      </div>

      {/* Right Image Column */}
      <div
        className="bg-cover bg-no-repeat w-full h-full rtl:-scale-x-100 "
        style={{
          backgroundImage: `url("/images/Vector.svg")`,
        }}
      >
        <img
          src={petImage}
          alt={petImageAlt}
          className="w-full h-auto object-contain"
        />
      </div>
    </SectionContainer>
  );
};


const ProductCard = ({ image, title, description }: Product) => {
  const { t } = useTranslation("products");
  return (
    <div
      className="relative shrink-0 transition-transform hover:-translate-y-1"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <img
        src={image}
        className="mb-1 h-[200px] w-full rounded-lg object-cover"
        alt={`Image for ${title}`}
      />
      <h3 className=" text-md ">{t(title)}</h3>
      <p className="text-sm text-neutral-500">{t(description)}</p>
    </div>
  );
};

export default PetShowcase;