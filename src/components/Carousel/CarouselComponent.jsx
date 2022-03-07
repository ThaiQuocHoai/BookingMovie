import React, { useState } from 'react'
import Slider from 'react-slick'
import './CarouselComponent.css'
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/css/modal-video.css';
import playVideo from '../../assets/img/icons/slide/play-video.png';

export default function CarouselComponent(props) {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [isOpenVideo1, setOpenVideo1] = useState(false)
    const [isOpenVideo2, setOpenVideo2] = useState(false)
    const [isOpenVideo3, setOpenVideo3] = useState(false)


    return (
        <div className="carousel__movie">
            <Slider {...settings} className="header__slick">
                <div className="slide__slick">
                    <img src="https://s3img.vcdn.vn/123phim/2021/04/trang-ti-16194117174325.jpg" alt="..." />
                        <button className="btn-play" onClick={() => setOpenVideo1(true)}>
                            <img src={playVideo} alt="play-button"/>
                        </button>     
                </div>
                <div className="slide__slick">
                    <img src="https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16177782153424.png" alt="..." />
                    <button className="btn-play" onClick={() => setOpenVideo2(true)}>
                        <img src={playVideo} alt="play-button"/>
                    </button>
                </div>
                <div className="slide__slick">
                    <img src="https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png" alt="..." />
                    <button className="btn-play" onClick={() => setOpenVideo3(true)}>
                        <img src={playVideo} alt="play-button"/>
                    </button>
                </div>
            </Slider>
            <ModalVideo channel='youtube' autoplay isOpen={isOpenVideo1} videoId="l2XBzUZidig" onClose={() => setOpenVideo1(false)} />
            <ModalVideo channel='youtube' autoplay isOpen={isOpenVideo2} videoId="kBY2k3G6LsM" onClose={() => setOpenVideo2(false)} />
            <ModalVideo channel='youtube' autoplay isOpen={isOpenVideo3} videoId="uqJ9u7GSaYM" onClose={() => setOpenVideo3(false)} />
        </div>
    )
}
