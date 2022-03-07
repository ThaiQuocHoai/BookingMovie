import React from 'react'
import AppComponent from '../../components/AppComponent/AppComponent'
import CarouselComponent from '../../components/Carousel/CarouselComponent'
import CumRapComponent from '../../components/CumRap/CumRapComponent'
import FilmComponent from '../../components/Film/FilmComponent'

export default function Home(props) {
    
    return (
        <div>
            <CarouselComponent/>
            <FilmComponent />
            <CumRapComponent />
            <AppComponent />
        </div>
    )
}
