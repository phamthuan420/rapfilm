import React from "react";
import Table from "./Table";
import Seat from "./Seat";

function Order() {
  return (
    <div className="background-img" style={{ minHeight: "100vh" }}>
      <div className="row inside outside">
        <div className="col-8 px-3">
          <h1 className="text-warning text-center">
            ĐẶT VÉ XEM PHIM CYBERLEARN.VN
          </h1>
          <p className="text-white text-center">Màn hình</p>
          <div className="screen"></div>
          <Seat />
        </div>
        <div className="col-4">
          <h3 className="text-center text-light mt-3">
            DANH SÁCH GHẾ BẠN CHỌN
          </h3>
          <ul className="nav flex-column">
            <li className="nav-item mt-3">
              <span className="text-light">
                <a className="gheDuocChon"></a>
                GHẾ ĐÃ ĐẶT
              </span>
            </li>
            <li className="nav-item mt-3">
              <span className="text-light">
                <a className="gheDangChon"></a>
                GHẾ ĐANG CHỌN
              </span>
            </li>
            <li className="nav-item mt-3">
              <span className="text-light">
                <a className="gheChuaChon"></a>
                GHẾ CHƯA ĐẶT
              </span>
            </li>
          </ul>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Order;
