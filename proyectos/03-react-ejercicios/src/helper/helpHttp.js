export const helptHttp = () => {
  const customFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: 'application/json'
    }
    // AbortController en el caso que el servidor no de respuesta
    const controller = new AbortController()

    // Para tene un manejador de errores y poder cancelar la peticion
    options.signal = controller.signal
    options.method = options.method || 'GET'
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader
    // cuando es una peticion GET no tiene body por eso mando false
    options.body = JSON.stringify(options.body) || false
    if (!options.body) delete options.body

    // si a los 3seg no tengo respuesta del servidor aborto la peticion
    setTimeout(() => controller.abort(), 3000)

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || '00',
              statusText: res.statusText || 'Error'
            })
      )
      .catch((err) => err)
  }

  // Si no me pasa option lo seteo a objeto vacío
  const get = (url, options = {}) => customFetch(url, options)

  const post = (url, options = {}) => {
    options.method = 'POST'
    return customFetch(url, options)
  }

  const put = (url, options = {}) => {
    options.method = 'PUT'
    return customFetch(url, options)
  }

  const del = (url, options = {}) => {
    options.method = 'DELETE'
    return customFetch(url, options)
  }

  return {
    get,
    post,
    put,
    del
  }
}
