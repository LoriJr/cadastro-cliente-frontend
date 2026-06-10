import styles from './Home.module.css'

function Home(){
    return(
       <section className={styles.home_container}>
        <h1>Conecte. Valide. Acesse.</h1>
        <p>Integração segura e simples com APIs</p>
        <p>para autenticação e validação de dados</p>
       </section>
    )
}

export default Home