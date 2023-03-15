import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setJobType } from "../features/filter/filterSlice";
const SideBar = () => {
  const [type, setType] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(type);
    dispatch(setJobType(type));
  }, [type, dispatch]);
  return (
    <div className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <button onClick={(e) => setType("")}>
              <a href="/jobs" className="main-menu menu-active lws-allJob">
                <i className="fa-solid fa-briefcase"></i> All Available Jobs
                <span></span>
              </a>
            </button>
            <ul className="space-y-6 lg:space-y-2 ">
              <li>
                <p className="sub-menu">
                  <i className="fa-solid fa-stop !text-[#FF5757]"></i>
                  <button onClick={(e) => setType("Internship")}>
                    Internship
                  </button>
                </p>
              </li>
              <li>
                <p className="sub-menu">
                  <i className="fa-solid fa-stop !text-[#FF8A00]"></i>
                  <button
                    onClick={(e) => {
                      setType("Full Time");
                    }}
                  >
                    {" "}
                    Full Time
                  </button>
                </p>
              </li>
              <li>
                <p className="sub-menu">
                  <i className="fa-solid fa-stop !text-[#56E5C4]"></i>
                  <button
                    onClick={(e) => {
                      setType("Remote");
                    }}
                  >
                    Remote
                  </button>
                </p>
              </li>
            </ul>
          </li>
          <li>
            <Link to={"/add-job"} className="main-menu lws-AddJob">
              <i className="fa-solid fa-file-circle-plus"></i>
              <span>Add NewJob</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
