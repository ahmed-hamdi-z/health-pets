interface InfoCardProps {
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
  return (
    <div className="w-full h-full flex flex-col mt-10">
      <div className="absolute rounded-full bg-[#E09341] opacity-30 w-96 ltr:h-32 h-34" />
      <div className="bg-transparent md:w-96 w-80 flex flex-col items-center justify-between p-2">
        <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-[#000] px-9 rtl:text-right line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;


interface InfoCardProps {
  title: string;
  description: string;
}

// const InfoCard: React.FC<InfoCardProps> = ({ title, description }) => {
//   return (
//     <div className=" bg-[#f5c695] rounded-full ">
//       <div className="bg-transparent md:w-96 w-80 flex flex-col items-center justify-between p-2">
//         <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">
//           {title}
//         </h3>
//         <p className="text-sm sm:text-base text-[#4C4C4C] px-9 rtl:text-right line-clamp-3">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default InfoCard;
