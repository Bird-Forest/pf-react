import { MobileBox } from 'pages/Page.styled';
import { createPortal } from 'react-dom';

export default function MobilePodtal({ isHidden, children }) {
  return (
    <>
      {isHidden &&
        createPortal(
          <MobileBox
            style={{
              transform: isHidden ? 'translate(0, -100%)' : 'translate(0, 0)',
            }}
          >
            {children}, document.body
          </MobileBox>
        )}
    </>
  );
}
