import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import Loader from '../../components/Loader';
import { useForm } from 'react-hook-form';
import SuccessMessage from '../../components/Alert/SuccessMessage';
import ErrorMessage from '../../components/Alert/ErrorMessage';
import { useAddMeetingMutation } from '../../redux/rtk-query/meeting';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

type AddMeetingType = {
  title: string;
  community_id: string;
  platform: string;
  link: string;
  date: string;
  time: string;
};

const AddMeetingComp: React.FC = () => {
  const [addError, setAddError] = useState<string | null>(null);
  const [addSuccess, setAddSuccess] = useState<string | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

  const [addMeeting, { isSuccess, isLoading, isError }] =
    useAddMeetingMutation();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<AddMeetingType>();

  const onSubmit: any = async (data: any) => {
    try {
      const response = await addMeeting(data).unwrap();
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

  const profile = useSelector(
    (state: RootState) => state.persistedReducer.auth.profile,
  );
  const community_id = profile?.community?.id;

  return (
    <>
      <Breadcrumb pageName="Add Meeting" />
      <div>
        {isError && (
          <p className="text-lg leading-6 font-medium text-red-500">
            System Failed
          </p>
        )}
      </div>
      <div className="">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-lg text-black dark:text-white">
                Meeting Form
              </h3>
            </div>
            <form method="post" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                {...register('community_id')}
                value={community_id}
                className="hidden"
              />
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label
                      htmlFor="title"
                      className="mb-2.5 text-base block text-black dark:text-white"
                    >
                      Title <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="title"
                      {...register('title', {
                        required: 'This field is required',
                        pattern: {
                          value: /^[^\s](?!.*\s$)[\s\S]{0,98}[^\s]$/,
                          message:
                            'The title must be between 1-100 characters.',
                        },
                      })}
                      placeholder="Enter title"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    {errors?.title && (
                      <p className="text-red-500">{errors?.title?.message}</p>
                    )}
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label
                      htmlFor="platform"
                      className="mb-2.5 text-base block text-black dark:text-white"
                    >
                      Platform <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="platform"
                      {...register('platform', {
                        required: 'This field is required',
                        pattern: {
                          value: /^(?! )[^\s](.{1,40}[^\s])?$/,
                          message:
                            'The platform must be between 1-40 characters.',
                        },
                      })}
                      placeholder="Enter platform"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    {errors?.platform && (
                      <p className="text-red-500">
                        {errors?.platform?.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label
                      htmlFor="link"
                      className="mb-2.5 text-base block text-black dark:text-white"
                    >
                      Link <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="link"
                      {...register('link', {
                        required: 'This field is required',
                        pattern: {
                          value: /^(?! )[^\s](.{0,998}[^\s])?$/,
                          message:
                            'The link must be no longer than 1000 characters.',
                        },
                      })}
                      placeholder="Enter link"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    {errors?.link && (
                      <p className="text-red-500">{errors?.link?.message}</p>
                    )}
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label
                      htmlFor="date"
                      className="mb-2.5 text-base block text-black dark:text-white"
                    >
                      Date <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      {...register('date', {
                        required: 'This field is required',
                        pattern: {
                          value: /^\d{4}-\d{2}-\d{2}$/,
                          message: 'Date must be YYYY-MM-DD formate',
                        },
                      })}
                      min={new Date().toISOString().split('T')[0]}
                      placeholder="Select date"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    {errors?.date && (
                      <p className="text-red-500">{errors?.date?.message}</p>
                    )}
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label
                      htmlFor="time"
                      className="mb-2.5 text-base block text-black dark:text-white"
                    >
                      Time <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="time"
                      id="time"
                      {...register('time', {
                        required: 'This field is required',
                        pattern: {
                          value:
                            /^((1[0-2]|0?[1-9]):[0-5][0-9] ?([AaPp][Mm]))|((2[0-3]|[01]?[0-9]):[0-5][0-9])$/,
                          message: 'Time must be HH:MM PM or HH:MM',
                        },
                      })}
                      placeholder="Select time"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                    {errors?.time && (
                      <p className="text-red-500">{errors?.time?.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex justify-end w-full">
                  <button
                    type="submit"
                    className="flex w-1/5 justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                  >
                    {!isLoading ? 'Add' : <Loader />}
                  </button>
                </div>
              </div>
            </form>
            {isSuccess && showSuccessMessage && addSuccess && (
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
    </>
  );
};

export default AddMeetingComp;
