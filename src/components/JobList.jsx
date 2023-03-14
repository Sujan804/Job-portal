import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../features/jobs/jobSlice";
import SingleJob from "./SingleJob";
const JobList = () => {
  const dispatch = useDispatch();
  const { jobs, isLoading, isError, error } = useSelector(
    (state) => state.jobs
  );
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);
  let content = null;
  if (isLoading) {
    content = <h1 style={{ color: "white" }}>loading...</h1>;
  }
  if (!isLoading && isError) {
    content = (
      <h1 style={{ color: "red" }}>{error ? error : "There was an error"}</h1>
    );
  }
  if (!isLoading && !isError && jobs?.length > 0) {
    content = jobs.map((job) => <SingleJob key={job.id} job={job} />);
  }
  return <div className="jobs-list ">{content}</div>;
};

export default JobList;
