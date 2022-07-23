export default function (token) {
  if (token) {
    // eslint-disable-next-line no-unused-vars
    const [header, payload, signature] = token.split('.')
    const base64 = payload.replace('-', '+').replace('_', '/')
    const PayloadObject = JSON.parse(window.atob(base64))
    return PayloadObject
  } else {
    return null
  }
}
