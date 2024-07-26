import { supabase } from "~/models/user.server";
import { useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ params }: LoaderFunctionArgs) {
  const id = params.id;
  const { data } = await supabase.from("notes").select().eq("id", id).single();
  console.log(data);
  return { data };
}

export default function Blog() {
  const { data }: any = useLoaderData();

  return (
    <>
      <div className="ms-20 pt-5">
        <h2 className="text-4xl font-bold">{data.title}</h2>
        <hr className="max-w-prose border-slate-900 border-solid border-y-2"></hr>
      </div>
      <div className="ms-20 flex justify-start items-center gap-3 text-2xl">
        <p>{data.date}</p>
        <p>|</p>
        <p>{data.description}</p>
      </div>
      <article className="ms-32 pt-5 max-w-3xl text-xl">
        <p className="">{data.body}</p>
      </article>
    </>
  );
}
