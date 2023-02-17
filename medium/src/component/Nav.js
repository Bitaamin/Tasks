import Admin from "../component/Admin"

export default function Nav() {
    return (
        <nav className="Nav">
            <img className="logo" src={require("../images/Logo.png")} alt="logo" />
            <ul className="navList">
                <li>Our story</li>
                <li>Membership</li>
                <li>Write</li>
                <li onClick={<Admin />}>Sign In</li>
                <li className="getStarted">Get started</li>
            </ul>
        </nav>
    )
}