/** empty는 토큰이 비어있는 것이고, sessionT는 sessionStorage에 저장한 토큰을 의미하고, localT는 localStorage에 저장한 토큰을 의미합니다.  */

const TokenVerification = () => {
  let isToken = 'empty';

  const sessionT = sessionStorage.getItem('idea-market-token');
  const localT = localStorage.getItem('idea-market-token');

  if (sessionT !== null) isToken = 'sessionT';
  
  if (localT !== null) isToken = 'localT';

  return isToken;
};

export default TokenVerification;
