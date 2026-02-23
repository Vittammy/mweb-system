import style from '@css/displayStyle.module.css'

export default function NavBar() {
    return (
        <>

            <section className={style.section_logo}>
                <a href="#"><img src="/mweb4.png" alt="logo" style={{ width: '5rem', marginBottom: '0.5rem'}} /></a>
                <h1 className='text-5xl'>MWEB</h1>
            </section>
            
            <nav className={style.nav_bar}> 
                <p onClick={() => window.open('#', '_blank')}>Produtos</p>
                <p onClick={() => window.open('#', '_blank')}>Sobre</p>
                <button className={style.button_login} onClick={() => window.open('http://localhost:5173', '_blank')}>Login</button>
                <button className={style.button_cadastro} onClick={() => window.open('#', '_blank')}>Começar agora</button>
            </nav>
        </>
    )
}