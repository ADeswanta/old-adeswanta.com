import CursorContainer from './Components/CursorContainer'
import { ReactComponent as Logo } from "../images/logo.svg"

import Header from './Components/Header'

import { ReactComponent as Twitter } from "../images/twitter.svg"
import { ReactComponent as Mastodon } from "../images/mastodon.svg"
import { ReactComponent as Instagram } from "../images/instagram.svg"
import { ReactComponent as GitHub } from "../images/github.svg"
import { ReactComponent as Figma } from "../images/figma.svg"
import { ReactComponent as YouTube } from "../images/youtube.svg"

import ClockWord from './Components/ClockWord'

export default function Layout({ children }) {
  let getCurrentYear = () => {
    let birth = new Date("2005/12/08 19:45:00");
    let now = new Date();

    let age = new Date(now.getTime() - birth.getTime());
    return Math.abs(age.getUTCFullYear() - 1970);
  }

  return [
    <CursorContainer/>,
    (location.pathname == "/") ?
    <div id="welcome">
      <div className="wrapper">
        <Logo id="logo" className="accent" width={72} height={48}/>
        <h2 className="no-margin accent">I’m <span className="bold">Advendra Deswanta</span></h2>
        <h5 className="no-margin accent dim">a {getCurrentYear()}yo Designer & Developer</h5>
      </div>
    </div> : null,
    <Header/>,

    <div className="child">
      { children }
    </div>,

    <footer>
      <ClockWord/>
      <div className="info">
        <span>Follow me on social media:</span>
        <span className="social-media">
          <a href="https://twitter.com/adeswanta08"><button><Twitter/></button></a>
          <a href="https://mastodon.social/@adeswanta"><button><Mastodon/></button></a>
          <a href="https://www.instagram.com/adeswanta.08/"><button><Instagram/></button></a>
          <a href="https://github.com/ADeswanta"><button><GitHub/></button></a>
          <a href="https://www.figma.com/@adeswanta08"><button><Figma/></button></a>
          <a href="https://www.youtube.com/@ADeswanta"><button><YouTube/></button></a>
        </span>
        <span className='dim'>&copy; ADeswanta, 2023</span>
      </div>
    </footer>
  ]
}
