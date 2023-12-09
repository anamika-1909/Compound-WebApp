function getPaginatedResponse(paginatedData, limit) {
  const {count, rows} = paginatedData;
  const totalPages = Math.ceil(count / limit);
  return {
    data: rows,
    totalItems: count,
    totalPages,
  };
}

module.exports = {
  getPaginatedResponse
};