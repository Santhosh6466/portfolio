import { useInView } from "../../hooks/useInView";

export default function Reveal({ children, delay = 0, style = {} }) {
  const [ref, visible] = useInView(0.06);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity .75s cubic-bezier(.16,1,.3,1) ${delay}s, transform .75s cubic-bezier(.16,1,.3,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
