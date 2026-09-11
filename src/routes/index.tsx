import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Curse of the Crimson Crypt — Horror Game with a Twist" },
      {
        name: "description",
        content:
          "Explore a pitch-black crypt by torchlight, survive the chase, and face a jumpscare that turns into paperwork. Playable in your browser.",
      },
      { property: "og:title", content: "Curse of the Crimson Crypt" },
      {
        property: "og:description",
        content:
          "A short browser horror game that ends in the most bureaucratic twist imaginable.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-black">
      <h1 className="sr-only">Curse of the Crimson Crypt</h1>
      <iframe
        src="/game.html"
        title="Curse of the Crimson Crypt game"
        className="h-full w-full border-0"
      />
    </main>
  );
}
