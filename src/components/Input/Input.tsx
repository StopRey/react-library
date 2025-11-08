import React, { useState, useRef, useEffect } from 'react'
import styles from './Input.module.css'

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Input type - special handling for password type */
  type?: 'text' | 'password' | 'number' | 'email' | 'tel' | 'url'
  /** Show clear button when input has value */
  clearable?: boolean
  /** Custom class name */
  className?: string
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  clearable = false,
  className = '',
  value,
  onChange,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [internalValue, setInternalValue] = useState(value || '')
  const inputRef = useRef<HTMLInputElement>(null)

  const isPassword = type === 'password'
  const inputType = isPassword && showPassword ? 'text' : type
  const showClearButton = clearable && (value !== undefined ? value : internalValue)

  useEffect(() => {
    if (value !== undefined) {
      setInternalValue(value)
    }
  }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInternalValue(newValue)
    onChange?.(e)
  }

  const handleClear = () => {
    setInternalValue('')
    if (inputRef.current) {
      inputRef.current.value = ''
      
      if (onChange) {
        const event = Object.assign(
          new Event('change', { bubbles: true }),
          {
            target: inputRef.current,
            currentTarget: inputRef.current,
            nativeEvent: new Event('change', { bubbles: true }),
            isDefaultPrevented: () => false,
            isPropagationStopped: () => false,
            persist: () => {},
          }
        ) as unknown as React.ChangeEvent<HTMLInputElement>
        
        onChange(event)
      }
      
      inputRef.current.focus()
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <div className={`${styles.inputWrapper} ${className}`}>
      <input
        ref={inputRef}
        type={inputType}
        value={value !== undefined ? value : internalValue}
        onChange={handleChange}
        className={styles.input}
        {...props}
      />
      <div className={styles.actions}>
        {showClearButton && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClear}
            aria-label="Clear input"
          >
            ×
          </button>
        )}
        {isPassword && (
          <button
            type="button"
            className={styles.toggleButton}
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  )
}

