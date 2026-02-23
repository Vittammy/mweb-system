import style from '@css/displayStyle.module.css'

// => Import de views
import SignUp from '@components/Containers/SignUp'

export default function ViewPage() {
    return (
        <>
            <div className={style.home_container}>
                <h1 className="text-7xl font-medium">
                    Controle o que <span className={style.destaque}>importa</span>, do seu <span className={style.destaque}>jeito</span>.
                </h1>

                <p className="text-2xl">
                    A gestão que você precisa, modular e simplificada.
                </p>

                {/* <a
                    href="http://localhost:5173"
                    target="_blank"
                    rel="noopener noreferrer"
                >Acesse aqui sua conta!
                </a> */}
            </div>

            <div className={style.sign_up_container}>
                <SignUp />
            </div>
        </>
    )
}