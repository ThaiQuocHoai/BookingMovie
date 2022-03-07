import React from 'react';
import { Route } from 'react-router-dom';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import HeaderComponent from '../../components/Header/HeaderComponent';

export default function HomeTemplate(props) {


    return <Route exact path={props.path} render={(propsRoute) => {
        return <div>
            <HeaderComponent/>
            <props.component {...propsRoute} />
            <FooterComponent />
        </div>
    }} />
}
