import React, { useEffect } from 'react';
import { ACCESS_TOKEN } from '../../util/settings';
import './Profile.css';
import { Tabs } from 'antd';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';
import { useDispatch, useSelector } from 'react-redux';
import { thongTinNguoiDdung } from '../../redux/actions/UserAction';
import HistoryBooking from '../../components/HistoryBooking/HistoryBooking';

const { TabPane } = Tabs;


export default function Profile(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(thongTinNguoiDdung(localStorage.getItem(ACCESS_TOKEN)));
    }, [])  

    return (
        <div className="profile">
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Thông tin cá nhân" key="1">
                    <ProfileComponent/>
                </TabPane>
                <TabPane tab="Lịch sử đặt vé" key="2">
                    <HistoryBooking />
                </TabPane>
            </Tabs>
        </div>
    )
}
