export const millisToMinutesAndSeconds = (millis) => {
  const minutes = Math.floor(millis / 60000)
  const seconds = ((millis % 60000) / 1000).toFixed(0)
  return minutes + ':' + (parseInt(seconds) < 10 ? '0' : '') + seconds
}

//nextRouterのrouter.path使用時に使える関数
export const getAsString = (value: string | string[]): string => {
  if (Array.isArray(value)) {
    return value[0]
  }
  return value
}

export const returnCodeToBr = (text: string): string => {
  if (text === '') {
    return text
  } else {
    return text.replace(/\r?\n/g, '<br/>')
  }
}
