import BestDeals from "../Components/BestDeals";
import BestSellers from "../Components/BestSellers";
import BrandLogo from "../Components/BrandLogo";
import DiscountProducts from "../Components/DiscountProducts";
import FeaturedProducts from "../Components/FeaturedProducts";
import HeroSection from "../Components/HeroSection";
import MainNav from "../Components/MainNav";
import Offers from "../Components/Offers";
import RecentlyViewed from "../Components/RecentlyViewed";
import SubNav from "../Components/SubNav";

export default function Home() {
    return (
        <>
            <SubNav />
            <MainNav />
            <HeroSection/>
            <DiscountProducts />
            <FeaturedProducts />
            <BestDeals />
            <BestSellers />
            <Offers />
            <RecentlyViewed />
            <BrandLogo/>
        </>
    )
}