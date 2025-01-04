import { z } from "zod"

export const transactionTypeSchema = z.enum(["credit", "debit"])
export const accountTypeSchema = z.enum(["nubank-fabio", "sicredi"])
export const cardTypeSchema = z.enum(["nubank-fabio", "sicredi"])

export type TransactionType = z.infer<typeof transactionTypeSchema>
export type AccountType = z.infer<typeof accountTypeSchema>
export type CardType = z.infer<typeof cardTypeSchema>
