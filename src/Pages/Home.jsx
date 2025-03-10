import DiscountProducts from "../Components/DiscountProducts";
import HeroSection from "../Components/HeroSection";
import MainNav from "../Components/MainNav";
import SubNav from "../Components/SubNav";

export default function Home() {
    return (
        <>
            <SubNav />
            <MainNav />
            <HeroSection/>
            <DiscountProducts/>
        </>
    )
}