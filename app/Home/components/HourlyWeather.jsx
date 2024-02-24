import 'swiper/css';

import WeatherIcon from '@libs/design/WeatherIcon';
import dateService from '@libs/services/dateService';
import { Swiper, SwiperSlide } from 'swiper/react';

const HourlyWeather = ({ data: dataList, timezone }) => {
  console.log(dataList);
  return (
    <div className="mt-16">
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
        breakpoints={{
          '@0.00': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {dataList.map((data, index) => (
          <SwiperSlide key={data?.dt ?? index}>
            <div className="rounded-xl bg-gray-900/40 p-3 text-white">
              <div className="text-xs">
                <span className="pr-2">
                  {dateService.getDayByTimestamp(data.dt)}
                </span>
                <span>{dateService.getTimeByTimestamp(data.dt, timezone)}</span>
              </div>
              <WeatherIcon
                className="mx-auto mt-2"
                size="2rem"
                icon={data.weather[0].icon}
              />
              <div className="mt-2">
                <span className="text-base">{data.temp}</span>
                <small className="text-xs text-gray-100"> °C</small>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HourlyWeather;
