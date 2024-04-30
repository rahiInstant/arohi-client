import Marquee from "react-fast-marquee";
const Partner = () => {
  return (
    <div>
      <div className="flex items-center flex-col gap-4 mx-5 mb-3 mt-10 lg:mt-24">
        <h1 className="text-center text-4xl font-bold ">
          Our Valuable <span className="text-orange-500">Partner</span>
        </h1>
        <p className="text-center text-lg font-medium ">
          Such company who's increase the quality of our service.
        </p>
      </div>
      <div>
        <Marquee
          pauseOnHover={true}
          style={{
            marginTop: "40px",
          }}
        >
          <div className="p-3 mr-3 border rounded-md flex items-center flex-col">
            <img className="h-44 w-44" src="/part_01.jpg" alt="" />
            <h1 className="text-xl italic font-bold">Hotel Partner</h1>
          </div>
          <div className="p-3 mr-3 border rounded-md flex items-center flex-col">
            <img className="h-44 w-44" src="/part_02.jpg" alt="" />
            <h1 className="text-xl italic font-bold">Technical Partner</h1>
          </div>
          <div className="p-3 mr-3 border rounded-md flex items-center flex-col">
            <img className="h-44 w-44" src="/part_03.png" alt="" />
            <h1 className="text-xl italic font-bold">TV Partner</h1>
          </div>
          <div className="p-3 mr-3 border rounded-md flex items-center flex-col">
            <img className="h-44 w-44" src="/part_04.jpg" alt="" />
            <h1 className="text-xl italic font-bold">Airplane Partner</h1>
          </div>
          <div className="p-3 mr-3 border rounded-md flex items-center flex-col">
            <img className="h-44 w-44" src="/part_05.jpeg" alt="" />
            <h1 className="text-xl italic font-bold">Payment Partner</h1>
          </div>
          <div className="p-3 mr-3 border rounded-md flex items-center flex-col">
            <img className="h-44 w-44" src="/part_06.jpg" alt="" />
            <h1 className="text-xl italic font-bold">Server Partner</h1>
          </div>
        </Marquee>
        {/* <div className="p-3 border rounded-md flex items-center flex-col">
        <img src="/part_01.jpg" alt="" />
        <h1 className="text-xl italic font-bold">Hotel Partner</h1>
      </div> */}
      </div>
    </div>
  );
};

export default Partner;
