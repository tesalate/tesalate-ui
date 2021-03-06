import React, { useMemo } from 'react';
import MasterTable from '../../../components/MasterTable/MasterTable';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { actions as driveSessionActions } from '../../../ducks/driveSessions/driveSessions.index';

interface DriveSessionsTableProps {
  sessions: Array<any>;
  loading: boolean;
  pageSizeFromState: number;
  pageIndexFromState: number;
  sortBy: Array<Record<any, any>>;
  sessionData: Record<any, any>;
  error: boolean;
  totalPages: number;
}

const DriveSessionsTable: React.FC<DriveSessionsTableProps> = ({ sessions, loading, pageSizeFromState, pageIndexFromState, sortBy, sessionData, error, totalPages }: any) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Details',
        accessor: (data: any) => ({ _id: data._id, vid: data.vehicle }),
        Cell: (data: any) => <Link to={`/drive-sessions/${data.value._id}`}>Details</Link>,
        sortType: (a: any, b: any) => {
          return a.values.Details._id - b.values.Details._id;
        },
      },
      {
        Header: 'Date/Time',
        accessor: 'startDate',
        Cell: (data: any) => <Moment format={'MM/DD/YYYY HH:mm:ss'}>{data.value}</Moment>,
        sortType: 'basic',
      },
      {
        Header: 'Distance',
        accessor: 'distance',
        Cell: (data: any) => {
          return data.value + ' miles';
        },
        sortType: 'basic',
      },
      {
        Header: 'Max Speed',
        accessor: 'maxSpeed',
        Cell: (data: any) => {
          return data.value + ' mph';
        },
        sortType: 'basic',
      },
      {
        Header: 'Max Power',
        accessor: 'maxPower',
        Cell: (data: any) => {
          return data.value + ' kW';
        },
        sortType: 'basic',
      },
      {
        Header: 'Max Regen',
        accessor: 'maxRegen',
        Cell: (data: any) => {
          return data.value + ' kWh';
        },
        sortType: 'basic',
      },
      {
        Header: 'Duration',
        accessor: (data: any) => ({ startDate: data.startDate, endDate: data.endDate, ms: new Date(data.endDate).getTime() - new Date(data.startDate).getTime() }),
        Cell: (data: any) => {
          return <Moment duration={data.value.startDate} date={data.value.endDate} />;
        },
        sortType: (a: any, b: any) => {
          return b.values.Duration.ms - a.values.Duration.ms;
        },
      },
    ],
    []
  );

  return (
    <MasterTable
      title="drive"
      data={sessions}
      columns={columns}
      loading={loading}
      pageSizeFromState={pageSizeFromState}
      pageIndexFromState={pageIndexFromState}
      actions={driveSessionActions}
      sessionData={sessionData}
      sortBy={sortBy}
      error={error}
      style={{ maxHeight: 'calc(var(--vh, 1vh) * 80)' }}
      totalPages={totalPages}
    />
  );
};

export default DriveSessionsTable;
