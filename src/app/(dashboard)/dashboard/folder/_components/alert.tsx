import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const CustomAlert = ({ alert, onOpenChange }: any) => {
  return (
    <Dialog open={alert} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-600 to-red-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-3xl">Ooops ⚠️ </DialogTitle>
          <DialogDescription className="text-white">
            Context is large to render in GPT 3 turbo. <br />
            We are currently in beta mode.We are working towards supporting
            bigger videos.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default CustomAlert
