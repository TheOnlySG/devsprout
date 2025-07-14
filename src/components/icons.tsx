import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8 9.6c.1-.4.2-.8.4-1.1C9.2 7.2 10.5 6.5 12 6.5s2.8.7 3.6 2c.2.3.3.7.4 1.1" />
      <path d="M10 13c-.2.3-.3.7-.4 1.1-.8 1.3-2.1 2-3.6 2s-2.8-.7-3.6-2c-.1-.4-.2-.8-.4-1.1" />
      <path d="M14 13c.2.3.3.7.4 1.1.8 1.3 2.1 2 3.6 2s2.8-.7 3.6-2c.1-.4.2-.8.4-1.1" />
      <path d="M12 11.4v10.1" />
      <path d="m10.3 16.5-4.8-2.3" />
      <path d="m13.7 16.5 4.8-2.3" />
      <path d="M12 21.5V19" />
      <path d="M12 6.5V4" />
      <path d="M10.5 4.5 12 3 13.5 4.5" />
      <path d="m9 12 1-1" />
      <path d="m15 12-1-1" />
    </svg>
  );
}
