// import Container from "./Container";
import styles from './FormSignin.module.css'
import { Link, useNavigate } from 'react-router-dom';

import { useState } from "react"


function FormSignin() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const apiURL = process.env.REACT_APP_API_URL

    async function handleSubmit(event) {
        event.preventDefault();

        try{
            const response = await fetch(
                `${apiURL}/api/v1/auth/login`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            )
    
            const data = await response.json();
            console.log(data)
    
    
            if (response.ok) {
                localStorage.setItem("token", data.accessToken)
                localStorage.setItem("name", data.name)           

                navigate("/dashboard")
            }

        }  catch(error){
            console.error(error)
            alert("Erro ao se conectar com o servidor")
        }    

    }

    return (
        // <Container>
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Digite o e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="password">Senha</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <div>
                <Link className={styles.link} to="/signup">Cadastre-se </Link>
            </div>

            <button type="submit">Entrar</button>

        </form>
        // </Container>
    )
}

export default FormSignin