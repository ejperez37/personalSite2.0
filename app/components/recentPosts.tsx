import { useLoaderData } from "@remix-run/react";
import { Note } from "~/models/note.server";
import { supabase } from "~/models/user.server";
import listItem from "./listItem";

export const loader = async ({}) => {
  const { data } = await supabase.from("notes").select();
  return { data };
};

export default function RecentPosts() {
  const { data }: any = useLoaderData();
  const recentPosts = data.map((post: Note) => listItem(post));

  return <ul className="max-w-screen-sm ms-20 pt-5">{recentPosts}</ul>;
}
