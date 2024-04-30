import { Helmet } from "react-helmet-async";
import { IoLocationSharp } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";
import { IoTimeOutline } from "react-icons/io5";
import { BsCoin } from "react-icons/bs";
import { IoPeople } from "react-icons/io5";
import { GiMountaintop } from "react-icons/gi";
import { data } from "autoprefixer";

const Detail = () => {
  const Data = useLoaderData();
  console.log(Data);
  function handleScheduleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className=" px-4 w-full  flex flex-col lg:flex-row mt-12 duration-300">
      <Helmet>
        <title>Arohi | Details Page</title>
      </Helmet>
      <div className="w-full lg:w-[70%] p-4 flex flex-col ">

            <h1 className="text-[28px] lg:text-4xl  font-bold">{Data.spot}</h1>

        <div className="mt-5">
          <img
            className="rounded-lg h-[500px] w-full"
            src={Data.photo}
            alt=""
          />
        </div>
        <div className=" border-2 mt-5 p-6 rounded-lg  space-y-3  w-full  ">
          <div className="flex flex-col sm:flex-row  sm:justify-between gap-5 text-xl font-bold">
            <h1 className=" flex gap-2 items-center ">{Data.country}</h1>
            <h1 className=" flex items-center gap-2 ">
              <IoTimeOutline /> Travel Time: {Data.time} Hour
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row  sm:justify-between gap-5 ">
            <h1 className="text-lg flex gap-2 items-center ">
              <IoLocationSharp />
              {Data.location}
            </h1>
            <h1 className="text-lg flex items-center gap-2 ">
              <BsCoin /> Average Cost: {Data.time}$
            </h1>
          </div>
          <div className="flex flex-col md:flex-row  md:justify-between gap-5 ">
            <h1 className="text-lg flex gap-2 items-center ">
              <IoPeople/>
              Total Visitor: {Data.visitor}/year
            </h1>
            <h1 className="text-lg flex items-center gap-2 ">
              <GiMountaintop /> Better Enjoy: {Data.season} season
            </h1>
          </div>
          <p className="mt-6 text-justify">
            {Data.comment}
          </p>
        </div>
      </div>
      <div className="w-full lg:w-[30%] p-4 ">
        <div className="flex gap-3 justify-center w-full ">
          <button className="px-2 py-1 border rounded-md w-full hover:bg-slate-100 duration-200">
            Share
          </button>
          <button className="px-2 py-1 border rounded-md w-full  hover:bg-slate-100 duration-200">
            Favorite
          </button>
          <button className="px-2 py-1 border rounded-md w-full  hover:bg-slate-100 duration-200">
            Print
          </button>
        </div>
        <h1 className="text-xl font-semibold uppercase text-center mt-5 mb-2">
          Booking a tour
        </h1>
        <p className="mb-5 text-center">
          Booking a tour for unlimited enjoyment.
        </p>
        <hr />
        <form onSubmit={handleScheduleSubmit}>
          <label className="text-lg font-medium mt-4 block" htmlFor="time">
            Select a time-frame
          </label>
          <select
            className="border border-gray-600 rounded-[4px] w-full  h-10 mt-3"
            name="time"
            id="time"
            required
          >
            <option className="hidden" value="">
              -- select time --
            </option>
            <option value="11.00 am to 2.00 pm">9.00 am to 12.00 pm</option>
            <option value="11.00 am to 2.00 pm">11.00 am to 2.00 pm</option>
            <option value="11.00 am to 2.00 pm">3.00 pm to 7.00 pm</option>
          </select>
          <div className="flex gap-5 w-full mt-4">
            <label
              className="p-2 rounded-md text-center border w-full block has-[:checked]:border-blue-600 cursor-pointer"
              htmlFor="person"
            >
              <input
                type="radio"
                name="visit"
                id="cottage"
                value="cottage"
                className="opacity-0"
                required
              />
              Hotel
            </label>
            <label
              className="p-2 w-full text-center rounded-md border block has-[:checked]:border-blue-600 cursor-pointer"
              htmlFor="video"
            >
              <input
                required
                type="radio"
                name="visit"
                id="cottage"
                value="cottage"
                className="opacity-0"
              />
              Cottage
            </label>
          </div>

          <input
            className="w-full h-10 p-3 bg-slate-100 outline-none rounded-md mt-4"
            placeholder="Your Name"
            name="name"
            type="text"
            required
          />
          <input
            className="w-full h-10 p-3 bg-slate-100 outline-none rounded-md mt-4"
            placeholder="your@mail.com"
            name="mail"
            type="text"
          />
          <input
            className="w-full h-10 p-3 bg-slate-100 outline-none rounded-md mt-4"
            placeholder="+254545545"
            name="phone"
            type="text"
            required
          />
          <textarea
            className="w-full p-3 h-full bg-slate-100 outline-none rounded-lg mt-4"
            name="comment"
            id=""
            cols="30"
            rows="10"
            placeholder="Write about your opinion here"
          ></textarea>
          <button
            className="w-full border border-blue-600 text-blue-600 mt-4 p-3 rounded-md font-medium text-lg hover:bg-blue-600 hover:text-white duration-200"
            type="submit"
          >
            Booking Schedule
          </button>
        </form>
      </div>
    </div>
  );
};

export default Detail;
