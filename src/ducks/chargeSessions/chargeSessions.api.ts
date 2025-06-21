import http from '../../services/httpService';

const apiEndpoint = '/sessions';
export interface chargeSessionQuery {
  vehicle: string;
  id?: string;
  sortBy: string;
  limit: string;
  page: string;
}
export const getPaginatedChargeData = async (vid: string, skip: number, limit: number) => {
  let url = `${apiEndpoint}?vehicle=${vid}&type=charge&skip=${skip}&limit=${limit}`;
  const response = await http.get(url);
  return response;
};

export const getChargeData = async (query: chargeSessionQuery) => {
  const { id, sortBy, vehicle, ...rest } = query;
  let url = `${apiEndpoint}`;
  if (id) url += `/${id}`;
  const searchParams = new URLSearchParams({ sortBy: sortBy || '_id:desc', ...rest });
  const response = await http.get(`${url}?vehicle=${vehicle}&type=charge&${searchParams.toString()}`);
  return response;
};

export const getChargeDataById = async ({ id }: { id: string }) => {
  let url = `${apiEndpoint}`;
  const response = await http.get(`${url}/${id}?type=charge`);
  return response;
};
