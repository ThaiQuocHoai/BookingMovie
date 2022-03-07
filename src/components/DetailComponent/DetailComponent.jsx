import moment from 'moment';
import React from 'react';
import './DetailComponent.css';

export default function DetailComponent(props) {

    const { phim } = props;

    return (
        <div className="detail-component">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Tên phim</li>
                                <li>Ngày công chiếu</li>
                                <li>Đạo diễn</li>
                                <li>Diễn viên</li>
                                <li>Thể loại</li>
                                <li>Quốc gia</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>{phim.tenPhim}</li>
                                <li>{moment(phim.ngayKhoiChieu).format("DD/MM/YYYY")}</li>
                                <li>Chưa cập nhật</li>
                                <li>Chưa cập nhật</li>
                                <li>Chưa cập nhật</li>
                                <li>Chưa cập nhật</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    
                    <ul>
                        <li>Nội dung</li>
                        <li><p>{phim.moTa} {phim.moTa?.length < 100? ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem expedita consectetur commodi recusandae quis quia quasi nemo accusamus dolor aut, necessitatibus quo unde voluptates sunt hic, eaque dignissimos, obcaecati provident?' : ''}</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
