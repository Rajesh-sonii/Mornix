import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'
// import Sidemenu from "./components/sidemenu"
import Sidemenu from "./components/sidemenu"
import Home from "./pages/home"
import Login from "./pages/login";
import Create from "./pages/create";
import BankDetails from "./pages/bankDetails"
import TaskHistory from "./pages/taskHistory"
import MyReferList from "./pages/myReferList"
import CrdrBalance from "./pages/crdrBalance"
import UpdateProfile from "./pages/updateProfile"
import DataEntryTask from "./pages/dataEntryTask"
import ChangePassword from "./pages/changePassword"
import ViewLatestTask from "./pages/viewLatestTask"
import AddWithdrawReq from "./pages/addWithdrawReq"
import CaptchaEntryTask from "./pages/captchaEntryTask"
import UpcomingProjects from "./pages/upcomingProjects"
import SocialMediaEarning from "./pages/socialMediaEarning"
import ViewWithdrawTransaction from "./pages/viewWithdrawTransaction"


function App() {

  return (
      <Router>
        <Sidemenu />
        <Routes>
          <Route path="/user" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
          <Route path="/user/bankdetails" element={<BankDetails />} />
          <Route path="/user/taskhistory" element={<TaskHistory />} />
          <Route path="/user/myreferlist" element={<MyReferList />} />
          <Route path="/user/crdrbalance" element={<CrdrBalance />} />
          <Route path="/user/dataentrytask" element={<DataEntryTask />} />
          <Route path="/user/updateprofile" element={<UpdateProfile />} />
          <Route path="/user/changePassword" element={<ChangePassword />} />
          <Route path="/user/addwithdrawreq" element={<AddWithdrawReq />} />
          <Route path="/user/viewlatesttask" element={<ViewLatestTask />} />
          <Route path="/user/upcomingprojects" element={<UpcomingProjects />} />
          <Route path="/user/captchaentrytask" element={<CaptchaEntryTask />} />
          <Route path="/user/socialmediaearning" element={<SocialMediaEarning />} />
          <Route path="/user/viewwithdrawtransaction" element={<ViewWithdrawTransaction />} />
        </Routes>
      </Router>
  )
}

export default App
