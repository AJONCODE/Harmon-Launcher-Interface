import { Percent, JSBI } from 'harmony-swap-sdk'
import { BIPS_BASE } from '../../constants'

export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%

export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%

/**
 * Given the price impact, get user confirmation.
 *
 * @param priceImpactWithoutFee price impact of the trade without the fee.
 */
export default function confirmPriceImpactWithoutFee(priceImpactWithoutFee: Percent): boolean {
  if (!priceImpactWithoutFee.lessThan(PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN)) {
    return (
      window.prompt(
        `This swap has a price impact of at least ${PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN.toFixed(
          0
        )}%. Please type the word "confirm" to continue with this swap.`
      ) === 'confirm'
    )
  } else if (!priceImpactWithoutFee.lessThan(ALLOWED_PRICE_IMPACT_HIGH)) {
    return window.confirm(
      `This swap has a price impact of at least ${ALLOWED_PRICE_IMPACT_HIGH.toFixed(
        0
      )}%. Please confirm that you would like to continue with this swap.`
    )
  }
  return true
}
