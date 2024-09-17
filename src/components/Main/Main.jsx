import React from 'react';
import Offers from './Offers/Offers';
import SalesAndDeals from './SalesAndDeals/SalesAndDeals';
import PopulerCategories from './PopulerCategories/PopulerCategories';
import FeatureGap from './FeatureGap/FeatureGap';
import NewlyArrived from './NewlyArrived/NewlyArrived';
import EarlyBirdOffers from './EarlyBirdOffers/EarlyBirdOffers';
import GetAnApple from './GetAnApple/GetAnApple';
import ShopByCategories from './ShopByCategories/ShopByCategories';
import SmartphoneAccessories from './SmartphoneAccessories/SmartPhoneAccessories';
import FeaturedImage from './FeaturedImage/FeaturedImage';
import Actions from './Actions/Actions';
import Classifields from './Classifields/Classifields';
import LiveShopping from './LiveShopping/LiveShopping';

const Main = () => {
    return (
        <div className='bg-white'>
            <Offers></Offers>
            <SalesAndDeals></SalesAndDeals>
            <PopulerCategories></PopulerCategories>
            <FeatureGap></FeatureGap>
            <NewlyArrived></NewlyArrived>
            <EarlyBirdOffers></EarlyBirdOffers>
            <GetAnApple></GetAnApple>
            <ShopByCategories></ShopByCategories>
            <FeaturedImage></FeaturedImage>
            <SmartphoneAccessories></SmartphoneAccessories>
            <Actions></Actions>
            <Classifields></Classifields>
            <LiveShopping></LiveShopping>
        </div>
    );
};

export default Main;