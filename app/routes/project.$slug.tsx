import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import PersonalSiteV1 from "~/components/personalSiteV1";
import YoutubeClone from "~/components/youtubeClone";

export async function loader({ params }: LoaderFunctionArgs) {
  return json(params.slug);
}

export default function ProjectPageShowcase() {
  const slug = useLoaderData<typeof loader>();
  if (slug == "youtubeClone") {
    return <YoutubeClone />;
  } else if (slug == "personalSiteV1") {
    return <PersonalSiteV1 />;
  } else
    return (
      <>
        <h2 className="text-2xl sm:ms-8 text-center underline lg:ms-20 lg:text-left pt-5 font-bold pb-10">
          nothing found!
        </h2>
        <div className="max-w-screen-md md:mx-20 mx-8 space-y-10 text-lg pb-5">
          <p>
            maybe what you're looking for is under construction, or maybe you're
            getting silly with the URL!
          </p>
          <p>
            either way, click{" "}
            <Link to={"/projects"} className="underline">
              <b>here</b>
            </Link>{" "}
            to go back to the projects page, or click the logo to go home!
          </p>
        </div>
      </>
    );
}
