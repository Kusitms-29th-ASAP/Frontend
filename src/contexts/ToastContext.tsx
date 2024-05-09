// contexts/ToastContext.tsx

import Toast from "@/components/common/Toast";
import React, { createContext, useContext, useState } from "react";

type ToastType = "basic" | "primary";

interface ToastContextType {
  showToastMessage: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider: React.FC = ({ children }) => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<ToastType>("basic");

  const showToastMessage = (message: string, type: ToastType = "basic") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const value = {
    showToastMessage,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      {showToast && (
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={() => setShowToast(false)}
        />
      )}
    </ToastContext.Provider>
  );
};
