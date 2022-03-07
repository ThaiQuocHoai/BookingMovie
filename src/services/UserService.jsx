// import { ACCESS_TOKEN } from "../util/settings";
import baseService from "./baseService";

export class UserService extends baseService{
    dangNhap = (user) =>{
        return this.post('http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangNhap', user);
    }
    dangKi = (user) =>{
        return this.post('http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangKy', user);
    }
    capNhat = (user, token) => {
        return this.put('http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung', user, token)
    }
    lichSuDatVe = (taiKhoan) => {
        return this.post('https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan', taiKhoan)
    }
}

export const UserManagerService = new UserService();