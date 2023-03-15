import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../features/jobs/jobSlice";
import SingleJob from "./SingleJob";
const JobList = () => {
  const dispatch = useDispatch();
  const { jobs, isLoading, isError, error } = useSelector(
    (state) => state.jobs
  );
  const { searchKey, jobType, sortType } = useSelector((state) => state.filter);
  useEffect(() => {
    dispatch(fetchJobs());
  }, []);
  let content = null;
  console.log(searchKey, jobType, sortType);
  if (isLoading) {
    content = <h1 style={{ color: "white" }}>loading...</h1>;
  }
  if (!isLoading && isError) {
    content = (
      <h1 style={{ color: "red" }}>{error ? error : "There was an error"}</h1>
    );
  }
  if (!isLoading && !isError && jobs?.length > 0) {
    const filteredJob = jobs
      .filter((job) => {
        if (jobType === "") {
          return true;
        }
        return jobType === job.type;
      })
      .filter((job) => {
        const jobTitle = job.title.toLowerCase();
        const index = jobTitle.indexOf(searchKey.toLowerCase());
        if (index > -1) {
          return true;
        }
        return false;
      });
    if (sortType === "Asc") {
      filteredJob.sort((a, b) => a.salary - b.salary);
    } else if (sortType === "Dsc") {
      filteredJob.sort((a, b) => b.salary - a.salary);
    }

    content = filteredJob.map((job) => <SingleJob key={job.id} job={job} />);
  }
  return <div className="jobs-list ">{content}</div>;
};

export default JobList;
