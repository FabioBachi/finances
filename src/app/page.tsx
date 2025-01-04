import SignIn from "~/components/auth/sign-in"
import UploadInvoiceForm from "~/components/invoices/upload-form"

export default function Home() {
  return (
    <>
      <SignIn />

      <UploadInvoiceForm />
    </>
  )
}
