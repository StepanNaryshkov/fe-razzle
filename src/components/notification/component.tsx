import React, {useEffect} from "react";

// @ts-ignore
export const Notification = ({message, children, onClose, toggleNotification}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      toggleNotification({isOpened: false});
    }, 5000);
    return () => clearTimeout(timer);
  });

  return (
    <div data-testid="notification">
      <div>
        <span>{message}. </span>
        {children}
      </div>
      <button
        onClick={onClose}
        aria-label="close-notification"
        type="button"
        data-testid="close-notification"
      />
    </div>
  );
};
