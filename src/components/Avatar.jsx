export default function Avatar({ name = '', size = 40, className = '' }) {
  return (
    <img
      src="/avatar.jpg"
      alt={name}
      width={size}
      height={size}
      className={`shrink-0 rounded-full object-cover object-[50%_20%] ${className}`}
      style={{ width: size, height: size }}
    />
  )
}
