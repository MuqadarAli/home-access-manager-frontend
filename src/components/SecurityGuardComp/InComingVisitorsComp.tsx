import React, { useState, useMemo } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { IoMdCheckmark } from 'react-icons/io';
import { SlEye } from 'react-icons/sl';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetApprovedVisitorForUserQuery } from '../../redux/rtk-query/visitor';
import Loader from '../Loader';
import { datetimeFormate } from '../../utils/datetimeFormate';
import { ApproveModal } from '../Modal/ApproveModal';

const InComingVisitorsComp: React.FC = () => {
  const locationData = useLocation();
  const user_id = locationData.state?.user_id;

  const [disableModal, setDisableModal] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<string>('');
  const [filterDate, setFilterDate] = useState<string>('');

  const {
    data: visitors,
    isError,
    isLoading,
  } = useGetApprovedVisitorForUserQuery({ user_id });

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
    return visitors?.value?.filter(
      (visitor: any) =>
        visitor?.date_of_visit?.includes(filterDate) ||
        visitor?.from_date?.includes(filterDate),
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
        onChange={(e) => setFilterDate(e.target.value)}
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
                      Visitor Type
                    </th>
                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                      Date Of Visit / From_Date
                    </th>
                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                      To Date
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
                          {visitor?.first_name}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {visitor?.last_name}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {visitor?.visitor_type}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {datetimeFormate(visitor?.date_of_visit) ||
                            datetimeFormate(visitor?.from_date)}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {visitor?.to_date &&
                            datetimeFormate(visitor?.to_date)}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <div className="flex items-center space-x-3.5">
                          <button
                            className="hover:text-primary bg-green-400 hover:bg-slate-100 rounded-full p-1"
                            id="checked in button"
                            onClick={() => disableHandler(visitor?.id)}
                          >
                            <IoMdCheckmark size={20} className="text-white" />
                          </button>
                          {visitor?.visitor_type === 'visitor' && (
                            <button
                              className="hover:text-primary hover:bg-slate-100 rounded-full p-1"
                              id="view-button"
                              onClick={() => viewHandler(visitor)}
                            >
                              <SlEye size={20} />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {disableModal && (
            <ApproveModal
              name="Visitor Checked In"
              setModal={setDisableModal}
              id={currentId}
            />
          )}
        </div>
      )}
    </>
  );
};

export default InComingVisitorsComp;
