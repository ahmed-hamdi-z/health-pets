import type { AdviceColumnProps } from ".";

const AdviceColumn: React.FC<AdviceColumnProps> = ({
  title,
  paragraphs,
  className = "",
  petImage,
  petImageAlt = "Pet image",
}) => {
  return (
    <div className={`flex flex-col drop-shadow-md drop-shadow-[#a4f9ff] ${className}`}>
      {/* advice card */}
      <div className="text-sm lowercase mx-auto max:w-7/12 z-10 ">
        <div
          className="bg-gradient-to-tr from-[#69CBDA] to-[#fff] pl-16 p-6 rounded-r-full rounded-tl-full 
      md:translate-y-20 md:translate-x-20 
      lg:translate-y-20 lg:translate-x-30
      sm:translate-y-10 sm:translate-x-10
      translate-y-15 translate-x-10 
      opacity-85 shadow-2xl"
        >
          <img
            src="/images/Idea.png"
            width={60}
            height={60}
            alt=""
            className=" absolute -top-5 left-12 bg-white p-2 rounded-full"
          />
          <h2 className="pl-12 text-[#4C4C4C] uppercase font-stretch-95% text-2xl ">{title}</h2>
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={` drop-shadow-md pl-10 text-xs text-[#4C4C4C] ${
                index === paragraphs.length - 1 ? "" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div
        className="bg-cover bg-no-repeat py-11 pl-3  drop-shadow-md drop-shadow-[#51abff]"
        style={{
          backgroundImage: `url("/images/advice-vector.svg")`,
        }}
      >
        {" "}
        <img
          src={petImage}
          alt={petImageAlt}
          className=" rounded-bl-[37%] rounded-br-[60%] translate-y-11"
        />
      </div>{" "}
    </div>
  );
};

export default AdviceColumn;
