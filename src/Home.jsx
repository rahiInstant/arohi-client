import Banner from "./Banner";
import { Helmet } from "react-helmet-async";
import HomeCard from "./HomeCard";
import { useLoaderData } from "react-router-dom";
import Gallery from "./Gallery";
import Country from "./Country";
import Partner from "./Partner";
const Home = () => {
  const Data = useLoaderData()
  console.log(Data)
  return (
    <div>
      <Helmet>
        <title>Arohi | Home</title>
      </Helmet>
      <Banner></Banner>
      <HomeCard Data = {Data}></HomeCard>
      <Country></Country>
      <Gallery></Gallery>
      <Partner></Partner>
    </div>
  );
};

export default Home;
