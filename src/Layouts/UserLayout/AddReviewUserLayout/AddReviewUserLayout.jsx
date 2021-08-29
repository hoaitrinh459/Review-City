import React from 'react';
import './AddReviewUserLayout.css';
import {RiImageAddFill} from 'react-icons/ri';
import {useState} from 'react';
import DraftEditorUserComponent from "../../../Components/UserComponent/DraftEditorUserComponent/DraftEditorUserComponent"
function AddReviewUserLayout(props) {
  const [file, setFile] = useState();
  const [nameimg, setNameimg] = useState();
  var imgdemo="img-demo-block";
  
  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNameimg(e.target.files[0].name)
     setFile(URL.createObjectURL(e.target.files[0]));
    }
  
  // const uploadFiles = (e) => {
  //   e.preventDefault();
  //   console.log(file);
  };
    console.log(file);

  if(file!==undefined){
    imgdemo="img-demo-none";
  }
  else imgdemo="img-demo-block";
  return (
    <div className="add-object-user-layout">
        <div className="title-add-new-object-user-layout">Thêm review mới</div>
        <div className="add-new-object-user-layout">
          <label className="label-add-new-object-user-layout">Tiêu đề review:</label>
          <input className="input-group-add-new-object-user-layout" type="text" placeholder="Nhập tiêu đề..."></input>
        </div>
        <div className="add-new-object-user-layout">
          <label className="label-add-new-object-user-layout">Tên địa điểm:</label>
          <input className="input-group-add-new-object-user-layout" type="text" value={props.dataNameObject} disabled></input>
        </div>
        <div className="add-new-object-user-layout">
          <label className="label-add-new-object-user-layout">Địa chỉ:</label>
          <input className="input-group-add-new-object-user-layout" type="text" value={props.dataMapObject} disabled></input>
        </div>
        <div className="add-new-object-user-layout">
          <div className="city-and-category-add-new-object-user-layout">
            <label className="label-add-new-object-user-layout">Thành phố:</label>
            <input className="input-group-add-new-object-user-layout" value={props.dataNameCity} disabled></input>
          </div>
          <div className="city-and-category-add-new-object-user-layout">
            <div className="category-add-new-object-user-layout">
              <label className="label-add-new-object-user-layout">Loại địa điểm:</label>
              <select className="category-input-group-add-new-object-user-layout" value={props.dataCategory} disabled>
                <option value="Khách sạn">Khách sạn</option>
                <option value="Ẩm thực">Ẩm thực</option>
                <option value="Khám phá">Khám phá</option>
              </select>
            </div>
          </div>
          </div>
          <div className="add-new-object-user-layout">
            <div className="div-add-img-new-object-user-layout">
              <label className="label-add-new-object-user-layout">Thêm ảnh nền:</label>
              <label className="icon-img-add-new-object-user-layout" for="file-input"><RiImageAddFill style ={{fontSize: "20px", marginRight: "5px"}}/>
              <input  id="file-input" type="file" accept="image/*" onChange={handleChange}></input>
              Chọn tệp</label>
            </div>
            <div className="img-new-object-user-layout">
              <div className="img-new-object-user-layout-content">
                <img className="img-new-object-user-layout-content-details" src="https://static.thenounproject.com/png/3752804-200.png" id={imgdemo}></img>
                <img className="img-new-object-user-layout-content-details" src={file} alt={nameimg}></img>
              </div>
            </div>
          </div>
        
        <div className="add-new-object-user-layout">
          <label className="label-add-new-object-user-layout">Review:</label>
          <div className="draft-editor-add-new-object-user-layout">
            <DraftEditorUserComponent/>
          </div>
        </div>
        <div className="add-new-object-user-layout div-btn-add-new-object-user-layout">
          <button class="btn-add-new-object-user-layout">Thêm</button>
        </div>
    </div>
  );
}
export default AddReviewUserLayout;
