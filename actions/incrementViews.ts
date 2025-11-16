"use server"

import { writeClient } from "@/sanity/lib/write-client"

export async function incrementViews(id: string, current: number) {
  await writeClient
    .patch(id)
    .set({ views: current + 1 })
    .commit()
}
