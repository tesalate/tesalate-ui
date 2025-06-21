import http from '../../services/httpService';

const apiEndpoint = '/sessions';

export interface driveSessionQuery {
  vehicle: string;
  id?: string;
  sortBy: string;
  limit: string;
  page: string;
}

export const getDriveData = async (query: driveSessionQuery) => {
  const { id, sortBy, vehicle, ...rest } = query;
  let url = `${apiEndpoint}`;
  if (id) url += `/${id}`;
  const searchParams = new URLSearchParams({ sortBy: sortBy || '_id:desc', ...rest });
  const response = await http.get(`${url}?vehicle=${vehicle}&type=drive&${searchParams.toString()}`);
  return response;
};

export const getDriveDataById = async ({ id }: { id: string }) => {
  let url = `${apiEndpoint}`;
  const response = await http.get(`${url}/${id}?type=drive`);
  return response;
};
