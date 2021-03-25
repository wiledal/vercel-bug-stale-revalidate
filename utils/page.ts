import { Page } from "./db"

export const getPage = async () => {
  const {title, notFound} = await Page.findOne()

  return {title, notFound}
}