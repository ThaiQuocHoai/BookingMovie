import { GET_CUM_RAP, GET_CUM_RAP_HE_THONG, GET_FILMS, GET_THONG_TIN_DAT_VE, PLAY_MODAL } from "../actions/types/QuanLiPhimType";
import { LAY_THONG_TIN_LICH_CHIEU_PHIM, LAY_THONG_TIN_PHIM } from "../actions/types/UserType";


const defaultState = {
    danhSachPhim: [],
    modalDefault: {
        maPhim: '',
        trailer: '',
        isOpen: false
    },
    cumRap: [],
    cumRapTheoHeThong: [],
    thongTinPhim: {},
    thongTinLichChieuPhim: {},
    thongTinDatVe: {}
}

export const FilmReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_FILMS: {
            // let danhSachPhim = [...state.danhSachPhim];
            // danhSachPhim = action.mangPhim;
            // state.danhSachPhim = danhSachPhim;
            state.danhSachPhim = action.mangPhim
            return {...state};
        }

        case PLAY_MODAL : {
            let modal = {...state.modalDefault};
            modal.maPhim = action.maPhim;
            modal.trailer = action.trailerId;
            modal.isOpen = action.isOpen
            return {...state, modalDefault: modal};
        }

        case GET_CUM_RAP : {
            return {...state, cumRap: action.cumRap}
        }

        case GET_CUM_RAP_HE_THONG : {
            return {...state, cumRapTheoHeThong: action.cumRapTheoHeThong}
        }

        case LAY_THONG_TIN_PHIM : {
            return {...state, thongTinPhim: action.thongTinPhim}
        }
        case LAY_THONG_TIN_LICH_CHIEU_PHIM : {
            return {...state, thongTinLichChieuPhim: action.thongTinLichChieuPhim}
        }

        case GET_THONG_TIN_DAT_VE : {
            // console.log({action})
            return {...state, thongTinDatVe: action.data}
        }
    
        default: return {...state}
    }
}
