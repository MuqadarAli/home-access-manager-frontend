import React from 'react';
import CardDataStats from '../../components/CardDataStats';
// import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
// import ChatCard from '../../components/Chat/ChatCard';
// import MapOne from '../../components/Maps/MapOne';
// import TableOne from '../../components/Tables/TableOne';
import { HiOutlineUsers } from 'react-icons/hi';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { MdOutlineBusiness } from 'react-icons/md';
import { GrGroup } from 'react-icons/gr';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useGetChartCardDataForCommunityQuery } from '../../redux/rtk-query/chartData';
import Loader from '../../components/Loader';

const AdminDashboard: React.FC = () => {
  const profile = useSelector(
    (state: RootState) => state.persistedReducer.auth.profile,
  );
  const communityId = useSelector(
    (state: RootState) => state.persistedReducer.auth.community_id,
  );

  const community_id = profile?.community?.id || communityId;

  const { data: cardData, isLoading } =
    useGetChartCardDataForCommunityQuery(community_id);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            <CardDataStats
              title="Total Users"
              total={`${cardData?.value?.totalUsers}`}
            >
              <HiOutlineUsers size={24} />
            </CardDataStats>
            <CardDataStats
              title="Total Business"
              total={`${cardData?.value?.totalBusinesses}`}
            >
              <MdOutlineBusiness size={24} />
            </CardDataStats>
            <CardDataStats
              title="Total Product"
              total={`${cardData?.value?.totalProducts}`}
            >
              <MdOutlineProductionQuantityLimits size={24} />
            </CardDataStats>
            <CardDataStats
              title="Total Visitors"
              total={`${cardData?.value?.totalVisitors}`}
            >
              <GrGroup size={24} />
            </CardDataStats>
          </div>

          <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            {/* <ChartOne /> */}
            <ChartTwo />
            <ChartThree />
            {/* <MapOne /> */}
            <div className="col-span-12 xl:col-span-8">
              {/* <TableOne /> */}
            </div>
            {/* <ChatCard /> */}
          </div>
        </>
      )}
    </>
  );
};

export default AdminDashboard;
