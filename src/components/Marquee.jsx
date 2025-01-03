import PropTypes from 'prop-types';
import { motion } from "motion/react"

const Marquee = ({ imagesurls, direction }) => {
    return (
        <div className="flex w-full overflow-hidden">
            <motion.div initial={{x: direction === "left" ? "0" : "-100%" }} animate={{x: direction ==="left" ? "-100%" : "0"}} transition={{repeat:Infinity, ease: "linear", duration:10}} className="flex flex-shrink-0 gap-20 py-10 pr-40">
                {imagesurls.map((url, index) => (
                   <img key={index} src={url} className="filter invert brightness-100 h-8 flex-shrink-0"/>))}
            </motion.div>
            <motion.div initial={{x: direction === "left" ? "0" : "-100%" }} animate={{x: direction ==="left" ? "-100%" : "0"}} transition={{repeat:Infinity, ease: "linear", duration:10}} className="flex flex-shrink-0 gap-20 py-10 pr-40">
                {imagesurls.map((url, index) => (
                    <img key={index} src={url} className="filter invert brightness-100 h-8 flex-shrink-0"/>))}
            </motion.div>
        </div>
    );
};

Marquee.propTypes = {
    imagesurls: PropTypes.arrayOf(PropTypes.string).isRequired,
    direction: PropTypes.string.isRequired,
};

export default Marquee;