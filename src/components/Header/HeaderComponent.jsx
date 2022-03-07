import React, { Fragment } from 'react'
import './HeaderComponent.css'
import ava from './../../assets/img/icons/noel/avatar.png'
import logo from './../../assets/img/icons/slide/web-logo.png'
import buttonmenu from './../../assets/img/icons/slide/menu-options.png'
import { NavLink } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { openComponent } from '../../redux/actions/UserAction'
import LoginComponent from './../LoginComponent/LoginComponent'
import RegisterComponent from './../RegisterComponent/RegisterComponent'
import { ACCESS_TOKEN, USER_LOGN } from '../../util/settings';
import { Menu, Dropdown } from 'antd';
import { history } from '../../App'


export default function HeaderComponent() {

    const toggleMenu = () => {
        var menu = document.querySelector('.menu');
        menu.classList.toggle('active');
        var buttonMenu = document.querySelector('.menu__button');
        buttonMenu.classList.toggle('active');
        var layout = document.querySelector('.layout');
        layout.classList.toggle('active');
    }

    const dispatch = useDispatch();

    const { userLogin } = useSelector(s => s.UserReducer);

    const handleModal = (name, type) => {
        dispatch(openComponent({
            name: name,
            type: type,
            isModalVisible: true
        }))
    }

    // const stickClass = () =>{
    // window.addEventListener('scroll', () =>{
    //     var nav = document.querySelector('.nav');
    //     nav.classList.toggle('sticky', window.scrollY >0);
    // })
    // }
    const menuDropdown = (
        <Menu>
            <Menu.Item>
                <a onClick={() => {
                    history.push("/profile")
                }}>
                    Trang cá nhân
                </a>
            </Menu.Item>
            <Menu.Item>
                <a onClick={() => {
                    history.push("/phim")
                }}>
                    Lịch chiếu
                </a>
            </Menu.Item>
            <Menu.Item>
                <a onClick={() => {
                    history.push("/cumrap")
                }}>
                    Cụm Rạp
                </a>
            </Menu.Item>
            <Menu.Item>
                <a onClick={() => {
                    history.push("/app")
                }}>
                    Ứng dụng
                </a>
            </Menu.Item>
            <Menu.Item>
                <a className="text-danger" onClick={() => {
                    localStorage.removeItem(USER_LOGN);
                    localStorage.removeItem(ACCESS_TOKEN);
                    window.location.reload();
                }}>
                    Đăng xuất
                </a>
            </Menu.Item>
        </Menu>
    )


    return (
        <div className="header">
            <div className="layout"></div>
            <div className="d-flex justify-content-between px-lg-4 nav">
                <div className="logo">
                    <NavLink to="/">
                        <img height={50} src={logo} alt="logo" />
                    </NavLink>
                </div>
                <div className="service">
                    <ul>
                        <li>
                            <a href="/phim">Lịch Chiếu</a>
                        </li>
                        <li>
                            <a href="/cumrap">Cụm Rạp</a>
                        </li>
                        <li>
                            <a href="/app">Ứng Dụng</a>
                        </li>
                    </ul>
                </div>
                <div className="user mr-5">
                    <ul>
                        {userLogin ? <li>
                            <Dropdown overlay={menuDropdown}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    <img className="user__login" height={30} src={ava} alt="avatar" />
                                    {userLogin.hoTen}
                                </a>
                            </Dropdown>
                        </li>
                            :
                            <Fragment>
                                <li>
                                    <a className="login" onClick={() => {
                                        handleModal(LoginComponent, 'Đăng Nhập')
                                    }}>
                                        <img className="user__login" height={30} src={ava} alt="avatar" />
                                        Đăng Nhập
                                    </a>
                                </li>
                                <li>
                                    <a className="user__register" onClick={() => {
                                        handleModal(RegisterComponent, 'Đăng Kí')
                                    }}>Đăng Kí</a>
                                </li>
                            </Fragment>}
                    </ul>
                </div>
                <button className="menu__button" onClick={toggleMenu}>
                    <img height={10} src={buttonmenu} alt="..." />
                </button>
            </div>
            <div className="menu">
                <ul>
                    {userLogin ?
                        <li className="menu__dangnhap">
                            <div>
                                <img className="menu__login" height={30} src={ava} alt="..." />
                                <NavLink id="dangnhap" to="/">
                                    {userLogin.hoTen}
                                </NavLink>
                            </div>
                            <button onClick={toggleMenu}>
                                <RightOutlined id="login__icon" />
                            </button>
                        </li>

                        :
                        <Fragment>
                            <li className="menu__dangnhap">
                                <div>
                                    <img className="menu__login" height={30} src={ava} alt="..." />
                                    <a id="dangnhap" onClick={() => {
                                        toggleMenu();
                                        handleModal(LoginComponent, 'Đăng Nhập');
                                    }}>
                                        Đăng Nhập
                                    </a>
                                </div>
                                <button onClick={toggleMenu}>
                                    <RightOutlined id="login__icon" />
                                </button>
                            </li>
                            <li>
                                <a onClick={() => {
                                    toggleMenu();
                                    handleModal(RegisterComponent, 'Đăng Kí')
                                }}>
                                    Đăng Kí
                                </a>
                            </li>
                        </Fragment>
                    }
                    <li>
                        <NavLink to="/phim">
                            Lịch Chiếu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cumrap">
                            Cụm Rạp
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/app">
                            Ứng Dụng
                        </NavLink>
                    </li>
                    {localStorage.getItem(USER_LOGN) ? <li>
                        <a className="text-danger" onClick={() => {
                            localStorage.removeItem(USER_LOGN);
                            localStorage.removeItem(ACCESS_TOKEN);
                            history.push("/");
                            window.location.reload();
                        }}>
                            Đăng xuất
                        </a>
                    </li> : ''}
                </ul>
            </div>

        </div>

    )
}
