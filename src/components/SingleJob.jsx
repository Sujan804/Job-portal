import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editActive, removeJob } from "../features/jobs/jobSlice";
const SingleJob = ({ job }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleEdit = () => {
    dispatch(editActive(job));
    navigate("/update-job");
  };
  useEffect(() => {}, [job]);
  const handleDelete = () => {
    dispatch(removeJob(job.id));
  };
  let color = null;
  if (job.type === "Internship") {
    color = "!text-[#FF5757]";
  } else if (job.type === "Remote") {
    color = "!text-[#56E5C4]";
  } else {
    color = "!text-[#FF8A00]";
  }
  return (
    <div className="job">
      <div className="flex-1 min-w-0">
        <h2 className="lws-title">{job.title}</h2>
        <div className="job-footers">
          <div className="lws-type">
            <i className={`fa-solid fa-stop ${color} text-lg mr-1.5`}></i>
            {job.type}
          </div>
          <div className="lws-salary">
            <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
            BDT {job.salary}
          </div>
          <div className="lws-deadline">
            <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
            Closing on {job.deadline}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="hidden sm:block">
          <button
            type="button"
            className="lws-edit btn btn-primary"
            onClick={handleEdit}
          >
            <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
            Edit
          </button>
        </span>

        <span className="sm:ml-3">
          <button
            type="button"
            className="lws-delete btn btn-danger "
            onClick={handleDelete}
          >
            <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
            Delete
          </button>
        </span>
      </div>
    </div>
  );
};

export default SingleJob;
