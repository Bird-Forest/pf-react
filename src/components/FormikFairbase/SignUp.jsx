import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { createPortal } from 'react-dom';

import FormikSignUp from './FormikSignUp';
import { useState } from 'react';
import AuthError from 'components/Portal/AuthError';

export default function SignUp() {
  const [showError, setShowError] = useState(false);
  const [errorMes, setErrorMes] = useState('');
  const dispatch = useDispatch();
  // const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/';
  // <Link to={backLinkHref} />;
  const auth = getAuth();

  const handleSignUp = (email, password) => {
    // evt.preventDefault();
    // const email = evt.target.elements.email.value;
    // const password = evt.target.elements.pass.value;
    // console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // console.log(userCredential.user);
        dispatch(
          setUser({
            email: userCredential.user.email,
            id: userCredential.user.uid,
            token: userCredential.user.accessToken,
          })
        );
      })
      .catch(error => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        // console.error(errorMessage);
        setErrorMes(errorMessage);
        setShowError(true);
      });
  };

  return (
    <div>
      <FormikSignUp onRegistration={handleSignUp} />
      {showError &&
        createPortal(
          <AuthError message={errorMes} onClose={() => setShowError(false)} />,
          document.body
        )}
    </div>
  );
}
