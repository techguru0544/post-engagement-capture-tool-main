export const MAIN_ROUTE: Readonly<{
  BOT_LIST: string;
}> = Object.freeze({
  BOT_LIST: '/home'
});

export const BOT_DASHBOARD_ROUTE: Readonly<{
  BOT_DETAILS: string;
}> = Object.freeze({
  BOT_DETAILS: '/:botId/:navTab'
});

export const CAPTURE_TOOLS_ROUTE: Readonly<{
  SUB_TABS: string;
  POST_ENGAGEMENTS_EDIT: string;
}> = Object.freeze({
  SUB_TABS: `${BOT_DASHBOARD_ROUTE.BOT_DETAILS}/:subTabs`,
  POST_ENGAGEMENTS_EDIT: `${BOT_DASHBOARD_ROUTE.BOT_DETAILS}/:subTabs/:tableRowId/edit`
});
