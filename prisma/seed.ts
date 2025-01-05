import { CategoryFeature } from "@prisma/client"
import { prisma } from "../src/libraries/database"

async function main() {
  await prisma.user.upsert({
    where: { email: "fabio.bachi@gmail.com" },
    update: {},
    create: {
      name: "Fábio Bachi",
      email: "fabio.bachi@gmail.com",
      accounts: {
        create: {
          title: "Fábio's Account",
        },
      },
    },
  })

  const categories = [
    { title: "Assinaturas", feature: null },
    { title: "Beleza", feature: null },
    { title: "Comida fora", feature: null },
    { title: "Contas", feature: null },
    { title: "Desenvolvimento", feature: null },
    { title: "Dívida", feature: null },
    { title: "Educação", feature: null },
    { title: "Eletrônicos", feature: null },
    { title: "Fatura do Cartão", feature: "CREDIT_CARD_INVOICE" },
    { title: "Investimento", feature: null },
    { title: "Lazer", feature: null },
    { title: "Limpeza", feature: null },
    { title: "Mercado", feature: null },
    { title: "Moradia", feature: null },
    { title: "Necessidades", feature: null },
    { title: "Negócio", feature: null },
    { title: "Outros", feature: null },
    { title: "Pets", feature: null },
    { title: "Presente", feature: null },
    { title: "Receita", feature: "INCOME" },
    { title: "Roupas", feature: null },
    { title: "Saúde", feature: null },
    { title: "Transf. contas", feature: null },
    { title: "Transporte", feature: null },
  ]

  for (const category of categories) {
    await prisma.category.upsert({
      where: { id: undefined, title: category.title },
      update: {},
      create: {
        title: category.title,
        feature: category.feature as CategoryFeature,
      },
    })
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
