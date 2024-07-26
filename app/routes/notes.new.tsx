import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { createNote } from "~/models/note.server";
import { requireUserId } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);

  const formData = await request.formData();
  const title = formData.get("title");
  const date = formData.get("date");
  const description = formData.get("description");
  const body = formData.get("body");

  if (typeof title !== "string" || title.length === 0) {
    return json({ errors: { title: "Title is required" } }, { status: 400 });
  }

  if (typeof date !== "string" || date.length === 0) {
    return json({ errors: { date: "Date required" } }, { status: 400 });
  }

  if (typeof description !== "string") {
    return json(
      { errors: { description: "Description must be text" } },
      { status: 400 },
    );
  }

  if (typeof body !== "string" || body.length === 0) {
    return json({ errors: { body: "Body is required" } }, { status: 400 });
  }

  const note = await createNote({ title, date, description, body, userId });
  return redirect(`/notes/${note.id}`);
};

export default function NewNotePage() {
  return (
    <Form
      method="post"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%",
      }}
    >
      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Title: </span>
          <input
            name="title"
            className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
          />
        </label>
      </div>
      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Date: </span>
          <input
            name="date"
            type="date"
            className="flex-1 px-3 border-2 border-blue-500 rounded-md"
          />
        </label>
      </div>
      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Description: </span>
          <input
            name="description"
            className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg"
          />
        </label>
      </div>
      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Body: </span>
          <textarea
            name="body"
            rows={8}
            className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
          ></textarea>
        </label>
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
        >
          Save
        </button>
      </div>
    </Form>
  );
}
