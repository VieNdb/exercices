import React from "react";
import { Platform } from "../../types/Platform";

const PlatformPage: React.FC = (): JSX.Element => {
  const [data, setData] = React.useState<Platform[]>([]);
  React.useEffect(() => {
    fetch("https://videogames-sparta.herokuapp.com/platforms", { headers: { accept: "application/json" } }).then(
      async (response) => {
        const result = await response.json();
        setData(result);
      },
    );
  }, []);
  console.log(data);
  return (
    <>
      <>
        <ul className="list-group">
          {data.map((item, index) => (
            <li className="list-group-item" key={index}>
              {item.games[1].name}
            </li>
          ))}
        </ul>
      </>
      {/* <>
        <ul className="list-group">
          {data.filter((item, index) => (
            <li className="list-group-item" key={index}>
              {item.games[index].name}
            </li>
          ))}
        </ul>
      </> */}
    </>
  );
};

export default PlatformPage;
