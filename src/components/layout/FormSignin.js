// import Container from "./Container";
import styles from './FormSignin.module.css'
import { Link } from 'react-router-dom';

import { useState } from "react"


function FormSignin() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleSubmit(event) {
        event.preventDefault();


        console.log({
            email,
            password
        });

        // Chamada da API aqui
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