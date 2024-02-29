import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CustomAlertProps } from "@/types/folder/folder-types";
const CustomAlert = ({ alert, onOpenChange }: CustomAlertProps) => {
  return (
    <Dialog open={alert} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-600 to-red-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-3xl">Oops ⚠️ </DialogTitle>
          <DialogDescription className="text-white">
            Context is too large to render . <br />
            We are currently using free tier of GPT-3.5-turbo so we have context
            limit. Please choose shorter length video.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CustomAlert;
