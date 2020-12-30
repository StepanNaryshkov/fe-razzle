import React, {useEffect} from 'react';

interface Props {
  message: string;
  onClose: () => {};
  toggleNotification: () => {};
  children: JSX.Element
}

export const Notification = ({message, children, onClose, toggleNotification}: Props) => {
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
