import "../styles/sidemenu.css";
import {toggleSidebar} from "../scripts/sidemenu";

const Sidemenu = () => {
  return (
    <>
    <div className="sidebar">
        <h2>Menu</h2>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </div>

    <div className="content">
        <button onClick={toggleSidebar}>☰ Toggle Menu</button>
        <h1>Welcome to My Website</h1>
        <p>This is a sample content area.</p>
    </div>
    </>
  )
}

export default Sidemenu