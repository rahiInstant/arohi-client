import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { BsEmojiSunglasses } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UpdateSpot = () => {
  const data = useLoaderData();
  const param = useParams();
  const navigate = useNavigate();
  const errorMsg = (msg) => toast.error(msg);
  const successMsg = (msg) => toast.success(msg);
  function handleUpdateSpot(e) {
    e.preventDefault();
    const form = e.target;
    const country = form.country.value;
    const spot = form.spot.value;
    const photo = form.photo.value;
    const location = form.location.value;
    const cost = form.cost.value;
    const season = form.season.value;
    const time = form.time.value;
    const visitor = form.visitor.value;
    const comment = form.comment.value;
    const spotInfo = {
      country,
      spot,
      time: parseInt(time),
      visitor: parseInt(visitor),
      photo,
      location,
      cost: parseInt(cost),
      season,
      comment,
    };

    fetch(`https://easy-tour.vercel.app/spot/${param.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(spotInfo),
    })
      .then((res) => res.json())
      .then(() => {
        successMsg("Update spot successfully.");
        navigate("/my-list");
      })
      .catch(() => {
        errorMsg("Unexpected error!!");
      });
    // console.log(spotInfo);
  }
  return (
    <div className="flex justify-center items-center my-16 lg:my-24 select-none px-4">
      <Helmet>
        <title>Arohi | Update Spot Data</title>
      </Helmet>
      <div className="rounded-2xl mx-5 lg:p-10 flex flex-col  p-5 border-4 w-full sm:w-[500px] lg:w-[800px]">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-3xl md:text-4xl font-bold mb-3 dark:text-slate-300">
            <span className="text-orange-600">Update</span> spot
          </h1>
          <p className="flex items-center text-lg gap-2 mb-5 dark:text-slate-400">
            Update Carefully!! <BsEmojiSunglasses className="text-yellow-600" />{" "}
          </p>
        </div>
        <hr className="mb-8" />
        <form onSubmit={handleUpdateSpot} className="  flex flex-col gap-4">
          {/* part 01 */}

          <div className="flex gap-5 w-full flex-col sm:flex-row">
            <div className="w-full">
              <label className="block text-xl font-semibold dark:text-slate-400" htmlFor="country">
                Country
              </label>
              <input
                required
                className="py-4 px-5 w-full mt-2 text-lg rounded-lg outline-none bg-slate-200"
                type="text"
                name="country"
                id="country"
                defaultValue={data.country}
              />
            </div>
            <div className="w-full">
              <label className="block text-xl font-semibold dark:text-slate-400" htmlFor="spot">
                Spot
              </label>

              <input
                required
                id="spot"
                name="spot"
                className="py-4 px-5 mt-2 w-full text-lg rounded-lg outline-none bg-slate-200"
                defaultValue={data.spot}
                type="text"
              />
            </div>
          </div>
          {/* Part 02 */}
          <div className="flex gap-5 w-full flex-col sm:flex-row">
            <div className="w-full">
              <label className="block text-xl font-semibold dark:text-slate-400" htmlFor="photo">
                Photo URL
              </label>
              <input
                required
                className="py-4 px-5 w-full mt-2 text-lg rounded-lg outline-none bg-slate-200"
                type="url"
                name="photo"
                id="photo"
                defaultValue={data.photo}
              />
            </div>
            <div className="w-full">
              <label className="block text-xl font-semibold dark:text-slate-400" htmlFor="location">
                Location
              </label>

              <input
                required
                id="location"
                name="location"
                className="py-4 px-5 mt-2 w-full text-lg rounded-lg outline-none bg-slate-200"
                type="text"
                defaultValue={data.location}
              />
            </div>
          </div>
          {/* part 03 */}
          <div className="flex gap-5 items-end flex-col sm:flex-row">
            <div className="w-full gap-5">
              <label className="block text-xl font-semibold dark:text-slate-400" htmlFor="cost">
                Average Cost
              </label>
              <input
                required
                className="py-4 px-5 w-full mt-2 text-lg rounded-lg outline-none bg-slate-200"
                type="number"
                name="cost"
                id="cost"
                defaultValue={data.cost}
              />
            </div>
            <div className="relative h-fit  border rounded-md w-full">
              <select
                name="season"
                required
                defaultValue={data.season}
                className=" py-4 px-5 text-lg appearance-none font-semibold rounded-lg outline-none w-full"
              >
                <option className="hidden" value="">
                  -- Season --
                </option>
                <option value="Summer">Summer</option>
                <option value="Winter">Winter</option>
                <option value="Rainy">Rainy</option>
              </select>
              <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
                <IoIosArrowDown className="text-2xl" />
              </div>
            </div>
          </div>
          {/* part 04 */}
          <div className="flex gap-5 w-full flex-col sm:flex-row">
            <div className="w-full">
              <label className="block text-xl dark:text-slate-400 font-semibold" htmlFor="time">
                Travel Time
              </label>
              <input
                required
                className="py-4 px-5 w-full mt-2 text-lg rounded-lg outline-none bg-slate-200"
                type="number"
                name="time"
                id="time"
                defaultValue={data.time}
              />
            </div>
            <div className="w-full">
              <label className="block text-xl dark:text-slate-400 font-semibold" htmlFor="visitor">
                Total Visitor per Year
              </label>

              <input
                required
                name="visitor"
                id="visitor"
                className="py-4 px-5 mt-2 w-full text-lg rounded-lg outline-none bg-slate-200"
                type="number"
                defaultValue={data.cost}
              />
            </div>
          </div>
          <textarea
            required
            className="outline-none border rounded-md py-4 px-5"
            name="comment"
            id=""
            cols="30"
            rows="5"
            maxLength={250}
            minLength={150}
            defaultValue={data.comment}
          ></textarea>
          <button
            className="text-xl font-semibold block text-white p-3 bg-[#cacaca] mt-7 rounded-md w-full  bg-gradient-to-r from-[#791d91]   via-[#cc0579]  to-[#cc2305] "
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateSpot;
