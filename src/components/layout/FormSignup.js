import styles from './FormSignup.module.css'
import { useState } from 'react'

function FormSignup() {

    const [step, setStep] = useState(1)

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

    function cadastrarUsuario(e) {
        e.preventDefault()

        console.log(JSON.stringify(user, null, 2))

        // Aqui futuramente você fará:
        // fetch(...)
    }



    return (
        <section className={styles.container_form}>
            <form onSubmit={cadastrarUsuario}>

                {step === 1 && (

                    <>
                        <label htmlFor="name">nome</label>
                        <input type="text" name="name" id="name" value={user.name} onChange={handleChange} />

                        <label htmlFor="email">e-mail</label>
                        <input type="email" name="email" id="email" value={user.email} onChange={handleChange} />

                        <label htmlFor="phone">phone</label>
                        <input type="tel" name="phone" id="phone" value={user.phone} onChange={handleChange} />

                        <label htmlFor="cpf">cpf</label>
                        <input type="text" name="cpf" id="cpf" value={user.cpf} onChange={handleChange} />

                        <label htmlFor="rg">rg</label>
                        <input type="text" name="rg" id="rg" value={user.rg} onChange={handleChange} />

                        <label htmlFor="birthDate">data nascimento</label>
                        <input type="date" name="birthDate" id="birthDate" value={user.birthDate} onChange={handleChange} />

                        <button
                            type="button"
                            onClick={() => setStep(2)} >Próximo

                        </button>
                    </>
                )}

                {step === 2 && (
                    <>
                        <label htmlFor="zipCode">cep</label>
                        <input type="text" name="zipCode" id="zipCode" value={user.address.zipCode} onChange={handleAddressChange} />

                        <label htmlFor="addressLine1">logradouro</label>
                        <input type="text" name="addressLine1" id="addressLine1" value={user.address.addressLine1} onChange={handleAddressChange} />

                        <label htmlFor="number">número</label>
                        <input type="text" name="number" id="number" value={user.address.number} onChange={handleAddressChange} />

                        <label htmlFor="addressLine2">complemento</label>
                        <input type="text" name="addressLine2" id="addressLine2" value={user.address.addressLine2} onChange={handleAddressChange} />

                        <label htmlFor="neighborhood" >bairro</label>
                        <input type="text" name="neighborhood" id="neighborhood" value={user.address.neighborhood} onChange={handleAddressChange} />

                        <label htmlFor="city">cidade</label>
                        <input type="text" name="city" id="city" value={user.address.city} onChange={handleAddressChange} />

                        <label htmlFor="state">estado</label>
                        <input type="text" name="state" id="state" value={user.address.state} onChange={handleAddressChange} />

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