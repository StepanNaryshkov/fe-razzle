import React, { useEffect } from 'react';

export const Notification = ({
  message,
  isOpened,
  children,
  onClose,
  type,
  toggleNotification,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      toggleNotification({ isOpened: false });
    }, 5000);
    return () => {
      return clearTimeout(timer);
    };
  });

  return (
    <div
      data-testid="notification"
    >
      <div>
        <span>{message}. </span>
        {children}
      </div>
      <button
        onClick={onClose}
        type="button"
        data-testid="close-notification"
      />
    </div>
  );
};
