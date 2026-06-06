import { Link } from "react-router-dom"

import Container from "./Container"
import styles from './Navbar.module.css'
import logo from '../../img/apple-touch-icon.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Viratech" width={70}/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/signin">Signin</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar