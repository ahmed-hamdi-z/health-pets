import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 200;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const Carousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="w-full " ref={ref}>
      <div className=" overflow-hidden p-4">
          <div className=" flex items-center gap-2 z-10">
            <button
              className={`z-10 ml-2 absolute left-0 rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity cursor-pointer ${
                CAN_SHIFT_LEFT ? "" : "opacity-30"
              }`}
              disabled={!CAN_SHIFT_LEFT}
              onClick={shiftLeft}
            >
              <FiArrowLeft />
            </button>
            <motion.div
              animate={{
                x: offset,
              }}
              transition={{
                ease: "easeInOut",
              }}
              className="flex"
            >
              {posts.map((post) => {
                return <Post key={post.id} {...post} />;
              })}
            </motion.div>
            <button
              className={`absolute right-0 md:right-1/2 lg:right-5/11 rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity cursor-pointer ${
                CAN_SHIFT_RIGHT ? "" : "opacity-30"
              }`}
              disabled={!CAN_SHIFT_RIGHT}
              onClick={shiftRight}
            >
              <FiArrowRight />
            </button>
          </div>
      </div>
    </section>
  );
};

const Post = ({ imgUrl, title, description }: PostType) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <img
        src={imgUrl}
        className="mb-3 h-[200px] w-full rounded-lg object-cover"
        alt={`An image for a fake blog post titled ${title}`}
      />

      <p className="text-sm text-neutral-500">{description}</p>
    </div>
  );
};

export default Carousel;

type PostType = {
  id: number;
  imgUrl: string;
  author: string;
  title: string;
  description: string;
};

const posts: PostType[] = [
  {
    id: 1,
    imgUrl: "/images/cat.jpg",
    author: "John Anderson",
    title: "We built an AI chess bot with ChatGPT",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 2,
    imgUrl: "/images/cat.jpg",
    author: "Kyle Parsons",
    title: "How to grow your personal brand as a web designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 3,
    imgUrl: "/images/cat.jpg",
    author: "Andrea Bates",
    title: "Calm down, monoliths are totally fine",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 4,
    imgUrl: "/images/cat.jpg",
    author: "Jess Drum",
    title: "A quick guide to Framer Motion (for dummies)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 5,
    imgUrl: "/images/cat.jpg",
    author: "Phil White",
    title: "You probably don't need kubernetes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 6,
    imgUrl: "/images/cat.jpg",
    author: "Karen Peabody",
    title: "State of JavaScript in 2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 7,
    imgUrl: "/images/cat.jpg",
    author: "Dante Gordon",
    title: "What's new in Python?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
];
