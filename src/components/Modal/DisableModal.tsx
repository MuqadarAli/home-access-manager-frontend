import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Loader from '../Loader';
import { useCommunityDisableMutation } from '../../redux/rtk-query/community';
import SuccessAlert from '../Alert/SuccessAlert';
import ErrorAlert from '../Alert/ErrorAlert';
import { useUserDisableByAdminMutation } from '../../redux/rtk-query/user';
import { useVisitorDisableByAdminMutation } from '../../redux/rtk-query/visitor';
import { useAirbnbDisableByAdminMutation } from '../../redux/rtk-query/airbnb';
import { useProductDisableByAdminMutation } from '../../redux/rtk-query/product';
import { useBusinessDisableByAdminMutation } from '../../redux/rtk-query/business';
import { useVehicleDisableByAdminMutation } from '../../redux/rtk-query/vehicle';

type disableModalType = {
  id: string;
  name: string;
  setModal: (value: boolean) => void;
};

export function DisableModal({ name, setModal, id }: disableModalType) {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  const [disableCommunity, { isError, isLoading, isSuccess }] =
    useCommunityDisableMutation();
  const [
    disableUser,
    { isError: userError, isLoading: userLoading, isSuccess: userSuccess },
  ] = useUserDisableByAdminMutation();
  const [
    disableVisitor,
    {
      isError: visitorError,
      isLoading: visitorLoading,
      isSuccess: visitorSuccess,
    },
  ] = useVisitorDisableByAdminMutation();
  const [
    airbnbDisable,
    {
      isError: airbnbError,
      isLoading: airbnbLoading,
      isSuccess: airbnbSuccess,
    },
  ] = useAirbnbDisableByAdminMutation();
  const [
    productDisable,
    {
      isError: productError,
      isLoading: productLoading,
      isSuccess: productSuccess,
    },
  ] = useProductDisableByAdminMutation();
  const [
    businessDisable,
    {
      isError: businessError,
      isLoading: businessLoading,
      isSuccess: businessSuccess,
    },
  ] = useBusinessDisableByAdminMutation();
  const [
    vehicleDisable,
    {
      isError: vehicleError,
      isLoading: vehicleLoading,
      isSuccess: vehicleSuccess,
    },
  ] = useVehicleDisableByAdminMutation();

  const cancelHandler = () => {
    setOpen(false);
    setModal(false);
  };

  const approveHandler = async (id: string) => {
    try {
      switch (name) {
        case 'Community':
          await disableCommunity({ id }).unwrap();
          setTimeout(() => {
            setOpen(false);
            setModal(false);
          }, 2000);
          break;
        case 'User':
          await disableUser({ id }).unwrap();
          setTimeout(() => {
            setOpen(false);
            setModal(false);
          }, 2000);
          break;
        case 'Visitor':
          await disableVisitor({ id }).unwrap();
          setTimeout(() => {
            setOpen(false);
            setModal(false);
          }, 2000);
          break;
        case 'Airbnb':
          await airbnbDisable({ id }).unwrap();
          setTimeout(() => {
            setOpen(false);
            setModal(false);
          }, 2000);
          break;
        case 'Product':
          await productDisable({ id }).unwrap();
          setTimeout(() => {
            setOpen(false);
            setModal(false);
          }, 2000);
          break;
        case 'Business':
          await businessDisable({ id }).unwrap();
          setTimeout(() => {
            setOpen(false);
            setModal(false);
          }, 2000);
          break;
        case 'Vehicle':
          await vehicleDisable({ id }).unwrap();
          setTimeout(() => {
            setOpen(false);
            setModal(false);
          }, 2000);
          break;

        default:
          return null;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => {
          setModal(false);
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 bg-slate-100 transition-opacity"></div>
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
                <Dialog.Title as="h3" className="leading-6 font-medium mb-5">
                  {`Do You Want To Disable ${name}?`}
                </Dialog.Title>
                <div className="flex gap-3 mt-3">
                  <button
                    onClick={cancelHandler}
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => approveHandler(id)}
                    disabled={
                      isLoading ||
                      userLoading ||
                      visitorLoading ||
                      airbnbLoading ||
                      productLoading ||
                      businessLoading ||
                      vehicleLoading
                    }
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                  >
                    {!isLoading ||
                    !userLoading ||
                    !visitorLoading ||
                    !airbnbLoading ||
                    !productLoading ||
                    !businessLoading ||
                    !vehicleLoading ? (
                      'Disable'
                    ) : (
                      <Loader />
                    )}
                  </button>
                </div>
                {(isSuccess ||
                  userSuccess ||
                  visitorSuccess ||
                  airbnbSuccess ||
                  productSuccess ||
                  businessSuccess ||
                  vehicleSuccess) && (
                  <div id="approval-alert" className="mt-3">
                    <SuccessAlert name={name} action="Disable" />
                  </div>
                )}
                {(isError ||
                  userError ||
                  visitorError ||
                  airbnbError ||
                  productError ||
                  businessError ||
                  vehicleError) && (
                  <div id="error-approval-alert" className="mt-3">
                    <ErrorAlert />
                  </div>
                )}
                {/* <div className="mt-5">
                  {(userSuccess ||
                    channelSuccess ||
                    hostSuccess ||
                    adSuccess ||
                    reportSuccess ||
                    sTeamSuccess) && (
                    <p className="text-sm leading-6 font-medium text-green-500">
                      {`${name} delete successfully`}
                    </p>
                  )}
                  {(userError ||
                    channelError ||
                    hostError ||
                    adError ||
                    reportError ||
                    sTeamError) && (
                    <p className="text-sm leading-6 font-medium text-red-500">
                      System Failed
                    </p>
                  )}
                  {(userLoading ||
                    channelLoading ||
                    hostLoading ||
                    adLoading ||
                    reportLoading ||
                    sTeamLoading) && <Loading />}
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
