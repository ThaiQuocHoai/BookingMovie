import { Tabs } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCumRapAction} from '../../redux/actions/QuanLiPhimAction';
import './CumRapComponent.css';
import CumRapHeThongComponent from './CumRapHeThong/CumRapHeThongComponent';


export default function CumRapComponent(props) {
    const {TabPane} = Tabs;

    let { cumRap } = useSelector(state => state.FilmReducer);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCumRapAction());
    }, []);



    const renderTabs = () => {
        return cumRap.map((rap, index) => {
            return <TabPane tab={<div className="cumRap">
                <div className="cumRap__layout"></div>
                <img width={50} src={rap.logo} alt={rap.logo} />
            </div> } key={index} >
                <CumRapHeThongComponent logo={rap.logo} lstCumRap={rap.lstCumRap} />
            </TabPane>
        })
    }

    
    return (
        <div className="container p-5 cumRapComponent" style={{ marginBottom: 40}}>
            <Tabs tabPosition="left">
                {renderTabs()}
            </Tabs>
        </div>
    )
}
