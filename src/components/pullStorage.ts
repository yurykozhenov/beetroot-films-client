const usePullStorage = (auth) => {
  const authStatus = JSON.parse(localStorage.getItem("isAuthorized"));
  const adminStatus = JSON.parse(localStorage.getItem("authorizedUser"));
  if (authStatus === null) {
    localStorage.setItem("isAuthorized", JSON.stringify(auth));
  }
  if (adminStatus === null) {
    localStorage.setItem("authorizedUser", JSON.stringify({}));
  }

  return {
    authStatus,
    adminStatus,
  };
};

export default usePullStorage;
