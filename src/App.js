import React from "react";
import Chart from "./Chart";
function App() {
  // const [res, setRes] = useState([]);

  // let socket = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

  // useEffect(() => {
  //   socket.onmessage = function (event) {
  //     setRes(JSON.parse(event.data));
  //   };
  // }, [socket]);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Challenge</h2>
      <Chart />
    </>
  );
}

export default App;
