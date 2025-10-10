const getLocalStorage = () => {
  const existApp = JSON.parse(localStorage.getItem("installApp"));
  return existApp;
};

const setLocalStorage = (app) => {
  const existApp = getLocalStorage();

  let updatedApp = [];
  if (existApp) {
    updatedApp = [...existApp, app];
  } else {
    updatedApp.push(app);
  }

  const stringifyData = JSON.stringify(updatedApp);
  // console.log(stringifyData);
  localStorage.setItem("installApp", stringifyData);
};

export { getLocalStorage, setLocalStorage };
