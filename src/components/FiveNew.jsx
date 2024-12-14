import React, { useContext } from 'react';
import Container from './Container';
import { ApiData } from './ContextApi';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import FiveNextPart from './FiveNextPart';

function PrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="h-[50px] w-[50px] rounded-full absolute left-[20px] top-[50%] translate-y-[-50%] text-center leading-[45px] bg-[#00000033] cursor-pointer z-10"
            onClick={onClick}
            aria-label="Previous Slide"
        >
            <FaLongArrowAltLeft className='inline-block text-[30px] text-white font-bold' />
        </div>
    );
}

function NextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="h-[50px] w-[50px] rounded-full absolute right-[30px] top-[50%] translate-y-[-50%] text-center leading-[45px] bg-[#00000033] cursor-pointer z-10"
            onClick={onClick}
            aria-label="Next Slide"
        >
            <FaLongArrowAltRight className='inline-block text-[30px] text-white font-bold' />
        </div>
    );
}

const FiveNew = () => {
    const { info, loading } = useContext(ApiData);

    const settings = {
        autoplay: true,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 4, // Default for larger screens
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768, // Adjust this value based on your design
                settings: {
                    slidesToShow: 1, // Show 1 slide on small devices
                },
            },
        ],
    };

    if (loading) {
        return (
            <section>
                <Container className="relative">
                    <h2 className='font-DMs font-bold text-[50px]'>Loading.....!</h2>
                </Container>
            </section>
        );
    }

    if (!info || info.length === 0) {
        return (
            <section>
                <Container className="relative">
                    <h2 className='font-DMs font-bold text-[50px]'>No New Arrivals Available</h2>
                </Container>
            </section>
        );
    }

    return (
        <section>
            <Container className="relative">
                <h2 className='text-[#262626] font-bold text-[39px] font-DMs py-4'>New Arrivals</h2>

                <Slider {...settings}>
                    {info.map((item) => (
                        <Link to={`/shop/${item.id}`} key={item.id}> {/* Added a unique key and item.id in URL */}
                            <FiveNextPart item={item} />
                        </Link>
                    ))}
                </Slider>
            </Container>
        </section>
    );
};

export default FiveNew;
