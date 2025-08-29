import type { AdviceColumnProps } from ".";

const AdviceColumn: React.FC<AdviceColumnProps> = ({
  title,
  className = "",
  petImage,
  petImageAlt = "Pet image",
}) => {
  return (
    <div className={`w-full flex flex-col items-center  ${className}`}>
      <div className="relative md:w-1/2 w-[90%] flex flex-col items-center justify-center bg-amber-400 rounded-tl-full rounded-r-full translate-y-1/4 z-50 opacity-85">
        <img
          src="/images/Idea.png"
          width={40}
          height={40}
          alt=""
          className="absolute left-0 top-0 translate-x-1/2 -translate-y-1/2"
        />
        <h2 className="text-[#4C4C4C] uppercase text-2xl ">{title}</h2>

        <p className="text-[#4C4C4C] text-sm lowercase px-6 py-3">
          THE QUICK, BROWN FOX JUMPS OVER A LAZY DOG. HIV XA OUTS PROG. JUNK HIV
          OUTS CHACED BY JOB, FLICK QUARTZ, VEX NYMPHS, WALTZ, BAD. VISIT FOX
          WINDING
        </p>
      </div>
      <div className="bg-[url(/images/advice-vector.svg)] bg-left bg-no-repeat bg-contain z-10">
        <img
          src={petImage}
          alt={petImageAlt}
          className="-translate-x-10 translate-y-10 rounded-bl-[300px] rounded-br-[450px] p-10"
        />
      </div>
    </div>
  );
};

export default AdviceColumn;
