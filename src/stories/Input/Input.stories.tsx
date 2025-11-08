import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '../../components/Input'
import { useState } from 'react'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Smart Input component with password visibility toggle and clear functionality.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'number', 'email', 'tel', 'url'],
      description: 'Input type - special handling for password type',
    },
    clearable: {
      control: 'boolean',
      description: 'Show clear button when input has value',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the input',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
    clearable: false,
  },
}

export const WithClearButton: Story = {
  args: {
    type: 'text',
    placeholder: 'Type something...',
    clearable: true,
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
    clearable: false,
  },
}

export const PasswordWithClear: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
    clearable: true,
  },
}

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: 'Enter number...',
    clearable: true,
  },
}

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter email...',
    clearable: true,
  },
}

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'Disabled input',
    disabled: true,
    clearable: true,
  },
}

const ControlledInput = () => {
  const [value, setValue] = useState('')
  return (
    <div style={{ width: '300px' }}>
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Controlled input"
        clearable
      />
      <p style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#666' }}>
        Value: {value || '(empty)'}
      </p>
    </div>
  )
}

export const Controlled: Story = {
  render: () => <ControlledInput />,
}

