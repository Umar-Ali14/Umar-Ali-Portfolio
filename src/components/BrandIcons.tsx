// Simple text marks for platforms that lucide-react has no icon for.
// They take the same className as lucide icons, so they can be swapped in directly.

type IconProps = { className?: string };

export const FiverrIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <text
      x="12"
      y="17"
      textAnchor="middle"
      fontSize="15"
      fontWeight="800"
      fontFamily="Inter, Arial, sans-serif"
      fill="currentColor"
    >
      fi
    </text>
  </svg>
);

// Chat bubble with a phone handset, drawn in the same 2px-stroke style as lucide icons.
export const WhatsAppIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3.5 20.5l1.3-4.1A8.5 8.5 0 1 1 8 19.6z" />
    <path d="M9.2 8.6c.2-.5.5-.6.8-.6h.5c.2 0 .4.1.5.4l.6 1.4c.1.2 0 .5-.1.6l-.5.6c-.1.2-.1.4 0 .6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6 0l.6-.5c.2-.2.4-.2.6-.1l1.4.6c.3.1.4.3.4.5v.5c0 .3-.1.6-.6.8-.6.3-1.4.4-2.3.1-2-.7-3.7-2.4-4.4-4.4-.3-.9-.2-1.7.2-2.3z" />
  </svg>
);

export const UpworkIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <text
      x="12"
      y="16.5"
      textAnchor="middle"
      fontSize="12.5"
      fontWeight="800"
      fontFamily="Inter, Arial, sans-serif"
      fill="currentColor"
    >
      Up
    </text>
  </svg>
);
