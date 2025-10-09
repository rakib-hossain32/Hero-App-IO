const getLocalStorage = () => {
  const existApp = JSON.parse(localStorage.getItem("installApp"));
  return existApp;
};

const setLocalStorage = (apps) => {
  const existApp = getLocalStorage();

  let updatedApp = [];
  if (existApp) {
    updatedApp = [...existApp, apps];
  } else {
    updatedApp.push(apps);
  }

  const stringifyData = JSON.stringify(updatedApp);
  // console.log(stringifyData);
  localStorage.setItem("installApp", stringifyData);
};

export { getLocalStorage, setLocalStorage };
