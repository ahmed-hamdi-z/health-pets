import PageContainer from "../components/containers/PageContainer";
import AdviceSection from "../components/sections/advice";
import ExperienceSection from "../components/sections/experience";
import HomeHero from "../components/sections/HomeHero";
import Reels from "../components/sections/reels";
import { StaggerTestimonials } from "../components/sections/reviews";
import OurProjects from "../components/sections/OurProjects";
import ServicesSection from "../components/sections/services";
import PetShowcase from "../components/sections/shop/PetShowcase";

const Home = () => {
  return (
    <PageContainer>
      <HomeHero />
      <AdviceSection />
      <ExperienceSection />
      <ServicesSection />
      <Reels />
      <OurProjects />
      <>
        <PetShowcase
          title="Explore-title"
          subtitle="Explore-subtitle" 
          description="Explore-description"
          products={[
            { id: 1, image: "/images/By-Pet.jpg", title: "product.product1.title", description: "product.product1.description" },
            { id: 2, image: "/images/Food-Feeding.jpg", title: "product.product2.title", description: "product.product2.description" },
            { id: 3, image: "/images/Health.jpg", title: "product.product3.title", description: "product.product3.description" },
            { id: 4, image: "/images/Accessories.jpg", title: "product.product4.title", description: "product.product4.description" },
            { id: 5, image: "/images/Toys.jpg", title: "product.product5.title", description: "product.product5.description" },
            { id: 5, image: "/images/Housing.jpg", title: "product.product6.title", description: "product.product6.description" },
            { id: 5, image: "/images/Cleaning.jpg", title: "product.product7.title", description: "product.product7.description" },
            { id: 5, image: "/images/Training.jpg", title: "product.product8.title", description: "product.product8.description" },
          ]}
          exploreLink="#"
          petImage="/images/cat-shop.png"
        />
      </>
      <StaggerTestimonials />
    </PageContainer>
  );
};

export default Home;
