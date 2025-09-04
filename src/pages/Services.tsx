import { useTranslation } from "react-i18next";
import PageContainer from "../components/containers/PageContainer";
import AboutHero from "../components/sections/about/about-hero";
import ServicesPageSection from "../components/sections/services/services-page-card";

export default function Services() {
  const { t } = useTranslation("header");
  return (
    <PageContainer >
      <AboutHero imageUrl={"/images/about-hero-img.png"} title={t("nav.services")} />
      <ServicesPageSection />
    </PageContainer>
  );
}
