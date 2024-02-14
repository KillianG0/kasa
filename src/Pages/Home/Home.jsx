import Header from "../../Layout/Header/Header";
import Banner1 from "../../Layout/Banner/Banner";
import Footer from "../../Layout/Footer/Footer";
import CardsList from "../../Composents/cardslist"

function Home() {
    return (
      <div>
        <Header/>
        <Banner1/>
        <CardsList />
        <Footer/>
      </div>
    )
  }
  export default Home