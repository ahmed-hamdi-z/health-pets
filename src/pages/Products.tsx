import PageContainer from "../components/containers/PageContainer";
import PetShowcase from "../components/sections/shop/PetShowcase";

export default function Products() {
  return (
    <PageContainer paddingTop>
    <>
        <PetShowcase
          title="Explore all"
          subtitle="about your pet"
          description="The quick brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps..."
          products={[
            { id: 1, image: "/images/cat.jpg" },
            { id: 2, image: "/images/cat.jpg" },
            { id: 3, image: "/images/cat.jpg" },
            { id: 4, image: "/images/cat.jpg" },
            { id: 5, image: "/images/cat.jpg" },
          ]}
          exploreLink="#"
          petImage="/images/cat-shop.png"
        />
      </>    </PageContainer>
  );
}
