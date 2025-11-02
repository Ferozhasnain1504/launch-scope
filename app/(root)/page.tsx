import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { Star } from "lucide-react";
import { title } from "process";

export default async function Home({searchParams}: { searchParams: Promise< {query?: string}> } ) {

  const query = (await searchParams).query;

  const posts = [{_createdAt : new Date(),
    views : 55,
    author : { _id : 1, name : 'John Doe' },
    _id : 1,
    description : 'This is a sample description',
    image : "https://img6.arthub.ai/64e9dd6d-377a.webp",
    category : "Robots",
    title : "AI Robot Assistant",
   }];

  return (
    <>
     <section className="pink_container">
       <h1 className="heading">Ignite Ideas, <br/> Build Together</h1>

       <p className="sub-heading !max-w-3xl">
          Pitch your idea, earn votes, and shine in virtual startup battles.
       </p>

       <SearchForm query = {query}/>
     </section>

     <section className="section_container"> 
        <p className="text-30-semibold">
          {query ? `Showing results for "${query}"` : 'Explore trending startup ideas below.'}
        </p>

        <ul className="mt-7 card_grid">
          { posts?.length > 0 ? (
            posts.map((post : StartupCardType, index: number) => (
              <StartupCard key={post?._id}  post={post}/>
            ))
          ) : (
            <p className="no-resutls">No startups found</p>
          )}
        </ul>
     </section>
    </>
  );
}
