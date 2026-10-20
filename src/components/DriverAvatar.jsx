function initialsFor(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
}

export default function DriverAvatar({ name, avatarUrl, className = '' }) {
  if (avatarUrl) {
    return (
      <img
        src={avatarUrl}
        alt={name}
        className={className}
      />
    );
  }

  return (
    <div
      className={`${className} bg-white/15 flex items-center justify-center font-bold text-white leading-none`}
      role="img"
      aria-label={name}
    >
      {initialsFor(name)}
    </div>
  );
}
