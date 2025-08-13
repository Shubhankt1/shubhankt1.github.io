const GlowOutline = ({
  children,
  type = "oval",
  variant = "purple",
  speed = "normal",
  onHover = false,
  className = "",
  ...props
}) => {
  const getGlowClasses = () => {
    let classes = "glow-border";

    if (type !== "" && type != "border") classes += ` glow-border-${type}`;

    // Speed variants
    if (speed === "fast") classes += " glow-fast";
    if (speed === "slow") classes += " glow-slow";

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

export default GlowOutline;
