import React, { useState, useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import Loader from '../../components/Loader';
import { useForm } from 'react-hook-form';
import SuccessMessage from '../../components/Alert/SuccessMessage';
import ErrorMessage from '../../components/Alert/ErrorMessage';
import { IoMdAdd, IoMdClose } from 'react-icons/io'; // Importing icons from react-icons
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useAddFeaturedMutation } from '../../redux/rtk-query/featured';

type AddFeaturedType = {
  title: string;
  image: File;
  description: string;
  super_admin_id: string;
};

const AddFeaturedComp: React.FC = () => {
  const [addError, setAddError] = useState<string | null>(null);
  const [addSuccess, setAddSuccess] = useState<string | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null); // State for image preview

  const [addFeatured, { isSuccess, isLoading, isError }] =
    useAddFeaturedMutation();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<AddFeaturedType>();

  useEffect(() => {
    // Clean up the image URL to avoid memory leaks
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      onChange(event); // This will ensure react-hook-form registers the file
    }
  };

  const removeImage = () => {
    if (imagePreview) URL.revokeObjectURL(imagePreview);
    setImagePreview(null); // Remove the image preview
  };

  const profile = useSelector(
    (state: RootState) => state.persistedReducer.auth.profile,
  );
  const super_admin_id = profile?.id;

  const { onChange, ...rest } = register('image', {
    required: 'This field is required',
  });

  const onSubmit: any = async (data: any) => {
    try {
      console.log('Submitted Data:', data);
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('super_admin_id', data.super_admin_id);
      formData.append('description', data.description);

      if (data.image && data.image[0]) {
        formData.append('image', data.image[0]); // Append the first file
      } else {
        console.error('No image selected or image field is empty');
      }

      const response = await addFeatured(formData).unwrap();
      if (response?.statusCode === 201) {
        setAddSuccess(response.message);
        setShowSuccessMessage(true);
        reset();
        removeImage(); // Clean up on successful submission
      } else {
        setAddError(response.message);
        setShowErrorMessage(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Breadcrumb pageName="Add Featured" />
      {/* <div>{isLoading && <Loader />}</div> */}
      <div>
        {isError && (
          <p className="text-lg leading-6 font-medium text-red-500">
            System Failed
          </p>
        )}
      </div>
      <div className="flex flex-col gap-9">
        <div className=" rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-lg text-black dark:text-white">
              Featured Form
            </h3>
          </div>
          <form className="p-6.5" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register('super_admin_id')}
              value={super_admin_id}
              className="hidden"
            />
            <div className="lg:flex w-full gap-10">
              <div className="mb-4.5 flex flex-col gap-6 lg:w-8/12">
                {/* Title Input */}
                <div className="">
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
                        value: /^.{1,40}$/,
                        message:
                          'The name must be no longer than 40 characters.',
                      },
                    })}
                    placeholder="Enter title"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  {errors?.title && (
                    <p className="text-red-500">{errors?.title.message}</p>
                  )}
                </div>
                {/* Description Input */}
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
                      {errors?.description.message}
                    </p>
                  )}
                </div>
              </div>
              {/* Image Upload and Preview */}
              <div>
                <div className="flex w-full h-full lg:w-70 lg:h-70 xl:w-100 xl:h-100 flex-col border border-dashed justify-center items-center ">
                  {imagePreview ? (
                    <div className="flex relative  flex-col pb-4">
                      <div className="flex justify-end">
                        <IoMdClose
                          onClick={removeImage}
                          size={24}
                          className="text-red-500 z-10 bg-white rounded-full relative right-3 top-7 cursor-pointer"
                        />
                      </div>

                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="mb-2 lg:w-67 lg:h-67 xl:w-96 xl:h-96  object-contain"
                      />
                    </div>
                  ) : (
                    <>
                      <label
                        htmlFor="image"
                        className="cursor-pointer flex items-center gap-2"
                      >
                        <IoMdAdd className="text-green-500 text-3xl" />
                        Upload Image
                      </label>
                      <input
                        type="file"
                        id="image"
                        accept="image/*"
                        {...rest}
                        {...register('image')}
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </>
                  )}
                </div>
                {errors?.image && (
                  <p className="text-red-500">{errors?.image?.message}</p>
                )}
              </div>
            </div>
            {/* Submit Button */}
            <div className="flex justify-end w-full mt-4">
              <button
                type="submit"
                className="flex w-1/5 justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              >
                {!isLoading ? 'Add' : <Loader />}
              </button>
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
    </>
  );
};

export default AddFeaturedComp;
