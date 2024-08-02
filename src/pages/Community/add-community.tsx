import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const communityTypes: any = [
  { id: 1, name: 'Social Community' },
  { id: 2, name: 'Professional Community' },
  { id: 3, name: 'Cultural Community' },
  { id: 4, name: 'Educational Community' },
  { id: 5, name: 'Health and Wellness Community' },
  { id: 6, name: 'Environmental Community' },
  { id: 7, name: 'Sports Community' },
  { id: 8, name: 'Arts Community' },
  { id: 9, name: 'Religious Community' },
  { id: 10, name: 'Volunteer Community' },
];

const AddCommunity: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Add Community" />

      <div className="">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-lg text-black dark:text-white">
                Community Form
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 text-base block text-black dark:text-white">
                      Community name <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter community name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <div>
                      <label className="mb-3 text-base block text-black dark:text-white">
                        Select Country <span className="text-meta-1">*</span>
                      </label>

                      <div className="relative z-20 bg-white dark:bg-form-input">
                        <select
                          className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input ${'text-black dark:text-white'}`}
                          placeholder="Select community type"
                        >
                          <option
                            value=""
                            // disabled
                            className="text-body text-base dark:text-bodydark"
                          >
                            Select community type
                          </option>
                          {communityTypes.map((communityType: any) => (
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
                    </div>
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 text-base block text-black dark:text-white">
                      Address <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter address"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 text-base block text-black dark:text-white">
                      Area <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter area"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 text-base block text-black dark:text-white">
                      Zip Code <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter zip code"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 text-base block text-black dark:text-white">
                      Admin Name <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter admin name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 text-base block text-black dark:text-white">
                      Email Address <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter email address"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 text-base block text-black dark:text-white">
                      Phone Number <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter phone number"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                {/* <SelectGroupOne /> */}

                <div className="mb-6">
                  <label className="mb-2.5 text-base block text-black dark:text-white">
                    Description <span className="text-meta-1">*</span>
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Enter description"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>
                <div className='flex justify-end w-full'>
                  <button className="flex w-1/5 justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCommunity;
