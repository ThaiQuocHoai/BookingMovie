import React, { Fragment, useEffect, useRef } from 'react';
import './Loader.css'
import Logo from './../../assets/img/icons/slide/web-logo.png';
import HeaderComponent from './../Header/HeaderComponent';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
export default function Loader() {

    // const targetRef = React.createRef();
    let loaderRef = useRef(null);
    let loaderHeader = useRef(null);
    let loaderParent = useRef(null);

    useEffect(() => {
        disableBodyScroll(loaderParent.current);

        setTimeout(async () => {

            loaderRef.current.style.transition = "opacity 5s";
            loaderRef.current.style.opacity = "0";

            setTimeout(async () => {
                loaderRef.current.remove();
                loaderHeader.current.remove();
                loaderParent.current.remove();
                enableBodyScroll(loaderHeader.current)
            }, 2000)
        }, 100);
        return () => {
          clearAllBodyScrollLocks();
        }
    })


    return (
        <Fragment>
            <div className="loader__header" ref={loaderHeader}>
                {/* <HeaderComponent /> */}
            </div>
            <div className="loader__parent" ref={loaderParent}>
                <div className="loader" ref={loaderRef}>
                    <div className="loader__layout"></div>
                    <img className="loader__logo" src={Logo} alt="logo tix" />
                </div>
            </div>
        </Fragment>
    )
}
