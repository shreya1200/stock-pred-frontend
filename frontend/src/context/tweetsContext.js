import { createContext, useState } from "react";

export const tweetsContext = createContext();
const TweetsContextProvider = (props) => {
  const [tweetsData, setTweetsData] = useState({
    items: ["Abc", "xyz", "jdsfh"],
  });
  return (
    <tweetsContext.Provider
      value={{ tweetsData: tweetsData, setTweetsData: setTweetsData }}
    >
      {props.children}
    </tweetsContext.Provider>
  );
};
export default TweetsContextProvider;
