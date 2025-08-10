import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const Banner = () => {
    const navigate = useNavigate();

    const slides = [
        {
            id: 1,
            image: "https://i.ibb.co/zTnR46Mv/full-shot-man-carrying-baggage.jpg",
            title: "Welcome to Luxury",
            desc: "Book premium rooms in seconds",
        },
        {
            id: 2,
            image: "https://i.ibb.co/W7LBDPc/modern-villa-with-multiple-lights-sun-loungers-asprovalta-greece.jpg",
            title: "Comfort and Elegance",
            desc: "Relax and recharge in beautiful spaces",
        },
        {
            id: 3,
            image: "https://i.ibb.co/rfKQy6PX/luxury-bedroom-interior-with-rich-furniture-scenic-view-from-walkout-deck.jpg",
            title: "Feel Like Home",
            desc: "Your peaceful getaway starts here",
        },
    ];

    return (
        <div className="h-[80vh]">
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                showStatus={false}
                interval={4000}
                className="rounded-lg"
            >
                {slides.map(slide => (
                    <div
                        key={slide.id}
                      
                        
                    >
                        <div>
                            <img className=' h-[60vh] sm:h-[70vh] md:h-[80vh] ' src={slide.image} alt="" />
                        </div>
                        <div className="absolute inset-0   flex flex-col items-center justify-center  text-center px-4">
                            <motion.h1
                                className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4   px-4 py-2 rounded"
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                {slide.title}
                            </motion.h1>

                            <motion.p
                                className="text-base sm:text-lg md:text-xl text-white   px-4 py-2 rounded mb-6"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                {slide.desc}
                            </motion.p>

                            <motion.button
                                onClick={() => navigate('/rooms')}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded transition"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Rooms
                            </motion.button>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Banner;
