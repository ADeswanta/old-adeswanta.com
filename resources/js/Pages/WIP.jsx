import { Head } from '@inertiajs/react'
import I from "../Components/Icon"

export default function WIP() {
  return (
    <>
      <Head title="Work In Progress" />

      <section id="wip" className="center">
        <h1>WIP</h1>
        <p>This page isn't ready yet.</p>
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
