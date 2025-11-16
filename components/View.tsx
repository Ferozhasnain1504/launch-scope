import { START_VIEWS_QUERY } from "@/sanity/lib/queries"
import Ping from "./Ping"
import { client } from "@/sanity/lib/client"
import { ViewIncrementer } from "./ViewIncrementer"

const View = async ({ id }: { id: string }) => {
  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(START_VIEWS_QUERY, { id })

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">Views: {totalViews}</span>
      </p>

      {/* triggers increment on the client */}
      <ViewIncrementer id={id} views={totalViews} />
    </div>
  )
}

export default View
