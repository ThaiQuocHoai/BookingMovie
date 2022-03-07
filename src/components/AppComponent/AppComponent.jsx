import React from 'react';
import './AppComponent.css'
import Mobile from './../../assets/img/icons/slide/mobile.png';
import appScreen from './../../assets/img/icons/slide/slide/slide9.jpg'

export default function AppComponent(props) {

    return (
        <div className="app" id="app"   >
            <div className="app__container">
                <div className="row" style={{ height: '100%' }}>
                    <div className="col-12 col-md-6 appLeft">
                        <h2 className="text-white">Ứng dụng tiện lợi dành cho
                            người yêu điện ảnh
                        </h2>
                        <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                        <button className="btnApp" onClick={() => {
                            window.open('https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197');
                        }}>App miễn phí - Tải về ngay</button>
                    </div>
                    <div className="col-6 col-md-6 appRight d-flex flex-column align-items-center justify-content-center">

                        <img className="mobileApp" width={210} height={450} src={Mobile} alt="mobile  view" />
                        <img className="appScreen" width={195} height={425} src={appScreen} alt="main screen of app" />
                    </div>
                </div>
            </div>
        </div>
    )
}
