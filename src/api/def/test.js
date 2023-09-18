const artAPI = {
  create: (data) => ({
    method: 'post',
    url: 'artPortfolio/create',
    headers: {},
    data: {
      ...data,
    },
  }),
  findAll: (data) => ({
    method: 'get',
    url: `artPortfolio${data}`,
    headers: {},
    data: {
      ...data,
    },
  }),
}
export default artAPI
