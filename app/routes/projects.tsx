import { Link, Outlet } from "@remix-run/react";

export default function Projects() {
  return (
    <>
      <h2 className="text-3xl ms-8 text-center sm:text-left lg:ms-20 pt-5 font-bold underline">
        projects
      </h2>
      <div className="max-w-screen-md mx-8 lg:ms-20 pt-5 space-y-3">
        <p>/*</p>
        <p>
          i hope you find my mix of IT, programming, and cybersecurity projects
          interesting and educational!
        </p>
        <p>*/</p>
      </div>
      <div className="flex flex-col justify-center items-center space-y-10 lg:flex-row lg:justify-around lg:items-center m-10 text-center">
        <h3 className="text-2xl underline">IT projects</h3>
        <div className="space-y-5">
          <Link to={`/project/vmHomelab`}>
            <img
              src="/homelabAssets/pi_internals.jpg"
              width={300}
              className="rounded-2xl"
            />
            <h3>my virtual machine homelab</h3>
          </Link>
        </div>
        <div className="space-y-5">
          <Link to={`/project/piHolePt1`}>
            <img src="/nanoPiBoard.jpg" width={300} className="rounded-2xl" />
            <h3>pi-hole pt 1</h3>
          </Link>
        </div>
        <div className="space-y-5">
          <Link to={`/project/piHolePt2`}>
            <img src="/nanoPiInHand.jpg" width={300} className="rounded-2xl" />
            <h3>pi-hole pt 2</h3>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-10 lg:flex-row lg:justify-around lg:items-center m-10 text-center">
        <h3 className="text-2xl underline">programming projects</h3>
        <div className="space-y-5">
          <Link to={`/project/youtubeClone`}>
            <img
              src="/ytCloneAssets/ytCloneScreenshot.png"
              width={450}
              className="rounded-2xl"
            />
            <h3>full stack youtube clone</h3>
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
