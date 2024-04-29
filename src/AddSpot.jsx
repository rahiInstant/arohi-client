import { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AuthContext } from "./auth/AuthContext";

const AddSpot = () => {
  const { user } = useContext(AuthContext);
  function handleAddSpot(e) {
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
      userName: user.displayName,
      userEmail: user.email,
    };

    fetch("http://localhost:3600/spot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(spotInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        console.log(data);
      });
    console.log(spotInfo);
  }
  return (
    <div className="flex justify-center items-center my-16 lg:my-24">

      <div className="rounded-2xl lg:p-10  p-5 border-4 w-full sm:w-[500px] lg:w-[800px] mx-5">
      <div>
        <h1 className="text-center text-4xl font-bold mb-5">Add <span className="text-orange-600">Tourist</span> spot</h1>
        <hr className="mb-8"/>
      </div>
        <form
          onSubmit={handleAddSpot}
          className="  flex flex-col gap-4"
        >
          {/* part 01 */}
          {/* <div className="flex gap-5 flex-col sm:flex-row">
            <div className="relative h-fit    border rounded-md w-full">
              <select
                name="country"
                className=" py-4 px-5 text-lg appearance-none font-semibold rounded-lg outline-none w-full "
              >
                <option className="hidden" value="">
                  Country
                </option>
                <option value="bangladesh">Bangladesh</option>
                <option value="thailand">Thailand</option>
                <option value="indonesia">Indonesia</option>
                <option value="malaysia">Malaysia</option>
                <option value="vietnam">Vietnam</option>
                <option value="cambodia">Cambodia</option>
              </select>
              <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
                <IoIosArrowDown className="text-2xl" />
              </div>
            </div>
            <div className="relative h-fit  border rounded-md w-full">
              <select
                name="spot"
                className=" py-4 px-5 text-lg appearance-none font-semibold rounded-lg outline-none w-full"
              >
                <option className="hidden" value="">
                  Spot
                </option>
                <option value="bangladesh">Sundarban</option>
                <option value="thailand">Cox’s Bazar</option>
                <option value="indonesia">Rangamati</option>
                <option value="malaysia">Bandarban</option>
                <option value="vietnam">Saint Martin’s Island</option>
              </select>
              <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
                <IoIosArrowDown className="text-2xl" />
              </div>
            </div>
          </div> */}
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
                placeholder="Thailand"
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
                placeholder="Pataia"
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
                placeholder="https://photourl.com"

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
                placeholder="sub-location,main-location"
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
                placeholder="100000"
              />
            </div>
            <div className="relative h-fit  border rounded-md w-full">
              <select
                name="season"
                required
                className=" py-4 px-5 text-lg appearance-none font-semibold rounded-lg outline-none w-full"
              >
                <option className="hidden" value="">
                  -- Season --
                </option>
                <option value="bangladesh">Summer</option>
                <option value="thailand">Winter</option>
                <option value="indonesia">Rainy</option>
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
                placeholder="12"
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
                placeholder="10000"
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
            placeholder="write something about this spot withing 150-250 words."
          ></textarea>
          <button
            className="text-xl font-semibold block text-white p-3 bg-[#cacaca] mt-7 rounded-md w-full  bg-gradient-to-r from-[#791d91]   via-[#cc0579]  to-[#cc2305] "
            type="submit"
          >
            Add Spot
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSpot;