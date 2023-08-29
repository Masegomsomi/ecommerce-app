import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
  "skzsXvzwZjrj1jdksTAhrHFTL6lDDsWKBENPpBeFBQkZTvkhd37d0b4b3fXZO1uXOAV8vkX8OW6ekGEzUds4G08vwez79pbqcSr9GabRnvIc8vmWktMrCtdTfDjA6aXEBFnEppAetUrOuNmEWG5Y5eTPBuNxAGh6eT9s4sRfa6dtpUJmHuVR",
})
