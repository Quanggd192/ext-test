import Home from "Pages/Home";
import RecordPage from "Pages/Record";
import ChalengePage from "Pages/Challenge";
export const routes = [
  {
    path: "/my_record",
    element: <RecordPage />,
  },
  {
    path: "/challenge",
    element: <ChalengePage />,
  },
  {
    path: "/",
    element: <Home />,
  },
];
