import React, {
  Children,
  cloneElement,
  useEffect,
  useRef,
  useState,
} from "react";
import "./Reveal.css";
export function Fade({
  children,
  duration = 700,
  distance = "20px",
  top,
  bottom,
  left,
  right,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current || !window.IntersectionObserver) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  const child = Children.only(children);
  return cloneElement(child, {
    ref,
    className: `${child.props.className || ""} ${visible ? "portfolio-reveal" : ""}`,
    style: {
      ...child.props.style,
      "--reveal-duration": `${duration}ms`,
      "--reveal-x": left ? `-${distance}` : right ? distance : "0px",
      "--reveal-y": top ? `-${distance}` : bottom ? distance : "0px",
    },
  });
}
export const Flip = Fade;
