import LoginComponent from "../../components/LoginComponent/LoginComponent";
import { HISTORY_BOOKING, USER_LOGN } from "../../util/settings";
import { LOGIN_FAIL, OPEN_MODAL_USER, USER_INFO } from "../actions/types/UserType"

let usLogin = '';
if(localStorage.getItem(USER_LOGN)) {
    usLogin = JSON.parse(localStorage.getItem(USER_LOGN));
}

const initialState = {
    Component: {
        name: LoginComponent ,
        type: 'Đăng Nhập',
        isModalVisible: false
    },
    userLogin: usLogin,
    loginFail: '',
    user: {},
    thongTinDatVe: {}
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL_USER : {
            let component = {...state.Component};
            component.name = action.component.name;
            component.type = action.component.type;
            component.isModalVisible = action.component.isModalVisible;
            return {...state, Component: component, loginFail: ''}
        }

        case LOGIN_FAIL : {
            // console.log({action});
            return {...state, loginFail: action.loginFail}
        }

        case USER_INFO : {
            localStorage.setItem(USER_LOGN, JSON.stringify(action.user));
            return {...state, user: action.user}
        }

        case HISTORY_BOOKING : {
            return {...state, thongTinDatVe: action.historyBooking}
        }

    default:
        return {...state}
    }
}
