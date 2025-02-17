import React, { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export default function Carousel({ images }) {
  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      new Splide(splideRef.current, {
        type: "loop",
        perPage: 1, // Hiển thị 1 ảnh mỗi lần
        autoplay: true, // Tự động chạy
        interval: 3000, // Chuyển ảnh mỗi 3 giây
        speed: 800, // Tốc độ chuyển ảnh
        pauseOnHover: true, // Dừng khi hover
        pauseOnFocus: true,
        arrows: true, // Hiển thị nút điều hướng
        pagination: true, // Hiển thị điểm đánh dấu
        direction: "ltr", // Chạy theo chiều ngang (left-to-right)
        extensions: { AutoScroll },
      }).mount();
    }
  }, []);

  return (
    <div className="relative w-full">
      <div ref={splideRef} className="splide">
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide">
              <img
                src={images.hinhAnh}
                alt="Carousel"
                className="w-full h-auto rounded-lg"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
