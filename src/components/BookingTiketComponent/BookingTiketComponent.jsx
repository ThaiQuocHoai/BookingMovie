import React, { useEffect } from 'react';
import './BookingTiketComponent.css';
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinLichChieuPhimAction } from '../../redux/actions/QuanLiPhimAction';
import { Tabs } from 'antd';
import BookingTiketDetailComponent from './BookingTiketDetailComponent.jsx/BookingTiketDetailComponent';

const { TabPane } = Tabs;

export default function BookingTiketComponent(props) {

    const dispatch = useDispatch();

    const { thongTinLichChieuPhim } = useSelector(state => state.FilmReducer)

    useEffect(() => {
        dispatch(layThongTinLichChieuPhimAction(props.idPhim));
    }, [])

    const renderTab = () => {
        return thongTinLichChieuPhim.heThongRapChieu?.map((item, index) => {
            return <TabPane tab={<img width="50" src={item.logo} />} key={index}>
                <BookingTiketDetailComponent cumRapChieu={item.cumRapChieu} />
            </TabPane>
        })
        // console.log(thongTinLichChieuPhim);
    }

    return (
        <div className="booking">
            <Tabs tabPosition="left">
                {renderTab()}
            </Tabs>
        </div>
    )
}
