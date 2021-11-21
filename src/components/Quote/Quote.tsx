import * as React from 'react'
import * as S from './styles'

export type FunnyQuoteProps = {
  id: number
  author: string
  text: string
}

type Props = {
  quote: FunnyQuoteProps
}

const Quote = ({ quote }: Props) => {
  return (
    <S.Quote>
      <S.Text>{quote.text}</S.Text>
      <S.Author>{quote.author}</S.Author>
    </S.Quote>
  )
}

export default Quote
