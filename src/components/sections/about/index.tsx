import React from "react";
import AboutUsCard from "./about-card";
import SectionContainer from "../../containers/SectionContainer";

const AboutUsSection: React.FC = () => {
  return (
    <SectionContainer className="w-full bg-gray-50">
      <div className="">
        <div className="space-y-6 md:space-y-8">
          {/* Mission Card */}
          <AboutUsCard
            title="Mission"
            content="Our mission at Healthy Pets is to deliver exceptional veterinary care and preventive services for pets and their families in Riyadh. using advanced technology and modern treatments."
            imageUrl="/images/about-mission.png"
            imagePosition="left"
            className="rounded-r-full bg-[#69CBDA]"
          />

          {/* Vision Card */}
          <AboutUsCard
            title="Vision"
            content="To be Riyadh's premier pet healthcare destination, offering state-of-the-artmedical services in a luxurious,nurturing environment"
            imageUrl="/images/about-vision.png"
            imagePosition="right"
            className="rounded-l-full bg-[#F79437]"
          />

          {/* Core Values Card */}
          <AboutUsCard
            title="Core Values"
            content="Compassion: Treating pets as family. Excellence: Providing top-quality veterinary care Trust: Transparency and reliability. Innovation: Cutting-edge treatments "
            imageUrl="/images/about-value.png"
            imagePosition="left"
            className="rounded-r-full bg-[#69CBDA]"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutUsSection;
