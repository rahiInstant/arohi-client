import { useContext, useEffect, useState } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { GrDocumentUpdate } from "react-icons/gr";
import { AuthContext } from "./auth/AuthContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
import "./MyList.css";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
const MyList = () => {
  const [card, setCard] = useState([]);
  const [item, setItem] = useState([]);
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
  // console.log(card);
  function handleDeleteBtn(id) {
    Swal.fire({
      title: "Ary sure to delete this spot?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, I want to Delete.",
      denyButtonText: "Cancel",
    })
      .then((result) => {
        console.log(result);
        if (result.isConfirmed) {
          return fetch(`http://localhost:3600/spot/${id}`, {
            method: "DELETE",
          });
        } else if (result.isDismissed) {
          return new Promise((res, rej) => "");
        }
      })
      .then((res) => res.json())
      .then((Data) => {
        console.log(Data);
        const Actual = card.filter((item) => item._id !== Data.id);
        setCard(Actual);
        Swal.fire({
          title: "Deleted!",
          text: "Spot deleted successfully!!",
          icon: "success",
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "spot can't deleted",
          icon: "error",
        });
      });
  }
  // function updateServerData(e) {
  //   e.preventDefault();
  //   const form = e.target;
  //   const country = form.country.value;
  //   const spot = form.spot.value;
  //   const photo = form.photo.value;
  //   const location = form.location.value;
  //   const cost = form.cost.value;
  //   const season = form.season.value;
  //   const time = form.time.value;
  //   const visitor = form.visitor.value;
  //   const comment = form.comment.value;
  //   const spotInfo = {
  //     country,
  //     spot,
  //     time: parseInt(time),
  //     visitor: parseInt(visitor),
  //     photo,
  //     location,
  //     cost: parseInt(cost),
  //     season,
  //     comment,
  //   };
  //   // fetch(`http://localhost:3600/card/${id}`)
  //   console.log(id)
  //   console.log(spotInfo);
  // }

  // function handleUpdateBtn(id) {
  //   // console.log(id);
  //   fetch(`http://localhost:3600/card/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       MySwal.fire({
  //         showConfirmButton: false,
  //         width: "36rem",
  //         html: (
  //           <div className="relative">
  //             <div className="  h-8 ">
  //             </div>
  //             <RxCrossCircled onClick={() => Swal.close()} className="absolute right-0 top-0 cursor-pointer font-bold text-[30px] text-red-600"/>
  //             <form onSubmit={updateServerData} className=" flex flex-col gap-4">
  //               {/* 01 */}
  //               <div className="flex gap-5 w-full flex-col sm:flex-row">
  //                 <div className="w-full">
  //                   <label
  //                     className="block text-xl text-left font-semibold"
  //                     htmlFor="country"
  //                   >
  //                     Country
  //                   </label>
  //                   <input
  //                     required
  //                     className="py-4 px-5 w-full mt-2 text-lg rounded-lg outline-none bg-slate-200"
  //                     type="text"
  //                     name="country"
  //                     id="country"
  //                     defaultValue={data.country}
  //                   />
  //                 </div>
  //                 <div className="w-full">
  //                   <label
  //                     className="block text-xl text-left font-semibold"
  //                     htmlFor="spot"
  //                   >
  //                     Spot
  //                   </label>

  //                   <input
  //                     required
  //                     id="spot"
  //                     name="spot"
  //                     className="py-4 px-5 mt-2 w-full text-lg rounded-lg outline-none bg-slate-200"
  //                     type="text"
  //                     defaultValue={data.spot}
  //                   />
  //                 </div>
  //               </div>
  //               {/* 02 */}
  //               <div className="flex gap-5 w-full flex-col sm:flex-row">
  //                 <div className="w-full">
  //                   <label
  //                     className="block text-xl text-left font-semibold"
  //                     htmlFor="photo"
  //                   >
  //                     Photo URL
  //                   </label>
  //                   <input
  //                     required
  //                     className="py-4 px-5 w-full mt-2 text-lg rounded-lg outline-none bg-slate-200"
  //                     type="url"
  //                     name="photo"
  //                     id="photo"
  //                     defaultValue={data.photo}
  //                   />
  //                 </div>
  //                 <div className="w-full">
  //                   <label
  //                     className="block text-xl text-left font-semibold"
  //                     htmlFor="location"
  //                   >
  //                     Location
  //                   </label>

  //                   <input
  //                     required
  //                     id="location"
  //                     name="location"
  //                     className="py-4 px-5 mt-2 w-full text-lg rounded-lg outline-none bg-slate-200"
  //                     type="text"
  //                     defaultValue={data.location}
  //                   />
  //                 </div>
  //               </div>
  //               {/* 03 */}
  //               <div className="flex gap-5 items-end flex-col sm:flex-row">
  //                 <div className="w-full gap-5">
  //                   <label
  //                     className="block text-xl text-left font-semibold"
  //                     htmlFor="cost"
  //                   >
  //                     Average Cost
  //                   </label>
  //                   <input
  //                     required
  //                     className="py-4 px-5 w-full mt-2 text-lg rounded-lg outline-none bg-slate-200"
  //                     type="number"
  //                     name="cost"
  //                     id="cost"
  //                     defaultValue={data.cost}
  //                   />
  //                 </div>
  //                 <div className="relative h-fit  border rounded-md w-full">
  //                   <select
  //                     name="season"
  //                     required
  //                     defaultValue={data.season}
  //                     className=" py-4 px-5 text-lg appearance-none font-semibold rounded-lg outline-none w-full"
  //                   >
  //                     <option className="hidden" value="">
  //                       -- Season --
  //                     </option>
  //                     <option value="Summer">Summer</option>
  //                     <option value="Winter">Winter</option>
  //                     <option value="Rainy">Rainy</option>
  //                   </select>
  //                   <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
  //                     <IoIosArrowDown className="text-2xl" />
  //                   </div>
  //                 </div>
  //               </div>
  //               {/* part 04 */}
  //               <div className="flex gap-5 w-full flex-col sm:flex-row">
  //                 <div className="w-full">
  //                   <label
  //                     className="block text-xl text-left font-semibold"
  //                     htmlFor="time"
  //                   >
  //                     Travel Time
  //                   </label>
  //                   <input
  //                     required
  //                     className="py-4 px-5 w-full mt-2 text-lg rounded-lg outline-none bg-slate-200"
  //                     type="number"
  //                     name="time"
  //                     id="time"
  //                     defaultValue={data.time}
  //                   />
  //                 </div>
  //                 <div className="w-full">
  //                   <label
  //                     className="block text-xl text-left font-semibold"
  //                     htmlFor="visitor"
  //                   >
  //                     Total Visitor per Year
  //                   </label>

  //                   <input
  //                     required
  //                     name="visitor"
  //                     id="visitor"
  //                     className="py-4 px-5 mt-2 w-full text-lg rounded-lg outline-none bg-slate-200"
  //                     type="number"
  //                     defaultValue={data.visitor}
  //                   />
  //                 </div>
  //               </div>
  //               <textarea
  //                 required
  //                 className="outline-none border rounded-md py-4 px-5"
  //                 name="comment"
  //                 id=""
  //                 cols="30"
  //                 rows="5"
  //                 maxLength={250}
  //                 minLength={150}
  //                 defaultValue={data.comment}
  //               ></textarea>
  //               <button
  //                 onClick={() => Swal.close()}
  //                 className="text-xl font-semibold block text-white p-3 bg-[#cacaca] mt-7 rounded-md w-full  bg-gradient-to-r from-[#791d91]   via-[#cc0579]  to-[#cc2305] "
  //                 type="submit"
  //               >
  //                 Add Spot
  //               </button>

  //             </form>
  //           </div>
  //         ),
  //       });
  //     });
  // }
  return (
    <div>
      <div className="flex items-center flex-col gap-4 mx-5 mb-3 mt-14">
        <h1 className="text-center text-4xl font-bold ">
          Added by <span className="text-orange-500">You</span>
        </h1>
        <p className="text-center text-lg font-medium ">
          Hey, {user?.displayName}, This spot added by you.
        </p>
      </div>

      <div className="mt-10 overflow-x-auto  gap-5 mx-5 md:mx-10">
        <table className=" w-full table-auto">
          <thead>
            <tr>
              <th>SN.</th>
              <th>Country</th>
              <th>Spot</th>
              <th>Location</th>
              <th>Average Cost</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {card.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td className="text-center ">{idx + 1}</td>
                  <td className="text-center">{item.country}</td>
                  <td>{item.spot}</td>
                  <td>{item.location}</td>
                  <td className="text-center">{item.cost}</td>
                  <td>
                    <Link to={`/update/${item._id}`}>
                      <div className="p-2 cursor-pointer bg-green-700 rounded-md w-fit text-white text-xl mx-auto">
                        <GrDocumentUpdate />
                      </div>
                    </Link>
                    {/* <div
                      onClick={() => handleUpdateBtn(item._id)}
                      className="p-2 cursor-pointer bg-green-700 rounded-md w-fit text-white text-xl mx-auto"
                    >
                      <GrDocumentUpdate />
                    </div> */}
                  </td>

                  <td>
                    <div
                      onClick={() => handleDeleteBtn(item._id)}
                      className="p-2 cursor-pointer bg-red-700 rounded-md w-fit text-white text-xl mx-auto"
                    >
                      <RxCrossCircled />
                    </div>
                  </td>
                </tr>
              );
            })}
            {/* row 1 */}
            {/* <tr>
              <td className="text-center ">1</td>
              <td className="text-center">Thiland</td>
              <td>Pataya Relaxation Center</td>
              <td>Patya Thiland</td>
              <td>
                <div className="p-2 cursor-pointer bg-green-700 rounded-md w-fit text-white text-xl mx-auto">
                  <GrDocumentUpdate />
                </div>
              </td>

              <td>
                <div className="p-2 cursor-pointer bg-red-700 rounded-md w-fit text-white text-xl mx-auto">
                  <RxCrossCircled />
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
