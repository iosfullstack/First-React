import React from "react";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
// class Nerdyeye extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello</h1>
//       </div>
//     );
//   }
// }

const App = () => {
  return (
    <div>
      <Navbar />
      <MainContent/>
    </div>
  );
}

export default App;