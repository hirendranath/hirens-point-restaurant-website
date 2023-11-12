import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src="https://i.ibb.co/gMfxdfS/01.jpg" />
                
            </div>
            <div>
                <img src="https://i.ibb.co/m5L22fd/02.jpg" />
                
            </div>
            <div>
                <img src="https://i.ibb.co/jTrt875/03.png" />
                
            </div>
            <div>
                <img src="https://i.ibb.co/ZBn5JB6/04.jpg" />
                
            </div>
            <div>
                <img src="https://i.ibb.co/2FyQh2g/05.png" />
               
            </div>
            <div>
                <img src="https://i.ibb.co/CzjYM32/06.png" />
            </div>
        </Carousel>
    );
};

export default Banner;