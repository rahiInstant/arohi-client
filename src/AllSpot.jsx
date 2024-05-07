import { BsCoin } from "react-icons/bs";
import { IoPeople } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { GiMountaintop } from "react-icons/gi";
import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const AllSpot = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <Helmet>
        <title>
          Arohi | All Spot
        </title>
      </Helmet>
      <div className="flex items-center flex-col gap-4 mx-5 mb-3 mt-14">
        <h1 className="text-center text-3xl md:text-4xl font-bold dark:text-slate-300">
          Choose Your <span className="text-orange-500">Best</span>
        </h1>
        <p className="text-center text-lg font-medium dark:text-slate-400">
          All the following spots we can offer you a comfortable trip.
        </p>
      </div>

      {/* card */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mx-5 md:mx-10">
        {/* card 01--- */}
        {data.map((item, id) => {
          return (
            <div key={id} className="border p-5 rounded-lg  ">
              <img className="w-full rounded-md" src={item.photo} alt="" />
              <h1 className="mt-4 text-[26px] font-semibold dark:text-orange-500">
                {item.spot}
              </h1>
              <hr className="mt-4" />
              <div className="mt-6 space-y-3 text-lg dark:text-slate-400">
                <div className="flex flex-col sm:flex-row md:flex-col justify-between space-y-3">
                  <div className="flex items-center text-lg  gap-1.5">
                    <BsCoin />
                    Average Cost{" "}
                    <span className="italic font-bold">{item.cost}$</span>
                  </div>
                  <div className="flex items-center text-lg  gap-1.5">
                    <IoPeople />
                    Total Visitor:{" "}
                    <span className="italic font-bold">{item.visitor}</span>
                    /year
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col justify-between space-y-3">
                  <div className="flex items-center text-lg  gap-1.5">
                    <IoTimeOutline className="font" />
                    Travel Time:{" "}
                    <span className="italic font-bold">{item.time}</span> Hour
                  </div>
                  <div className="flex items-center text-lg  gap-1.5">
                    <GiMountaintop />
                    Better Enjoy:{" "}
                    <span className="italic font-bold">{item.season}</span>
                    Season
                  </div>
                </div>
              </div>
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

export default AllSpot;
