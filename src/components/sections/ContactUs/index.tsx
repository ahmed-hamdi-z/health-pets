import ContactInfo from "./ContactInfo";
import Form from "./Form";
import useScrollInToView from "../../../hooks/useScrollInToView";
import SectionContainer from "../../containers/SectionContainer";
import { trim } from "../../../utils/general";

const ContactUs = () => {
  const { targetRef, isInView } = useScrollInToView();

  return (
    <SectionContainer
      id="contactUs"
      wraperClassName="items-center md:max-w-7xl max-w-none mx-auto bg-[#99D8E0]/80 my-20 rounded-4xl"
    >
      <div
        ref={targetRef}
        className={trim(`
          flex 
          flex-col
          justify-center  
          md:flex-row
          mt-7
          p-3
          md:p-7
          gap-7
          rounded-4xl
          shadow-2xl
          transition-[transform, opacity]
          w-full
          duration-500
          ease-in-out
          md:gap-20
          ${isInView ? "opacity-100" : "opacity-0"}
          ${isInView ? "translate-y-0" : "translate-y-5"}`)}
      >
        <Form />
        <ContactInfo />
      </div>
    </SectionContainer>
  );
};

export default ContactUs;
