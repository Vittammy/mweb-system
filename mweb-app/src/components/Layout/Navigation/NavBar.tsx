import style from '@css/displayStyle.module.css'

function NavBar() {
    return (
        <>
            <nav className={style.nav_bar}>
                <p onClick={() => window.open('#', '_blank')}>Produtos</p>
                <a href="#"><img src="/mweb4.png" alt="logo" className={style.logo} /></a>
                <a href="#">Sobre</a>
            </nav>
        </>
    )
}

export default NavBar