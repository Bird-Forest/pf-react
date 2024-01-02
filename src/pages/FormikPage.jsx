import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loading } from 'components/Loader/Loading';
import NavigateSign from 'components/FormikFairbase/NavigateSign';
import { FormikPageWrap } from 'components/FormikFairbase/Form.styled';

export default function FormikPage() {
  return (
    <FormikPageWrap>
      <NavigateSign />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </FormikPageWrap>
  );
}
