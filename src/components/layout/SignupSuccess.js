import style from './SignupSuccess.module.css'
import { useNavigate } from 'react-router-dom'

function SignupSuccess({open, email}){

    const navigate = useNavigate();

    if(!open) return null;

    function handleOk(){
        navigate("/signin");
    }

    return (
        <div className={style.overlay}>
            <div className={style.modal}>

                <h2>Cadastro realizado!</h2>

                <p>Seu cadastro foi realizado com sucesso.</p>
                <p>Enviamos um e-mail de confirmação para <strong>{email}</strong>.</p>
                <p>Para ativar sua conta, clique no link enviado para o seu e-mail.</p>

                <p className={style.warning}>
                    Caso não encontre a mensagem, verifique também
                    a pasta <strong>Spam</strong> ou
                    <strong> Lixo Eletrônico</strong>.
                </p>

                <button onClick={handleOk}>OK</button>
            </div>
        </div>
    );    

}

export default SignupSuccess