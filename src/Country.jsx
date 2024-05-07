import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Country = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch("https://easy-tour.vercel.app/country")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  // console.log(country);
  return (
    <div>
      <div className="flex items-center flex-col gap-4 mx-5 mb-3 mt-10 lg:mt-24">
        <h1 className="text-center text-3xl md:text-4xl font-bold dark:text-slate-300">
          <span className="text-orange-500 ">Countries</span> we serve
        </h1>
        <p className="text-center text-lg font-medium dark:text-slate-400">
          All the following countries we can offer you a comfortable trip.
        </p>
      </div>
      <div className="mt-10 grid mx-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {country.map((item, idx) => {
          return (
            <Link key={idx} to={`/specific/${item.country}`}>
              <div className="border p-5 rounded-lg">
                <img
                  className="h-[180px] rounded-lg w-full"
                  src={item.img}
                  alt=""
                />
                <h1 className="text-2xl font-black italic mt-3 dark:text-slate-400">
                  {item.country}
                </h1>
                <p className="mt-2 text-justify dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </Link>
          );
        })}
        {/* <div className="border p-3 rounded-lg">
          <img
            className="h-[180px] rounded-lg w-full"
            src="/card_01.jpg"
            alt=""
          />
          <h1 className="text-2xl font-black italic mt-3 dark:text-slate-400">
            Bangladesh
          </h1>
          <p className="mt-2 text-justify dark:text-slate-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
            ipsam!
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Country;
