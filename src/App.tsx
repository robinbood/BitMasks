import { useState } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState<string>("");
  const [newData, setNewData] = useState<{ city: string; GMT: string }[]>([]);
  const [ap, setAp] = useState<boolean>(false);
  const data: { city: string; GMT: string }[] = [
    { city: "Moscow", GMT: "+3" },
    { city: "Paris", GMT: "+2" },
    { city: "Berlin", GMT: "+2" },
    { city: "Brussels", GMT: "+2" },
    { city: "Amsterdam", GMT: "+2" },
    { city: "Rome", GMT: "+2" },
    { city: "London", GMT: "+1" },
    { city: "Dublin", GMT: "+1" },
    { city: "New York", GMT: "-4" },
    { city: "Washington", GMT: "-4" },
    { city: "Los Angeles", GMT: "-7" },
    { city: "Tokyo", GMT: "+9" },
    { city: "Beijing", GMT: "+8" },
    { city: "Mumbai", GMT: "+7" },
  ];

  const button = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const filtered = data.filter((item) => item.GMT === value);
    setNewData(filtered);
    setAp(true);
  };
  return (
    <>
      <div>
        {data.map((item) => (
          <div
            key={item.city}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <input type="checkbox" id="wtf" style={{ marginRight: "8px" }} />
            <label htmlFor="wtf">
              {item.city} (GMT{item.GMT})
            </label>
          </div>
        ))}
      </div>
      <div>
        <input type="text" onChange={({ target }) => setValue(target.value)} />
        <button onClick={button}>Search</button>
      </div>
      <div>
        {ap &&
          newData.map((item) => (
            <div key={item.city}>
              {item.city} (GMT{item.GMT})
            </div>
          ))}
      </div>
    </>
  );
};

export default App;
