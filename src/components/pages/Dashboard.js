import { jwtDecode } from "jwt-decode"
import styles from "./Dashboard.module.css"

function Dashboard(){

    const token = localStorage.getItem("token")

    const decoded = jwtDecode(token)

    return(
        <div className={styles.container_dashboard}>
            <h1>Bem-vindo, {decoded.name} </h1>
        </div>
    )
}

export default Dashboard