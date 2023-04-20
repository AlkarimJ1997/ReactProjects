import React, { useEffect } from "react";
import { Container } from "../styles/CarouselStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Navigation, Autoplay } from "swiper";

// Slide images
import img1 from "../assets/Nfts/bighead.svg";
import img2 from "../assets/Nfts/bighead-1.svg";
import img3 from "../assets/Nfts/bighead-2.svg";
import img4 from "../assets/Nfts/bighead-3.svg";
import img5 from "../assets/Nfts/bighead-4.svg";
import img6 from "../assets/Nfts/bighead-5.svg";
import img7 from "../assets/Nfts/bighead-6.svg";
import img8 from "../assets/Nfts/bighead-7.svg";
import img9 from "../assets/Nfts/bighead-8.svg";
import img10 from "../assets/Nfts/bighead-9.svg";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = () => {
    // Go to next slide then back to previous on page load to fix flickering bug
    useEffect(() => {
        const swiper = document.querySelector(".swiper").swiper;

        if (!swiper) return;

        swiper.slideNext();
        swiper.slidePrev();
    }, [])
    
    return (
        <Container>
            <Swiper
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                pagination={{ type: "fraction" }}
                scrollbar={{ draggable: true }}
                modules={[EffectCards, Pagination, Navigation, Autoplay]}
                navigation={true}
                effect={"cards"}
                grabCursor={true}
                className="mySwiper">
                <SwiperSlide><img src={img1} alt="The Weirdos" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="The Weirdos" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="The Weirdos" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="The Weirdos" /></SwiperSlide>
                <SwiperSlide><img src={img5} alt="The Weirdos" /></SwiperSlide>
                <SwiperSlide><img src={img6} alt="The Weirdos" /></SwiperSlide>
                <SwiperSlide><img src={img7} alt="The Weirdos" /></SwiperSlide>
                <SwiperSlide><img src={img8} alt="The Weirdos" /></SwiperSlide>
                <SwiperSlide><img src={img9} alt="The Weirdos" /></SwiperSlide>
                <SwiperSlide><img src={img10} alt="The Weirdos" /></SwiperSlide>
            </Swiper>
        </Container>
    )
}

export default Carousel