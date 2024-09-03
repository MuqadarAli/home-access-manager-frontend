import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import Loader from '../Loader';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useGetFeaturedQuery } from '../../redux/rtk-query/featured';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { DeleteModal } from '../Modal/DeleteModal';
import { CiEdit } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

const AddedFeaturedComp: React.FC = () => {
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<string>('');
  const profile = useSelector(
    (state: RootState) => state.persistedReducer.auth.profile,
  );
  const community_id = profile?.community?.id;
  const {
    data: featuredList,
    isError,
    isLoading,
  } = useGetFeaturedQuery(community_id);

  function deleteHandler(id: any) {
    setDeleteModal(!deleteModal);
    setCurrentId(id);
  }

  const navigate = useNavigate();
  function updateHandler(featured: any) {
    navigate('/super-admin/featured/update-featured', { state: { featured } });
  }

  return (
    <>
      <Breadcrumb pageName="Featured" />
      <div>{isLoading && <Loader />}</div>
      <div>
        {isError && (
          <p className="text-lg leading-6 font-medium text-red-500">
            System Failed
          </p>
        )}
      </div>
      {(featuredList?.statusCode === 200 && !isLoading ) && (
        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="rounded-sm border border-stroke bg-white px-5  shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
            <div className="max-w-full overflow-x-auto">
              <div className="mx-auto max-w-2xl px-3 py-10 lg:max-w-7xl ">
                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                  {featuredList?.value?.map((featured: any) => (
                    <div>
                      <div className="relative top-10 z-50 gap-3 right-3 flex justify-end">
                        <button
                          className=" bg-white rounded-full p-1 hover:bg-slate-200"
                          onClick={() => updateHandler(featured)}
                        >
                          <CiEdit size={20} className="text-blue-600" />
                        </button>
                        <button
                          className=" bg-white rounded-full p-1 hover:bg-slate-200"
                          onClick={() => deleteHandler(featured?.id)}
                        >
                          <RiDeleteBin6Line
                            size={20}
                            className="text-red-400 "
                          />
                        </button>
                      </div>
                      <div
                        key={featured?.id}
                        className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                      >
                        <div className="bg-gray-200 h-full w-full">
                          {' '}
                          {/* Adjust width and height as needed */}
                          <img
                            alt={featured?.title}
                            src={featured?.image_url}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex flex-1 flex-col space-y-2 p-4">
                          <h3 className="font-medium text-black">
                            {featured?.title}
                          </h3>
                          <p className="text-black">{featured?.description}</p>
                          <div className="flex flex-1 flex-col justify-end">
                            <p className="text-sm italic text-gray-500 ">
                              {featured?.options}
                            </p>
                            <p className="text-base font-medium text-gray-900">
                              {featured?.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {deleteModal && (
            <DeleteModal
              name="Featured"
              setModal={setDeleteModal}
              id={currentId}
            />
          )}
        </div>
      )}
    </>
  );
};

export default AddedFeaturedComp;
