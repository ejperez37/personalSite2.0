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
      <div className="ms-4 sm:ms-10 lg:ms-20 pt-5">
        <h2 className="text-4xl font-bold">{data.title}</h2>
        <hr className="max-w-80 sm:max-w-prose border-slate-900 border-solid border-y-2"></hr>
      </div>
      <div className="ms-4 sm:ms-10 lg:ms-20 flex justify-start items-center gap-3 text-2xl">
        <p>{data.date}</p>
        <p className="hidden sm:visible">|</p>
        <p className="hidden sm:visible">{data.description}</p>
      </div>
      <article className="mx-10 sm:ms-20 lg:ms-32 pt-5 max-w-xl lg:max-w-3xl text-xl">
        <p className="">{data.body}</p>
      </article>
    </>
  );
}
