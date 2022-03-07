import React, { useEffect } from 'react';
import './Detail.css';
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinPhimAction } from '../../redux/actions/QuanLiPhimAction';
import moment from 'moment';
import { Progress, Rate, Tabs } from 'antd';
import DetailComponent from '../../components/DetailComponent/DetailComponent';
import BookingTiketComponent from '../../components/BookingTiketComponent/BookingTiketComponent';

const { TabPane } = Tabs;

export default function Detail(props) {
    const idPhim = props.match.params.id;

    const { thongTinPhim } = useSelector(state => state.FilmReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(layThongTinPhimAction(idPhim));
    }, [])


    // console.log(thongTinPhim.tenPhim)

    return (

        <div className="detail">
            <div className="detail__background" style={{ background: `url(${thongTinPhim.hinhAnh})` }}></div>
            <div className="detail__info">
                <div className="row">
                    <div className="col-6 col-sm-3">
                        <img src={thongTinPhim.hinhAnh} alt="" />
                    </div>
                    <div className="col-6 col-sm-5 detail__info__item">
                        <p>{moment(thongTinPhim.ngayKhoiChieu).format("DD/MM/YYYY")}</p>
                        <h3>{thongTinPhim.tenPhim}</h3>
                    </div>
                    <div className="col-sm-4 pt-5 danhgia">
                        <Progress type="circle" percent={thongTinPhim.danhGia * 10} format={(percent) => {
                            return percent / 10
                        }} />

                        <span className="card__rate">
                            <div className="card__rate__item">
                                <Rate disabled value={thongTinPhim.danhGia / 2} />
                            </div>
                        </span>
                    </div>
                </div>
            </div>

            <div className="detail__background__tab">
                <div className="detail__tab">
                    <Tabs defaultActiveKey="1" centered>
                        <TabPane tab="Thông Tin" key="1">
                            <DetailComponent phim={thongTinPhim} />
                        </TabPane>
                        <TabPane tab="Đặt Vé" key="2">
                            <BookingTiketComponent idPhim={idPhim} />
                        </TabPane>
                    </Tabs>
                </div>
            </div>

        </div>
    )
}
