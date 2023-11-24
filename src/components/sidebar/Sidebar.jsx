// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
// import { Navigation, Pagination,  } from "swiper";

import images from "../../dummy-files/sidebarImages.json";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className="container">
        <div className={styles.sidebar_wrapper}>
          <Swiper
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              prevEl: `.prev-btn`,
              nextEl: `.next-btn`,
            }}
            pagination={{
              clickable: true,
            }}
            effect={"fade"}
            loop={true}
            // modules={[Navigation, Pagination, ]}
            className="mySwiper"
          >
            {images.map((img, index) => (
              <SwiperSlide className={styles.sidebar_slide} key={index}>
                <img src={img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
