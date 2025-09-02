import PageContainer from "../components/containers/PageContainer";
import Loader from "../components/Loader";


export default function Loading() {
  return (
    <PageContainer className="justify-center items-center">
      <Loader />
    </PageContainer>
  );
}
