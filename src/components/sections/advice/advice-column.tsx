import type { AdviceColumnProps } from ".";
import AdviceCard from "./adive-card";

const AdviceColumn: React.FC<AdviceColumnProps> = ({
  title,
  className = "",
  petImage,
  petImageAlt = "Pet image",
}) => {
  return (
    <div className={`w-full flex flex-col items-center${className}`}>
      <AdviceCard title={title} />
      <img className="w-2xl mt-18 absolute" src="/images/advice-vector.svg" alt="" />
      <img
        src={petImage}
        alt={petImageAlt}
        className="z-10 w-11/12 rounded-bl-[13rem] rounded-br-[20rem]"
      />
    </div>
  );
};

export default AdviceColumn;
