import "./Gallery.css";

const Gallery = () => {
  return (
    <div>
      <div className="flex items-center flex-col gap-4 mx-5 mb-3 mt-10 lg:mt-24">
        <h1 className="text-center text-4xl font-bold dark:text-slate-300">
          Our <span className="text-orange-500">Photo</span> Gallery
        </h1>
        <p className="text-center text-lg font-medium dark:text-slate-400">
          Our best photo collection of some special spot.
        </p>
      </div>
      <div className=" grid grid-cols-2  lg:grid-cols-4   lg:grid-rows-[repeat(3,250px)] gap-3 mx-5  mt-10">
        <div className=" md:h-[350px] lg:h-auto">
          <img className="h-full w-full rounded-md" src="/card_08.jpg" alt="" />
        </div>
        <div className="col-span-1 lg:col-span-2  md:h-[350px] lg:h-auto">
          <img className="h-full w-full rounded-md" src="/card_04.jpg" alt="" />
        </div>
        <div className="row-span-1 lg:row-span-2 md:h-[350px] lg:h-auto">
          <img className="h-full w-full rounded-md" src="/card_07.jpg" alt="" />
        </div>
        <div className="row-span-1 lg:row-span-2  md:h-[350px] lg:h-auto">
          <img className="h-full w-full rounded-md" src="/card_06.jpg" alt="" />
        </div>
        <div className=" md:h-[350px] lg:h-auto">
          <img className="h-full w-full rounded-md" src="/card_10.jpg" alt="" />
        </div>
        <div className="  md:h-[350px] lg:h-auto">
          <img className="h-full w-full rounded-md" src="/card_13.jpg" alt="" />
        </div>
        <div className=" md:h-[350px] lg:h-auto">
          <img className="h-full w-full rounded-md" src="/card_14.jpg" alt="" />
        </div>
        <div className="col-span-1 lg:col-span-2  md:h-[350px] lg:h-auto">
          <img
            className="h-full w-full rounded-md"
            src="/slide_02.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
