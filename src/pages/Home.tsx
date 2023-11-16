import CaseFollowUp from "../components/Homepage/CaseFollowUp";
import Explore from "../components/Homepage/Explore";
import Hero from "../components/Homepage/Hero";
import Footer from "../components/ui/Footer";
import NavBar from "../components/ui/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <section className="mt-48">
        <Explore />
      </section>
      <section className="mt-20">
        <CaseFollowUp />
      </section>
      <section className="mt-48">
        <Footer />
      </section>
    </>
  );
};
export default Home;
