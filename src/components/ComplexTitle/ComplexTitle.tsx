import React from 'react'
import { ComplexTitleProps } from './ComplexTitle.types'
import { Wrapper } from './ComplexTitle.styles'

const ComplexTitle: React.FC<ComplexTitleProps> = ({ title }) => {
  return (
    <Wrapper><h1>{title}</h1><div className='underline'>
    </div></Wrapper>
  )
}

export default ComplexTitle