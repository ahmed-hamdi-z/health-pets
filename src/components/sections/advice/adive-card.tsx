
const AdviceCard = ({ title }: { title: string }) => {
    return (
        <div className="relative z-10 flex flex-col items-center justify-center md:w-96
     w-[90%] ">
            <img src="/images/advice-vector.png" alt="" />
            <div className="absolute p-5">
                <img
                    src="/images/Idea.png"
                    width={70}
                    height={70}
                    alt=""
                    className="bg-white p-3 rounded-full md:translate-x-7 -translate-y-5"
                />
                <div className="flex flex-col items-center -translate-y-10 md:p-5">
                    <h2 className="text-[#4C4C4C] uppercase font-bold text-xl ">{title}</h2>
                    <p className="text-[#4C4C4C] text-sm lowercase mt-2 ">
                        THE QUICK, BROWN FOX JUMPS OVER A LAZY DOG. HIV XA OUTS PROG. JUNK HIV
                        OUTS CHACED BY JOB, FLICK QUARTZ, VEX NYMPHS, WALTZ, BAD. VISIT FOX
                        WINDING
                    </p>
                </div>

            </div>
        </div>
    )
}

export default AdviceCard;