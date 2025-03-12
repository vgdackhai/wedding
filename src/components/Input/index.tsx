import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: ReactNode;
}

export const Input = ({ label, ...rest }: InputProps) => {
  return (
    <div className="relative block">
      <input
        {...rest}
        className="w-full border-b px-2 py-3 pt-6 focus:outline-none peer"
        placeholder={rest.placeholder ?? " "}
      />
      <label
        htmlFor={rest.id}
        className="absolute text-sm top-0 left-0 text-gray-400 cursor-text peer-focus:inset-0 peer-placeholder-shown:top-6 peer-placeholder-shown:left-3 peer-focus:text-black duration-200 transition-all"
      >
        {label || rest.name}
      </label>
    </div>
  );
};
