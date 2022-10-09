import { BrowserRouter, Route, Routes   } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./layouts";
import BookSection from "./components/BookSection";
import AboutSection from "./components/AboutSection";
import FooterSection from "./components/FooterSection";
import Login from "./components/Login";
function App() {
  let [data, setData] = useState([""]);
  let [users, setUsers] = useState([""]);
  let [activeUsr, setActiveUsr] = useState(null);
//activeUsr

  useEffect(() => {
    let myData = async () => {
      let data = await fetch("http://localhost:3009/books");
      let finalData = await data.json();

      setData(finalData);
    };
    myData().catch(console.error);
  }, []);

  useEffect(() => {
    let myData = async () => {
      let data = await fetch("http://localhost:3005/users");
      let finalData = await data.json();

      setUsers(finalData);
    };
    myData().catch(console.error);
  }, []);

  let usrGetter = (usrData) => {
    setActiveUsr(usrData)
 
    
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Layout activeUsr={activeUsr}/>
        <Routes>
          <Route index path="/" element={<BookSection data={data} />} />
          <Route path="/shop" element={<BookSection data={data} />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact" element={<FooterSection />} />
          <Route path="/login" element={<Login usrGetter={usrGetter} users={users} />} />

  

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
