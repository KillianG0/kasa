import { useParams } from "react-router-dom";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import Slider from "../../Composents/carrousel/carrousel";
import Tag from "../../Composents/tag";
import Rate from "../../Composents/rate/Rate";
import Data from "../../Data/data.json";
import Collapse from "../../Composents/collapse";
import Profil from "../../Composents/infoproprio/infoproprio";
import Info from "../../Composents/infologement/infolog";
import "./Logements.scss";

const LogementCard = () => {
  const { id } = useParams();
  const clickedLogement = Data.find((logement) => logement.id === id);

  return (
    <div className="page-logement">
      <Header />
      <div className="global">
        <Slider
          data={clickedLogement.pictures}
          total={clickedLogement.pictures.length}
        />

        <div className="conteneur">
          <div className="infotag">
            <Info />
            <Tag />
          </div>
          <div className="profil2">
            <Profil />
            <Rate rating={clickedLogement.rating} />
          </div>
        </div>

        <div className="collapses-logement">
          <div className="col1">
            <Collapse
              name="Description"
              description={clickedLogement.description}
            />
          </div>
          <div className="col2">
            <Collapse name="Équipements" data={clickedLogement.equipments} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LogementCard;
