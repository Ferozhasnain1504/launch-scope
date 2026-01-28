import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { Suspense } from "react";
import { auth } from "@/auth";

async function StartupList({ query }: { query: string | undefined }) {
  const params = { search: query || null };
  const session = await auth();

  console.log(session?.id);

  const { data: posts } = await sanityFetch({ query: STARTUP_QUERY, params });

  // console.log(JSON.stringify(posts, null, 2));

  return (
    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Showing results for "${query}"` : 'Explore trending startup ideas below.'}
      </p>

      <ul className="mt-7 card_grid">
        {posts?.length > 0 ? (
          posts.map((post: StartupCardType, index: number) => (
            <StartupCard key={post?._id} post={post} />
          ))
        ) : (
          <p className="no-resutls">No startups found</p>
        )}
      </ul>
    </section>
  );
}

async function SearchHeader({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const { query } = await searchParams;

  return (
    <section className="pink_container">
      <h1 className="heading">
        Ignite Ideas, <br /> Build Together
      </h1>

      <p className="sub-heading !max-w-3xl">
        Pitch your idea, earn votes, and shine in virtual startup battles.
      </p>

      <SearchForm query={query} />
    </section>
  );
}

export default function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  return (
    <>
      <Suspense fallback={<div className="pink_container"><p>Loading...</p></div>}>
        <SearchHeader searchParams={searchParams} />
      </Suspense>

      <Suspense fallback={<p className="text-30-semibold">Loading startups...</p>}>
        <StartupList query={undefined} />
      </Suspense>

      <SanityLive />
    </>
  );;
}
