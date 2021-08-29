import React from "react";
import TopCityUserLayout from "../../../Layouts/UserLayout/CityUserLayout/TopCityUserLayout";
import './CityUserScreen.css';
import CityHomeUserComponent from "../../../Components/UserComponent/CityHomeUserComponent/CityHomeUserComponent";
import {useState, useEffect} from "react";
import {FaMapMarkedAlt, FaCity} from 'react-icons/fa'
import MapUserComponent from "Components/UserComponent/MapUserComponent/MapUserComponent";
import {GoPlus} from 'react-icons/go';
import Modal from "react-modal";
import AddObjectUserLayout from "Layouts/UserLayout/AddObjectUserLayout/AddObjectUserLayout";
import {IoMdClose} from"react-icons/io";
import { loadCityDetails, loadCity } from "../../../Redux/UserRedux/ActionsUser/CityActionUser";
import { loadObjectOfCity } from "../../../Redux/UserRedux/ActionsUser/ObjectActionUser";
import LoadingModal from "react-loading-bubbles";
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from "react-router-dom";
import HotelBodyObjectUserLayout from "../../../Layouts/UserLayout/BodyObjectUserLayout/HotelBodyObjectUserLayout";
import FoodBodyObjectUserLayout from "../../../Layouts/UserLayout/BodyObjectUserLayout/FoodBodyObjectUserLayout";
import DiscoverBodyObjectUserLayout from "../../../Layouts/UserLayout/BodyObjectUserLayout/DiscoverBodyObjectUserLayout";
import LoginUserLayout from "../../../Layouts/UserLayout/LoginUserLayout/LoginUserLayout";
import {reactLocalStorage} from 'reactjs-localstorage';
import { toast } from 'react-toastify';

function CityUserScreen() {
  const [titleCity, setTitleCity]= useState("group-title-city-user-content");
  const [hotel, setHotel]= useState("object-city-user-detail-content");
  const [titleHotel, setTitleHotel]= useState("");
  const [food, setFood]= useState("object-city-user-detail-content");
  const [titleFood, setTitleFood]= useState("");
  const [discover, setDiscover]= useState("object-city-user-detail-content");
  const [titleDiscover, setTitleDiscover]= useState("");
  const [viewMap, setViewMap]= useState("view-map-user-click-btn")
  const [modalIsOpen, setIsOpen] = useState(false);
  const [statehotel, setstatehotel]= useState("noall");
  const [statefood, setstatefood]= useState("noall");
  const [statediscover, setstatediscover]= useState("noall");
  const [modalIsOpenCheckLogin, setmodalIsOpenCheckLogin] = useState(false);
  const [user, setUser] = useState(reactLocalStorage.getObject("user"));

  const dispatch = useDispatch();
  const citydetails = useSelector((state) => state.citydetails.data);
  const requesting = useSelector((state) => state.citydetails.requesting);
  const match = useRouteMatch();
  console.log("match",match);
  useEffect(() => {
    dispatch(loadCityDetails(match.params.idCity));
  }, [match.params.idCity]);

  const dispatchOthercity = useDispatch();
  const othercity = useSelector((state) => state.city.data);
  const requestingOthercity = useSelector((state) => state.city.requesting);
  useEffect(() => {
    dispatchOthercity(loadCity(4));
  }, [dispatchOthercity]);

  if(!requesting && citydetails != null){
    var arrobjectid = [];
    citydetails.objects.map((object)=>{
      arrobjectid.push(object.id)
    })
  }

  const dispatchobject = useDispatch();
  const objectdetails = useSelector((state) => state.allobjectofcity.data);
  const requestingobject = useSelector((state) => state.allobjectofcity.requesting);

  useEffect(() => {
    dispatchobject(loadObjectOfCity(arrobjectid));
  }, [arrobjectid==undefined]);

  if(!requestingobject && objectdetails != null){
    var hotelobject = [];
    var foodobject = [];
    var discoverobject = [];
    objectdetails.map((object)=>{
      if(object.categories.name ==="Khách sạn")
        hotelobject.push(object)
      else if(object.categories.name ==="Ẩm thực")
        foodobject.push(object)
      else if(object.categories.name ==="Khám phá")
        discoverobject.push(object)
    })
  }


  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  function openModalCheckLogin() {
    setmodalIsOpenCheckLogin(true);
  }
  function closeModalCheckLogin() {
    setmodalIsOpenCheckLogin(false);
  }
  const checkloginstate = useSelector((state) => state.ckecklogin.data);
  useEffect(()=>{ 
    closeModalCheckLogin();
    setUser(reactLocalStorage.getObject("user"));
  },[checkloginstate!=null])

  useEffect(()=>{ 
    setUser(reactLocalStorage.getObject("user"));
  },[checkloginstate==null])

 const checklogin = () => {
    setUser(reactLocalStorage.getObject("user"));
   console.log(user);
   if(user!=null&&!(Object.entries(user).length === 0))
    {
      openModal();
    }
    else
    {
      toast.warning("Bạn chưa đăng nhập!")
      openModalCheckLogin();
    }
 }

  const mapCityView =() =>{
    setViewMap("view-map-user-click-btn view-map-user")
  }
  
  const cityClick =() => {
    setstatehotel("noall");
    setstatefood("noall");
    setstatediscover("noall");

    setHotel("object-city-user-detail-content");
    setFood("object-city-user-detail-content");
    setDiscover("object-city-user-detail-content");
    setTitleCity("group-title-city-user-content");
    setTitleHotel("");
    setTitleFood("");
    setTitleDiscover("");
  }
  const hotelClick =() => {
    setstatehotel("all");
    setHotel("object-city-user-detail-content");
    setFood("object-city-user-detail-content food");
    setDiscover("object-city-user-detail-content discover");
    setTitleCity("");
    setTitleHotel("title-focus");
    setTitleFood("");
    setTitleDiscover("");
  }
  const foodClick =() => {
    setstatefood("all");
    setHotel("object-city-user-detail-content hotel");
    setFood("object-city-user-detail-content");
    setDiscover("object-city-user-detail-content discover");
    setTitleCity("");
    setTitleHotel("");
    setTitleFood("title-focus");
    setTitleDiscover("");
  }
  const discoverClick =() => {
    setstatediscover("all");
    setHotel("object-city-user-detail-content hotel");
    setFood("object-city-user-detail-content food");
    setDiscover("object-city-user-detail-content");
    setTitleCity("");
    setTitleHotel("");
    setTitleFood("");
    setTitleDiscover("title-focus");
  }

  return (
    <div className="city-user">
      <Modal className="modal-login-user-log"
          isOpen={modalIsOpenCheckLogin}
          onRequestClose={closeModalCheckLogin}
        >
          <div>
            <LoginUserLayout/>
          </div>
        </Modal>
      {
        requesting|requestingOthercity|requestingobject ?
        <LoadingModal size={128} color="#23D3D3" />
        :
        <div>
          {
            (citydetails!==null)?
              <div>
                <TopCityUserLayout nameCity={citydetails.name} imgCity={citydetails.img} describeCity={citydetails.describe}/>
                <div className="city-user-details">
                  <div className="city-user-details-content">
                    <div className="city-user-content">
                      <div className="city-detail-content-boder-bottom">
                        <div className="city-user-content-detial">
                          <div className="city-user-detail-content-group-title">
                            <div className="city-user-title-content">
                              <button onClick={cityClick} id={titleCity} className="style-button-user-group group-title-user-content"><FaCity className="facity-and-map-city-user"/>{citydetails.name}</button>
                              <button onClick={hotelClick} id={titleHotel} className="style-button-user-group group-title-user-content">Khách sạn</button>
                              <button onClick={foodClick} id={titleFood} className="style-button-user-group group-title-user-content">Ẩm thực</button>
                              <button onClick={discoverClick} id={titleDiscover} className="style-button-user-group group-title-user-content">Khám phá</button>
                            </div>
                          </div>
                          <button onClick={mapCityView} className="map-city-user-content view-map-city-uer"><FaMapMarkedAlt className="facity-and-map-city-user"/> Bản đồ</button>
                          <button onClick={checklogin} className="map-city-user-content"><GoPlus/>Thêm địa điểm</button>
                          <Modal className="modal-user-add-new-object"
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                          >
                            <div className="modal-user-add-new-object-content-btn-close">
                            <button onClick={closeModal} className="modal-user-btn-close"><IoMdClose/></button>
                            </div>
                            <AddObjectUserLayout dataNameCity = {citydetails.name}/>
                          </Modal>
                        </div>
                        </div>
                    </div>
                    <div className="object-city-user">
                      <div className="object-city-user-detail">
                      <div className={viewMap}>
                        <MapUserComponent dataMap={citydetails.map} />
                      </div>
                          <div className={hotel}>
                            <div className="title-object-city-user-detail-content">
                              <h2 className="h2-title-object-city-user">Khách sạn</h2>
                            </div>
                            {
                              ((hotelobject!==undefined)&&(hotelobject.length>0))?
                                <div>
                                  <HotelBodyObjectUserLayout id = {citydetails.id} state= {statehotel} arrhotel= {hotelobject}/>
                                </div>
                              : <div>Chưa có khách sạn nào.</div>
                            }
                          </div>
                          <div className={food}>
                            <div className="title-object-city-user-detail-content">
                              <h2 className="h2-title-object-city-user">Ẩm thực</h2>
                            </div>
                            {
                              ((foodobject!==undefined)&&(foodobject.length>0))?
                                <div>
                                  <FoodBodyObjectUserLayout id = {citydetails.id} state= {statefood} arrfood= {foodobject}/>
                                </div>
                              : <div>Chưa có địa điểm ẩm thực nào.</div>
                            }
                          </div>
                          <div className={discover}>
                            <div className="title-object-city-user-detail-content">
                              <h2 className="h2-title-object-city-user">Khám phá</h2>
                            </div>
                            {
                              ((discoverobject!==undefined)&&(discoverobject.length>0))?
                                <div>
                                  <DiscoverBodyObjectUserLayout id = {citydetails.id} state= {statediscover} arrdiscover= {discoverobject}/>
                                </div>
                              : <div>Chưa có địa điểm du lịch nào.</div>
                            }
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              : <div>Không tìm thấy thành phố này</div>
          }
              <div className="other-city-user">
                <div className="other-city-user-content">
                  <div className="title-other-city-user">
                    <h2 className="title-other-user">Cùng khám phá các thành phố khác nhé!</h2>
                  </div>
                  {
                    (othercity&&othercity.length>0)?
                      <div className="list-city-other-user">
                          {othercity.map((otherCity) => (
                            <CityHomeUserComponent dataNameCity={otherCity.name} dataImgCity={otherCity.img} id={otherCity.id}/>
                          ))}
                      </div>
                    : <div>Không tìm thấy thêm thành phố nào khác</div>
                  }
                </div>
              </div>
      </div>
    }
    </div>
    );
}

export default CityUserScreen;