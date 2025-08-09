import React from 'react';
import Banner from '../components/Banner';
import HotelMap from '../components/HotelMap';
import WhyChooseUs from '../components/WhyChooseUs';
import HowToBook from '../components/HowToBook';
import FeaturedRooms from '../pages/FeaturedRooms';


const Home = () => (
    <div className='pt-16'>
        <Banner></Banner>
        
        <FeaturedRooms></FeaturedRooms>
        <HotelMap></HotelMap>
        <WhyChooseUs></WhyChooseUs>
        <HowToBook></HowToBook>

    </div>
);

export default Home;