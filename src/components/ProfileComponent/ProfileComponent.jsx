import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
// import { USER_LOGN } from '../../util/settings';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import './ProfileComponent.css';
import * as yup from 'yup';
import { USER_INFO } from '../../redux/actions/types/UserType';
import { capNhatAction } from '../../redux/actions/UserAction';
import { ACCESS_TOKEN } from '../../util/settings';


export default function ProfileComponent(props) {

    const { user } = useSelector(s => s.UserReducer)

    const dispatch = useDispatch();

    let [edit, setEdit] = useState(true);

    const editField = (flag) => {
        setEdit(flag);
    }

    const pointerStyle = {
        pointerEvents: 'none',
        cursor: 'no-drop'
    }

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: user.taiKhoan,
            matKhau: user.matKhau,
            hoTen: user.hoTen,
            email: user.email,
            soDt: user.soDt,
            maNhom: user.maNhom ? user.maNhom : 'GP01',
            maLoaiNguoiDung: user.maLoaiNguoiDung ? user.maLoaiNguoiDung : 'KhachHang',
        },
        validationSchema: yup.object().shape({
            matKhau: yup.string().required('Mật khẩu không được bỏ trống').min(6, 'Mật khẩu từ 6-20 kí tự').max(20, 'Mật khẩu từ 6-20 kí tự'),
            hoTen: yup.string().required('Họ tên không được bỏ trống'),
            email: yup.string().required('Email không được bỏ trống').matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email không hợp lệ'),
            soDt: yup.string().matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/, 'Vui lòng nhập trên 10 kí tự số'),
        }),
        onSubmit: async (values) => {
          await dispatch(capNhatAction(values, localStorage.getItem(ACCESS_TOKEN)));
          alert('Cập nhật thành công');
          window.location.reload();
        }
    })


    return (
        <form className="form-group w-100 px-5 profileComponent" onSubmit={formik.handleSubmit} >
            <div className="row">
                <div className="col-12 col-lg-6">
                    <p>Tài khoản</p>
                    <input type="text" style={pointerStyle} name="taiKhoan" value={formik.values.taiKhoan} className="form-control" />
                </div>
                <div className="col-12 col-lg-6">
                    <p>Mật khẩu</p>
                    {/* <input type="password" name="matKhau" value={formik.initialValues.matKhau} className="form-control" /> */}
                    <Input.Password
                        style={edit ? pointerStyle : { cursor: 'auto' }} onChange={(e) => {
                            formik.setFieldValue('matKhau', e.target.value)
                        }}
                        value={formik.values.matKhau}
                        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                    <p className='text-danger'>{formik.errors.matKhau}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-lg-6">
                    <p>Email</p>
                    <input type="text" style={edit ? pointerStyle : { cursor: 'auto' }} name="email" onChange={formik.handleChange} value={formik.values.email} className="form-control" />
                    <p className='text-danger'>{formik.errors.email}</p>
                </div>
                <div className="col-12 col-lg-6">
                    <p>Họ và tên</p>
                    <input type="text" style={edit ? pointerStyle : { cursor: 'auto' }} name="hoTen" onChange={formik.handleChange} value={formik.values.hoTen} className="form-control" />
                    <p className='text-danger'>{formik.errors.hoTen}</p>
                </div>

            </div>

            <div className="row">
                <div className="col-12 col-lg-6">
                    <p>Số ĐT</p>
                    <input type="text" style={edit ? pointerStyle : { cursor: 'auto' }} name="soDt" onChange={formik.handleChange} value={formik.values.soDt} className="form-control" />
                    <p className='text-danger'>{formik.errors.soDt}</p>
                </div>
                <div className="col-6 col-lg-3">
                    <p>Mã nhóm</p>
                    <input type="text" style={pointerStyle} name="maNhom" value={formik.values.maNhom} className="form-control" />
                </div>
                <div className="col-6 col-lg-3">
                    <p>Mã loại người dùng</p>
                    <input type="text" style={pointerStyle} name="maLoaiNguoiDung" value={formik.values.maLoaiNguoiDung} className="form-control" />
                </div>
            </div>

            <div className="row mt-2">


                {edit ?
                    <div className="col-12 text-center">
                        <button className="btn btn-dark" onClick={(e) => {
                            e.preventDefault()
                            editField(false);
                        }}>Chỉnh sửa</button>
                    </div>
                    : <>
                        <div className="col-6 text-right">
                            <button className="btn btn-dark" onClick={(e) => {
                                e.preventDefault()
                                editField(true);
                                window.location.reload();
                                }}>Huỷ</button>
                        </div>
                        <div className="col-6">
                            <button type="submit" className="btn btn-success">Lưu</button>
                        </div>

                    </>
                }

            </div>
        </form>
    )
}
