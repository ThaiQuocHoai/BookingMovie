import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { datVeAction, layThongTinDatVeAction } from '../../redux/actions/QuanLiPhimAction';
import { DeleteOutlined } from '@ant-design/icons'
import './DatVe.css';
import { ACCESS_TOKEN } from './../../util/settings'

export default function DatVe(props) {

    const maLichChieu = props.match.params.id;

    let [gheDangDat, setGheDangDat] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(layThongTinDatVeAction(maLichChieu));
    }, [])

    const { thongTinDatVe } = useSelector(state => state.FilmReducer);

    const danhSachGhe = thongTinDatVe.danhSachGhe;
    const thongTinPhim = thongTinDatVe.thongTinPhim;

    const renderGhe = () => {
        return danhSachGhe?.map((ghe, index) => {
            let gheDaDat = {};
            let dangDat = {};
            if (ghe.daDat) {
                gheDaDat = {
                    backgroundColor: 'white',
                    border: '1px solid gray',
                    color: 'gray',
                    cursor: 'no-drop'
                }
            }

            if (gheDangDat?.find(x => x.tenGhe === ghe.tenGhe)) {
                dangDat = {
                    backgroundColor: 'green'
                }
            }

            return <button className='btn btnGhe' style={ghe.daDat ? gheDaDat : dangDat} disabled={ghe.daDat} key={index} onClick={() => {
                let index = gheDangDat?.findIndex(s => s.tenGhe === ghe.tenGhe);
                if (index >= 0) {
                    gheDangDat.splice(index, 1);
                } else {
                    gheDangDat.push(ghe);
                }
                setGheDangDat([...gheDangDat]);
            }}>
                {ghe.daDat ? 'X' : ghe.tenGhe}
            </button>
        })
    }

    const renderHoaDon = () => {
        return gheDangDat?.map((ghe, index) => {
            return <tr key={index}>
                <td>{index + 1}</td>
                <td>{ghe.tenGhe}</td>
                <td>{ghe.giaVe}đ</td>
                <td><button className="btn btn-danger" onClick={() => {
                    gheDangDat = gheDangDat?.filter(s => s.tenGhe !== ghe.tenGhe);
                    setGheDangDat([...gheDangDat]);
                }}><DeleteOutlined /></button></td>
            </tr>
        })
    }

    return (

        <div className="datve container-fluid">
            <div className="row p-5">
                <div className="col-12 col-lg-8">
                    <div className="datve__info">
                        <h3>{thongTinPhim?.tenCumRap}</h3>
                        <p>Đặt vé: <b> {thongTinPhim?.tenPhim} </b></p>
                    </div>
                    <div className="hangGhe">
                        {renderGhe()}
                    </div>
                </div>
                <div className="col-12 col-lg-4 datve__title">
                    <h3 className="text-warning">Danh sách ghế đang đặt</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Stt.</th>
                                <th>Tên Ghế</th>
                                <th>Giá tiền</th>
                                <th>Huỷ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderHoaDon()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="2" className="text-left">
                                    <b>Tổng tiền:</b> {gheDangDat?.reduce((tongTien, ghe) => {
                                        return tongTien += ghe.giaVe;
                                    }, 0)}đ
                                </td>
                                <td colSpan="2" className="text-right">{gheDangDat.length > 0 ? <button className="btn btn-success" onClick={() => {
                                    const data = {
                                        maLichChieu: maLichChieu,
                                        danhSachVe: gheDangDat
                                    }
                                    const token = localStorage.getItem(ACCESS_TOKEN);
                                    dispatch(datVeAction(data, token));
                                }}>Thanh toán</button> : ''}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}
