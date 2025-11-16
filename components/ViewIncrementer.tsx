"use client"

import { useEffect } from "react"
import { incrementViews } from "@/actions/incrementViews"

export function ViewIncrementer({ id, views }) {
  useEffect(() => {
    incrementViews(id, views)
  }, [id, views])

  return null
}
