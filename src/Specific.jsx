import { BsCoin } from "react-icons/bs";
import { GiMountaintop } from "react-icons/gi";
import { IoPeople, IoTimeOutline } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";

const Specific = () => {
  const data = useLoaderData();
//   console.log(data);
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mx-5 md:mx-10">
      {data.map((item, idx) => {
        return (
          <div key={idx} className="border p-5 rounded-lg  ">
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
            <p className="text-justify mt-4 dark:text-slate-400">{item.comment}</p>
            <Link to={`/detail/${item._id}`}>
              <button className="text-xl font-semibold block text-white p-3  mt-7 rounded-md w-full bg-[#525152]">
                View Details
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Specific;
