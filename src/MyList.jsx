import { useContext, useEffect, useState } from "react";
import { BsCoin } from "react-icons/bs";
import { GiMountaintop } from "react-icons/gi";
import { IoPeople, IoTimeOutline } from "react-icons/io5";
import { AuthContext } from "./auth/AuthContext";
const MyList = () => {
  const [card, setCard] = useState([]);
  const { user } = useContext(AuthContext);
  //   const item = {
  //     photo: "/card_01.jpg",
  //     spot: "Rankain Roamnce Spot",
  //     cost: 15563,
  //     visitor: 2500,
  //     time: 12,
  //     season: "winter",
  //   };
  useEffect(() => {
    fetch(`http://localhost:3600/spot/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
      });
  }, [user]);
  console.log(card);
  return (
    <div>
      <div className="flex items-center flex-col gap-4 mx-5 mb-3 mt-14">
        <h1 className="text-center text-4xl font-bold ">
          Added by <span className="text-orange-500">Me</span>
        </h1>
        <p className="text-center text-lg font-medium ">
          Hey, {user?.displayName}, This spot added by you.
        </p>
      </div>

      {/* card */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mx-5 md:mx-10">
        {/* card 01--- */}
        {card.map((item, id) => {
          return (
            <div key={id} className="border p-5 rounded-lg  ">
              <img className="w-full rounded-md" src={item.photo} alt="" />
              <h1 className="mt-4 text-[26px] font-semibold">{item.spot}</h1>
              <hr className="mt-4" />
              <div className="mt-6 space-y-3 text-lg">
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
              <button className="text-xl font-semibold block text-white p-3  mt-7 rounded-md w-full bg-[#525152]">
                View Details
              </button>
            </div>
          );
        })}
        <div className="border p-5 rounded-lg  ">
          <img className="w-full rounded-md" src={item.photo} alt="" />
          <h1 className="mt-4 text-[26px] font-semibold">{item.spot}</h1>
          <hr className="mt-4" />
          <div className="mt-6 space-y-3 text-lg">
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
          <button className="text-xl font-semibold block text-white p-3  mt-7 rounded-md w-full bg-[#525152]">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyList;
