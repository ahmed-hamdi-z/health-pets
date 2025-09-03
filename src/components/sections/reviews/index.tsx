import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import SectionHeader from "../../SectionHeader";

const CARD_SIZE_LG = 365;
const CARD_SIZE_SM = 290;

const BORDER_SIZE = 2;
const CORNER_CLIP = 50;
const CORNER_LINE_LEN = Math.sqrt(
  CORNER_CLIP * CORNER_CLIP + CORNER_CLIP * CORNER_CLIP
);

const ROTATE_DEG = 2.5;

const STAGGER = 15;
const CENTER_STAGGER = -65;

const SECTION_HEIGHT = 600;

export const StaggerTestimonials = () => {
  const [cardSize, setCardSize] = useState(CARD_SIZE_LG);

  const [testimonials, setTestimonials] = useState(TESTIMONIAL_DATA);

  const handleMove = (position: number) => {
    const copy = [...testimonials];

    if (position > 0) {
      for (let i = position; i > 0; i--) {
        const firstEl = copy.shift();

        if (!firstEl) return;

        copy.push({ ...firstEl, tempId: Math.random() });
      }
    } else {
      for (let i = position; i < 0; i++) {
        const lastEl = copy.pop();

        if (!lastEl) return;

        copy.unshift({ ...lastEl, tempId: Math.random() });
      }
    }
    setTestimonials(copy);
  };

  useEffect(() => {
    const { matches } = window.matchMedia("(min-width: 640px)");

    if (matches) {
      setCardSize(CARD_SIZE_LG);
    } else {
      setCardSize(CARD_SIZE_SM);
    }

    const handleSetCardSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");

      if (matches) {
        setCardSize(CARD_SIZE_LG);
      } else {
        setCardSize(CARD_SIZE_SM);
      }
    };

    window.addEventListener("resize", handleSetCardSize);

    return () => window.removeEventListener("resize", handleSetCardSize);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <SectionHeader className="" title="Testimonials" />
      <div
        className="relative w-full overflow-hidden  mb-20"
        style={{
          height: SECTION_HEIGHT,
        }}
      >
        {testimonials.map((t, idx) => {
          let position = 0;

          if (testimonials.length % 2) {
            position = idx - (testimonials.length + 1) / 2;
          } else {
            position = idx - testimonials.length / 2;
          }

          return (
            <TestimonialCard
              key={t.tempId}
              testimonial={t}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
            />
          );
        })}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-8">
          <button
            onClick={() => handleMove(-1)}
            className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-[#99D8E0]/70 hover:text-white"
          >
            <GoArrowLeft />
          </button>
          <button
            onClick={() => handleMove(1)}
            className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-[#99D8E0]/70 hover:text-white"
          >
            <GoArrowRight />
          </button>
        </div>
      </div>
    </div>

  );
};

interface TestimonialProps {
  position: number;
  testimonial: TestimonialType;
  handleMove: Function;
  cardSize: number;
}

const TestimonialCard = ({
  position,
  testimonial,
  handleMove,
  cardSize,
}: TestimonialProps) => {
  const isActive = position === 0;

  return (
    <motion.div
      initial={false}
      onClick={() => handleMove(position)}
      className={`
      absolute left-1/2 top-1/2 cursor-pointer p-8 transition-colors duration-500 ${isActive ? "z-10 bg-[#99D8E0] rounded-2xl" : "z-0 bg-white"
        }
      `}
      animate={{
        width: cardSize,
        height: cardSize,
        x: `calc(-50% + ${position * (cardSize / 1.5)}px)`,
        y: `calc(-50% + ${isActive ? CENTER_STAGGER : position % 2 ? STAGGER : -STAGGER
          }px)`,
        rotate: isActive ? 0 : position % 2 ? ROTATE_DEG : -ROTATE_DEG,
        boxShadow: isActive ? "0px 8px 0px 4px white" : "0px 0px 0px 0px white",
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 object-cover"
        style={{
          right: -BORDER_SIZE,
          top: CORNER_CLIP - BORDER_SIZE,
          width: CORNER_LINE_LEN,
          height: BORDER_SIZE,
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`Testimonial image for ${testimonial.by}`}
        className="mb-4 md:h-16 h-10 md:w-32 w-20 px-1 bg-white object-contain rounded-3xl"
        style={{
          boxShadow: "3px 3px 0px white",
        }}
      />
      <h3
        className={`text-base sm:text-xl ${isActive ? "text-white" : "text-neutral-700"
          }`}
      >
        "{testimonial.testimonial}"
      </h3>
      <p
        className={`absolute bottom-4 text-right left-8 right-8 mt-2 text-sm italic ${isActive ? "text-white" : "text-neutral-700"
          }`}
      >
        - {testimonial.by}
      </p>
    </motion.div>
  );
};

type TestimonialType = {
  tempId: number;
  testimonial: string;
  by: string;
  imgSrc: string;
};

const TESTIMONIAL_DATA: TestimonialType[] = [
  {
    tempId: 0,
    testimonial:
      "عيادة بيطريه وتحميم الكلاب .. رحت لهم احمم كلابتي مره مهتمين بالألبف العيادة جداً نظيفة و الاستقبال يجنن الموظفين مره محترمين وتعاملهم راقي",
    by: "Nora",
    imgSrc: "/images/logo.png",
  },
  {
    tempId: 1,
    testimonial:
      "تجربتي كانت من أفضل التجارب مع قطّي، من ناحية التعامل والاهتمام, كل شيء كان بيرفكت بصراحة، حتى الموظفين اللي قابلتهم كانوا في قمة الذوق والاحترافية. وإن شاء الله مو آخر زيارة",
    by: "REEM ALRUWAYSHID",
    imgSrc: "/images/logo.png",
  },
  {
    tempId: 2,
    testimonial:
      "The clinic is excellent. I brought them a dog that had eaten chocolate. They interacted with me and cared about the issue. They were very careful to ensure that she received full care.",
    by: "Dhuha AlMutaz",
    imgSrc: "/images/logo.png",
  },
  {
    tempId: 3,
    testimonial:
      "I took my cat today to this clinic for general checkup. Dr Walaa was so sweet when handling my cat. She gave us clear guidelines on taking care of him.",
    by: "abeer alissa",
    imgSrc: "/images/logo.png",
  },
  {
    tempId: 4,
    testimonial: "اجمل عياده ازورها بالرياض  نظافه وترتيب ورفق بالأليف  افضل شيء بالعياده الريسبشن البتول بشوشه و متعاونه يعطيها العافيه 🌼🌼 …",
    by: "N strong",
    imgSrc: "/images/logo.png",
  },
  {
    tempId: 5,
    testimonial:
      "My cat had a fight with some neighbor cats and I brought her for a check up. The staff was extremely friendly and professional.",
    by: "Abdullah Alshaikh",
    imgSrc: "/images/logo.png",
  },
  {
    tempId: 6,
    testimonial:
      "كل شي جميل صرااااحه و تعامل البتول اللي في الرسبشن راااائع 🤍🤍🤍🤍 …",
    by: "Sarah Alshehri",
    imgSrc: "/images/logo.png",
  },
  {
    tempId: 7,
    testimonial:
      "تعامل ممتاز واحترافي 👍👍شكرا لكم …",
    by: "N N",
    imgSrc: "/images/logo.png",
  },
  {
    tempId: 8,
    testimonial: "My cat had a fight with some neighbor cats and I brought her for a check up. The staff was extremely friendly and professional.",
    by: "Abdullah Alshaikh",
    imgSrc: "/images/logo.png",
  },
  {
    tempId: 9,
    testimonial: "خدمه ممتازه و سريعه",
    by: "faisal almazrou",
    imgSrc: "/images/logo.png",
  },
  {
    tempId: 10,
    testimonial:
      "مكان نظيف و احترافيين ومتعاونين 👍🏻 …",
    by: "Mishary Al Akeel",
    imgSrc: "/images/logo.png",
  },
  {
    tempId: 11,
    testimonial:
      "العيادة ممتازة وديت لهم كلبة ماكله شوكلاته وكانوا جدا رحومين وحريصين تاخذ العناية الكاملة الدكتورة الله يسعدها والطاقم كلهم👍🏻 …",
    by: "Bsma Farhan",
    imgSrc: "/images/logo.png",
  },
];