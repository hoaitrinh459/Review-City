import React from 'react';
import {RiImageAddFill} from 'react-icons/ri';
import {useState} from 'react';
import{BsImageFill} from 'react-icons/bs';
import "./AddObjectUserLayout.css"

function AddReviewUserLayout(props) {
  // const fileObj = [];
  // const fileArray = [];
  const [file, setFile] = useState([]);
  var listimgAdd = [];
  const uploadMultipleFiles = (e) => {
    const filetest=e.target.files;
    for(const files of filetest) {
      const {name} = files;
      listimgAdd.push(name)
    }
    setFile(listimgAdd)
  //   fileObj.push(e.target.files);
  //   for (let i = 0; i < fileObj[0].length; i++) {
  //     fileArray.push(URL.createObjectURL(fileObj[0][i]));
  //   }
  //   setFile(fileArray);
  // };
  // console.log("dbdjhgj")

  // const uploadFiles = (e) => {
  //   e.preventDefault();
  //   console.log(file);
  };
  return (
    <div className="add-object-user-layout">
        <div className="title-add-new-object-user-layout">Thêm địa điểm mới</div>
        <div className="add-new-object-user-layout">
          <label className="label-add-new-object-user-layout">Tên địa điểm:</label>
          <input className="input-group-add-new-object-user-layout" type="text" placeholder="Nhập tên địa điểm..."></input>
        </div>
        <div className="add-new-object-user-layout">
          <label className="label-add-new-object-user-layout">Địa chỉ:</label>
          <input className="input-group-add-new-object-user-layout" type="text" placeholder="Nhập địa chỉ..."></input>
        </div>
        <div className="add-new-object-user-layout">
          <div className="city-and-category-add-new-object-user-layout">
            <label className="label-add-new-object-user-layout">Thành phố:</label>
            <input className="input-group-add-new-object-user-layout" value={props.dataNameCity} disabled></input>
          </div>
          <div className="city-and-category-add-new-object-user-layout">
            <div className="category-add-new-object-user-layout">
              <label className="label-add-new-object-user-layout">Loại địa điểm:</label>
              <select className="category-input-group-add-new-object-user-layout">
                <option value="Khách sạn">Khách sạn</option>
                <option value="Ẩm thực">Ẩm thực</option>
                <option value="Khám phá">Khám phá</option>
              </select>
            </div>
          </div>
          </div>
          <div className="add-new-object-user-layout">
            <div className="div-add-img-new-object-user-layout">
              <label className="label-add-new-object-user-layout">Thêm ảnh:</label>
              <label className="icon-img-add-new-object-user-layout" for="file-input"><RiImageAddFill style ={{fontSize: "20px", marginRight: "5px"}}/>
              <input  id="file-input" type="file" accept="image/*" multiple onChange={uploadMultipleFiles}></input>
              Chọn tệp</label>
            </div>
            <div className="img-new-object-user-layout">
              {/* <form> */}
                {/* <div className="form-group multi-preview"> */}
                <div className="list-img-new-object-user-layout-content">
                  {file.map((nameimg)=>(
                    <div href="#/" className="name-img-new-object-user-layout-content"><BsImageFill/> {nameimg}</div>
                  ))}
                </div>
                {/* </div> */}

                {/* <button
                  type="button"
                  className="btn btn-danger btn-block"
                  onClick={uploadFiles}
                >
                  Upload
                </button> */}
              {/* </form> */}
            </div>
          </div>
        
        
        <div className="add-new-object-user-layout">
          <label className="label-add-new-object-user-layout">Giới thiệu:</label>
          <textarea className="input-group-add-new-object-user-layout texarea-add-new-object-user-layout" type="text" placeholder="Nhập phần giới thiệu..."></textarea>
        </div>
        <div className="add-new-object-user-layout div-btn-add-new-object-user-layout">
          <button class="btn-add-new-object-user-layout">Thêm</button>
        </div>
    </div>
  );
}
export default AddReviewUserLayout;