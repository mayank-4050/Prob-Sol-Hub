import React from 'react'
import "./Nevbar.css"


const Nevbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"></div>
      <input type="checkbox" id="menu-toggle" />
      <label for="menu-toggle" className="menu-icon">☰</label>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Explore Problems</a></li>
        <li><a href="#">Submit Problem</a></li>
        <li><a href="#">Leaderboard</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  )
}


const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-opacity">
        <div className="hero-intro">
          <div className="text1">  <p>"Turn Real-World Problems into Innovative Solutions!" 🌍💡</p></div>

          <div className="text2"> <p> Welcome to Problem-Solution Hub, where challenges meet creativity! 🚀 Our platform connects people facing real-world problems with students eager to build impactful solutions. Whether it's a tech innovation, a social cause, or an industry challenge, here’s your chance to collaborate, innovate, and make a difference. Explore problems, brainstorm ideas, and bring solutions to life!</p></div>

          <div className="text3">  <p>🔍 Find a problem. 🛠️ Build a solution. 🌎 Create impact.</p></div>
        </div>

        <div className="hero-search">
          <input type="text" placeholder="Search Projects..."/>
          <button>Search</button>
        </div>
      </div>
    </div>
  )
}

export { Nevbar, HeroSection }
