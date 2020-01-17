import React from "react";

const useAddToHomescreenPrompt = () => {
  const [prompt, setState] = React.useState(null);

  const promptToInstall = () => {
    if (prompt) {
      return prompt.prompt();
    }
    return Promise.reject(new Error('Tried installing before browser sent "beforeinstallprompt" event'));
  };

  React.useEffect(() => {

    const setFromEvent = e => {
      e.preventDefault();
      setState(e)
    };

    window.addEventListener("beforeinstallprompt", setFromEvent);
    return () => {
      window.removeEventListener("beforeinstallprompt");
    };
  }, []);

  return [prompt, promptToInstall]

};

export default useAddToHomescreenPrompt;