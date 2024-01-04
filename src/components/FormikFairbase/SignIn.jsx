import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import FormikSignIn from './FormikSignIn';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import AuthError from 'components/Portal/AuthError';

export default function SignIn() {
  const [showError, setShowError] = useState(false);
  const [errorMes, setErrorMes] = useState('');
  const dispatch = useDispatch();
  // const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/';
  const auth = getAuth();

  const handleSignIn = (email, password) => {
    // evt.preventDefault();
    // const email = evt.target.elements.email.value;
    // const password = evt.target.elements.pass.value;
    // console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
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
      <FormikSignIn onAutorization={handleSignIn} />
      {showError &&
        createPortal(
          <AuthError message={errorMes} onClose={() => setShowError(false)} />,
          document.body
        )}
    </div>
  );
}
