import PropTypes from "prop-types";

const Stripe = ({ val }) => { 
  return (
    <div className="w-[16.66%] px-4 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-600 flex justify-between items-center">
       <img src={val.url} alt="" />
       <span className="font-semibold">{val.number}</span>
    </div>
  );
};

Stripe.propTypes = {
  val: PropTypes.shape({
    url: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }).isRequired,
};

export default Stripe;
