import React, { useEffect } from "react";
import LichChieu from "./LichChieu";
import { fetchDetailsMovie } from "./sliceThongTinPhim";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Rap from "./Rap";
import ThongTinRap from "./ThongTinRap";
import Gio from "./Gio";
import { fetchListCines } from "./sliceLogoCines";
import { fetchListSchedule } from "./sliceLich";

export default function DetailMovies() {
  const state = useSelector((state) => state.DetailMoviesReducer);
  // Giờ
  const stateHour = useSelector((state) => state.ListHourReducer);
  const { data } = state;
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetailsMovie(id));
    dispatch(fetchListCines());
    dispatch(fetchListSchedule(id));
  }, []);

  // Logo
  const stateListLogo = useSelector((state) => state.ListLogoReducer);
  const renderListLogo = () => {
    const { data } = stateListLogo;
    return data?.map((logo) => <Rap key={logo.maHeThongRap} logo={logo} />);
  };

  const renderHour = () => {
    const { data } = stateHour;
    return (
      data?.heThongRapChieu?.flatMap((heThong) =>
        heThong.cumRapChieu?.flatMap((cumRap) =>
          cumRap.lichChieuPhim?.map((hours) => (
            <Gio key={hours.malichChieu} hours={hours} />
          ))
        )
      ) || null
    );
  };

  return (
    <div>
      <div className="container mx-auto mt-20">
        DetailsMovies
        {/* Thông tin phim  */}
        <div className="grid grid-cols-2">
          {/* Banner phim */}
          <div>{data && <img src={data.hinhAnh} alt="" />}</div>
          {/* Thông tin phim  */}
          <div>
            {data && <h1>{data.tenPhim}</h1>}
            {data && <p>Ngày chiếu: {data.ngayKhoiChieu}</p>}
            {data && <p>Đánh giá: {data.danhGia}</p>}
            {data && <p>{data.dangChieu ? "Đang chiếu" : "Sắp chiếu"}</p>}
            {data && (
              <h5>
                {" "}
                Mô tả: <p>{data.moTa}</p>
              </h5>
            )}
          </div>
        </div>
      </div>
      <div className="flex">
        <div>{renderListLogo()}</div>
        <div>
          <LichChieu />
          <div className="border-b-2 border-gray-500">
            <ThongTinRap />
            {/* <Gio /> */}
            <div className="grid grid-cols-6">{renderHour()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
