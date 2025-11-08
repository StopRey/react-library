import React, { useState, useEffect } from 'react'
import styles from './SidebarMenu.module.css'

export interface MenuItem {
  id: string
  label: string
  href?: string
  onClick?: () => void
  children?: MenuItem[]
}

export interface SidebarMenuProps {
  /** Whether the sidebar is open */
  isOpen: boolean
  /** Callback when sidebar should close */
  onClose: () => void
  /** Menu items to display */
  items: MenuItem[]
  /** Sidebar title */
  title?: string
  /** Whether to close when clicking outside */
  closeOnOutsideClick?: boolean
}

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
  isOpen,
  onClose,
  items,
  title = 'Menu',
  closeOnOutsideClick = true,
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setExpandedItems(new Set())
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!closeOnOutsideClick) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose, closeOnOutsideClick])

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOutsideClick && e.target === e.currentTarget) {
      onClose()
    }
  }

  const toggleExpanded = (itemId: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        newSet.add(itemId)
      }
      return newSet
    })
  }

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expandedItems.has(item.id)
    const itemClass = `${styles.menuItem} ${hasChildren ? styles.hasChildren : ''} ${styles[`level${level}`]}`

    return (
      <li key={item.id} className={itemClass}>
        <div className={styles.menuItemContent}>
          {item.href ? (
            <a
              href={item.href}
              className={styles.menuLink}
              onClick={(e) => {
                if (hasChildren) {
                  e.preventDefault()
                  toggleExpanded(item.id)
                } else {
                  onClose()
                }
                item.onClick?.()
              }}
            >
              {item.label}
            </a>
          ) : (
            <button
              type="button"
              className={styles.menuButton}
              onClick={() => {
                if (hasChildren) {
                  toggleExpanded(item.id)
                } else {
                  onClose()
                }
                item.onClick?.()
              }}
            >
              {item.label}
            </button>
          )}
          {hasChildren && (
            <button
              type="button"
              className={`${styles.expandButton} ${isExpanded ? styles.expanded : ''}`}
              onClick={() => toggleExpanded(item.id)}
              aria-expanded={isExpanded}
              aria-label={isExpanded ? 'Collapse' : 'Expand'}
            >
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
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          )}
        </div>
        {hasChildren && (
          <ul
            className={`${styles.submenu} ${isExpanded ? styles.submenuExpanded : ''}`}
          >
            {item.children?.map((child) => renderMenuItem(child, level + 1))}
          </ul>
        )}
      </li>
    )
  }

  if (!isOpen) {
    return null
  }

  return (
    <>
      <div className={styles.backdrop} onClick={handleBackdropClick} />
      <aside
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.menu}>{items.map((item) => renderMenuItem(item))}</ul>
        </nav>
      </aside>
    </>
  )
}

