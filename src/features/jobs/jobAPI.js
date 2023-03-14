import axios from '../../utils/axios';

export const getJobs = async ()=>{
    const response = await axios.get("/jobs");
    
    return response.data;
}

export const addJob = async (newJob)=>{
    const response  = await axios.post("/jobs", newJob);
    
    return response.data;
}

export const editJob =async (id, updatedJob)=>{
    const response = await axios.put(`/jobs/${id}`, updatedJob);
    console.log("res", response)
    return response.data;
}

export const deleteJob = async (id)=>{
    const response = await axios.delete(`/jobs/${id}`);
    
    return response.data;
}