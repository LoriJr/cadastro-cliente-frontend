import styles from './FormSignup.module.css'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'

function FormSignup() {

    const formRef = useRef(null)
    const navigate = useNavigate()
    const [step, setStep] = useState(1)

    const apiURL = process.env.REACT_APP_API_URL
    console.log(apiURL)

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        cpf: "",
        rg: "",
        birthDate: "",
        address: {
            zipCode: "",
            addressLine1: "",
            number: "",
            addressLine2: "",
            neighborhood: "",
            city: "",
            state: ""
        }
    })

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleAddressChange = (e) => {
        setUser({
            ...user,
            address: {
                ...user.address,
                [e.target.name]: e.target.value
            }
        })
    }

    async function cadastrarUsuario(e) {
        e.preventDefault()

        console.log(JSON.stringify(user, null, 2))

        const response = await fetch(
            `${apiURL}/users`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }
        )

        console.log(response)

        if(response.status == 201){
            // alert("Cadastro realizado com sucesso");
            navigate("/SignupPassword", {
                state: {
                    email: user.email
                }
            })
        }
        
    }

    function proximoPasso() {
        if (formRef.current.checkValidity()) {
            setStep(2)
        } else {
            formRef.current.reportValidity()
        }

    }


    return (
        <section className={styles.container_form}>
            <form ref={formRef} onSubmit={cadastrarUsuario}>

                {step === 1 && (

                    <>
                        <label htmlFor="name">nome</label>
                        <input type="text" name="name" id="name" value={user.name} onChange={handleChange} required />

                        <label htmlFor="email">e-mail</label>
                        <input type="email" name="email" id="email" value={user.email} onChange={handleChange} required />

                        <label htmlFor="phone">phone</label>
                        <input type="tel" name="phone" id="phone" value={user.phone} onChange={handleChange} required />

                        <label htmlFor="cpf">cpf</label>
                        <input type="text" name="cpf" id="cpf" value={user.cpf} onChange={handleChange} required />

                        <label htmlFor="rg">rg</label>
                        <input type="text" name="rg" id="rg" value={user.rg} onChange={handleChange} required />

                        <label htmlFor="birthDate">data nascimento</label>
                        <input type="date" name="birthDate" id="birthDate" value={user.birthDate} onChange={handleChange} required />

                        <button
                            type="button"
                            onClick={proximoPasso} >Próximo

                        </button>
                    </>
                )}

                {step === 2 && (
                    <>
                        <label htmlFor="zipCode">cep</label>
                        <input type="text" name="zipCode" id="zipCode" value={user.address.zipCode} onChange={handleAddressChange} required />

                        <label htmlFor="addressLine1">logradouro</label>
                        <input type="text" name="addressLine1" id="addressLine1" value={user.address.addressLine1} onChange={handleAddressChange} required />

                        <label htmlFor="number">número</label>
                        <input type="text" name="number" id="number" value={user.address.number} onChange={handleAddressChange} required />

                        <label htmlFor="addressLine2">complemento</label>
                        <input type="text" name="addressLine2" id="addressLine2" value={user.address.addressLine2} onChange={handleAddressChange} />

                        <label htmlFor="neighborhood" >bairro</label>
                        <input type="text" name="neighborhood" id="neighborhood" value={user.address.neighborhood} onChange={handleAddressChange} required />

                        <label htmlFor="city">cidade</label>
                        <input type="text" name="city" id="city" value={user.address.city} onChange={handleAddressChange} required />

                        <label htmlFor="state">estado</label>
                        <input type="text" name="state" id="state" value={user.address.state} onChange={handleAddressChange} required />

                        <button
                            type="button"
                            onClick={() => setStep(1)} >Voltar

                        </button>

                        <button type="submit">Cadastrar</button>

                    </>
                )}

            </form>
        </section>
    )
}

export default FormSignup