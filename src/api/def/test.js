const artAPI = {
  create: (data, cancelToken) => ({
    method: 'post',
    url: 'artPortfolio/create',
    cancelToken: cancelToken,
    headers: {},
    data: {
      ...data,
    },
  }),
  findAll: (data, cancelToken) => ({
    method: 'get',
    url: `artPortfolio/findByYear/${data}`,
    cancelToken: cancelToken,
    headers: {},
    data: {
      ...data,
    },
  }),
}
export default artAPI
