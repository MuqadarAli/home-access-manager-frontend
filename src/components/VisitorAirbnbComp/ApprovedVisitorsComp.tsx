import React, { useState, useMemo } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { RxCross2 } from 'react-icons/rx';
import { SlEye } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useGetApprovedVisitorForCommunityQuery } from '../../redux/rtk-query/visitor';
import Loader from '../Loader';
import { DisableModal } from '../Modal/DisableModal';

const ApprovedVisitorsComp: React.FC = () => {
  const profile = useSelector((state: RootState) => state.persistedReducer.auth.profile);
  const communityId = useSelector(
    (state: RootState) => state.persistedReducer.auth.community_id,
  );
  
  const community_id = profile?.community?.id || communityId;
  const [disableModal, setDisableModal] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<string>('');
  const [filterDate, setFilterDate] = useState<string>('');

  const {
    data: visitors,
    isError,
    isLoading,
  } = useGetApprovedVisitorForCommunityQuery({community_id, visitor_type: 'visitor'});

  const navigate = useNavigate();

  const viewHandler = (visitor: any) => {
    navigate('/visitors/visitor-detail', { state: { visitor } });
  };

  function disableHandler(id: any) {
    setDisableModal(!disableModal);
    setCurrentId(id);
  }

  // Filter visitors based on the input date
  const filteredVisitors = useMemo(() => {
    return visitors?.value?.filter((visitor: any) =>
      visitor.date_of_visit.includes(filterDate)
    );
  }, [visitors, filterDate]);

  return (
    <>
      <Breadcrumb pageName="Visitors" />
      <div>{isLoading && <Loader />}</div>
      <div>
        {isError && (
          <p className="text-lg leading-6 font-medium text-red-500">
            System Failed
          </p>
        )}
      </div>
      <input
        type="date"
        value={filterDate}
        onChange={e => setFilterDate(e.target.value)}
        className="mb-4 p-2 border rounded"
        placeholder="Filter by Date of Visit"
      />
      {!isLoading && (
        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto mb-5">
                <thead>
                  <tr className="bg-gray-2 text-left dark:bg-meta-4">
                    <th className="min-w-[220px]  py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                      First Name
                    </th>
                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white ">
                      Last Name
                    </th>
                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                      Date Of Visit
                    </th>
                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                      Access Method
                    </th>
                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredVisitors?.map((visitor: any, key: number) => (
                    <tr key={key}>
                      <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                        <p className="text-black dark:text-white">
                          {visitor.first_name}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {visitor.last_name}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {visitor.date_of_visit}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {visitor.access_method}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <div className="flex items-center space-x-3.5">
                          <button
                            className="hover:text-primary bg-red-400 hover:bg-slate-100 rounded-full p-1"
                            id="cross-button"
                            onClick={() => disableHandler(visitor?.id)}
                          >
                            <RxCross2 size={20} className="text-white" />
                          </button>
                          <button
                            className="hover:text-primary hover:bg-slate-100 rounded-full p-1"
                            id="view-button"
                            onClick={() => viewHandler(visitor)}
                          >
                            <SlEye size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {disableModal && (
            <DisableModal
              name="Visitor"
              setModal={setDisableModal}
              id={currentId}
            />
          )}
        </div>
      )}
    </>
  );
};

export default ApprovedVisitorsComp;
