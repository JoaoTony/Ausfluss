import React, { FC } from 'react'

import { InputProps } from './input.types'
import { Input as Container } from './input.styles'

const Input: FC<InputProps> = ({ width, ...rest }) => (<Container width={width} {...rest}/>)

export default Input
