import { useLocation, useNavigate } from 'react-router-dom';
import Breadcrumb from '../Breadcrumbs/Breadcrumb';

const VisitorsCards = [
  {
    id: 1,
    name: 'Incoming Visitors',
    rel: '/security-guard/incoming-visitors',
  },
  {
    id: 2,
    name: 'Checked In Visitors',
    rel: '/security-guard/checked-out-visitors',
  },
  { id: 3, name: 'Visitors History', rel: '/security-guard/visitors-history' },
];

const VisitorsMenuComp = () => {
  const navigate = useNavigate();
  const locationData = useLocation();
  const user_id = locationData.state?.user_id;

  const navigateHandler = () => {
    navigate('/security-guard/incoming-visitors', { state: { user_id } });
  };
  return (
    <>
      <Breadcrumb pageName="Visitors Menu" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {VisitorsCards?.map((card: any) => (
          <button
            onClick={navigateHandler}
            key={card?.id}
            className=" border border-stroke bg-white py-6 px-7.5 shadow-lg rounded-lg dark:border-strokedark dark:bg-boxdark "
          >
            <div className="my-4 flex items-end justify-between">
              <div>
                <h4 className="text-title-sm font-semibold text-black dark:text-white">
                  {card?.name}
                </h4>
              </div>
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default VisitorsMenuComp;
