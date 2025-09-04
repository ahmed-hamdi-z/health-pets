import { useTranslation } from "react-i18next";
import PageContainer from "../components/containers/PageContainer";
import AboutUsSection from "../components/sections/about";
import AboutHero from "../components/sections/about/about-hero";
import AboutInfo from "../components/sections/about/about-info";
import DoctorsSection from "../components/sections/doctors";
import img from "/images/about-hero-img.png";

export const About = () => {
  const { t } = useTranslation(["header"]);
  return (
    <PageContainer>
      <AboutHero imageUrl={img} title={t("nav.about")} />
      <AboutInfo />
      <AboutUsSection />
      <DoctorsSection />
    </PageContainer>
  );
};
