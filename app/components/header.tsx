import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <nav className="flex justify-between items-center p-8 border-slate-900 border-b-2 shadow-lg w-dvw">
      <h1 className="text-3xl">
        <Link to="/">ej's notes</Link>
      </h1>
      <div className="flex flex-row justify-between space-x-4">
        <Link to="/about">about</Link>
        <Link to="/projects">projects</Link>
        <p>theme</p>
      </div>
    </nav>
  );
}
