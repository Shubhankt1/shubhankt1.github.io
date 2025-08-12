const GlowCard = ({
  children,
  variant = "default",
  speed = "normal",
  onHover = false,
  className = "",
  ...props
}) => {
  const getGlowClasses = () => {
    let classes = "glow-border";

    // Speed variants
    if (speed === "fast") classes += " glow-border-fast";
    if (speed === "slow") classes += " glow-border-slow";

    // Color variants
    if (variant === "gold") classes += " glow-border-gold";
    if (variant === "purple") classes += " glow-border-purple";

    // Hover activation
    if (onHover) classes += " glow-border-hover";

    return classes;
  };

  return (
    <div className={`${getGlowClasses()} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default GlowCard;
