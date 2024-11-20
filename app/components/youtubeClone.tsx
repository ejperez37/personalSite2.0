export default function YoutubeClone() {
  return (
    <>
      <h2 className="text-2xl text-center underline lg:text-left lg:ms-20 pt-5 font-bold pb-10">
        Full-Stack Youtube Clone
      </h2>
      <div className="max-w-64 sm:max-w-screen-sm lg:max-w-screen-md mx-auto space-y-10 text-2xl pb-5">
        <p className="text-center underline text-xl pb-5 visible sm:hidden">
          for best viewing, access on desktop or tablet!
        </p>
        <img
          src="/ytCloneAssets/ytCloneScreenshot.png"
          className="rounded-2xl"
        />
        <p>
          In this project, the goal was to avoid the common approach to
          application clones. A lot of times, the UI of a given app is
          recreated, and then the functionality is abstracted away to some other
          service. In this case, people will literally just plug in YT videos
          from YT itself. This project took it a different direction and
          explored the required logic to allow a user to upload a video, have it
          be transcoded to whatever quality was needed, and then hosted online
          for whomever to watch. Functionality also included authentication and
          listing available videos dynamically.
        </p>
        <img
          src="/ytCloneAssets/firebaseFunctions.png"
          className="rounded-2xl"
        />
        <p>
          The architecture of the app starts with a user creating an account - I
          had hooked up Firebase Auth to the application to allow social-sign-in
          via Google. A user record would be created, including a unique ID and
          the user's email. This functionality could be extended to also store
          information about the user, like profile pictures and names. To
          prevent any issues associated with client-side document creation, i.e.
          a network crash after the user signs up but BEFORE the user document
          is created, I used the trigger functionality provided by Firebase Auth
          to have the document be created server-side. The function to create
          the user record is *triggered* whenever a user is created, dealing
          with any potential browser or network crashes on the client-side.
        </p>
        <img src="/ytCloneAssets/gConsoleStorage.png" className="rounded-2xl" />
        <p>
          From there, signed-in users would be able to upload from local to
          Cloud Storage, where there was storage for raw and processed videos
          from users. If they weren't signed in, they wouldn't be able to
          upload. Not only would the upload button not be present, but I
          implemented a Firebase Function that generated a time-limited signed
          URL using the video the user specified for upload. This allowed the
          user to upload directly to the private bucket on Google Cloud Storage.
        </p>
        <img
          src="/ytCloneAssets/gConsoleCloudRun.png"
          className="rounded-2xl"
        />
        <p>
          Using Pub/Sub as a message queue, Cloud Run would be notified to take
          new videos uploaded to the raw video bucket in GCS, transcode it via
          the private video processing service uploaded to Cloud Run, and then
          place the video in the processed bucket.
        </p>
        <img
          src="/ytCloneAssets/firebaseFirestore.png"
          className="rounded-2xl"
        />
        <p>
          This was a great project to work through, and I had plans to extend it
          into an app for note-taking as well. This idea changed into my idea to
          create a human/health sciences blog instead however. Hence why you may
          see certain files or functions labeled "HF", short for "Hybrid
          Fitness", which is what I had called this originally. Nonetheless, I
          learned a great deal about application architecture and systems design
          in general!
        </p>
        <p>
          To visit the GitHub Repo, click{" "}
          <a
            href="https://github.com/ejperez37/yt_fullstack_clone"
            className="underline"
          >
            <b>here!</b>
          </a>
        </p>
      </div>
    </>
  );
}
