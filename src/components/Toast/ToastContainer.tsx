import React from 'react'
import styles from './ToastContainer.module.css'

interface ToastContainerProps {
  children: React.ReactNode
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

