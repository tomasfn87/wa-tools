const check_file_extension = (file, ext) => {
  ext = ext.replace(/\./, '')
  const fSplit = file.split('.')
  const fileExt = fSplit[fSplit.length - 1]
  if (fileExt == ext) {
    return true
  }
  return false
}

export default check_file_extension