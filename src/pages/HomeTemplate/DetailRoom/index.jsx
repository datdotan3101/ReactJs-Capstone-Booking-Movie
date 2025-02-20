import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListSeat } from "./sliceBooking";
import { useParams, Link } from "react-router-dom";
import Seat from "./Seat";
import ThongTinRap from "../DetailMovies/ThongTinRap";
import ThongTinVe from "./ThongTinVe";

export default function DatVe() {
  const state = useSelector((state) => state.ListSeatReducer);
  const { id } = useParams();
  const { listSeatSelected } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListSeat(id));
  }, [dispatch, id]);

  const renderRow = () => {
    const { data } = state;
    return (
      <div className="grid grid-cols-10 gap-4 p-5 bg-gray-900 rounded-lg shadow-lg">
        {data?.danhSachGhe.map((seat) => (
          <Seat key={seat.maGhe} seat={seat} />
        ))}
      </div>
    );
  };

  const renderThongTinVe = () => {
    const { data } = state;
    if (!data?.thongTinPhim) return null;
    return <ThongTinVe movie={data.thongTinPhim} />;
  };

  const totalPrice = () => {
    return listSeatSelected.reduce((total, seat) => total + seat.giaVe, 0);
  };

  return (
    <div className="mt-20 container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-white mb-6">
        Phòng vé
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-center">
          <div className="bg-gray-800 text-white p-3 rounded-lg mb-4 text-center w-full max-w-lg">
            <p>Màn Hình</p>
          </div>
          {renderRow()}
          <div className="flex justify-center gap-4 mt-4">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gray-500 rounded-sm mr-2"></div>
              <span className="text-gray-500 text-sm">Ghế đã đặt</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-green-500 rounded-sm mr-2"></div>
              <span className="text-green-700 text-sm">Ghế đang chọn</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white">
          {renderThongTinVe()}
          <table className="w-full text-sm text-gray-300">
            <thead className="text-xs uppercase bg-gray-700">
              <tr>
                <th className="px-6 py-3">Ghế</th>
                <th className="px-6 py-3">Giá</th>
              </tr>
            </thead>
            <tbody>
              {listSeatSelected.map((seat) => (
                <tr
                  key={seat.maGhe}
                  className="bg-gray-900 border-b border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-white">
                    {seat.tenGhe}
                  </td>
                  <td className="px-6 py-4">
                    {seat.giaVe.toLocaleString()} VND
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-700">
                <td className="px-6 py-4 font-bold">Tổng cộng:</td>
                <td className="px-6 py-4 font-bold">
                  {totalPrice().toLocaleString()} VND
                </td>
              </tr>
            </tfoot>
          </table>
          <Link
            to="/"
            className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg text-center block"
          >
            Đặt vé
          </Link>
        </div>
      </div>
    </div>
  );
}
