/* eslint-disable @typescript-eslint/no-explicit-any */
export const getIpAdress = (req: {
  headers: { [x: string]: string }
  socket: { remoteAddress: string }
}) => {
  const forwarded = req.headers['x-forwarded-for']

  const ip =
    typeof forwarded === 'string'
      ? forwarded.split(/, /)[0]
      : req.socket.remoteAddress

  return ip
}
