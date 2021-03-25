import { Page } from "../../utils/db"

export default async (req, res) => {
  const {title, notFound} = await Page.findOne()

  res.json({
    title, notFound
  })
}