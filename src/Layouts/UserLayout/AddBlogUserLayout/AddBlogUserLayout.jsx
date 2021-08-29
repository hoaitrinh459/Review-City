import React from 'react';
import {RiImageAddFill} from 'react-icons/ri';
import {useState} from 'react';
import DraftEditorUserComponent from "../../../Components/UserComponent/DraftEditorUserComponent/DraftEditorUserComponent";
import { useForm } from "react-hook-form";
import { EditorState } from 'draft-js';
import {Editor} from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
function AddBlogUserLayout(props) {
  const [file, setFile] = useState();
  const [nameimg, setNameimg] = useState();
  var imgdemo="img-demo-block";
  const {
    register,
    handleSubmit,
  } = useForm();

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setNameimg(e.target.files[0].name)
    }
  
  // const uploadFiles = (e) => {
  //   e.preventDefault();
  //   console.log(file);
  };
  const [editorState, seteditorState] =useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    seteditorState(editorState)
  }
  if(file!==undefined){
    imgdemo="img-demo-none";
  }
  else imgdemo="img-demo-block";
  return (
    <form className="add-object-user-layout" onSubmit={handleSubmit}>
        <div className="title-add-new-object-user-layout">Thêm blog mới</div>
        <div className="add-new-object-user-layout">
          <label className="label-add-new-object-user-layout">Tiêu đề blog:</label>
          <input className="input-group-add-new-object-user-layout" type="text" placeholder="Nhập tiêu đề..." {...register("title", { required: true })}></input>
        </div>
        <div className="add-new-object-user-layout">
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
        </div>
        <div className="add-new-object-user-layout">
          <label className="label-add-new-object-user-layout">Blog:</label>
          <div className="draft-editor-add-new-object-user-layout">
            <div className="draft-editor-user-component">
              <Editor
              editorState={editorState}
              onEditorStateChange={onEditorStateChange}
              onChange={(event) => event.target.value}
              />
            </div>
          </div>
        </div>
        <div className="add-new-object-user-layout div-btn-add-new-object-user-layout">
          <button class="btn-add-new-object-user-layout">Thêm</button>
        </div>
    </form>
  );
}
export default AddBlogUserLayout;
