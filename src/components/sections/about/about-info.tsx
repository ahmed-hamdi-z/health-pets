import { useResponsiveDesign } from "../../../hooks/useMediaQuery";
import SectionContainer from "../../containers/SectionContainer";

const AboutInfo = () => {
  const { isDesktop } = useResponsiveDesign();
  return (
    <SectionContainer className="section-bg ">
      <div
        className={`flex flex-col items-center text-center text-black w-full h-auto bg-gradient-to-r from-[#F9EFA7] to-[#F9EFA7] mix-blend-multiply ${
          isDesktop ? "mask-hero-top" : ""
        }`}
      >
        <h1 className="text-5xl font-bold py-2">Health Pets</h1>
        <p className="max-w-3xl text-center leading-relaxed py-2 fount-semibold ">
          Located in the heart of Riyadh, our premium veterinary clinic offers a
          unique experience that combines advanced medical technology with the
          expertise of a compassionate team. We go beyond treatment, focusing on
          every detail to ensure your pet’s health and happiness.
        </p>

        <div className="bg-[url('/images/about-info.png')] md:w-2xl w-sm h-42 bg-contain bg-no-repeat bg-bottom md:translate-y-4.5 translate-y-3.5" />
        {/* <img className="w-auto h-auto " src="/images/about-info.png" alt="" /> */}
      </div>
    </SectionContainer>
  );
};

export default AboutInfo;
