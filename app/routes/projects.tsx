import { Link, Outlet } from "@remix-run/react";

export default function Projects() {
  return (
    <>
      <h2 className="text-2xl ms-20 pt-5 font-bold underline">projects</h2>
      <div className="max-w-screen-md ms-20 pt-5 space-y-3">
        <p>/*</p>
        <p>
          here are a list of my projects - starting off with some websites i've
          built. i started my journey into the world of tech completely blind; a
          trusted friend of mine had studied CS in college and based off of what
          he saw in me, suggested i try learning web development.
        </p>
        <p>
          it wasn't until later, specifically after learning about systems
          design for applications, that i realized i really enjoyed the IT side
          of things more. now that is where my studies lie, as i journey towards
          a career in cybersecurity, where i feel my all the skills and
          attributes i've accumulated would be best put to use.
        </p>
        <p>expect more posts specific to IT and cybersecurity in my blog!</p>
        <p>*/</p>
      </div>
      <div className="flex justify-around items-center m-10 text-center">
        <div className="space-y-5">
          <Link to={`/project/youtubeClone`}>
            <img
              src="/ytCloneAssets/ytCloneScreenshot.png"
              width={400}
              className="rounded-2xl"
            />
            <h3>full stack youtube clone</h3>
          </Link>
        </div>
        <div className="space-y-5">
          <Link to={"/project/underconstruction"}>
            <img
              src="/risdHubScreenshot.png"
              width={400}
              className="rounded-2xl"
            />
            <h3 className="line-through">college resource hub</h3>
            <p>UNDER CONSTRUCTION</p>
          </Link>
        </div>
        <div className="space-y-5">
          <Link to={`/project/personalSiteV1`}>
            <img
              src="/eliseosRoomScreenshot.png"
              width={400}
              className="rounded-2xl"
            />
            <h3>personal site v1.0</h3>
          </Link>
        </div>
      </div>
    </>
  );
}
