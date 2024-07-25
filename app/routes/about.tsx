export default function About() {
  return (
    <>
      <h2 className="text-2xl ms-20 pt-5 font-bold underline">about me</h2>
      <div className="border-solid border-2 border-slate-900 rounded-full max-w-screen-2xl p-10 flex flex-row justify-center space-x-24">
        <div className="leftColumn ms-10 space-y-3">
          <div>
            <img src="/face2.jpg" width={200} className="rounded-xl" />
          </div>
          <div className="flex flex-col space-y-2">
            <p className="font-bold">name: </p>
            <p>e.j. perez</p>
            <p className="font-bold">occupation(s):</p>
            <ul>
              <li>- family IT professional</li>
              <li>- cat dad</li>
              <li>- health fanatic</li>
              <li>- systems thinker</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col text-left max-w-lg space-y-5">
          <h3 className="text-xl font-bold">bio:</h3>
          <p>
            being introduced to systems thinking via combat sports && the
            physical preparation && the skill development therein, i have
            expanded that framework of improvement to all areas of life.{" "}
          </p>
          <p>
            maintaining a cool and clear head while dealing with someone trying
            to punch said head off your body has proven to be a very useful
            skill in the unpredictable flows of life. in order to do that, "you
            do not rise to the occasion, you fall to your level of preparation".{" "}
          </p>
          <p>
            i use critical thinking & creative problem solving to navigate life
            with clear intentions - incorporating an open-mind and contextual
            parameters to achieve success and fulfillment in all the disparate
            areas of my life.
          </p>
          <p>
            i value, among many other things: family, hard-thinking, and
            effective communication.
          </p>
        </div>
      </div>
    </>
  );
}
