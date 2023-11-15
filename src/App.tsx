import CaseFollowUp from "./components/Homepage/CaseFollowUp";
import Explore from "./components/Homepage/Explore";
import Hero from "./components/Homepage/Hero";
import Footer from "./components/layout/Footer";
import NavBar from "./components/ui/NavBar";

const App = () => {
  return (
    <main>
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
    </main>
  );
};
export default App;
