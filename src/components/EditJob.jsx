import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeJob, createJob } from "../features/jobs/jobSlice";

const EditJob = () => {
  const { isEditing, editing } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadline] = useState("");

  const [editMode, setEditMode] = useState(false);

  const handleAddJob = (e) => {
    e.preventDefault();
    dispatch(createJob({ title, type, salary, deadline }));
    reset();
  };

  const handleUpdateJob = (e) => {
    e.preventDefault();
    console.log(title, type, salary, deadline);
    dispatch(
      changeJob({
        id: editing?.id,
        data: {
          title,
          type,
          salary,
          deadline,
        },
      })
    );
    setEditMode(false);
    reset();
  };
  const reset = () => {
    setTitle("");
    setType("");
    setSalary("");
    setDeadline("");
  };
  useEffect(() => {
    const { title, salary, type, deadline } = editing || {};
    if (isEditing) {
      setEditMode(true);
      setTitle(title);
      setType(type);
      setSalary(salary);
      setDeadline(deadline);
    } else {
      setEditMode(false);
      reset();
    }
  }, []);
  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center section-title">
          {isEditing ? "Edit" : "Add"} Job
        </h1>

        <div className="max-w-3xl mx-auto">
          <form
            className="space-y-6"
            onSubmit={editMode ? handleUpdateJob : handleAddJob}
          >
            <div className="fieldContainer">
              <label className="text-sm font-medium text-slate-300">
                Job Title
              </label>
              <select
                id="lwsJobTitle"
                name="lwsJobTitle"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              >
                <option value="" hidden defaultValue={"Software Engineer"}>
                  Select Job
                </option>
                <option value={"Software Engineer"}>Software Engineer</option>
                <option value={"Software Developer"}>Software Developer</option>
                <option value={"Full Stack Developer"}>
                  Full Stack Developer
                </option>
                <option value={"MERN Stack Developer"}>
                  MERN Stack Developer
                </option>
                <option value={"DevOps Engineer<"}>DevOps Engineer</option>
                <option value={"QA Engineer"}>QA Engineer</option>
                <option value={""}>Product Manager</option>
                <option value={"Product Manager"}>Social Media Manager</option>
                <option value={"Senior Executive"}>Senior Executive</option>
                <option value={"Junior Executive"}>Junior Executive</option>
                <option value={"Android App Developer"}>
                  Android App Developer
                </option>
                <option value={"IOS App Developer"}>IOS App Developer</option>
                <option value={"Frontend Developer"}>Frontend Developer</option>
                <option value={"Frontend Engineer"}>Frontend Engineer</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label>Job Type</label>
              <select
                id="lwsJobType"
                name="lwsJobType"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="" hidden defaultChecked={"Full Time"}>
                  Select Job Type
                </option>
                <option value={"Full Time"}>Full Time</option>
                <option value={"Internship"}>Internship</option>
                <option value={"Remote"}>Remote</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label>Salary</label>
              <div className="flex border rounded-md shadow-sm border-slate-600">
                <span className="input-tag">BDT</span>
                <input
                  type="number"
                  name="lwsJobSalary"
                  id="lwsJobSalary"
                  required
                  className="!rounded-l-none !border-0"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
            </div>

            <div className="fieldContainer">
              <label>Deadline</label>
              <input
                type="date"
                name="lwsJobDeadline"
                id="lwsJobDeadline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                required
              />
            </div>

            <div className="text-right">
              <input
                type="submit"
                className="lws-submit cursor-pointer btn btn-primary w-fit"
                value={isEditing ? "Edit" : "Add"}
              ></input>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditJob;
