export const downloadFile = (fileUrl: string, fileName: string) => {
  const link = document.createElement('a')
  link.href = fileUrl

  link.setAttribute('download', fileName)

  if (fileName.includes('.pdf')) {
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
  }

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
