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
