import React from "react";
import './HomeUserLayout.css'
import FontAwesome from 'react-fontawesome';
import { useForm } from "react-hook-form";
import {Redirect} from "react-router-dom";
import {useState} from "react";
function HomeUserLayout() {
  const [value, setValue] = useState();
  // var valueSearch = "";

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data)=>{
    setValue(data);
  };
  if(value!==undefined)
    var valueSearch=value.search;
    console.log("valueSearch",valueSearch);
  return (
      <div className="div-image-focus">
        <div className="div-focus">
          <div className="div-focus-details">
          <label className="lable-focus">Cùng Vivu đi khắp muôn nơi!</label>
          <form className="search-home-user-focus" onSubmit={handleSubmit(onSubmit)}>
            <input className="search-focus" type="text" placeholder="Tìm kiếm..."{...register("search", { required: true })}/>
            <button className="style-button-user-group a-search-focus" ><FontAwesome className="fal fa-search" /></button>
          </form>
          { (valueSearch!==undefined)? 
            <Redirect to={`/vivu/search/${valueSearch}`}></Redirect> 
            :valueSearch==="" }
          </div>
      </div>
    </div>
  );
}

export default HomeUserLayout;
