import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import HeaderComponent from '../../components/Header/HeaderComponent';
import { USER_LOGN } from '../../util/settings';

export default function UserTemplate(props) {

    if (!localStorage.getItem(USER_LOGN)) {
        alert('Bạn cần phải đăng nhập')
        return <Redirect to="/" />
    }


    return <Route exact path={props.path} render={(propsRoute) => {
        return <>
            <HeaderComponent />
            <props.component {...propsRoute} />
        </>
    }} />
}
