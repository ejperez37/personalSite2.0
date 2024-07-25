export default function PersonalSiteV1() {
  return (
    <>
      <h2 className="text-2xl ms-20 pt-5 font-bold pb-10">
        Personal Site V1: Eliseo's Room
      </h2>
      <div className="max-w-screen-md mx-auto space-y-10 text-lg pb-5">
        <img src="/eliseosRoomScreenshot.png" />
        <p>
          This was my original personal site! I built this when I had my sights
          set on web development, and also at a time when I was introduced to
          the idea of having a personal site as a substitute to social media. I
          really liked that, as I don't enjoy the addictive nature socmed can
          have. This was a way to express myself, to show my new skills I had
          been learning, and to spend time creating instead of just
          consuming/studying!
        </p>
        <p>
          I look back on it fondly, however there are definitely decisions made
          that I would question now. I used Next.js, for no other reason than it
          was popular. Sure, it was a great rep in reading documentation and
          figuring unfamiliar technology out, but it didn't really otherwise
          help me develop any skill that I could bring outside of Next.js.{" "}
        </p>
        <p>
          This is why I prefer and use Remix.run nowadays - it's built in a way
          that teaches you about the web platform itself, so that after you
          learn Remix, you can actually figure out any other framework because
          *you know how the web browser works by default.*
        </p>
        <p>
          Beyond that, there is definitely repetition in my code. There is
          definitely a bit of a "throw it at the wall and see what sticks/looks
          good" mentality. But again, I appreciate these steps I took on my
          journey! If you have the proper mindset, then everything you do can be
          a learning experience, and you can get reps of developing a multitude
          of skills!
        </p>
        <p>
          The "big" functionality of this site was the blog. It was set up so
          that I could upload a .md aka a markdown file into a folder, and then
          the site would dynamically create a blog post from that. It worked
          well enough, even though the site being all-encompassing as far as my
          interests went led to a bit of "analysis paralysis" in actually
          picking topics to write about.{" "}
        </p>
        <p>
          I look forward to overcoming that obstacle with my two blogs now - one
          specifically for all things tech and compsci, and then a separate one
          for my other huge passion, human and health sciences! I look forward
          to showcasing my perspectives and journeys on both, and hope you enjoy
          the ride as well.
        </p>
        <p>
          To visit the GitHub Repo, click{" "}
          <a
            href="https://github.com/ejperez37/personal-site-v1"
            className="underline"
          >
            <b>here!</b>
          </a>
        </p>
        <p>
          Or, to see the live site, click{" "}
          <a href="https://eliseosroom.netlify.app" className="underline">
            here!
          </a>
        </p>
      </div>
    </>
  );
}
