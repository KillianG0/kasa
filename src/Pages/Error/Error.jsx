import { NavLink } from 'react-router-dom'
import './Error.scss'
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'
function PageError () {
    return (
    <div>
        <Header/>
        <div className="error">
        <h1 className="titre-error">404</h1>
        <span className="text-error">Oups! La page que <br/>vous demandez n'existe pas.</span>
        <NavLink to="/" className="retour-home">Retourner sur la page d’accueil</NavLink>
    </div>
    <Footer/>
    </div>
    )
}

export default PageError