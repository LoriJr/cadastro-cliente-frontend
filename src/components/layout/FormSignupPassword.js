import styles from './FormSignupPassword.module.css'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'

function FormLogin() {

    const location = useLocation()
    const email = location.state?.email

    const navigate = useNavigate()
    const apiURL = process.env.REACT_APP_API_URL
    console.log(apiURL)

    const [password, setPassword] = useState({
        email: location.state?.email || "",
        password: ""
    })

    async function cadastraSenha(e) {
        e.preventDefault()

        const response = await fetch(
            `${apiURL}/api/v1/auth/register`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(password)
            }
        )

        console.log(response)

        if (response.status == 201) {
            alert("Cadastro realizado com sucesso");
            navigate("/signin")
        }

    }

    return (
        <section className={styles.container_login}>
            <form onSubmit={cadastraSenha}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    readOnly
                />
                <label htmlFor="password">Senha</label>
                <input
                    type="password"
                    id="password"
                    value={password.password}
                    onChange={(e) => setPassword({
                        ...password,
                        password: e.target.value
                    })}
                />

                <button type="submit">Cadastrar Senha</button>


            </form>
        </section>
    )
}

export default FormLogin