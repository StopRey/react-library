# React Component Library

A React component library built with TypeScript, Vite, and Storybook. Contains three reusable UI components with different states and props.

## Features

- Input Component - smart input with password visibility toggle and clear functionality
- Toast Component - notification component with auto-dismiss and transitions
- Sidebar Menu Component - menu with nested submenus and slide animation

## Installation

```bash
npm install
```

## Development

### Run Storybook

```bash
npm run storybook
```

Storybook will start on `http://localhost:6006`

### Build Storybook

```bash
npm run build-storybook
```

### Run Development Server

```bash
npm run dev
```

### Build Project

```bash
npm run build
```

### Linting

```bash
npm run lint
```

### Format Code

```bash
npm run format
```

## Project Structure

```
src/
├── components/
│   ├── Input/
│   │   ├── Input.tsx
│   │   ├── Input.module.css
│   │   └── index.ts
│   ├── Toast/
│   │   ├── Toast.tsx
│   │   ├── Toast.module.css
│   │   ├── ToastContainer.tsx
│   │   ├── ToastContainer.module.css
│   │   └── index.ts
│   └── SidebarMenu/
│       ├── SidebarMenu.tsx
│       ├── SidebarMenu.module.css
│       └── index.ts
├── stories/
│   ├── Input/
│   │   └── Input.stories.tsx
│   ├── Toast/
│   │   └── Toast.stories.tsx
│   └── SidebarMenu/
│       └── SidebarMenu.stories.tsx
└── index.ts
```

## Components

### Input Component

Smart input component with password visibility toggle and clear field functionality.

Features:
- Multiple input types support (text, password, number, email, tel, url)
- Password visibility toggle (eye icon)
- Clear button (X button)
- Controlled and uncontrolled modes support
- Accessibility support

Usage:

```tsx
import { Input } from './components/Input'

// Basic usage
<Input type="text" placeholder="Enter text..." />

// With clear button
<Input type="text" placeholder="Enter text..." clearable />

// Password with toggle
<Input type="password" placeholder="Enter password..." />

// Controlled mode
const [value, setValue] = useState('')
<Input 
  type="text" 
  value={value} 
  onChange={(e) => setValue(e.target.value)}
  clearable 
/>
```

### Toast Component

Notification component that appears at the bottom right with auto-dismiss functionality.

Features:
- Four types: success, error, warning, info
- Auto-dismiss after specified duration
- Manual close button
- Smooth slide or fade animations
- Multiple toasts support
- Neon theme with bright colors

Usage:

```tsx
import { Toast, ToastContainer } from './components/Toast'

// Basic usage
<ToastContainer>
  <Toast 
    message="Operation successful!" 
    type="success" 
    duration={3000}
  />
</ToastContainer>

// With fade animation
<ToastContainer>
  <Toast 
    message="Message with fade animation" 
    type="info" 
    animationType="fade"
    duration={5000}
  />
</ToastContainer>
```

### Sidebar Menu Component

Sidebar menu component with nested submenus and slide animation.

Features:
- Slides in from the right
- Nested submenus (accordion style)
- Closes when clicking outside or pressing Escape
- Customizable title
- Support for 1-level and 2-level nesting
- Neon theme with bright colors

Usage:

```tsx
import { SidebarMenu } from './components/SidebarMenu'
import type { MenuItem } from './components/SidebarMenu'

const menuItems: MenuItem[] = [
  {
    id: '1',
    label: 'Home',
    href: '#home',
  },
  {
    id: '2',
    label: 'Products',
    children: [
      {
        id: '2-1',
        label: 'Web Development',
        href: '#web',
      },
    ],
  },
]

<SidebarMenu
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  items={menuItems}
  title="Navigation"
/>
```

## Storybook Stories

All components have comprehensive stories with different variants:

- Input: default, with clear button, password, number, email, disabled, controlled
- Toast: all types (success, error, warning, info), different durations, multiple toasts, fade animation
- SidebarMenu: simple menu, nested menu (1 level), two-level nested, with actions, open/closed states

## Technology Stack

- React 19.1.1
- TypeScript 5.9.3
- Vite 7.1.7
- Storybook 10.0.6
- ESLint 9.36.0
- Prettier 3.3.3

## Code Quality

- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- CSS Modules for component styling
- Accessibility (a11y) support

## Design

All components use a neon theme with black background and bright neon colors (cyan, green, pink, yellow). Added glow effects for better visual impact.

## Screenshots

### Input Component

<figure>
  <img src="./screenshots/Input/Default.png" alt="Input Default" />
  <figcaption>Default input component</figcaption>
</figure>

<figure>
  <img src="./screenshots/Input/WithClearButton.png" alt="Input With Clear Button" />
  <figcaption>Input with clear button functionality</figcaption>
</figure>

<figure>
  <img src="./screenshots/Input/Password.png" alt="Input Password" />
  <figcaption>Password input with visibility toggle</figcaption>
</figure>

<figure>
  <img src="./screenshots/Input/PasswordWithClear.png" alt="Input Password With Clear" />
  <figcaption>Password input with both toggle and clear button</figcaption>
</figure>

<figure>
  <img src="./screenshots/Input/Number.png" alt="Input Number" />
  <figcaption>Number input type</figcaption>
</figure>

<figure>
  <img src="./screenshots/Input/Email.png" alt="Input Email" />
  <figcaption>Email input type</figcaption>
</figure>

<figure>
  <img src="./screenshots/Input/Disabled.png" alt="Input Disabled" />
  <figcaption>Disabled input state</figcaption>
</figure>

<figure>
  <img src="./screenshots/Input/Controlled.png" alt="Input Controlled" />
  <figcaption>Controlled input with state management</figcaption>
</figure>

### Toast Component

<figure>
  <img src="./screenshots/Toast/Success.png" alt="Toast Success" />
  <figcaption>Success toast notification</figcaption>
</figure>

<figure>
  <img src="./screenshots/Toast/Error.png" alt="Toast Error" />
  <figcaption>Error toast notification</figcaption>
</figure>

<figure>
  <img src="./screenshots/Toast/Warning.png" alt="Toast Warning" />
  <figcaption>Warning toast notification</figcaption>
</figure>

<figure>
  <img src="./screenshots/Toast/Info.png" alt="Toast Info" />
  <figcaption>Info toast notification</figcaption>
</figure>

<figure>
  <img src="./screenshots/Toast/MultipleToasts.png" alt="Toast Multiple" />
  <figcaption>Multiple toast notifications stacked</figcaption>
</figure>

<figure>
  <img src="./screenshots/Toast/WithoutCloseButton.png" alt="Toast Without Close Button" />
  <figcaption>Toast without manual close button</figcaption>
</figure>

<figure>
  <img src="./screenshots/Toast/LongMessage.png" alt="Toast Long Message" />
  <figcaption>Toast with long message text</figcaption>
</figure>

### Sidebar Menu Component

<figure>
  <img src="./screenshots/SidebarMenu/Default.png" alt="Sidebar Default" />
  <figcaption>Simple sidebar menu with single-level items</figcaption>
</figure>

<figure>
  <img src="./screenshots/SidebarMenu/Nested.png" alt="Sidebar Nested" />
  <figcaption>Sidebar menu with one level of nesting</figcaption>
</figure>

<figure>
  <img src="./screenshots/SidebarMenu/TwoLevelNested.png" alt="Sidebar Two Level Nested" />
  <figcaption>Sidebar menu with two levels of nesting</figcaption>
</figure>

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run Storybook: `npm run storybook`
4. View components at `http://localhost:6006`

## License

This project is private and for assessment purposes only.

## Author

Created as part of a front-end JS engineer test assessment.
