import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFilmsAction } from '../../../redux/actions/QuanLiPhimAction';
import Phim from '../Phim';
import './FilmMobileDangChieu.css';


const FilmMobileSapChieu = (props) => {
    let { danhSachPhim } = useSelector(state => state.FilmReducer);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getFilmsAction());
    },[])

    let [numberItems, setNumberItems] = useState(4);

    const danhSachPhimSoSanh = danhSachPhim.filter(x => x.sapChieu);

    const danhSachPhimDangChieu = danhSachPhim.filter(x => x.sapChieu).splice(0, numberItems);

    const renderPhimDangChieu = () => {
        return danhSachPhimDangChieu.map((phim, index) => {
            return <div key={index}>
                <Phim phim={phim} />
            </div>
        })
    }



    return (
        <div className="d-flex flex-column align-items-center filmmobile">
            {renderPhimDangChieu()}
            {numberItems < danhSachPhimSoSanh.length ? <button className="btn btn-show" onClick={()=>{
                setNumberItems(numberItems= numberItems + 3);
            }}>Xem thêm</button> : ''}
        </div>
    )
}

export default FilmMobileSapChieu
