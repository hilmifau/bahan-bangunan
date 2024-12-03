import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faAddressCard, faPhone, faVoicemail, faDiamond } from '@fortawesome/free-solid-svg-icons'
import { faPlaystation } from "@fortawesome/free-brands-svg-icons"

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top px-3">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link fs-6" href="/">Dashboard</a>
                        <a className="nav-link fs-6" href="/bahan">Bahan</a>
                        <a className="nav-link fs-6" href="/admin">Admin</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
