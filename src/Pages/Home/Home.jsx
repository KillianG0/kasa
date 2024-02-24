import Header from "../../Layout/Header/Header";
import Banner1 from "../../Layout/Banner/Banner";
import Footer from "../../Layout/Footer/Footer";
import CardsList from "../../Composents/cardlist/cardslist";
import './home.scss'

function Home() {
    return (
      <div>
        <Header/>
        <div className="BannerHome">
        <Banner1/>
        </div>
        <CardsList />
        <Footer/>
      </div>
    )
  }
  export default Home