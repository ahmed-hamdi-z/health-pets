import PageContainer from "../components/containers/PageContainer";
import PetShowcase from "../components/sections/shop/PetShowcase";

export default function Products() {
  return (
    <PageContainer paddingTop>
      <>
        <PetShowcase
          title="Explore-title"
          subtitle="Explore-subtitle"
          description="Explore-description"
          products={[
            { id: 1, image: "/images/cat.jpg", title: "product.product1.title", description: "product.product1.description" },
            { id: 2, image: "/images/cat.jpg", title: "product.product2.title", description: "product.product2.description" },
            { id: 3, image: "/images/cat.jpg", title: "product.product3.title", description: "product.product3.description" },
            { id: 4, image: "/images/cat.jpg", title: "product.product4.title", description: "product.product4.description" },
            { id: 5, image: "/images/cat.jpg", title: "product.product5.title", description: "product.product5.description" },
            { id: 5, image: "/images/cat.jpg", title: "product.product6.title", description: "product.product6.description" },
            { id: 5, image: "/images/cat.jpg", title: "product.product7.title", description: "product.product7.description" },
            { id: 5, image: "/images/cat.jpg", title: "product.product8.title", description: "product.product8.description" },
          ]}
          exploreLink="#"
          petImage="/images/cat-shop.png"
        />
      </>  
      </PageContainer>
  );
}
