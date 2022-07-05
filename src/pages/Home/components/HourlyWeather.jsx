import dateService from '../../../services/dateService';
import { Swiper, SwiperSlide } from 'swiper/react'
import WeatherIcon from "../../../components/WeatherIcon";
import 'swiper/css'

export default function HourlyWeather({data, timezone}) {
  return (
    <div className="mt-16">
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {data.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-900 bg-opacity-40 rounded-xl p-3 text-white">
              <div className="text-xs">
                <span className="pr-2">{dateService.getDayByTimestamp(data.dt)}</span>
                <span>{dateService.getTimeByTimestamp(data.dt, timezone)}</span>
              </div>
              <WeatherIcon
                className="mx-auto mt-2"
                size="2rem"
                icon={data.weather[0].icon}
              />
              <div className="mt-2">
                <span className="text-md">{data.temp}</span>
                <small className="text-gray-100 text-xs"> °C</small>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
