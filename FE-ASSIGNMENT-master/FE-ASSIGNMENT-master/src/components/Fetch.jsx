import React, { useState, useEffect } from "react";

export let myItems = [];
export const Fetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Error");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        const titles = data.map((item) => item.title);
        myItems.push(...titles);
        // console.log(myItems);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <h3>{error.message}</h3>
      ) : (
        <>
          <h1>API Data Fetcher</h1>
          <ul>
            {data.map((item) => (
              <li style={{ textAlign: "left" }} key={item.id}>
                {item.title}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
