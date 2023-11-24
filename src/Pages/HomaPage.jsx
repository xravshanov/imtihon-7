import Footer from "../components/footer/Footer";
import Kombo from "../components/kombo/Kombo";
import Pizza from "../components/pizza/Pizza";
import FixedNavbar from "../components/navbar-fixed/FixedNavbar";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import Ichimlik from "../components/ichimlik/Ichimlik";
import Gazak from "../components/gazak/Gazak";

function HomaPage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <FixedNavbar />
      <Kombo />
      <Pizza />
      <Gazak/>
      <Ichimlik/>
      <Footer />
    </div>
  );
}

export default HomaPage;
