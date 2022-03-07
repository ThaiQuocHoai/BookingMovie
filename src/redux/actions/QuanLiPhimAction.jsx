import axios from 'axios';
import { GET_CUM_RAP, GET_CUM_RAP_HE_THONG, GET_FILMS, GET_THONG_TIN_DAT_VE, PLAY_MODAL } from './types/QuanLiPhimType';

import { FilmManagerService } from './../../services/FilmService';
import { LAY_THONG_TIN_LICH_CHIEU_PHIM, LAY_THONG_TIN_PHIM } from './types/UserType';

export const getFilmsAction = () => {


    return async dispatch => {
        try {
            const result = await axios({
                url: 'http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                method: 'GET',
            });
            dispatch({
                type: GET_FILMS,
                mangPhim: result.data.content,
            })
        } catch (errors) {
            console.log(errors.response.data);
        }
    }
}
export const playModal = (maPhim, trailerId, isOpen) => ({
    type: PLAY_MODAL,
    maPhim: maPhim, trailerId: trailerId, isOpen: isOpen
})

export const getCumRapAction = () => {
    return async dispatch => {
        try {
            const result = await axios({
                url: 'http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01',
                method: 'GET',
            });
            dispatch({
                type: GET_CUM_RAP,
                cumRap: result.data.content,
            })
        } catch (errors) {
            console.log(errors.response.data);
        }
    }
}
export const getCumRapHeThongAction = (maHeThong) => {
    return async dispatch => {
        try {
            const result = await axios({
                url: `http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThong}`,
                method: 'GET',
            });
            dispatch({
                type: GET_CUM_RAP_HE_THONG,
                cumRapTheoHeThong: result.data.content,
            })
        } catch (errors) {
            console.log(errors.response.data);
        }
    }
}

export const layThongTinPhimAction = (idPhim) => {
    return async dispatch => {
        try {
            const result = await FilmManagerService.layThongTinPhim(idPhim);

            dispatch({
                type: LAY_THONG_TIN_PHIM,
                thongTinPhim: result.data.content
            })

        } catch (error) {
            console.log(error);
        }
    }
}
export const layThongTinLichChieuPhimAction = (idPhim) => {
    return async dispatch => {
        try {
            const result = await FilmManagerService.layThongTinLichChieuPhim(idPhim);

            dispatch({
                type: LAY_THONG_TIN_LICH_CHIEU_PHIM,
                thongTinLichChieuPhim: result.data.content
            })

        } catch (error) {
            console.log(error);
        }
    }
}

export const layThongTinDatVeAction = (maLichChieu) => {
    return async dispatch => {
        try {
            const result = await FilmManagerService.layThongTinDatVe(maLichChieu);
            // console.log({result});
            dispatch({
                type: GET_THONG_TIN_DAT_VE,
                data: result.data.content
            })
            
        } catch (errors) {
            console.log(errors);
        }
    }
}

export const datVeAction = (data, token) => {
    return async () => {
        try {
           await FilmManagerService.datVeService(data, token);
            window.location.reload();
        } catch (errors) {
            console.log(errors);
        }
    }
}