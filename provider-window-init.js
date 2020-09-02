const initOpenFinParamListener = () => {
  const openMainWindow = () => {
    let winOption = {
      name: "child-" + Date.now(),
      defaultWidth: 600,
      defaultHeight: 600,
      url:
        "https://cdn.openfin.co/docs/javascript/stable/tutorial-Window.create.html",
      frame: true,
      autoShow: true
    };
    fin.Window.create(winOption)
      .then((win) => {
        // if you need to do anything with the window
      })
      .catch((reason) => {
        console.log("There was an error launching the window: " + reason);
      });
  };

  fin.desktop.main((userAppConfigArgs) => {
    openMainWindow();
  });

  let app = fin.Application.getCurrentSync();
  // If app is already running parameters are passed through the “run-requested” event
  app.addListener("run-requested", function (event) {
    openMainWindow();
  });
};

window.addEventListener("DOMContentLoaded", (event) => {
  initOpenFinParamListener();
});
