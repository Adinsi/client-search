import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Condition from "./component/Form/condition";
import Forgetpassword from "./component/Form/forget_password";
import Formulaire from "./component/Form/Formulaire";
import Resetpassword from "./component/Form/resetpassword";

import Help from "./component/pages/help";
import Chat from "./component/pages/chat/chat";
import Home from "./component/pages/home/home";

import Notfound from "./component/pages/notfound";
// import Page404 from "./component/pages/page404";
import Editprofil from "./component/pages/profil/editprofil";
import Profil from "./component/pages/profil/profil";
import Search from "./component/pages/search/search";
import UserProfil from "./component/pages/search/userProfil";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setgetUsers } from "./features/user.reducers";
import Chats from "./component/pages/Chats";
import Chatsbox from "./component/pages/Chatsbox";

const App = () => {
  const dispatch = useDispatch();

  const sendRquest = async () => {
    const res = await axios.get(`${process.env.REACT_APP_URL_USER}/jwt`, {
      withCredentials: true,
    });
    // .catch(err => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    sendRquest().then((data) => {
      dispatch(setgetUsers(data.user));
    });
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Formulaire />} />
        {/* <Route path="/*" exact element={<Page404 />} /> */}
        <Route path="/profil" element={<Profil />} />
        <Route path="/edit_profil" element={<Editprofil />} />
        <Route path="/condtion_generale" element={<Condition />} />
        <Route path="/forget_password" element={<Forgetpassword />} />
        <Route path="/resetpassword/activate/:id" element={<Resetpassword />} />
        <Route path="/home" element={<Home />} />

        <Route path="/search" element={<Search />} />
        <Route path="/user_profil/:id" element={<UserProfil />} />
        <Route path="/chat-box/:id/:id" element={<Chatsbox />} />
        {/* <Route path="/message" element={<Chat />} /> */}
        <Route path="/message" element={<Chats />} />
        {/* <Route path="/help" element={<Help />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
