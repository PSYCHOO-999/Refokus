import { IoIosReturnRight } from "react-icons/io";
import PropTypes from 'prop-types';

const Button = ({title = "Get Started"}) => {
  return (
    <div className="w-fit px-4 py-2 gap-3 bg-zinc-100 text-black rounded-full flex items-center justify-end border-b-[1px] border-zinc-700">
        <span className="text-sm font-medium ">{title}</span>
        <IoIosReturnRight/>
    </div>
  )
}
Button.propTypes = {
  title: PropTypes.string
};

export default Button