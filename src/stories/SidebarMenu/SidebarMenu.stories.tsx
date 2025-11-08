import type { Meta, StoryObj } from '@storybook/react'
import { SidebarMenu } from '../../components/SidebarMenu'
import { useState } from 'react'
import type { MenuItem } from '../../components/SidebarMenu'

const meta: Meta<typeof SidebarMenu> = {
  title: 'Navigation/SidebarMenu',
  component: SidebarMenu,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Sidebar menu component with nested submenus and slide animation. Slides in from the right.',
      },
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Whether the sidebar is open',
    },
    title: {
      control: 'text',
      description: 'Sidebar title',
    },
    closeOnOutsideClick: {
      control: 'boolean',
      description: 'Whether to close when clicking outside',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const simpleMenuItems: MenuItem[] = [
  {
    id: '1',
    label: 'Home',
    href: '#home',
  },
  {
    id: '2',
    label: 'About',
    href: '#about',
  },
  {
    id: '3',
    label: 'Services',
    href: '#services',
  },
  {
    id: '4',
    label: 'Contact',
    href: '#contact',
  },
]

const nestedMenuItems: MenuItem[] = [
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
      {
        id: '2-2',
        label: 'Mobile Apps',
        href: '#mobile',
      },
      {
        id: '2-3',
        label: 'Consulting',
        href: '#consulting',
      },
    ],
  },
  {
    id: '3',
    label: 'Services',
    children: [
      {
        id: '3-1',
        label: 'UI Design',
        href: '#ui-design',
      },
      {
        id: '3-2',
        label: 'UX Design',
        href: '#ux-design',
      },
      {
        id: '3-3',
        label: 'Development',
        href: '#development',
      },
      {
        id: '3-4',
        label: 'Testing',
        href: '#testing',
      },
    ],
  },
  {
    id: '4',
    label: 'About',
    href: '#about',
  },
  {
    id: '5',
    label: 'Contact',
    href: '#contact',
  },
]

const SimpleMenuStory = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div>
      <div style={{ padding: '2rem' }}>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Open Menu
        </button>
      </div>
      <SidebarMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={simpleMenuItems}
        title="Menu"
      />
    </div>
  )
}

export const SimpleMenu: Story = {
  render: () => <SimpleMenuStory />,
  parameters: {
    docs: {
      description: {
        story: 'Simple sidebar menu with single-level items. Click the button to open the menu.',
      },
    },
  },
}

const NestedMenuStory = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div>
      <div style={{ padding: '2rem' }}>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Open Menu
        </button>
      </div>
      <SidebarMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={nestedMenuItems}
        title="Navigation"
      />
    </div>
  )
}

export const NestedMenu: Story = {
  render: () => <NestedMenuStory />,
  parameters: {
    docs: {
      description: {
        story: 'Sidebar menu with one level of nesting. Expand items to see submenus.',
      },
    },
  },
}

const TwoLevelNestedStory = () => {
  const [isOpen, setIsOpen] = useState(true)
  const twoLevelItems: MenuItem[] = [
    {
      id: '1',
      label: 'Dashboard',
      href: '#dashboard',
    },
    {
      id: '2',
      label: 'Products',
      children: [
        {
          id: '2-1',
          label: 'Electronics',
          children: [
            {
              id: '2-1-1',
              label: 'Laptops',
              href: '#laptops',
            },
            {
              id: '2-1-2',
              label: 'Smartphones',
              href: '#smartphones',
            },
          ],
        },
        {
          id: '2-2',
          label: 'Clothing',
          children: [
            {
              id: '2-2-1',
              label: 'Men',
              href: '#men',
            },
            {
              id: '2-2-2',
              label: 'Women',
              href: '#women',
            },
          ],
        },
        {
          id: '2-3',
          label: 'All Products',
          href: '#products',
        },
      ],
    },
    {
      id: '3',
      label: 'Settings',
      children: [
        {
          id: '3-1',
          label: 'Account',
          children: [
            {
              id: '3-1-1',
              label: 'Profile',
              href: '#profile',
            },
            {
              id: '3-1-2',
              label: 'Security',
              href: '#security',
            },
          ],
        },
        {
          id: '3-2',
          label: 'Preferences',
          href: '#preferences',
        },
        {
          id: '3-3',
          label: 'Notifications',
          href: '#notifications',
        },
      ],
    },
  ]

  return (
    <div>
      <div style={{ padding: '2rem' }}>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Open Menu
        </button>
      </div>
      <SidebarMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={twoLevelItems}
        title="Settings"
      />
    </div>
  )
}

export const TwoLevelNested: Story = {
  render: () => <TwoLevelNestedStory />,
  parameters: {
    docs: {
      description: {
        story: 'Sidebar menu with two levels of nesting. Expand parent items to see first-level children, then expand those to see second-level items.',
      },
    },
  },
}

const WithActionsStory = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [lastAction, setLastAction] = useState<string>('')

  const itemsWithActions: MenuItem[] = [
    {
      id: '1',
      label: 'Home',
      onClick: () => setLastAction('Home clicked'),
    },
    {
      id: '2',
      label: 'Save',
      onClick: () => setLastAction('Save clicked'),
    },
    {
      id: '3',
      label: 'Delete',
      onClick: () => setLastAction('Delete clicked'),
    },
  ]

  return (
    <div>
      <div style={{ padding: '2rem' }}>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          Open Menu
        </button>
        {lastAction && (
          <p style={{ marginTop: '1rem' }}>Last action: {lastAction}</p>
        )}
      </div>
      <SidebarMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={itemsWithActions}
        title="Actions"
      />
    </div>
  )
}

export const WithActions: Story = {
  render: () => <WithActionsStory />,
  parameters: {
    docs: {
      description: {
        story: 'Sidebar menu with click handlers. Click menu items to see actions triggered.',
      },
    },
  },
}

const ClosedStateStory = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <div style={{ padding: '2rem' }}>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            cursor: 'pointer',
          }}
        >
          {isOpen ? 'Close Menu' : 'Open Menu'}
        </button>
      </div>
      <SidebarMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={simpleMenuItems}
        title="Menu"
      />
    </div>
  )
}

export const ClosedState: Story = {
  render: () => <ClosedStateStory />,
  parameters: {
    docs: {
      description: {
        story: 'Sidebar menu in closed state. Click the button to open it.',
      },
    },
  },
}

