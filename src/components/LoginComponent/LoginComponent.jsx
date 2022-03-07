import React from 'react';
import './LoginComponent.css';
import {useFormik} from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, openComponent } from '../../redux/actions/UserAction';
import RegisterComponent from '../RegisterComponent/RegisterComponent';

export default function LoginComponent(props) {

    const dispatch = useDispatch();

    const {loginFail} = useSelector(s=>s.UserReducer);

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: ''
        },
        onSubmit: (val) => {
          dispatch(loginAction(val));
        }
    })

    const handleRegister = () => {
        dispatch(openComponent({
            name: RegisterComponent,
            type: 'Đăng Kí',
            isModalVisible: true
        }))
        // window.location.reload();
    };


    return (
        <form onSubmit={formik.handleSubmit} className="container">
            <div className="group">
                <input type="text" name='taiKhoan' required onChange={formik.handleChange} />
                <span className="highlight" />
                <span className="bar" />
                <label>Username</label>
            </div>
            <div className="group">
                <input type="password" name='matKhau' required onChange={formik.handleChange} />
                <span className="highlight" />
                <span className="bar" />
                <label>Password</label>
            </div>
            <div className="text-danger text-center">
                <p>{loginFail}</p>
            </div>
            <div className="text-center">
                <button className="btnModal">Đăng nhập</button>
            </div>
            <div className="text-center">
                <p><span>Bạn chưa có tài khoản? </span><a className="modalLink" onClick={() => {
                  handleRegister();
                }}>Đăng kí tại đây</a></p>
            </div>
        </form>
    )
}
