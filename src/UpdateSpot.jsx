import { BsEmojiSunglasses } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UpdateSpot = () => {
  const data = useLoaderData();
  const param = useParams();
  const navigate = useNavigate();
  console.log(param);
  console.log(data);
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

    fetch(`http://localhost:3600/spot/${param.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(spotInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        navigate("/my-list");
      });
    console.log(spotInfo);
  }
  return (
    <div className="flex justify-center items-center my-16 lg:my-24">
      <div className="rounded-2xl lg:p-10  p-5 border-4 w-full sm:w-[500px] lg:w-[800px] mx-5">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-4xl font-bold mb-3">
            <span className="text-orange-600">Update</span> spot
          </h1>
          <p className="flex items-center text-lg gap-2 mb-5">
            Update Carefully!! <BsEmojiSunglasses className="text-yellow-600" />{" "}
          </p>
        </div>
        <hr className="mb-8" />
        <form onSubmit={handleUpdateSpot} className="  flex flex-col gap-4">
          {/* part 01 */}

          <div className="flex gap-5 w-full flex-col sm:flex-row">
            <div className="w-full">
              <label className="block text-xl font-semibold" htmlFor="country">
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
              <label className="block text-xl font-semibold" htmlFor="spot">
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
              <label className="block text-xl font-semibold" htmlFor="photo">
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
              <label className="block text-xl font-semibold" htmlFor="location">
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
              <label className="block text-xl font-semibold" htmlFor="cost">
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
              <label className="block text-xl font-semibold" htmlFor="time">
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
              <label className="block text-xl font-semibold" htmlFor="visitor">
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
