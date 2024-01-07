import { Head } from '@inertiajs/react'
import I from "../Components/Icon"

export default function Welcome() {
  return (
    <>
      <Head title="Welcome" />

      <section id="coming-soon" className="center full">
        <h1>More content coming soon.</h1>
        <p>This website still has a few contents here. Stay tune or more content coming soon.</p>
      </section>
      <section id="donation" className="center">
        <h3>Support Me</h3>
        {/* <p>Donation makes every projects “even” better.</p> */}
        <p>Donation makes this website more evolved.</p>
        <a href='https://ko-fi.com/B0B8CDJ3M' target='_blank'>
          <button className='filled'>
            <I>volunteer_activism</I>
            Donate
          </button>
        </a>
      </section>
    </>
  )
}
