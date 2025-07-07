import Banner from "../../components/Home/Banner/Banner";
import FeaturedTasks from "../../components/Home/FeaturedTasks/FeaturedTasks";
import HowItWorks from "../../components/Home/HowItWorks/HowItWorks";
import WhyChooseUs from "../../components/Home/WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedTasks></FeaturedTasks>
            <HowItWorks></HowItWorks>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;