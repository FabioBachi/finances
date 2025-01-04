"use client"

import { Card, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack } from "@mui/material"
import { FormEvent, useCallback, useState } from "react"
import InputFile from "~/components/ui/input-file"
import { AccountType, CardType, TransactionType } from "~/types/invoices"

export default function UploadInvoiceForm() {
  const [transactionType, setTransactionType] = useState<TransactionType | "">("debit")
  const [target, setTarget] = useState<AccountType | CardType | "">("nubank-fabio")

  const handleChangeTransaction = useCallback((event: SelectChangeEvent) => {
    setTransactionType(event.target.value as TransactionType)
  }, [])

  const handleChange = useCallback((event: SelectChangeEvent) => {
    setTarget(event.target.value as CardType)
  }, [])

  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    try {
      const response = await fetch("/api/invoices/parse", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      const result = await response.json()
      console.log(`Success: ${result.message}`)
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <Card component="form" onSubmit={handleSubmit} sx={{ p: 2 }}>
      <Stack direction="row" spacing={2}>
        <FormControl variant="filled" sx={{ minWidth: 200 }}>
          <InputLabel id="transactionType">Transação</InputLabel>
          <Select labelId="transactionType" value={transactionType} onChange={handleChangeTransaction} name="transactionType">
            <MenuItem value="credit">Crédito</MenuItem>
            <MenuItem value="debit">Débito</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ minWidth: 200 }}>
          <InputLabel id="target">Tipo do cartão</InputLabel>
          <Select labelId="target" value={target} onChange={handleChange} name="target">
            <MenuItem value="nubank-fabio">Nubank - Fábio</MenuItem>
            <MenuItem value="sicredi">Sicredi</MenuItem>
          </Select>
        </FormControl>
        <InputFile name="file" accept=".csv" />
      </Stack>
    </Card>
  )
}
