import './nav.css'

export default function NavigationHeader(){
        return(
            <>
                <div className="navbar">
                    <ul className="nav-menu">
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>Details</a></li>
                        <li><a href='#'>Hobbies</a></li>
                        <li><a href='#'>Contact me</a></li>                       
                    </ul>
                </div>
            </>
        )
}