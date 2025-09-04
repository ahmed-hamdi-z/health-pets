interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="absolute rounded-full bg-[#E09341] opacity-30 w-96 ltr:h-32 h-38" />
      <div className="relative flex flex-col items-center md:p-20 p-4">
        <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-[#4C4C4C] ">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
