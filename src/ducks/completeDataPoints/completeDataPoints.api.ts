import http from '../../services/httpService';

const apiEndpoint = '/vehicle-data';

export const getCompleteDataPoint = async (id: string, vid: string) => {
  let url = `${apiEndpoint}/${id}?vehicle=${vid}`;
  const response = await http.get(url);
  return response;
};

export const getDocCount = async (vid: string) => {
  let url = `${apiEndpoint}/docCount?vehicle=${vid}`;
  const response = await http.get(url);
  return response;
};
