import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null); // ✅ Default message

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://backend.vikram-blaxsquad.workers.dev/api/user/getpoem"
        );
        console.log("Response status:", response.status); // ✅ Log response status

        if (response.ok) {
          const result = await response.json();
          console.log("Fetched data:", result); // ✅ Log fetched data
          setData(result[0].text)
        } else {
          console.error("Error: Response not OK");
          setData("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setData("Error fetching data");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="bg-amber-400 p-4">{data}</h1>
    </>
  );
}

export default App;
