import PageContainer from "../components/containers/PageContainer";
import AboutUsSection from "../components/sections/about";
import DoctorsSection from "../components/sections/doctors";

export const About = () => {
  return (
    <PageContainer>
      <AboutUsSection />
      <DoctorsSection />
    </PageContainer>
  );
};
