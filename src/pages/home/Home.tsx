import Banner from "@/components/header/Banner";
import Features from "@/components/subPages/home/Features";
import WhyChooseUs from "@/components/subPages/home/WhyChooseUs";

const Home = () => {
  return (
    <div className=" space-y-12 bg-black">
      <Banner />
      <Features />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
