import React, { ReactNode, memo } from 'react'
import Container from '@/components/Container'
import Prose from '@/components/Prose'

interface Props {
  children?: ReactNode
}

function ArticleLayout({ children }: Props) {
  return (
    <Container>
      <Prose>{children}</Prose>
    </Container>
  )
}

export default memo(ArticleLayout)
