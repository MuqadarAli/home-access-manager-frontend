import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { FaArrowRight } from 'react-icons/fa6';
import { SlEye } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Loader from '../Loader';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useGetApprovedUsersByLotNumberQuery } from '../../redux/rtk-query/user';
// import { DisableModal } from '../Modal/DisableModal';

const SecurityGuardComp: React.FC = () => {
  const profile = useSelector(
    (state: RootState) => state.persistedReducer.auth.profile,
  );
  const communityId = useSelector(
    (state: RootState) => state.persistedReducer.auth.community_id,
  );
  const community_id = profile?.community?.id || communityId;

  const [lotNumber, setLotNumber] = useState('');

  const {
    data: users,
    isError,
    isLoading,
  } = useGetApprovedUsersByLotNumberQuery(
    { community_id, lot_number: lotNumber },
    { skip: !lotNumber },
  );

  const navigate = useNavigate();

  const viewHandler = (user: any, type: string) => {
    type === 'view'
      ? navigate('/users/user-detail', { state: { user } })
      : navigate('/security-guard/visitors-menu', { state: { user_id: user?.id } });
  };

  // function disableHandler(id: any) {
  //   setDisableModal(!disableModal);
  //   setCurrentId(id);
  // }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      lot_number: '',
    },
  });

  const onSubmit: any = async (data: any) => {
    try {
      const { lot_number } = data;
      setLotNumber(lot_number);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Breadcrumb pageName="Users" />
      {/* <div>{isLoading && <Loader />}</div> */}
      <div>
        {isError && (
          <p className="text-lg leading-6 font-medium text-red-500">
            System Failed
          </p>
        )}
      </div>
      <form
        method="post"
        onSubmit={handleSubmit(onSubmit)}
        className="mb-3 lg:flex gap-5 "
      >
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              id="text"
              {...register('lot_number', {
                required: 'This field is requires',
                pattern: {
                  value: /^[^\s]{1,20}$/,
                  message: 'Lot number must be between 1-20 characters',
                },
              })}
              placeholder="Enter lot number"
              className="w-full lg:w-[300px] rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none  focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {errors?.lot_number && (
            <p className="text-red-500">{errors?.lot_number?.message}</p>
          )}
        </div>

        <div className="mb-5">
          <button
            type="submit"
            value="Sign In"
            className="w-full lg:w-[150px] cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
          >
            {!isLoading ? 'Search' : <Loader />}
          </button>
        </div>
      </form>
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
                      Email
                    </th>
                    <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white">
                      User Type
                    </th>
                    <th className="py-4 px-4 font-medium text-black dark:text-white">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users?.value?.map((user: any, key: number) => (
                    <tr key={key}>
                      <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                        <p className="text-black dark:text-white">
                          {user?.first_name}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {user?.last_name}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {user?.email}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <p className="text-black dark:text-white">
                          {user?.user_type}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                        <div className="flex items-center space-x-3.5">
                          <button
                            className="hover:text-primary hover:bg-slate-100 rounded-full p-1"
                            id="view-button"
                            onClick={() => viewHandler(user, 'view')}
                          >
                            <SlEye size={20} />
                          </button>
                          <button
                            className="hover:text-primary hover:bg-slate-100 rounded-full p-1"
                            onClick={() => viewHandler(user, 'forward')}
                          >
                            <FaArrowRight size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* {disableModal && (
            <DisableModal
              name="User"
              setModal={setDisableModal}
              id={currentId}
            />
          )} */}
        </div>
      )}
    </>
  );
};

export default SecurityGuardComp;
