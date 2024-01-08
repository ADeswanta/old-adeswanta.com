import { ReactComponent as Logo } from "../../images/logo.svg"
import { Link } from '@inertiajs/react'
import ThemeSwitcher from '../Components/ThemeSwitcher'

export default function Header() {
  document.addEventListener('DOMContentLoaded', () => {
    new IntersectionObserver(
      ([e]) => e.target.classList.toggle('sticked', e.intersectionRatio < 1),
      {
        threshold: [1],
        rootMargin: '-120px 0px 0px 0px'
      }
    ).observe(document.querySelector('header'));
  })

  return (
    <header>
      <Link id="logo-link" href="/" style={{ pointerEvents: (location.pathname == "/") ? "none" : "auto" }}>
        <button>
          <Logo id="logo" className="accent" width={36} height={24}/>
        </button>
      </Link>
      <span className="spacer"/>
      <nav>
        <Link href='/projects'>Projects</Link>
        <Link href='/gallery'>Gallery</Link>
        <Link href='/blogs'>Blogs</Link>
        <Link href='/about'>About Me</Link>
      </nav>
      <ThemeSwitcher/>
    </header>
  )
}
