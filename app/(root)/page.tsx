import SearchForm from "@/components/SearchForm";

export default async function Home({searchParams}: { searchParams: Promise< {query?: string}> } ) {

  const query = (await searchParams).query;
  return (
    <>
     <section className="pink_container">
       <h1 className="heading">Ignite Ideas, <br/> Build Together</h1>

       <p className="sub-heading !max-w-3xl">
          Pitch your idea, earn votes, and shine in virtual startup battles.
       </p>

       <SearchForm query = {query}/>
     </section>
    </>
  );
}
