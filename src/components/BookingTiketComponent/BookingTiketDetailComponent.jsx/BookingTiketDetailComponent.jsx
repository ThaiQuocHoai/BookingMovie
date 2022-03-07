import React from 'react';
import { Tag } from 'antd';
import moment from 'moment';
import './BookingTiketDetailComponent.css';
import { NavLink } from 'react-router-dom';

export default function BookingTiketDetailComponent(props) {

    const { cumRapChieu } = props;

    console.log({ cumRapChieu });

    const renderDatVe = () => {
        return cumRapChieu.map((item, index) => {
            return <div key={index}>
                <div className="row">
                    <div className="col-sm-4 ">
                        <img width="120" src={item.hinhAnh} alt="..." />
                    </div>
                    <div className="col-12 col-sm-8">
                        <p>{item.tenCumRap}</p>
                        <p>{item.diaChi}</p>
                        {item.lichChieuPhim?.splice(0, 5).map((phim, index) => {
                            return <NavLink to={`/datve/${phim.maLichChieu}`}><Tag color="green" key={index}>
                                {moment(phim.ngayChieuGioChieu).format("HH:MM A")}
                            </Tag></NavLink>
                        })}
                    </div>
                </div>
            </div>
        })
    }

    return (
        <div className="booking-tiket-detail">
            {renderDatVe()}
        </div>
    )
}
