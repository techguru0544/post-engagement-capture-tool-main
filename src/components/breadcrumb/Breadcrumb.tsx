import React from 'react';
import { Breadcrumbs } from '@mantine/core';

interface BreadcrumbPropsT {
  linksList?: React.ReactNode[];
}

const Breadcrumb: React.FC<BreadcrumbPropsT> = ({ linksList }) => {
  // const { pathname } = useLocation();
  // const pathNames = useMemo(
  //   () => pathname.split('/').filter(Boolean),
  //   [pathname]
  // );

  return (
    <Breadcrumbs className="pt-2" separator=">">
      {linksList}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
