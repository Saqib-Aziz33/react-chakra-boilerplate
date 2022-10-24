// components
import { Hero, Hero2, ContactUs } from "../components/elments";
import Faqs from "../components/util/Faqs";

function Home() {
  return (
    <div className="home-page">
      <>
        <Hero />
        <Hero2 />
        <ContactUs />
        <Faqs />
      </>
    </div>
  );
}
export default Home;
