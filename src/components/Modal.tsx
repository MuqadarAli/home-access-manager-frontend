// import { Dialog, Transition } from "@headlessui/react";
// import { Fragment, useRef, useState } from "react";


// type deleteModalType = {
//   id: string;
//   name: string;
//   text: string,
//   setModal: (value: boolean) => void;
// };

// export function Modal({ name, text, setModal, id }: deleteModalType) {
//   const [open, setOpen] = useState(true);
//   const cancelButtonRef = useRef(null);


//   const cancelHandler = () => {
//     setOpen(false);
//     setModal(false);
//   };

  
//   return (
//     <Transition.Root show={open} as={Fragment}>
//       <Dialog
//         as="div"
//         className="relative z-10"
//         initialFocus={cancelButtonRef}
//         onClose={() => {
//           setModal(false);
//         }}
//       >
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
//         </Transition.Child>
//         <div className="fixed inset-0 z-10 overflow-y-auto">
//           <div className="flex min-h-full items-center justify-center p-4 text-center">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//               enterTo="opacity-100 translate-y-0 sm:scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 translate-y-0 sm:scale-100"
//               leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
//             >
//               <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
//                 <Dialog.Title
//                   as="h3"
//                   className="text-sm leading-6 font-medium text-gray-900"
//                 >
//                   {`Do You Want Delete ${name}?`}
//                 </Dialog.Title>
//                 <div className="flex gap-3 mt-3">
//                   {/* <Button
//                     name="Cancel"
//                     type="button"
//                     onClick={() => cancelHandler()}
//                   />
//                   <Button
//                     name="Delete"
//                     type="button"
//                     onClick={() => deleteHandler(id)} */}
//                   {/* /> */}
//                 </div>
                
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   );
// }
