
import React, { Fragment} from 'react';
import { Tabs, Tag } from 'antd';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCumRapHeThongAction } from '../../../redux/actions/QuanLiPhimAction';
import './CumRapHeThongComponent.css'
import moment from 'moment';
import { NavLink } from 'react-router-dom';


export default function CumRapHeThongComponent(props) {
    const { TabPane } = Tabs;

    const renderSubTab = () => {
        return props.lstCumRap.map((item, index) => {
            return <TabPane onTabScroll={"bottom"} tab={<div className="cumRapHeThong row">
                <div className="cumRapHeThong__layout"></div>
                <div className="col-2">
                    <img width={30} height={30} src={props.logo} alt={`logo ${item.tenCumRap}`} />
                </div>
                <div className="col-10 d-flex flex-column align-items-start justify-content-center" style={{ fontSize: 14 }}>
                    <p style={{ margin: 0 }}>{item.tenCumRap}</p>
                </div>
            </div>} key={index}>
                {
                    item.danhSachPhim.filter(x => x.dangChieu).map((phim, index) => {
                        let count = 0;
                        return <Fragment>
                            <div className="phim mt-2 d-flex align-items-center" key={index}>
                                <img width={70} height={100} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e) => {
                                    e.target.onerror = null; e.target.src = "https://i.pinimg.com/originals/70/ce/41/70ce41310f8a9c2a84e97b57198015d9.gif"
                                }} />
                                <div className="ml-4">
                                    <p className="text-success" style={{ fontWeight: 700 }} >{phim.tenPhim}</p>
                                    <p>Ngày chiếu: {moment(phim.lstLichChieuTheoPhim[count]?.ngayChieuGioChieu).format("DD/MM/yyyy")}</p>
                                    <div className="lichchieu grid grid-cols-3 gap-10 mt-3">
                                        {
                                            // console.log('lichChieu', phim.lstLichChieuTheoPhim.splice(0,5));
                                            phim.lstLichChieuTheoPhim.splice(0, 5).map((lichChieu, index) => {
                                                return <NavLink to={`/datve/${lichChieu.maLichChieu}`}>
                                                    <Tag key={index} color="blue">{moment(lichChieu.ngayChieuGioChieu).format("hh:mm A")}</Tag>
                                                </NavLink>
                                            })
                                        }
                                    </div>
                                </div>

                            </div>
                            <hr />
                        </Fragment>
                        count++;
                    })
                }
            </TabPane>
        })
    }


    return (


        <div className="cum" id="cumrap">
            <Tabs style={{ height: 400 }} tabPosition="left">
                {renderSubTab()}
            </Tabs>
        </div>
    )
}
