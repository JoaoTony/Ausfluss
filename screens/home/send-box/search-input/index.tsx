import React, { FC } from 'react'

import { Container, Input, Icon } from './search-input.styles'
import { SearchInputProps } from './search-input.types'

const InputSearch: FC<SearchInputProps> = ({ ...rest }) => (
  <Container>
    <Icon source={require('../../../../assets/icon-search.png')} />
    <Input {...rest} />
  </Container>
)

export default InputSearch
