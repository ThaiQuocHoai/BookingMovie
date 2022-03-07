import moment from 'moment';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { lichSuDatVe } from '../../redux/actions/UserAction';
import logo from '../../assets/img/icons/slide/web-logo.png'
import './HistoryBooking.css';

export default function HistoryBooking() {

    const { user, thongTinDatVe } = useSelector(s => s.UserReducer);


    const dispatch = useDispatch();

    console.log(user.taiKhoan)

    useEffect(() => {
        dispatch(lichSuDatVe(user.taiKhoan))
    }, [])


    const renderLichSuDatVe = () => {

        if(Object.keys(thongTinDatVe).length !== 0 && thongTinDatVe.constructor === Object){
            return thongTinDatVe?.thongTinDatVe.map((item,index) => {
                return item.danhSachGhe.map((ghe, index) => {
                    return <div className="row mt-4">
                    <div className="historybooking__img col-12 col-lg-2 mb-4">
                        <img width={60} height={90} src={logo} alt="" />
                    </div>
                    <div className="historybooking__detail col-12 col-lg-10">
                        <p>{ghe.tenHeThongRap}</p>
                        <p>Phim: {item.tenPhim}</p>
                        <p>Ngày đặt: {moment(item.ngayDat).format("DD/MM/YYYY")} - {ghe.tenRap} - Ghế {ghe.tenGhe}</p>
                    </div>
                </div>
                })
            })
        }
    }


    return (
        <div className="container lichSuDatVe">
            {renderLichSuDatVe()}
        </div>
    )
}
