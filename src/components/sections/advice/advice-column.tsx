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
      <img className="w-2xl mt-20 absolute" src="/images/advice-vector.svg" alt="" />
      <img
        src={petImage}
        alt={petImageAlt}
        className="z-10 rounded-bl-[220px] rounded-br-[380px]"
      />
    </div>
  );
};

export default AdviceColumn;
