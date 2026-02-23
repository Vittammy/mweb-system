import style from '@css/displayStyle.module.css'

export default function SignUp() {
    return (
        <>
            <div className={style.sign_up_form}>
                <div className={style.form_title}>
                   <h2 className="text-4xl font-medium">Comece agora adicionando sua conta!</h2>
                    <p className='text-lg'>Seu cadastro será enviado para o proprietário.</p> 
                </div>
                
                <div className={style.form_content}>
                    <select className="select select-bordered select-lg w-full">
                        <option disabled selected>Selecione uma de nossas empresas parceiras:</option>
                        <option>Inter</option>
                        <option>Poppins</option>
                        <option>Raleway</option>
                    </select>
                </div>
            </div>
        </>
    )
}