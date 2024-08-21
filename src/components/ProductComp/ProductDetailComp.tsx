import { useLocation } from 'react-router-dom';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';
import { datetimeFormate } from '../../utils/datetimeFormate';

const ProductDetailComp = () => {
  const locationData = useLocation();
  const product = locationData.state?.product;
  return (
    <>
      <div className="mx-auto">
        <Breadcrumb pageName="Product Detail" />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Product Information
                </h3>
              </div>
              <div className="px-7">
                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row ">
                  <dl className="grid grid-cols-1 sm:grid-cols-2 w-full">
                    <div className=" px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Name
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {product?.name}
                      </dd>
                    </div>
                    <div className=" px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Category
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {product?.category}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Condition
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {product?.condition}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Currency
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {product?.currency}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Price
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {product?.price}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Quantity
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {product?.quantity}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Address
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {product?.address}
                      </dd>
                    </div>

                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        User Name
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {`${product?.user?.first_name} ${product?.user?.last_name}`}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Phone Number
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {product?.phone}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Email
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {product?.user?.email}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Date Of Apply
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {datetimeFormate(product?.created_at)}
                      </dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Date Of Approval
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2"></dd>
                    </div>
                    <div className="border-t border-gray-100 px-4 py-6 sm:col-span-2 sm:px-0">
                      <dt className="text-lg font-semibold leading-7  text-black dark:text-white">
                        Description
                      </dt>
                      <dd className="mt-1 text-lg leading-7 font-normal text-black dark:text-white sm:mt-2">
                        {product?.description}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 xl:col-span-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Product Image
                </h3>
              </div>
              <div className="p-7">
                <img
                  alt="product-image"
                  src={product?.image_url}
                  className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                ></img>
              </div>
            </div>
            {product?.message && (
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    Message
                  </h3>
                </div>
                <div className="py-4 px-7">{product?.message}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailComp;
