import '../../assets/css/Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
     <>

    <header className='topnav-r'>
    <div class="app-name">PORTFOLIO</div>
        <div ><Link to='/'>Home</Link></div>
        <div ><Link to='/skills'>Skills</Link></div>
        <div ><Link to='/projects'>Projects</Link></div>
        <div ><Link to='/resume'>Resume</Link></div>
        <div ><Link to='/contact'>Contact</Link></div>
        <div ><Link to='/about'>About</Link></div>        
    </header>
    </>
)
    }
    export default Navbar