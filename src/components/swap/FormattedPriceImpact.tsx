import { Percent, JSBI } from 'harmony-swap-sdk'
import React from 'react'
import { warningSeverity } from '../../utils/prices'
import { ErrorText } from './styleds'

const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))

/**
 * Formatted version of price impact text with warning colors
 */
export default function FormattedPriceImpact({ priceImpact }: { priceImpact?: Percent }) {
  return (
    <ErrorText fontWeight={500} fontSize={14} severity={warningSeverity(priceImpact)}>
      {priceImpact ? (priceImpact.lessThan(ONE_BIPS) ? '<0.01%' : `${priceImpact.toFixed(2)}%`) : '-'}
    </ErrorText>
  )
}
