import { IoIosArrowRoundForward } from "react-icons/io";
import PropTypes from 'prop-types';
import { motion } from "motion/react"

const Card = ({ width, start, para, hover="false" }) => {
  return (
    <motion.div whileHover={{backgroundColor: hover==="true" && "#7443ff", padding:"25px"}} className={`bg-zinc-800 p-5 rounded-xl  ${width} min-h-[30rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>One Heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">Whatever heading.</h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">Start a project</h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">Contact Us</button>
          </>
        ) }
        {para && (
            <p className="text-sm text-zinc-500 font-medium ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,sed. At, quidem.</p>
        )}
      </div>
    </motion.div>
  );
};
Card.propTypes = {
  width: PropTypes.string.isRequired,
  start: PropTypes.bool,
  para: PropTypes.bool,
  hover: PropTypes.string
};

export default Card;
