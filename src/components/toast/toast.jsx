import React, { useState, useEffect } from "react";
import "./toast.css";

const Toast = ({ message, showToast, onClose, success }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log(isVisible);
    if (showToast) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showToast, onClose]);

  return isVisible ? (
    <div className={success ? "toast success" : "toast failed"}>
      <p>{message}</p>
    </div>
  ) : null;
};

export default Toast;
