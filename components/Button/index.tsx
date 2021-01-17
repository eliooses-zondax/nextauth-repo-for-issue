import React from 'react'

import { ButtonWrapper } from './styled'

interface ButtonProps {
  children?: any
}

const Button = ({ children, ...props }: ButtonProps) => (
  <ButtonWrapper type="button" {...props}>
    {children}
  </ButtonWrapper>
)

export default Button
