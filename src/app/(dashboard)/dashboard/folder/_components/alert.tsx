import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


const CustomAlert = () => {
  return (
    <Alert>
    <AlertTitle>Oops!</AlertTitle>
    <AlertDescription>
      Context is large to render in GPT 3 turbo.
    </AlertDescription>
  </Alert>
  
  )
}

export default CustomAlert