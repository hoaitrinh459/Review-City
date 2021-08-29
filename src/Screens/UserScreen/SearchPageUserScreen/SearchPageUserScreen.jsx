import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadSearchCity, loadSearchObject, loadSearchBlog } from "../../../Redux/UserRedux/ActionsUser/SearchActionUser";
import './SearchPageUserScreen.css';
import CityHomeUserComponent from "../../../Components/UserComponent/CityHomeUserComponent/CityHomeUserComponent";
import LoadingModal from "react-loading-bubbles";
import {useRouteMatch} from "react-router-dom";
import ContentCityUserComponent from "../../../Components/UserComponent/ContentCityUserComponent/ContentCityUserComponent";
import BlogHomeUserComponent from "../../../Components/UserComponent/BlogHomeUserComponent/BlogHomeUserComponent";
function SearchPageUserScreen() {
  const match = useRouteMatch();
  var value = match.params.value;

  const dispatchcity = useDispatch();
  const searchcity = useSelector((state) => state.searchcity.data);
  const requestingcity = useSelector((state) => state.searchcity.requesting);

  const dispatchobject = useDispatch();
  const searchobject = useSelector((state) => state.searchobject.data);
  const requestingobject = useSelector((state) => state.searchobject.requesting);

  const dispatchblog = useDispatch();
  const searchblog = useSelector((state) => state.searchblog.data);
  const requestingblog = useSelector((state) => state.searchblog.requesting);
  useEffect(() => {
    dispatchcity(loadSearchCity(value));
    dispatchobject(loadSearchObject(value));
    dispatchblog(loadSearchBlog(value));
  }, [value]);

  console.log(searchcity,searchobject,searchblog)  
  return(
    <div className="all-city-user-screen">
      {
        (requestingcity|requestingobject|requestingblog) ?
        <LoadingModal size={128} color="#23D3D3" />
        :
        <div className="all-city-user">
          <div className="all-city-user-content">
            {
              ((searchcity&& searchcity.length == 0)&&(searchobject&& searchobject.length == 0)&&(searchblog&& searchblog.length == 0) ) ?
              <div className="not-found-search-user">Không tìm thấy <span className="value-not-found-search-user">{value}</span></div>
              :
              <div className="search-user">
                {
              (searchcity&& searchcity.length > 0) ?
              <div>
                <h1 className="h1-title-all-city-and-blog">Thành phố</h1>
                <div className="all-city-user-content-detail">
                  {searchcity.map((city) => (
                    <CityHomeUserComponent dataNameCity={city.name} dataImgCity={city.img} id={city.id}/>
                  ))}
                </div>
              </div>
              : <div></div>
            }
            {
              (searchobject&& searchobject.length > 0) ?
              <div>
                <h1 className="h1-title-all-city-and-blog">Địa điểm</h1>
                <div className="all-city-user-content-detail">
                  {searchobject.map((object) =>(
                    <ContentCityUserComponent idcity={object.citi.id} id={object.id} iduser={object.users_permissions_user.id} dataNameObject={object.name} dataImgObject={object.imgobjects} dataImgUser={object.users_permissions_user.img} dataStarObject={object.star} dataNameUser={object.users_permissions_user.username} dataCategory={object.categories.name}/>
                  ))}
                </div>
              </div>
              : <div></div>
            }
            {
              (searchblog&& searchblog.length > 0) ?
              <div>
                <h1 className="h1-title-all-city-and-blog">Địa điểm</h1>
                <div className="all-city-user-content-detail">
                  {searchblog.map((blog)=>(
                    <BlogHomeUserComponent dataImgBlog={blog.img} dataTitleBlog={blog.title} id={blog.id}/>
                  ))}
                </div>
              </div>
              : <div></div>
            }
              </div>
            }
        </div>
      </div>
      }
    </div>
  );
}
export default SearchPageUserScreen;