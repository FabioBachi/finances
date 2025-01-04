import UploadFileIcon from "@mui/icons-material/UploadFile"
import { Button } from "@mui/material"
import { ChangeEvent, InputHTMLAttributes, useCallback, useState } from "react"

export default function InputFile({ onChange, value, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  const [file, setFile] = useState<File | undefined>(value as unknown as File)

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      setFile(e.target.files?.[0])
    },
    [onChange]
  )

  return (
    <Button component="label" variant="outlined" startIcon={<UploadFileIcon />} sx={{ marginRight: "1rem" }}>
      {file?.name ?? "Selecionar arquivo"}
      <input type="file" {...props} hidden onChange={handleChange} />
    </Button>
  )
}
