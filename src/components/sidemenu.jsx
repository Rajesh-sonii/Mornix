import "../styles/sidemenu.css";
// import {toggleSidebar} from "../scripts/sidemenu";
import { ImProfile } from "react-icons/im";
import { HiMiniEye } from "react-icons/hi2";
import { RiBankFill } from "react-icons/ri";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaArrowsRotate } from "react-icons/fa6";
import { PiHandWithdrawBold } from "react-icons/pi";
import { MdDownload } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Sidemenu = () => {
  return (
    <>
      <div className="ps-3 sidebar align-items-center justify-content-center">
        <img className="rounded-circle ms-5" style={{ height: "100px", width: "100px" }} src="https://i.pinimg.com/474x/3d/54/c8/3d54c8ccff9a12f747adbe115b3fd459.jpg" alt="logo" />
        <div className="container d-flex flex-row align-items-center gap-2 mb-4"></div>
        {/* </div> */}
        <div className="container d-flex flex-row align-items-center gap-2 mb-4">
          <img className="rounded-circle" style={{ height: "50px", width: "50px" }} src="https://static.vecteezy.com/system/resources/previews/036/280/650/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg" alt="profile-image" />
          <div className="m-0 p-0">
            <p className="m-0 p-0">Rajesh Soni</p>
            <p className="m-0 p-2 badge text-bg-secondary">LSDKFJSD</p>
          </div>
        </div>

        <p className="px-2"><NavLink to="/user"><IoMdHome /> User Dashboard</NavLink></p>

        <p className="flex-column gap-1">
          <a className="bg-transparent p-0 px-2" data-bs-toggle="collapse" href="#collapseProfile" role="button" aria-expanded="false" aria-controls="collapseExample">
          <ImProfile /> Profile <IoIosArrowDown />
          </a>
        </p>
        <div className="collapse bg-dark" id="collapseProfile">
          {/* <div className="card card-body bg-dark">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
          </div> */}
          <ul>
            <li><NavLink to="/user/updateprofile">Update Profile</NavLink></li>
            <li><NavLink to="/user/changePassword">Change Password</NavLink></li>
          </ul>
        </div>

        <p className="px-2"><NavLink to="/user/bankdetails"><RiBankFill/> Payment Details</NavLink></p>

        <p className="flex-column gap-1">
          <a className="bg-transparent p-0 px-2" data-bs-toggle="collapse" href="#collapseTask" role="button" aria-expanded="false" aria-controls="collapseExample">
          <HiMiniEye /> My Task <IoIosArrowDown />
          </a>
        </p>
        <div className="collapse bg-dark" id="collapseTask">
          {/* <div className="card card-body bg-dark">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
          </div> */}
          <ul>
            <li><NavLink to="/user/viewlatesttask">Ad. View Task</NavLink></li>
            <li><NavLink to="/user/dataentrytask">Data Entry</NavLink></li>
            <li><NavLink to="/user/captchaentrytask">Captcha Data Entry</NavLink></li>
            <li><NavLink to="/user/socialmediaearning">Social Media Earning</NavLink></li>
            <li><NavLink to="/user/taskhistory">Task History</NavLink></li>
          </ul>
        </div>

        <p className="flex-column gap-1">
          <a className="bg-transparent p-0 px-2" data-bs-toggle="collapse" href="#collapseIncome" role="button" aria-expanded="false" aria-controls="collapseExample">
          <FaIndianRupeeSign /> My Income <IoIosArrowDown />
          </a>
        </p>
        <div className="collapse bg-dark" id="collapseIncome">
          {/* <div className="card card-body bg-dark">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
          </div> */}
          <ul>
            <li><NavLink to="/user/myreferlist">Refer Direct Income</NavLink></li>
          </ul>
        </div>

        <p className="flex-column gap-1">
          <a className="bg-transparent p-0 px-2" data-bs-toggle="collapse" href="#collapseTransaction" role="button" aria-expanded="false" aria-controls="collapseExample">
          <FaArrowsRotate /> All Transaction <IoIosArrowDown />
          </a>
        </p>
        <div className="collapse bg-dark" id="collapseTransaction">
          {/* <div className="card card-body bg-dark">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
          </div> */}
          <ul>
            <li><NavLink to="/user/crdrbalance">Debit-Credit History</NavLink></li>
          </ul>
        </div>

        <p className="flex-column gap-1">
          <a className="bg-transparent p-0 px-2" data-bs-toggle="collapse" href="#collapseWithdraw" role="button" aria-expanded="false" aria-controls="collapseExample">
          <PiHandWithdrawBold /> Withdrawn <IoIosArrowDown />
          </a>
        </p>
        <div className="collapse bg-dark" id="collapseWithdraw">
          {/* <div className="card card-body bg-dark">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
          </div> */}
          <ul>
            <li><NavLink to="/user/addwithdrawreq">Add Request</NavLink></li>
            <li><NavLink to="/user/viewwithdrawtransaction">View Transaction</NavLink></li>
          </ul>
        </div>

        <p className="flex-column gap-1">
          <a className="bg-transparent p-0 px-2" data-bs-toggle="collapse" href="#collapseDownload" role="button" aria-expanded="false" aria-controls="collapseExample">
          <MdDownload /> Download <IoIosArrowDown />
          </a>
        </p>
        <div className="collapse bg-dark p-0 m-0" id="collapseDownload">
        <ul>
            <li><NavLink>Download Broture</NavLink></li>
          </ul>
        </div>
        <p className="px-2"><NavLink to="/user/upcomingprojects"><FaCartArrowDown /> Upcoming Projects</NavLink></p>
      </div>
    </>
  )
}

export default Sidemenu