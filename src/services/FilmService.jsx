import baseService from "./baseService";



export class FilmService extends baseService{
    layThongTinPhim = (idPhim) => {
      return this.get(`http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idPhim}`);
    }
    layThongTinLichChieuPhim = (idPhim) => {
      return this.get(`http://movieapi.cyberlearn.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idPhim}`);
    }
    layThongTinDatVe = (maLichChieu) => {
      return this.get(`http://movieapi.cyberlearn.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
    }
    datVeService = (data, token) => {
      return this.post(`http://movieapi.cyberlearn.vn/api/QuanLyDatVe/DatVe`, data, token);
    }
}


export const FilmManagerService = new FilmService();