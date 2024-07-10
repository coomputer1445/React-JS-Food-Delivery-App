import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

function SliderPromos() {
  console.log(`calc(100vh)`);
  return (
    <>
      <div className="ttt">
        <Swiper
          modules={[Navigation]}
          spaceBetween={2}
          slidesPerView={1}
          className="mySwiper2"
          navigation={true}
          freeMode={true}
        >
          <SwiperSlide>
            <img src="./images/featured.png" alt="alt" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/featured2.png" alt="alt" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/featured3.png" alt="alt" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default SliderPromos;

{
  /* <Card
            size="lg"
            variant="plain"
            orientation="horizontal"
            sx={{
              textAlign: "center",
              maxWidth: "100%",
              resize: "horizontal",
              overflow: "auto",
            }}
          >
            <CardOverflow
              variant="solid"
              color="#fff"
              sx={{
                flex: "0 0 200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                px: "var(--Card-padding)",
              }}
            >
              <Typography fontSize="x14" fontWeight="x1" textColor="#fff">
                HOT & SPICY
              </Typography>
            </CardOverflow>
            <CardContent sx={{ gap: "1.5", minWidth: 200 }}>
              <AspectRatio objectFit="cover">
                <img alt="" src="" />
              </AspectRatio>
            </CardContent>
          </Card> */
}
