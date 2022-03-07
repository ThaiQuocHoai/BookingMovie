import React from 'react';
import { useSelector } from 'react-redux';
import './FooterComponent.css';
import { AndroidFilled, FacebookFilled, InstagramFilled, YoutubeFilled } from '@ant-design/icons';
import ZionLogo from './../../assets/img/icons/slide/zion-logo.jpg';


export default function FooterComponent(props) {

    const { cumRap } = useSelector(state => state.FilmReducer)

    return (
        <footer>
            <div className="footer__list text-white">
                <div className="row upperfooter">
                    <div className="col-sm-6 col-lg-4 col-12 tix">
                        <p>Tix</p>

                        <div className="row">
                            <div className="col-6 faqguild">
                                <ul>
                                    <li>FAQ</li>
                                    <li>Brand Guidelines</li>
                                </ul>
                            </div>
                            <div className="col-sm-12 col-md-6 tix__item">
                                <ul>
                                    <li>Thỏa thuận sử dụng</li>
                                    <li>Chính sách bảo mật</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-6 col-lg-4 col-12">
                        <p>ĐỐI TÁC</p>
                        <div className="row">
                            {
                                cumRap.map((rap, index) => {
                                    return <div className="col-2" key={index}>
                                        <img height={30} width={30} src={rap.logo} alt="logo rap" />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4 col-12">
                        <div className="row">
                            <div className="col-6 footer__icons icon1">
                                <p className="text-center">Mobile app</p>
                                <ul>
                                    <li><AndroidFilled /></li>
                                    <li><YoutubeFilled /></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-sm-12 footer__icons">
                                <p className="text-center">Social</p>
                                <ul>
                                    <li><FacebookFilled /></li>
                                    <li><InstagramFilled /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="underFooter pb-3">
                    <div className="d-flex">
                        <img style={{ borderRadius: 7 }} width={80} height={40} src={ZionLogo} alt="zion logo" />
                        <div className="underFooter__text">
                            <p>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
                            <ul>
                                <li>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</li>
                                <li>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                                    đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</li>
                                <li>Số Điện Thoại (Hotline): 1900 545 436</li>
                                <li>Email: <span style={{color: '#fb4226'}}>support@tix.vn</span></li>
                            </ul>

                        </div>
                    </div>
                    <img width={120} height={50} src="https://s3img.vcdn.vn/123phim/2020/03/d1e6bd560daa9e20131ea8a0f62e87f8.png" alt="bo cong thuong" />
                </div>
            </div>
        </footer>
    )
}
