import React from 'react';
import './../LoginComponent/LoginComponent.css';
import {useFormik} from 'formik';
import { useDispatch } from 'react-redux';
import {  openComponent, registerAction } from '../../redux/actions/UserAction';
import { MA_NHOM } from '../../util/settings';
import LoginComponent from '../LoginComponent/LoginComponent';

export default function RegisterComponent(props) {

    const dispatch = useDispatch();


    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            hoTen: '',
            maNhom: MA_NHOM
        },
        onSubmit: (val) => {
          dispatch(registerAction(val));
        }
    })

    const handleLogin = () => {
        dispatch(openComponent({
            name: LoginComponent,
            type: 'Đăng Nhập',
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
            <div className="group">
                <input type="email" name='email' required onChange={formik.handleChange} />
                <span className="highlight" />
                <span className="bar" />
                <label>Email</label>
            </div>
            <div className="group">
                <input type="text" name='soDt' required onChange={formik.handleChange} />
                <span className="highlight" />
                <span className="bar" />
                <label>Phone number</label>
            </div>
            <div className="group">
                <input type="text" name='hoTen' required onChange={formik.handleChange} />
                <span className="highlight" />
                <span className="bar" />
                <label>Full name</label>
            </div>

            <div className="text-center">
                <button className="btnModal">Đăng kí</button>
            </div>
            <div className="text-center">
                <p><span>Bạn đã có tài khoản? </span><a className="modalLink" onClick={() => {
                  handleLogin();
                }}>Đăng nhập tại đây</a></p>
            </div>
        </form>
    )
}
