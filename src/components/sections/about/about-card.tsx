import useScrollInToView from "../../../hooks/useScrollInToView";

type AboutUsCardProps = {
  title: string;
  subtitle?: string;
  content: string;
  imageUrl: string;
  imagePosition?: "left" | "right";
  className?: string;
};

const AboutUsCard: React.FC<AboutUsCardProps> = ({
  title,
  subtitle,
  content,
  imageUrl,
  imagePosition = "left",
  className = "",
}) => {
  const isImageLeft = imagePosition === "left";
  const { targetRef, isInView } = useScrollInToView();
  
  return (
    <div
      ref={targetRef}
      className={`flex flex-row items-center md:w-5/6 duration-300 ease-in-out delay-300 ${isInView ? "opacity-100" : "opacity-0"} ${className} ${isImageLeft ? "flex-row text-center" : "flex-row-reverse ml-auto text-center"
        }`}
    >
      <div className="text-[#4C4C4C] p-10">
        <h3 className="pb-3 text-xl md:text-2xl font-bold md:w-1/2 w-3/4 md:mx-auto">
          {title}
        </h3>
        {subtitle && <h4 className="text-base md:text-lg">{subtitle}</h4>}
        <p className="text-clip drop-shadow-md md:w-1/2 w-3/4 md:mx-auto">
          {content}
        </p>
      </div>
      <img
        className={`md:w-1/4 w-1/3 ${isImageLeft
          ? "md:flex hidden 2xl:-translate-y-6 2xl:-translate-x-80 md:-translate-y-5 md:-translate-x-50 -translate-y-2 md:rounded-[0%] rounded-[30%] -translate-x-7 scale-150 md:scale-110"
          : "md:flex hidden 2xl:-translate-y-16 2xl:-translate-x-20 md:-translate-y-10 md:translate-x-30 -translate-y-2 md:rounded-[0%] rounded-[30%] -translate-x-7 scale-100 md:scale-150"
          }`}
        src={imageUrl}
        alt="#"
      />
    </div>
  );
};

export default AboutUsCard;
