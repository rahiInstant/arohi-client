import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaLocationDot } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className="mx-4 -z-50 ">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        // autoplay={{
        //   delay: 2000,
        // }}
      >
        <SwiperSlide>
          <div
            id="ban"
            className={`h-[500px] text-green-900 rounded-lg relative bg-[url('/slide_01.jpg')] bg-cover bg-center font-Poppins`}
          >
            <div className="absolute right-0 bottom-0 mr-10 mb-10">
              <h1 className="text-4xl font-bold">Saint Martin’s Island</h1>
              <h2 className="flex items-center gap-2 mt-3 text-xl font-medium ">
                <FaLocationDot /> Chittagong, Bangladesh
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="ban"
            className={`h-[500px] text-white rounded-lg relative bg-[url('/slide_02.jpg')] bg-cover bg-center`}
          >
            <div className="absolute right-0 bottom-0 mr-10 mb-10">
              <h1 className="text-4xl font-bold">Chiang Mai</h1>
              <h2 className="flex items-center gap-2 mt-3 text-xl font-medium ">
                <FaLocationDot /> Bangkok, Thailand
              </h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            id="ban"
            className={`h-[500px] text-white relative rounded-lg  bg-[url('/slide_03.jpg')] bg-cover bg-center`}
          >
            <div className="absolute right-0 bottom-0 mr-10 mb-10">
              <h1 className="text-4xl font-bold">Cameron Highlands</h1>
              <h2 className="flex items-center gap-2 mt-3 text-xl font-medium ">
                <FaLocationDot /> Kuala Lumpur, Malaysia
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
