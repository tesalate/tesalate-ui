import React, { useMemo } from 'react';
import MasterTable from '../../../components/MasterTable/MasterTable';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { actions as chargeSessionActions } from '../../../ducks/chargeSessions/chargeSessions.index';

interface ChargeSessionsTableProps {
  sessions: Array<any>;
  loading: boolean;
  pageSizeFromState: number;
  pageIndexFromState: number;
  sortBy: Array<Record<any, any>>;
  sessionData: Record<any, any>;
  error: boolean;
  totalPages: number;
}

const ChargeSessionsTable: React.FC<ChargeSessionsTableProps> = ({ sessions, loading, pageSizeFromState, pageIndexFromState, sortBy, sessionData, error, totalPages }: any) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Details',
        accessor: (data: any) => ({ _id: data._id, vid: data.vid }),
        Cell: (data: any) => <Link to={`/charge-sessions/${data.value._id}`}>Details</Link>,
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
        Header: 'Charger',
        accessor: 'charger',
        Cell: (data: any) => {
          return data.value ? data.value.title : '';
        },
        sortType: (a: any, b: any) => {
          if (!a.original.supercharger) return 1;
          if (!b.original.supercharger) return -1;
          if (a.original.supercharger?.title > b.original.supercharger?.title) return 1;
          if (b.original.supercharger?.title > a.original.supercharger?.title) return -1;
          return 0;
        },
      },
      {
        Header: 'Max Charger Rate',
        accessor: 'maxChargeRate',
        Cell: (data: any) => {
          return data.value + ' kW';
        },
        sortType: 'basic',
      },
      {
        Header: 'Energy Added',
        accessor: 'energyAdded',
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
      title="charge"
      data={sessions}
      columns={columns}
      loading={loading}
      pageSizeFromState={pageSizeFromState}
      pageIndexFromState={pageIndexFromState}
      actions={chargeSessionActions}
      sessionData={sessionData}
      sortBy={sortBy}
      error={error}
      style={{ maxHeight: 'calc(var(--vh, 1vh) * 76)' }}
      totalPages={totalPages}
    />
  );
};

export default ChargeSessionsTable;
