export const createCustomGraphql = (graphClient: any, v: string = '/graphql') => {
  if (!graphClient?.url) {
    return graphClient
  }

  const newClient = Object.create(Object.getPrototypeOf(graphClient))
  Object.assign(newClient, graphClient)
  newClient.url = graphClient.url.replace(v, '')
  return newClient
}
