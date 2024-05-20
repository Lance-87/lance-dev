import { ReactNode } from "react";

interface BaseButtonProps {
  onClick?: () => void;
  
}

export default function BaseButton({
  children,
  props,
}: {
  children: ReactNode;
  props: BaseButtonProps;
}) {
  return (
    <button className="w-ful h-full p-2 relative flex justify-center items-center overflow-hidden" onClick={props.onClick}>
      {children}
    </button>
  );
}
