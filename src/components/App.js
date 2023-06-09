// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [dogPic, setDogPic] = useState(null);

  useEffect(() => {
    const dogFetch = () => fetch("https://dog.ceo/api/breeds/image/random").then((r) => r.json());
    async function startFetching() {
      const dogData = await dogFetch();
      setDogPic(dogData.message);
      setIsLoading(false);
    }
    startFetching();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return <img src={dogPic} alt="A Random Dog"></img>;
}

export default App;
