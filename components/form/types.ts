import { ChangeEventHandler } from 'react'

export interface FormStepProps {
  currentStep: number
  handleChange: ChangeEventHandler
  values: any
}

export interface FormWrapperProps {
  children: React.ReactNode
  name?: string
  onClick?: () => void
  spacing?: number
}