import React, {  useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Tabs } from "antd";
import 'antd/dist/antd.css';
import './FilmCoponent.css'
import { getFilmsAction, playModal } from "../../redux/actions/QuanLiPhimAction";
import Phim from "./Phim";
import Slider from 'react-slick'
// import FilmMobile from "./FilmMobile/FilmMobileDangChieu";
import ModalVideo from 'react-modal-video'
import FilmMobileDangChieu from "./FilmMobile/FilmMobileDangChieu";
import FilmMobileSapChieu from "./FilmMobile/FilmMobileSapChieu";


export default function FilmComponent() {
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }

  let { danhSachPhim, modalDefault } = useSelector(state => state.FilmReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilmsAction());
  }, [])


  const renderPhimDangChieu = () => {
    const danhSachPhimDangChieu = danhSachPhim.filter(x => x.dangChieu);
    return danhSachPhimDangChieu.map((phim, index) => {
      return <div key={index}>
        <Phim phim={phim} />
      </div>
    })
  }
  const renderPhimSapChieu = () => {
    const danhSachPhimSapChieu = danhSachPhim.filter(x => x.sapChieu);
    return danhSachPhimSapChieu.map((phim, index) => {
      return <div key={index}>
        <Phim phim={phim} />
      </div>
    })
  }

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    // slidesPerRow: 2,
    // centerMode: true
    responsive: [
      {
        breakpoint: '769.99px',
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 2,
          infinite: true,
          arrows: false
        }
      },
    ]
  };

  const getVideoId = () =>{
    let arrVid = modalDefault.trailer.split("/");
    let lastId = arrVid[arrVid.length -1];
    if(lastId.indexOf("=")>0){
      return lastId.split("=")[1];
    } 
    return lastId;
  }


  return (
    <div className="film" id="film">
      <Tabs defaultActiveKey="1" onChange={callback} centered={true}>
        <TabPane tab="Đang Chiếu" key="1">
          <div className="container film__item">
            <Slider {...settings}>
              {renderPhimDangChieu()}
            </Slider>
          </div>
          <FilmMobileDangChieu />
        </TabPane>
        <TabPane tab="Sắp Chiếu" key="2">
          <div className="container film__item">
            <Slider {...settings}>
              {renderPhimSapChieu()}
            </Slider>
          </div>
          <FilmMobileSapChieu />
        </TabPane>
      </Tabs>
      <ModalVideo channel='youtube' isOpen={modalDefault.isOpen} videoId={getVideoId()} onClose={() => {dispatch(playModal('', '', false))}} />
    </div>
  );
}


