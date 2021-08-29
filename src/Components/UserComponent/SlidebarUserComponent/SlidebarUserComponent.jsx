import React from "react";
import './SlidebarUserComponent.css';
import Slider from 'react-slick';
function SlidebarUserComponent(props) {
  const listImg =props.dataImgObject;

  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '20%',
    
  };
  return(
      <div className="slidebar-user">
				<link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
				<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
				<Slider {...settings}>
          {listImg.map((img)=>(
            <div className="slidebar-user-item">
						  <img className="img-slidebar-user-item" src={img.url} alt="Slidebar"/>
					  </div>
          ))}
				</Slider>
			</div>
		);
}
export default SlidebarUserComponent;