import { useContext, useEffect } from 'react';
import TokenContext from './helpers/TokenContext';

function LogOut() {
  const { saveToken } = useContext(TokenContext);
  useEffect(() => saveToken(null));
  return null;
}

export default LogOut;