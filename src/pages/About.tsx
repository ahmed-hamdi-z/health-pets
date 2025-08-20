import PageContainer from "../components/containers/PageContainer";
import AboutUsSection from "../components/sections/about";
import AboutHero from "../components/sections/about/about-hero";
import DoctorsSection from "../components/sections/doctors";

export const About = () => {
  return (
    <PageContainer>
      <AboutHero />
      <AboutUsSection />
      <DoctorsSection />
    </PageContainer>
  );
};
