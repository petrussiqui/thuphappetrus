import Page from "components/common/Page";
import Dashboard from "pages/Dashboard";
import NotFound from "pages/NotFound";
import SwapCrossChain from "pages/SwapCrossChain";

export const UserRoutes = [
  {
    path: "",
    element: (
      <Page title="Move To Earn">
        <Dashboard />
      </Page>
    ),
  },
  {
    path: "*",
    element: (
      <Page title="Not Found">
        <NotFound />
      </Page>
    ),
  },
];
export const AppRoutes = [
  {
    path: "cross-chain",
    element: (
      <Page title="Swap Cross Chain">
        <SwapCrossChain />
      </Page>
    ),
  },
  {
    path: "*",
    element: (
      <Page title="Not Found">
        <NotFound />
      </Page>
    ),
  },
];
