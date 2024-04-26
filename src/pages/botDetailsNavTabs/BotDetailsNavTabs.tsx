import { useParams } from 'react-router-dom';
import ErrorPage from '@/pages/error/ErrorPage';
import CaptureTools from '@/pages/captureTools/CaptureTools';
import { SIDE_NAVBAR_TABS_ROUTE_NAME } from '@/utils/constants';
import BotDetailsDashboard from '../botDetailsDashboard/BotDetailsDashboard';

const BotDetailsNavTabs = () => {
  const params = useParams();

  switch (params.navTab ?? SIDE_NAVBAR_TABS_ROUTE_NAME.DASHBOARD) {
    case SIDE_NAVBAR_TABS_ROUTE_NAME.DASHBOARD:
      return <BotDetailsDashboard />;
    case SIDE_NAVBAR_TABS_ROUTE_NAME.CAPTURE_TOOLS:
      return <CaptureTools />;
    default:
      return <ErrorPage />;
  }
};

export default BotDetailsNavTabs;
