import { useParams } from "react-router-dom";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import Slider from "../../Composents/carrousel/carrousel";
import Tag from "../../Composents/tag";
import Rate from "../../Composents/Rate";
import Data from "../../Data/data.json";
import Collapse from "../../Composents/collapse";
import Profil from "../../Composents/infoproprio";
import Info from "../../Composents/infolog";
import "./Logements.scss";

const LogementCard = () => {
  const { id } = useParams();
  const clickedLogement = Data.find((logement) => logement.id === id);

  return (
    <div className="page-logement">
      <Header />
      <div className="global">
        <Slider
         />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LogementCard;
