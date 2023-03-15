import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchKey, setSortType } from "../features/filter/filterSlice";
import JobList from "./JobList";

const HomePage = () => {
  const [key, setKey] = useState("");
  const [sort, setSort] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(key, sort);
    dispatch(setSearchKey(key));
    dispatch(setSortType(sort));
  }, [key, sort, dispatch]);
  return (
    <div className="lg:pl-[14rem]  mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
          <h1 className="section-title">All Available Jobs</h1>
          <div className="flex gap-4">
            <div className="search-field group flex-1">
              <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
              <input
                type="text"
                placeholder="Search Job"
                className="search-input"
                id="lws-searchJob"
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
            </div>
            <select
              id="lws-sort"
              name="sort"
              className="flex-1"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value={"Def"}>Default</option>
              <option value={"Asc"}>Salary (Low to High)</option>
              <option value={"Dsc"}>Salary (High to Low)</option>
            </select>
          </div>
        </div>

        <JobList />
      </main>
    </div>
  );
};

export default HomePage;
