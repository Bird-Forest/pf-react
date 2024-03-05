import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loading } from 'components/Loader/Loading';
import NavigateSign from 'components/FormikFairbase/NavigateSign';
import { FormikPageWrap } from 'components/FormikFairbase/Form.styled';
import { WrapRight } from './Page.styled';

export default function FormikPage() {
  return (
    <WrapRight>
      <FormikPageWrap>
        <NavigateSign />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </FormikPageWrap>
    </WrapRight>
  );
}
