import Page from "components/common/Page";
import Homepage from "pages/Homepage";
import Maintain from "pages/Maintain";
import NotFound from "pages/NotFound";

export const UserRoutes = [
  {
    path: "",
    element: (
      <Page title='Move To Earn'>
        <Homepage />
      </Page>
    ),
  },
  {
    path: "*",
    element: (
      <Page title='Not Found'>
        <NotFound />
      </Page>
    ),
  },
];
