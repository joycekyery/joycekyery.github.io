const artAPI = {
  create: (data) => ({
    method: 'post',
    url: 'artPortfolio/create',
    headers: {},
    data: {
      ...data,
    },
  }),
}
export default artAPI
