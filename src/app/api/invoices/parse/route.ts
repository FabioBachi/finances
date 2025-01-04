import { zfd } from "zod-form-data"
import { accountTypeSchema, cardTypeSchema, transactionTypeSchema } from "~/types/invoices"

const schema = zfd.formData({
  transactionType: zfd.text(transactionTypeSchema),
  target: zfd.text(accountTypeSchema.or(cardTypeSchema)),
  file: zfd.file(),
})

export async function POST(request: Request) {
  const formData = await request.formData()
  const transactionType = formData.get("transactionType")
  const target = formData.get("target")
  const file = formData.get("file")

  return Response.json(schema.parse({ transactionType, target, file }))
}
