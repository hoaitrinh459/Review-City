import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadAllCity } from "../../../Redux/UserRedux/ActionsUser/CityActionUser";
import './AllCityUserScreen.css';
import CityHomeUserComponent from "../../../Components/UserComponent/CityHomeUserComponent/CityHomeUserComponent";
import LoadingModal from "react-loading-bubbles";
function AllCityUserScreen() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allcity.data);
  const requesting = useSelector((state) => state.allcity.requesting);
  useEffect(() => {
    dispatch(loadAllCity());
  }, [dispatch]);

  return(
    <div className="all-city-user-screen">
      <div className="all-city-user">
        <div className="all-city-user-content">
          <h1 className="h1-title-all-city-and-blog">Thành phố</h1>
            {
              requesting ?
              <LoadingModal size={128} color="#23D3D3" />
              :
                (data && data.length > 0)?
                <div className="all-city-user-content-detail">
                {data.map((city) => (
                  <CityHomeUserComponent dataNameCity={city.name} dataImgCity={city.img} id={city.id}/>
                ))}
                </div>
                : <div>Không tìm thấy thành phố nào.</div>
            }
        </div>
      </div>
    </div>
  );
}
export default AllCityUserScreen;