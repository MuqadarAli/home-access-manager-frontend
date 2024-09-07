import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import {
  useCommunityRegistrationMutation,
  useGetCommunityTypeQuery,
} from '../../redux/rtk-query/community';
import Loader from '../../components/Loader';
import { useForm } from 'react-hook-form';
import SuccessMessage from '../../components/Alert/SuccessMessage';
import ErrorMessage from '../../components/Alert/ErrorMessage';

type AddCommunityType = {
  name: string;
  communityType_id: string;
  address: string;
  city: string;
  zip_code: string;
  full_name: string;
  email: string;
  phone: string;
  description: string;
};

const AddCommunity: React.FC = () => {
  const [addError, setAddError] = useState<string | null>(null);
  const [addSuccess, setAddSuccess] = useState<string | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const {
    data: communityTypes,
    isError,
    isLoading,
  } = useGetCommunityTypeQuery(undefined);

  const [
    addCommunity,
    { isSuccess: communitySuccess, isLoading: communityLoading },
  ] = useCommunityRegistrationMutation();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<AddCommunityType>();

  const onSubmit: any = async (data: any) => {
    try {
      const response = await addCommunity(data).unwrap();
      if (response?.statusCode == 201) {
        setAddSuccess(response?.message);
        setShowSuccessMessage(true);
        reset();
      } else {
        setAddError(response?.message);
        setShowErrorMessage(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Breadcrumb pageName="Add Community" />
      <div>{isLoading && <Loader />}</div>
      <div>
        {isError && (
          <p className="text-lg leading-6 font-medium text-red-500">
            System Failed
          </p>
        )}
      </div>
      {!isLoading && (
        <div className="">
          <div className="flex flex-col gap-9">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-lg text-black dark:text-white">
                  Community Form
                </h3>
              </div>
              <form method="post" onSubmit={handleSubmit(onSubmit)}>
                <div className="p-6.5">
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label
                        htmlFor="name"
                        className="mb-2.5 text-base block text-black dark:text-white"
                      >
                        Community name <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register('name', {
                          required: 'This field is required',
                          pattern: {
                            value: /^.{1,40}$/,
                            message:
                              'The name must be no longer than 40 characters.',
                          },
                        })}
                        placeholder="Enter community name"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                      {errors?.name && (
                        <p className="text-red-500">{errors?.name?.message}</p>
                      )}
                    </div>

                    <div className="w-full xl:w-1/2">
                      <div>
                        <label
                          htmlFor="community_type"
                          className="mb-3 text-base block text-black dark:text-white"
                        >
                          Community Type <span className="text-meta-1">*</span>
                        </label>

                        <div className="relative z-20 bg-white dark:bg-form-input">
                          <select
                            className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${'text-black dark:text-white'}`}
                            id="community_type"
                            {...register('communityType_id', {
                              required: 'This field is required',
                            })}
                          >
                            <option
                              value=""
                              // disabled
                              className="text-body text-base dark:text-bodydark"
                            >
                              Select community type
                            </option>
                            {communityTypes?.value.map((communityType: any) => (
                              <option
                                value={communityType?.id}
                                key={communityType?.id}
                                className="text-body text-base dark:text-bodydark"
                              >
                                {communityType?.name}
                              </option>
                            ))}
                          </select>

                          <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g opacity="0.8">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                  fill="#637381"
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </div>
                        {errors?.communityType_id && (
                          <p className="text-red-500">
                            {errors?.communityType_id?.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label
                        htmlFor="address"
                        className="mb-2.5 text-base block text-black dark:text-white"
                      >
                        Address <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        id="address"
                        {...register('address', {
                          required: 'This field is required',
                          maxLength: {
                            value: 1000,
                            message:
                              'The address must be no longer than 1000 characters.',
                          },
                        })}
                        placeholder="Enter address"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                      {errors?.address && (
                        <p className="text-red-500">
                          {errors?.address?.message}
                        </p>
                      )}
                    </div>
                    <div className="w-full xl:w-1/2">
                      <label
                        htmlFor="city"
                        className="mb-2.5 text-base block text-black dark:text-white"
                      >
                        City <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        id="city"
                        {...register('city', {
                          required: 'This field is required',
                          maxLength: {
                            value: 1000,
                            message:
                              'The city must be no longer than 1000 characters.',
                          },
                        })}
                        placeholder="Enter city"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                      {errors?.city && (
                        <p className="text-red-500">{errors?.city?.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label
                        htmlFor="zip_code"
                        className="mb-2.5 text-base block text-black dark:text-white"
                      >
                        Zip Code <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        id="zip_code"
                        {...register('zip_code', {
                          required: 'This field is required',
                          maxLength: {
                            value: 100,
                            message:
                              'The zip code must be no longer than 100 characters.',
                          },
                        })}
                        placeholder="Enter zip code"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                      {errors?.zip_code && (
                        <p className="text-red-500">
                          {errors?.zip_code?.message}
                        </p>
                      )}
                    </div>
                    <div className="w-full xl:w-1/2">
                      <label
                        htmlFor="full_name"
                        className="mb-2.5 text-base block text-black dark:text-white"
                      >
                        Admin Full Name <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        id="full_name"
                        {...register('full_name', {
                          required: 'This field is required',
                          maxLength: {
                            value: 100,
                            message:
                              'The full name of the admin must be no longer than 100 characters.',
                          },
                        })}
                        placeholder="Enter admin full name"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                      {errors?.full_name && (
                        <p className="text-red-500">
                          {errors?.full_name?.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label
                        htmlFor="email"
                        className="mb-2.5 text-base block text-black dark:text-white"
                      >
                        Email Address <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        id="email"
                        {...register('email', {
                          required: 'This field is required',
                          pattern: {
                            value:
                              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                            message: 'Invalid email formate',
                          },
                        })}
                        placeholder="Enter email address"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                      {errors?.email && (
                        <p className="text-red-500">{errors?.email?.message}</p>
                      )}
                    </div>
                    <div className="w-full xl:w-1/2">
                      <label
                        htmlFor="phone_number"
                        className="mb-2.5 text-base block text-black dark:text-white"
                      >
                        Phone Number <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        id="phone_number"
                        {...register('phone', {
                          required: 'This field is required',
                          pattern: {
                            value: /^.{1,40}$/,
                            message: 'Invalid phone number formate',
                          },
                        })}
                        placeholder="Enter phone number"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                      {errors?.phone && (
                        <p className="text-red-500">{errors?.phone?.message}</p>
                      )}
                    </div>
                  </div>

                  {/* <SelectGroupOne /> */}

                  <div className="mb-6">
                    <label
                      htmlFor="description"
                      className="mb-2.5 text-base block text-black dark:text-white"
                    >
                      Description <span className="text-meta-1">*</span>
                    </label>
                    <textarea
                      rows={6}
                      id="description"
                      {...register('description', {
                        required: 'This field is required',
                        maxLength: {
                          value: 1000,
                          message:
                            'The description must be no longer than 1000 characters.',
                        },
                      })}
                      placeholder="Enter description"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    ></textarea>
                    {errors?.description && (
                      <p className="text-red-500">
                        {errors?.description?.message}
                      </p>
                    )}
                  </div>
                  <div className="flex justify-end w-full">
                    <button
                      type="submit"
                      className="flex w-1/5 justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                    >
                      {!communityLoading ? 'Add' : <Loader />}
                    </button>
                  </div>
                </div>
              </form>
              {communitySuccess && showSuccessMessage && addSuccess && (
                <SuccessMessage
                  message={addSuccess}
                  setShowMessage={setShowSuccessMessage}
                />
              )}
              {addError && showErrorMessage && (
                <ErrorMessage
                  message={addError}
                  setShowMessage={setShowErrorMessage}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddCommunity;
