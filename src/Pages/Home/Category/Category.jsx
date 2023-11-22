// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeading={"From 11:00am to 10:00pm"}
            heading={"ORDER ONLINE"}
            ></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-16"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/JR7GqND/slide1.jpg" alt="" />
                    <h2 className='text-3xl uppercase font-semibold -mt-16 text-white'> Salads </h2>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/2Z9kHF2/slide2.jpg" alt="" />
                    <h2 className='text-3xl uppercase font-semibold -mt-16 text-white'> Pizza </h2>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/b6CStPf/slide3.jpg" alt="" />
                    <h2 className='text-3xl uppercase font-semibold -mt-16 text-white'> Soups </h2>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/h82Vpqg/slide4.jpg" alt="" />
                    <h2 className='text-3xl uppercase font-semibold -mt-16 text-white'> Desserts </h2>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;