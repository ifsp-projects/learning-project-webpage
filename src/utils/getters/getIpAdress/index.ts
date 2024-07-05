export const getIpAdress = (req: { headers: { [x: string]: any }; socket: { remoteAddress: any } }) => {
  const forwarded = req.headers['x-forwarded-for']

  const ip =
    typeof forwarded === 'string'
      ? forwarded.split(/, /)[0]
      : req.socket.remoteAddress

  return ip
}
