import CaseFollowUp from "components/homepage/CaseFollowUp";
import Explore from "components/homepage/Explore";
import Hero from "components/homepage/Hero";
import Footer from "components/ui/Footer";
import NavBar from "components/ui/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <section className="mt-24">
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
