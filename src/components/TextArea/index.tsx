import { DetailedHTMLProps, ReactNode, TextareaHTMLAttributes } from "react";

interface TextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label?: ReactNode;
}

export const TextArea = ({ label, ...rest }: TextareaProps) => {
  return (
    <div className="relative block">
      <textarea
        {...rest}
        className="h-40 w-full border-b resize-none px-3 text-sm focus:outline-none pt-6 peer"
        placeholder={rest.placeholder ?? " "}
      ></textarea>
      <label
        htmlFor={rest.id}
        className="absolute text-sm top-0 left-0 text-gray-400 cursor-text peer-focus:inset-0 peer-placeholder-shown:top-6 peer-placeholder-shown:left-3 peer-focus:text-black duration-200 transition-all"
      >
        {label || rest.name}
      </label>
    </div>
  );
};
