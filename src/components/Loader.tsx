import { useEffect, useState } from "react";
import "./Loader.css";

export const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // 1s push in + 3s display + 1s push out = 5s total

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <div className="loader-text-top font-display text-2xl md:text-3xl uppercase tracking-wider">
          let's see
        </div>
        
        <div className="loader-typewriter">
          <div className="loader-slide">
            <i />
          </div>
          <div className="loader-paper" />
          <div className="loader-keyboard" />
        </div>

        <div className="loader-text-bottom font-display text-2xl md:text-3xl uppercase tracking-wider">
          the headlines
        </div>
      </div>
    </div>
  );
};

export default Loader;

