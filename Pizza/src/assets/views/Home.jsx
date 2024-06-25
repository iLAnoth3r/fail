import Card from "../components/Card";
import "./Home.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="cuerpo">
        <Card />
      </div>
    </div>
  );
};

export default Home;
