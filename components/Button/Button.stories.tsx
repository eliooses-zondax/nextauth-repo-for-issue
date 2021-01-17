import React from 'react'

import Button from './index'

export default {
  component: Button,
  title: 'Components/Button',
}

export const Small = () => <Button>Hi!</Button>

export const Large = () => <Button>With some children text</Button>

export const Crazy = () => <Button>....................................................................</Button>
