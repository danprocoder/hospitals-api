import crypto from 'crypto'

export const genApiKey = () => {
  return 'k_'.concat(crypto.randomBytes(32).toString('hex'))
}
