import { urlForImage } from "@/sanity/lib/image";
import { Image as TImage } from "@/typings";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  image: TImage;
};

export const Modal = ({ open, onClose, image }: Props) => {
  const ref = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    const closeListenerFnc = () => {
      onClose && onClose();
    };

    const dialogRef = ref.current;
    dialogRef?.addEventListener("close", closeListenerFnc);
    return () => {
      dialogRef?.removeEventListener("close", closeListenerFnc);
    };
  }, [onClose]);

  useLayoutEffect(() => {
    if (open && !ref.current?.open) {
      ref.current?.showModal();
    } else if (!open && ref.current?.open) {
      ref.current?.close();
    }
  }, [open]);

  return (
    <dialog
      className="h-4/6 w-5/6"
      ref={ref}
      onClick={(e) => {
        const dialogDimensions = e.currentTarget.getBoundingClientRect();
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          e.currentTarget.close();
        }
      }}
    >
      <Image
        priority
        className="object-cover h-auto max-w-full rounded-lg drop-shadow-xl"
        src={urlForImage({ ...image }).url()}
        fill
        alt=""
      />
    </dialog>
  );
};
