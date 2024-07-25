import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  const mockDate = "07.24.24";
  const mockList = [
    {
      id: 0,
      title: "Title #1",
      date: mockDate,
    },
    {
      id: 1,
      title: "Title #2",
      date: mockDate,
    },
    {
      id: 2,
      title: "Title #3",
      date: mockDate,
    },
    {
      id: 3,
      title: "Title #4",
      date: mockDate,
    },
  ];
  const listItems = mockList.map((item) => (
    <li className="pb-3" key={item.id}>
      <h3 className="text-xl">{item.title}</h3>
      <hr className="border-slate-900 border-solid border-y-2"></hr>
      <p>{item.date}</p>
    </li>
  ));

  return (
    <>
      <main className="min-h-screen relative">
        <h2 className="text-2xl ms-20 pt-5 font-bold">
          printf("Hello, %s\n", user);
        </h2>
        <div className="max-w-screen-md ms-20 pt-5">
          <p>/*</p>
          <p>
            my name is e.j. and i want to welcome you to my personal tech site.
            my aim is to write posts of all the cool computer
            science/programming/IT topics i learn about. in doing so, you'll get
            to see how i go about learning in general, and specifically about
            systems-thinking, which goes beyond the world of tech. hope you
            enjoy and learn a thing or list[1]!
          </p>
          <p>*/</p>
        </div>
        <div className="max-w-screen-md ms-20 pt-5 pb-10 space-y-3 text-lg">
          <p>
            // check out my current career goals{" "}
            <a className="underline">here</a>
          </p>
          <p>
            // or, check out my human sciences blog{" "}
            <a className="underline">here</a>
          </p>
        </div>
        <hr className="max-w-7xl mx-auto border-slate-900 border-solid border-y-2"></hr>
        <div>
          <h2 className="text-2xl ms-20 pt-5 font-bold underline">
            recent posts
          </h2>
          <ul className="ms-20 pt-5 max-w-screen-sm">{listItems}</ul>
        </div>
      </main>
    </>
  );
}
