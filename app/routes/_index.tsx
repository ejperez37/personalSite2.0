import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils"; //Do I need this?
import { supabase } from "~/models/user.server";
import RecentPosts from "~/components/recentPosts";

export const loader = async () => {
  const data = await supabase.from("notes").select();
  return data;
};

export default function Index() {
  return (
    <>
      <main className="min-h-screen">
        <h2 className="text-2xl ms-4 md:ms-10 lg:ms-20 pt-5 font-bold">
          printf("Hello, %s\n", user);
        </h2>
        <div className="max-w-screen-sm lg:max-w-screen-md mx-4 md:ms-10 lg:ms-20 pt-5">
          <p>/*</p>
          <p>
            my name is e.j. and i want to welcome you to my personal tech site.
            my aim is to write posts of all the cool
            cybersecurity/IT/programming topics i learn about. in doing so,
            you'll get to see how i go about learning in general, and
            specifically about systems-thinking, which goes beyond the world of
            tech. hope you enjoy and learn a thing or list[1]!
          </p>
          <p>*/</p>
        </div>
        <div className="max-w-screen-md mx-4 md:ms-10 lg:ms-20 pt-5 pb-10 space-y-3 text-lg">
          <p>
            // check out my current career goals{" "}
            <Link to="/project/underconstruction" className="underline">
              here
            </Link>
          </p>
          <p>
            // or, check out my human sciences blog{" "}
            <Link to="/project/underconstruction" className="underline">
              here
            </Link>
          </p>
        </div>
        <hr className="max-w-7xl mx-auto border-slate-900 border-solid border-y-2"></hr>
        <div>
          <h2 className="text-2xl mx-4 md:ms-10 lg:ms-20 pt-5 font-bold underline">
            recent blog posts
          </h2>
        </div>
        <RecentPosts />
      </main>
    </>
  );
}
