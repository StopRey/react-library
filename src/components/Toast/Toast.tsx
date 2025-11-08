import React, { useEffect, useState, useCallback } from 'react'
import styles from './Toast.module.css'

export interface ToastProps {
  /** Toast message content */
  message: string
  /** Toast type/variant */
  type?: 'success' | 'error' | 'warning' | 'info'
  /** Duration in milliseconds before auto-dismiss (0 = no auto-dismiss) */
  duration?: number
  /** Show manual close button */
  showCloseButton?: boolean
  /** Callback when toast is dismissed */
  onClose?: () => void
  /** Whether toast is visible */
  isVisible?: boolean
  /** Animation type: 'slide' (slide in from right) or 'fade' (fade in/out) */
  animationType?: 'slide' | 'fade'
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  duration = 3000,
  showCloseButton = true,
  onClose,
  isVisible = true,
  animationType = 'slide',
}) => {
  const [isExiting, setIsExiting] = useState(false)

  const handleClose = useCallback(() => {
    setIsExiting(true)
    setTimeout(() => {
      onClose?.()
    }, 300)
  }, [onClose])

  useEffect(() => {
    if (duration > 0 && isVisible && !isExiting) {
      const timer = setTimeout(() => {
        handleClose()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [duration, isVisible, isExiting, handleClose])

  if (!isVisible && !isExiting) {
    return null
  }

  const animationClass =
    animationType === 'fade'
      ? isExiting
        ? styles.fadeExit
        : styles.fadeEnter
      : isExiting
        ? styles.exit
        : styles.enter

  const toastClass = `${styles.toast} ${styles[type]} ${animationClass}`

  return (
    <div className={toastClass} role="alert" aria-live="polite">
      <div className={styles.content}>
        <span className={styles.message}>{message}</span>
        {showCloseButton && (
          <button
            type="button"
            className={styles.closeButton}
            onClick={handleClose}
            aria-label="Close notification"
          >
            ×
          </button>
        )}
      </div>
    </div>
  )
}

