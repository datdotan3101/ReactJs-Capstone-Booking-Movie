import React, { useEffect, useState } from "react";
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
  const dispatch = useDispatch();
  const { id } = useParams();

  // State lưu hệ thống rạp và cụm rạp đang chọn
  const [selectedHeThong, setSelectedHeThong] = useState(null);
  const [selectedCumRap, setSelectedCumRap] = useState(null);

  const state = useSelector((state) => state.DetailMoviesReducer);
  const stateHour = useSelector((state) => state.ListHourReducer);
  const stateListCumRap = useSelector((state) => state.ListCumRapReducer);
  const stateListLogo = useSelector((state) => state.ListLogoReducer);

  const { data } = state;

  useEffect(() => {
    dispatch(fetchDetailsMovie(id));
    dispatch(fetchListCines());
  }, [dispatch, id]);

  // Khi click vào logo hệ thống rạp
  const handleSelectHeThong = (maHeThongRap) => {
    setSelectedHeThong(maHeThongRap);
    setSelectedCumRap(null); // Reset cụm rạp khi chọn hệ thống rạp mới
    dispatch(fetchDanhSachCumRap(maHeThongRap));
  };

  // Khi click vào cụm rạp
  const handleSelectCumRap = (maCumRap) => {
    setSelectedCumRap(maCumRap);
    dispatch(fetchListSchedule(maCumRap));
  };

  // Render danh sách logo rạp
  const renderListLogo = () => {
    return stateListLogo?.data?.map((logo) => (
      <button
        key={logo.maHeThongRap}
        className={`p-3 rounded-lg ${
          selectedHeThong === logo.maHeThongRap
            ? "bg-orange-400"
            : "bg-gray-700"
        }`}
        onClick={() => handleSelectHeThong(logo.maHeThongRap)}
      >
        <img src={logo.logo} alt={logo.tenHeThongRap} className="w-16 h-16" />
      </button>
    ));
  };

  // Render danh sách cụm rạp
  const renderCumRap = () => {
    return stateListCumRap?.data?.map((rap) => (
      <div
        key={rap.maCumRap}
        className={`p-4 cursor-pointer ${
          selectedCumRap === rap.maCumRap
            ? "bg-blue-500 text-white"
            : "bg-gray-800"
        }`}
        onClick={() => handleSelectCumRap(rap.maCumRap)}
      >
        {rap.tenCumRap}
      </div>
    ));
  };

  // Render danh sách giờ chiếu
  const renderHour = () => {
    if (!stateHour?.data?.heThongRapChieu)
      return <p>Không có dữ liệu giờ chiếu.</p>;

    return stateHour.data.heThongRapChieu.flatMap((heThong) =>
      heThong.cumRapChieu
        ?.filter((cumRap) => cumRap.maCumRap === selectedCumRap)
        ?.flatMap((cumRap) =>
          cumRap.lichChieuPhim?.map((hours) => (
            <Gio key={hours.maLichChieu} hours={hours} />
          ))
        )
    );
  };

  return (
    <div className="container mx-auto mt-16 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      {/* Movie Details */}
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

      {/* Danh sách hệ thống rạp */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Hệ Thống Rạp</h2>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {renderListLogo()}
        </div>
      </div>

      {/* Danh sách cụm rạp */}
      {selectedHeThong && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Cụm Rạp</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {renderCumRap()}
          </div>
        </div>
      )}

      {/* Danh sách giờ chiếu */}
      {selectedCumRap && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Giờ Chiếu</h2>
          <div className="flex flex-wrap gap-3">{renderHour()}</div>
        </div>
      )}
    </div>
  );
}
