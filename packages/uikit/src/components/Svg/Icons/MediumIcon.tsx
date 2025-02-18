import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle
        cx="16"
        cy="16"
        r="16"
        fill="white"
        className="group-hover/item:fill-[#00F0FF] group-hover/item:opacity-100 opacity-[0.12]"
      />
      <path
        d="M16.6667 15.9993C16.6667 18.9449 14.2789 21.3327 11.3333 21.3327C8.38781 21.3327 6 18.9449 6 15.9993C6 13.0538 8.38781 10.666 11.3333 10.666C14.2789 10.666 16.6667 13.0538 16.6667 15.9993Z"
        fill="currentColor"
      />
      <path
        d="M22.6667 15.9993C22.6667 18.9449 21.4728 21.3327 20 21.3327C18.5272 21.3327 17.3333 18.9449 17.3333 15.9993C17.3333 13.0538 18.5272 10.666 20 10.666C21.4728 10.666 22.6667 13.0538 22.6667 15.9993Z"
        fill="currentColor"
      />
      <path
        d="M24.6667 21.3327C25.403 21.3327 26 18.9449 26 15.9993C26 13.0538 25.403 10.666 24.6667 10.666C23.9303 10.666 23.3333 13.0538 23.3333 15.9993C23.3333 18.9449 23.9303 21.3327 24.6667 21.3327Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Icon;
