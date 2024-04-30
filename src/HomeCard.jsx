import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const HomeCard = ({ Data }) => {
  return (
    <div>
      <div className="flex items-center flex-col gap-4 mx-5 mb-3 mt-10 lg:mt-24">
        <h1 className="text-center text-4xl font-bold ">
          <span className="text-orange-500">Best Spot</span> we Offer
        </h1>
        <p className="text-center text-lg font-medium ">
          All the following spots we can offer you a comfortable trip.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mx-5 md:mx-10">
        {Data.slice(0,6).map((item, idx) => {
          return (
            <div key={idx} className="border p-5 rounded-lg  ">
              <img className="w-full rounded-md" src={item.photo} alt="" />
              <h1 className="mt-4 text-[22px] font-semibold">
                {item.spot}
              </h1>
              <hr className="mt-4" />
              <Link to={`/detail/${item._id}`}>
              <button className="text-xl font-semibold block text-white p-3  mt-7 rounded-md w-full bg-[#525152]">
                View Details
              </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

HomeCard.propTypes = {
  Data: PropTypes.array.isRequired,
};
export default HomeCard;
