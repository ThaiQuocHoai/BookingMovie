import React from 'react';
import { Card } from 'antd';
import './Phim.css';
import moment from 'moment';
import playVideo from '../../assets/img/icons/slide/play-video.png';
import { NavLink } from 'react-router-dom';
import { Rate } from 'antd';
// import ModalVideo from 'react-modal-video';
import { useDispatch } from 'react-redux';
import { playModal } from '../../redux/actions/QuanLiPhimAction';
// import { motion } from "framer-motion";




export default function Phim(props) {

    const dispatch = useDispatch();

    const { Meta } = Card;

    const { phim } = props;

    const camelString = (tenPhim) =>{
        let ten = tenPhim.toLowerCase();
        return ten.replace(' ', '-');
    }

    // const animateImg ={
    //     transfrom: 'rotateY(180deg)',
    //     transition:{    
    //         default: {duration: 5}
    //     }
    // }


    return (
        <NavLink to={`/detail/${phim.maPhim}-${camelString(phim.biDanh)}`} >
            <Card className="card text-center"
                hoverable
                style={{ width: 220 }}
                cover={<img  width={190} height={270} alt={phim.tenPhim} src={phim?.hinhAnh} onError={(e) => {
                        e.target.onerror = null; e.target.src = "https://i.pinimg.com/originals/70/ce/41/70ce41310f8a9c2a84e97b57198015d9.gif"
                    }} />}
            >
                <span className="card__rate">
                    <div className="card__rate__item">
                        <p className="card__p">{phim.danhGia.toLocaleString()}</p>
                        <Rate disabled value={phim.danhGia / 2} />
                    </div>
                </span>
                <div className="card__layout"></div>
                <button className="btnPlay" onClick={() => {
                    dispatch(playModal(phim.maPhim, phim.trailer, true));
                }}><img src={playVideo} alt={playVideo} /></button>
                <NavLink to={`/detail/${phim.maPhim}-${camelString(phim.biDanh)}`} className="btnMuaVe">Mua vé</NavLink>
                <Meta title={phim.tenPhim} description={`${moment(phim.ngayKhoiChieu).format("DD-MM-yyyy")}`} />
            </Card>
        </NavLink>
    )
}
