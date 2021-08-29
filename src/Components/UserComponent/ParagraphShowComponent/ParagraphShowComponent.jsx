import React from "react";
import './ParagraphShowComponent.css';
import {useState} from "react"
function ParagraphShowComponent(props) {
  const [showLess, setShowLess] = useState("show-less");
  const [showMore, setShowMore] = useState("show-more");
  const [onShow, setOnShow] = useState("discover-object-user-content");

  const handleClickLess =() => {
    setShowLess("show-more");
    setShowMore("show-less");
    setOnShow("discover-object-user-content no-show");
  }
  const handleClickMore =() => {
    setShowLess("show-less");
    setShowMore("show-more");
    setOnShow("discover-object-user-content on-show");
  }
  return(
    <div className="discover-object-user">
      <div className={onShow}>
        <p className="p-discover-object-user">{props.dataDescribeObject}</p>
      </div>
      <div className="show-more-and-show-less-discover-object">
        <button onClick={handleClickLess} id={showMore} className="style-button-user-group show-more-discover-object">Xem Thêm</button>
        <button onClick={handleClickMore} id={showLess} className="style-button-user-group show-less-discover-object">Rút gọn</button>
      </div>
    </div>
  );
}
export default ParagraphShowComponent;