import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <nav className="flex justify-between items-center px-4 py-8 lg:p-8 border-slate-900 border-b-2 w-dvw">
      <div className="flex flex-row justify-between items-center w-dvw">
        <h1 className="text-3xl">
          <Link to="/">ej's notes</Link>
        </h1>
        <div className="flex flex-col sm:flex-row justify-center gap-5 md:space-x-4">
          <Link to="/about">about</Link>
          <Link to="/projects">projects</Link>
        </div>
      </div>
    </nav>
  );
}
