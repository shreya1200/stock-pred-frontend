import { useState } from "react";
import "./CustomListView.css"; //TODO Confirm path to the file

export default function CustomListView(props) {
  const [timedOut, setTimedOut] = useState(false);

  setTimeout(() => {
    setTimedOut(true);
    console.log("Timed out");
  }, 500000);

  return (
    <div
      style={{
        color: "white",
        marginInline: "1rem",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2 style={{ marginInline: "1rem" }}>{props.title}</h2>
      {timedOut ? (
        props.items.length === 0 ? (
          <div style={{ marginInline: "10rem" }}>No Data</div>
        ) : (
          <div className="textbar">
            {props.items.map((el) => {
              return (
                <div className="textitem-holder">
                  <p style={{ wordWrap: "break-word" }}>{el}</p>
                </div>
              );
            })}
          </div>
        )
      ) : (
        <div className="loading">&nbsp;</div>
      )}
    </div>
  );
}
