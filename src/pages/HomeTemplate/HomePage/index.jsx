import React, { useEffect } from "react";
import Carousel from "./Carousel/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchImageCarousel } from "./Carousel/slice";

export default function HomePage() {
  const { data } = useSelector((state) => state.CarouselReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImageCarousel());
  }, [dispatch]);

  return (
    <div className="mt-20">
      {/* <div>
        {data?.map((item) => (
          <Carousel key={item.maBanner} images={item} />
        ))}
      </div> */}
      <div></div>
    </div>
  );
}
