import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Carousel({ list, dir }) {
  const navigate = useNavigate();
  return(
    <Swiper
      breakpoints={{
        // when window width is >= 320px
        100: {
          slidesPerView: 1,
          spaceBetween: 4,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 4
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween:1,
        }}}
        loop={true}
        className="carousel"
        navigation={true}
        modules={[Navigation, EffectCoverflow]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
      >
      {
        list && list.map((item, index) => (
          <SwiperSlide
            onClick={ () => navigate(`/${dir}/${item.id}`) }
            key={ index }
            className="item-carousel"
          >
            <img
              className="img-carousel"
              src={require(`../images/${dir}/${item.image.stringValue}`)}
              alt={ item.name.stringValue }
            />
            <h1 className="item-carousel-text">{ item.name.stringValue }</h1>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}