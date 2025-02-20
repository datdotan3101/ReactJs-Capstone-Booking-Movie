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
import { fetchDanhSachCumRap } from "./sliceCumRap";

export default function DetailMovies() {
  const state = useSelector((state) => state.DetailMoviesReducer);
  const stateHour = useSelector((state) => state.ListHourReducer);
  const stateListCumRap = useSelector((state) => state.ListCumRapReducer);
  const { data } = state;
  const { id, maHeThongRap } = useParams();

  console.log("Mã hệ thống rạp:", maHeThongRap);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetailsMovie(id));
    dispatch(fetchListCines());
    dispatch(fetchListSchedule(id));
    dispatch(fetchDanhSachCumRap(maHeThongRap));
  }, []);

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

  const renderCumRap = () => {
    const { data } = stateListCumRap;
    return data?.map((rap) => <ThongTinRap key={rap.maCumRap} rap={rap} />);
  };

  return (
    <div className="container mx-auto mt-16 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-center">
          {data && (
            <img
              src={data.hinhAnh}
              alt="Movie Poster"
              className="rounded-lg shadow-lg w-80"
            />
          )}
        </div>
        <div className="space-y-4">
          {data && (
            <h1 className="text-3xl font-bold text-orange-400">
              {data.tenPhim}
            </h1>
          )}
          {data && (
            <p className="text-lg">
              Ngày chiếu:{" "}
              <span className="font-semibold">{data.ngayKhoiChieu}</span>
            </p>
          )}
          {data && (
            <p className="text-lg">
              Đánh giá: <span className="font-semibold">{data.danhGia}</span>
            </p>
          )}
          {data && (
            <p className="text-lg">
              {data.dangChieu ? "🎬 Đang chiếu" : "⌛ Sắp chiếu"}
            </p>
          )}
          {data && <p className="text-sm text-gray-300">{data.moTa}</p>}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Hệ Thống Rạp</h2>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {renderListLogo()}
        </div>
      </div>

      <div className="mt-8">
        <LichChieu />
        <div className="border-b border-gray-700 pb-4">
          {/* <ThongTinRap /> */}
          {renderCumRap()}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-4">
            {renderHour()}
          </div>
        </div>
      </div>
    </div>
  );
}
