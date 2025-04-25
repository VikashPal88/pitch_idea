import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Vikas" },
      _id: 1,
      description: "This is a description",
      image:
        "https://i.pinimg.com/736x/3a/88/28/3a882814e7cb928369294d3420a7167c.jpg",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container ">
        <h1 className="heading bg-red-700">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((psot: StartupCardType, index: number) => (
              <StartupCard key={psot?._id} post={psot} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
