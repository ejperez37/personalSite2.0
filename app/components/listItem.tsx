import { Link } from "@remix-run/react";
import { Note } from "~/models/note.server";

export default function listItem(post: Note) {
  return (
    <Link to={`/blog/${post.id}`}>
      <li className="pb-3" key={post.id}>
        <h3 className="text-xl">{post.title}</h3>
        <hr className="border-slate-900 border-solid border-y-2"></hr>
        <p>{post.date}</p>
      </li>
    </Link>
  );
}
