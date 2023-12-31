export function calcularTempoPassadoEmSegundos(createdDatetime: string) {
  const agoraEmSegundos = Math.floor(Date.now() / 1000)
  const dataObj = new Date(createdDatetime)
  const dataEmSegundos = Math.floor(dataObj.getTime() / 1000)
  const tempoPassado = agoraEmSegundos - dataEmSegundos

  return tempoPassado
}

export function converterParaMinutosHorasDias(segundos: number) {
  const minutos = Math.floor(segundos / 60)
  if (minutos < 60) {
    return `${minutos} minutes`
  }

  const horas = Math.floor(minutos / 60)
  if (horas < 24) {
    return `${horas} hours`
  }

  const dias = Math.floor(horas / 24)
  return `${dias} days`
}
