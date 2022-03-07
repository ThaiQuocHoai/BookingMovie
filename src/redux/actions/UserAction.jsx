import { UserManagerService } from "../../services/UserService";
import { ACCESS_TOKEN, HISTORY_BOOKING, USER_LOGN } from "../../util/settings";
import { LOGIN_ERROR, LOGIN_FAIL, OPEN_MODAL_USER, USER_INFO } from "./types/UserType";
import { history } from './../../App';
import axios from "axios";
// import { Modal, Button } from 'antd';


export const openComponent = (component) => ({
    type: OPEN_MODAL_USER,
    component
});

export const loginFailAction = () => ({
    type: LOGIN_FAIL,
    loginFail: LOGIN_ERROR
})

// function countDown(message) {
//     let secondsToGo = 2;
//     const modal = Modal.success({
//         title: `${message} thành công`,
//         content: `Quay lại sau ${secondsToGo}s.`,
//     });
//     const timer = setInterval(() => {
//         secondsToGo -= 1;
//         modal.update({
//             content: `Quay lại sau ${secondsToGo}s.`,
//         });
//     }, 1000);
//     setTimeout(() => {
//         clearInterval(timer);
//         modal.destroy();
//         window.location.reload()
//     }, secondsToGo * 1000);
// }

export const loginAction = (user) => {
    return async dispatch => {
        try {
            const result = await UserManagerService.dangNhap(user);

            localStorage.setItem(USER_LOGN, JSON.stringify(result.data.content));
            localStorage.setItem(ACCESS_TOKEN, result.data.content.accessToken);

            history.push("/");

            dispatch(openComponent({
                name: '',
                type: '',
                isModalVisible: false
            }))

            window.location.reload();

        } catch (errors) {
            dispatch(loginFailAction());
        }
    }
}
export const registerAction = (user) => {
    return async dispatch => {
        try {

            const data = { ...user, maNhom: 'GP01' }

            const result = await UserManagerService.dangKi(data);

            localStorage.setItem(USER_LOGN, JSON.stringify(result.data.content));
            localStorage.setItem(ACCESS_TOKEN, result.data.content.accessToken);

            history.push("/");

            dispatch(openComponent({
                name: '',
                type: '',
                isModalVisible: false
            }))

            // countDown('Đăng kí');
            window.location.reload();

        } catch (errors) {
            console.log({ errors });
        }
    }
}

export const thongTinNguoiDdung = (token) => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });
            dispatch({
                type: USER_INFO,
                user: result.data.content
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}

export const capNhatAction = (user, token) => {
    return async dispatch => {
        try {
            const result = await UserManagerService.capNhat(user, token);

            dispatch({
                type: USER_INFO,
                user: result.data.content
            })
        } catch (errors) {
            console.log(errors);
        }
    }
}


export const lichSuDatVe = (taiKhoan) => {
    return async dispatch => {
        try {

            const data = { taiKhoan }

            const result = await UserManagerService.lichSuDatVe(data);
            dispatch({
                type: HISTORY_BOOKING,
                historyBooking: result.data
            })
        } catch (errors) {
            console.log(errors);
        }
    }
}