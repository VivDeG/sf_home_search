export const fetchAllHomes = () => (
  $.ajax({
    method: 'GET',
    url: 'api/homes',
  })
);