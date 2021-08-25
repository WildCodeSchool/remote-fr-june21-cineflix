import { useState, useEffect, useRef } from "react";
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";

import PosterCard from './../PosterCard/PosterCard';

const Carousel = ({ items = [] }) => {
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const handleClick = (direction, type) => {
        let distance = type.current.getBoundingClientRect().x - 30 

        if (direction === 'left' && slideNumber > -1) {
            setSlideNumber(slideNumber - 1);
            type.current.style.transform = `translateX(${400 + distance}px)`
        }
        if (direction === 'right') {
            setSlideNumber(slideNumber + 1);
            type.current.style.transform = `translateX(${-400 + distance}px)`
        }
    }

    return (
        <div className="top-cards">
            <ArrowBackIosOutlined className="sliderArrowLeft" onClick={() => handleClick('left', listRef)} />
            <div className="popularLists" ref={listRef}>
                {items.map((poster) =>
                    <PosterCard key={poster.id} {...poster} />)}
            </div>
            {slideNumber < 8 && (
            <ArrowForwardIosOutlined className="sliderArrowRight" onClick={() => handleClick('right', listRef)} />)}
        </div>
    );
}

export default Carousel;