import styled from 'styled-components'
import { darken } from 'polished'

import { COLOR } from '../../constants'

export const ButtonWrapper = styled.button`
  padding: 0.4rem 0.8rem;
  border-radius: 3px;
  border: 0.1rem solid ${darken(0.2, COLOR.BLUE)};
  background: ${COLOR.BLUE};
  color: ${COLOR.WHITE};
`
