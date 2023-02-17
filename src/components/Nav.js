import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
	const [showNav, setShowNav] = useState(false)
	const handleState = () => {
		setShowNav(!showNav)
	}

	const [showOverlay, setShowOverlay] = useState(true)
	const handleOverlay = () => {
		setShowOverlay(!showOverlay)
	}

	return (
		<>
			<nav className={showNav ? "menu-opener active" : "menu-opener"} id="burger_opener" onClick={handleState}>
				<div className={showNav ? "menu-opener-inner active" : "menu-opener-inner"}></div>
			</nav>
			<nav className={showNav ? "menu active" : "menu"}>
				<ul className="menu-inner" id="ul_found" style={{ display: !showNav && "none" }}>
					<Link to={"/"} className="menu-link">
						<li>Home</li>
					</Link>
					<Link to={"/work"} className="menu-link">
						<li>Work</li>
					</Link>
					<Link to={"/aboutme"} className="menu-link">
						<li>About Me</li>
					</Link>
					<Link to={"/contactme"} className="menu-link">
						<li>Contact</li>
					</Link>
				</ul>
			</nav>

			<div id="myNav" className="overlay" style={{ width: !showOverlay && "100%" }}>
				<a href="javascript:void(0)" className="closebtn" onClick={handleOverlay}>&times;</a>
				<div className="overlay-content">
					<div className="whats">
						<p style={{ textAlign: "left" }}><b>WHAT'S ALL THIS ABOUT?</b></p>
						<div style={{ height: "10px" }}></div>
						<p className="whats-p">Nothing much really, just thought this looks kinda cool. <b>Drop me a line at shahrozdaniel@outlook.com if you want to work with me on something or just say hi.</b> ^_^</p>
					</div>
					<br />
					<div style={{ height: "50px" }}></div>
					<br />
					<div className="whats">
						<p style={{ textAlign: "left" }}><b>SOCIAL</b></p>
						<div style={{ height: "10px" }}></div>
						<p className="whats-p">Check out my <b>Git</b> or follow me on <b>instagram</b>, cause why not. :P</p>
					</div>
				</div>
			</div>

			<span style={{ fontSize: "30px", cursor: "pointer" }} className="dots" onClick={handleOverlay}>&hellip;</span>

			<div className="social-container">
				<ul className="ul">
					<span className="follow"><b>Follow</b></span>
					<li className="li">
						<a href="https://github.com/danielrepos" target={"_blank"}>Github</a>
					</li>
					<li className="li">
						<a href="#" target={"_blank"}>Instagram</a>
					</li>
				</ul>
			</div>
		</>
	)
}

export default Nav