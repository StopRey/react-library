import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from '../../components/Toast'
import { ToastContainer } from '../../components/Toast/ToastContainer'
import { useState } from 'react'

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Toast notification component with auto-dismiss and transitions. Appears at the bottom right.',
      },
      story: {
        inline: false,
        iframeHeight: 400,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
      description: 'Toast message content',
    },
    type: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: 'Toast type/variant',
    },
    duration: {
      control: 'number',
      description: 'Duration in milliseconds before auto-dismiss (0 = no auto-dismiss)',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show manual close button',
    },
    animationType: {
      control: 'select',
      options: ['slide', 'fade'],
      description: 'Animation type: slide (from right) or fade',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh', position: 'relative' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

const InteractiveToast = () => {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <div style={{ padding: '2rem' }}>
      <button
        onClick={() => setIsVisible(true)}
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
      >
        Show Toast
      </button>
      <ToastContainer>
        {isVisible && (
          <Toast
            message="Click the close button or wait for auto-dismiss"
            type="info"
            duration={5000}
            isVisible={isVisible}
            onClose={() => setIsVisible(false)}
          />
        )}
      </ToastContainer>
    </div>
  )
}

export const Success: Story = {
  render: () => (
    <ToastContainer>
      <Toast message="Operation completed successfully!" type="success" duration={0} />
    </ToastContainer>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Success toast notification. Duration is set to 0 for documentation purposes (no auto-dismiss).',
      },
    },
  },
}

export const Error: Story = {
  render: () => (
    <ToastContainer>
      <Toast message="An error occurred. Please try again." type="error" duration={0} />
    </ToastContainer>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Error toast notification. Duration is set to 0 for documentation purposes (no auto-dismiss).',
      },
    },
  },
}

export const Warning: Story = {
  render: () => (
    <ToastContainer>
      <Toast message="Warning: This action cannot be undone." type="warning" duration={0} />
    </ToastContainer>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Warning toast notification. Duration is set to 0 for documentation purposes (no auto-dismiss).',
      },
    },
  },
}

export const Info: Story = {
  render: () => (
    <ToastContainer>
      <Toast message="Here's some information for you." type="info" duration={0} />
    </ToastContainer>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Info toast notification. Duration is set to 0 for documentation purposes (no auto-dismiss).',
      },
    },
  },
}

export const WithoutCloseButton: Story = {
  render: () => (
    <ToastContainer>
      <Toast
        message="This toast will auto-dismiss without a close button"
        type="info"
        showCloseButton={false}
        duration={0}
      />
    </ToastContainer>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toast without close button. Duration is set to 0 for documentation purposes.',
      },
    },
  },
}

export const LongDuration: Story = {
  render: () => (
    <ToastContainer>
      <Toast
        message="This toast will stay for 10 seconds (duration set to 0 in docs for visibility)"
        type="info"
        duration={0}
      />
    </ToastContainer>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toast with long duration. In actual usage, set duration to a specific milliseconds value. Duration is set to 0 for documentation purposes.',
      },
    },
  },
}

export const NoAutoDismiss: Story = {
  render: () => (
    <ToastContainer>
      <Toast
        message="This toast won't auto-dismiss (duration = 0)"
        type="warning"
        duration={0}
      />
    </ToastContainer>
  ),
}

export const MultipleToasts: Story = {
  render: () => (
    <ToastContainer>
      <Toast message="First toast" type="success" duration={0} />
      <Toast message="Second toast" type="info" duration={0} />
      <Toast message="Third toast" type="warning" duration={0} />
    </ToastContainer>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple toast notifications stacked. Duration is set to 0 for documentation purposes.',
      },
    },
  },
}

export const Interactive: Story = {
  render: () => <InteractiveToast />,
}

export const LongMessage: Story = {
  render: () => (
    <ToastContainer>
      <Toast
        message="This is a very long message that should wrap properly within the toast container and display nicely without overflowing or breaking the layout."
        type="info"
        duration={0}
      />
    </ToastContainer>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toast with long message text. Duration is set to 0 for documentation purposes.',
      },
    },
  },
}

export const WithFadeAnimation: Story = {
  render: () => (
    <ToastContainer>
      <Toast
        message="This toast uses fade animation instead of slide"
        type="info"
        animationType="fade"
        duration={0}
      />
    </ToastContainer>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toast with fade animation. Duration is set to 0 for documentation purposes.',
      },
    },
  },
}

export const FadeSuccess: Story = {
  render: () => (
    <ToastContainer>
      <Toast
        message="Success with fade animation!"
        type="success"
        animationType="fade"
        duration={0}
      />
    </ToastContainer>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Success toast with fade animation. Duration is set to 0 for documentation purposes.',
      },
    },
  },
}

export const FadeError: Story = {
  render: () => (
    <ToastContainer>
      <Toast
        message="Error with fade animation!"
        type="error"
        animationType="fade"
        duration={0}
      />
    </ToastContainer>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Error toast with fade animation. Duration is set to 0 for documentation purposes.',
      },
    },
  },
}

