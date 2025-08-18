interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
  return (
    <div className="max-w-sm p-4 text-center rounded-full bg-gradient-to-b from-[#E09341] to-[#F15F5D] opacity-90 ">
      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-[#4C4C4C] ">{description}</p>
    </div>
  );
};

export default InfoCard;
