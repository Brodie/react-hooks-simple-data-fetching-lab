// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [dogPic, setDogPic] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((doggyPic) => {
        setDogPic(doggyPic.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return <img src={dogPic} alt="A Random Dog"></img>;
}

export default App;
