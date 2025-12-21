import Button from "../../ui/Button";

type ModalProps = {
  type: "success" | "failed";
  message: string;
  description: string;
  onSuccess: () => void;
  onFailed: () => void;
};

const Modal: React.FC<ModalProps> = ({
  type,
  message,
  description,
  onSuccess,
  onFailed
}) => {
  return (
    <div className="fixed inset-0 bg-black/80 z-[1010] flex items-center justify-center">
      <div className="w-full max-w-[353px] xl:max-w-[518px] bg-white rounded-2xl border-[1px] dark:bg-black dark:border-neutral-800">
        <div className="flex justify-center py-2 bg-[#dfdfdf] brightness-110 rounded-t-2xl dark:bg-neutral-950">
          <img
            src={
              type === "success"
                ? "/message-success.svg"
                : "/message-failed.svg"
            }
            className="w-[140px] xl:w-[140px]"
          />
        </div>
        <div className="px-6 text-center pb-10 flex justify-center flex-col pt-6 gap-4">
          <h3 className="text-neutral-900 text-lg font-bold xl:text-xl dark:text-neutral-25">
            {message}
          </h3>
          <p className="text-neutral-400 text-sm font-medium xl:text-base">
            {description}
          </p>
          <Button
            onClick={type === "success" ? onSuccess : onFailed} href="#"
            label={type === "success" ? "Back to Home" : "Try Again"}
            className="w-full h-[44px] xl:h-[48px] text-sm font-bold bg-primary-200 hover:bg-orange-700 duration-500 text-white shadow-[inset_4px_4px_4px_0_rgba(255,255,255,0.25)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;

