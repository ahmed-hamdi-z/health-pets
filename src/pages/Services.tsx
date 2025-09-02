import PageContainer from "../components/containers/PageContainer";
import AboutHero from "../components/sections/about/about-hero";
import ServicesPageSection from "../components/sections/services/services-page-card";

export default function Services() {
  return (
    <PageContainer >
      <AboutHero imageUrl={"/images/about-hero-img.png"} title="Services" />
      <ServicesPageSection />
    </PageContainer>
  );
}
