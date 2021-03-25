import { Page } from "../../utils/db"

export default async (req, res) => {
  let now = Date.now()

  let page = await Page.findOne()
  
  await Page.updateOne({
    title: 'Hello World: ' + now,
    notFound: !page.notFound
  })

  res.json({
    ok: true
  })
}