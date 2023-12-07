import React, { useState } from "react";
import "./list-school.css";
import {productList} from "./productList.js";
import Pagination from "./Pagination";
import userEvent from "@testing-library/user-event";

let PageSize = 10;

const Item = (props) => {
  const handleSchoolClick = () => {
    window.location.href = props.link;
  };

  return (
    <div className="box-school">
      <div className="school" onClick={handleSchoolClick}>
        <div className="inner">
          <figure className="inner-pics">
            <img className="inner-pic" src={props.link} alt="hihi"></img>
          </figure>
          <div className="inner-content">
            <h4>{props.ten}</h4>
            <p>Ma san pham: {props.ma}</p>
            <p>Gia san pham: {props.gia}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ListSchool() {

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return productData.slice(firstPageIndex, lastPageIndex);
  // }, [currentPage]);

  // const [images,setImage] = userState([]);
  // useEffect(() => {
  //   fetch("http:.....").then(
  //     respone => respone.json().then(
  //       data => {setImage(data)}
  //     )
  //   )
    
  // },[])



  const items = productList.map((item, index) => (
    <Item
      key={index}
      link={item.link}
      ten={item.ten}
      ma={item.ma}
      gia={item.gia}
    />
  ));

  return (
    <div className="catogery">
      <div className="catogery1">
        <div className="top">
          <p className="top1">CÁC SẢN PHẨM TẠI ANFAST</p>
          {/* <p className="top2">
                    <b>400+</b> khóa luyện chi tiết theo từng trường <b>Đại học</b>, giúp ôn thi hiệu quả
                </p> */}
        </div>
        <div className="search">
          <input type="text" placeholder="Tìm kiếm sản phẩm..."></input>
        </div>
        <div className="list">{items}</div>
        <Pagination
          data = {items}
        />
      </div>
    </div>
  );
}
