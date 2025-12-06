export default function NeoButton({ label, children, ...props }) {
  return (
    <button
      {...props}
      className="neo-btn w-full py-3 rounded-lg text-lg font-semibold"
    >
      {/* Agora ele verifica: se tiver label, usa o label. 
          Se não, usa o texto dentro da tag (children) */}
      {label || children}
    </button>
  );
}