import { useState, useEffect } from "react";

export function useTypewriter(text, delay = 700, speed = 20) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0, iv;
    const t = setTimeout(() => {
      iv = setInterval(() => {
        if (i < text.length) setOut(text.slice(0, ++i));
        else clearInterval(iv);
      }, speed);
    }, delay);
    return () => { clearTimeout(t); clearInterval(iv); };
  }, [text]);
  return out;
}
