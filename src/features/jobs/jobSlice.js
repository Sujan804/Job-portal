import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addJob, deleteJob, editJob, getJobs } from './jobAPI';

const initialState = {
    jobs : [],
    isLoading: false,
    isError: false,
    error: "",
    isEditing: false,
    editing: {}
}

export const fetchJobs = createAsyncThunk("jobs/fetchJob", 
    async ()=>{
        const jobs = await getJobs();
        return jobs;
    }
)

export const createJob = createAsyncThunk("jobs/addJob",
    async (data) =>{
        const job = await addJob(data)

        return job;
    }
)

export const changeJob = createAsyncThunk("jobs/changeJob",
    async ({id, data}) =>{
        const job = await editJob(id, data);
        return job;
    }
)

export const removeJob = createAsyncThunk("jobs/removeJob",
    async (id) =>{
        const job = await deleteJob(id);
        return job;
    }
)



const jobSlice =  createSlice({
    name: "jobs",
    initialState,
    reducers: {
        editActive: (state, action)=>{
            state.editing = action.payload;
            state.isEditing = true;
        },
        editInactve: (state, action)=>{
            state.isEditing = false;
            state.editing = {};
        }
    },

    extraReducers : (builder)=>{
        builder
        .addCase(fetchJobs.pending, (state,action)=>{
            state.isLoading  = true;
            state.isError = false;
        })
        .addCase(fetchJobs.fulfilled, (state, action)=>{
            state.isError = false;
            state.isLoading = false;
            state.jobs = action.payload;
        })
        .addCase(fetchJobs.rejected, (state, action)=>{
            state.error = action.error?.message;
            state.isLoading = false;
            state.isError = true;
            state.jobs = []
        })
        .addCase(createJob.pending, (state)=>{
            state.isLoading  = true;
            state.isError = false;
        })
        .addCase(createJob.fulfilled, (state, action)=>{
            state.isLoading  = false;
            state.isError = false;
            state.jobs.push(action.payload);
        })
        .addCase(createJob.rejected, (state, action)=>{
            state.error = action.error?.message;
            state.isLoading = false;
            state.isError = true;
        })
        .addCase(changeJob.pending, (state, action)=>{
            state.isLoading  = true;
            state.isError = false;
        })
        .addCase(changeJob.fulfilled, (state, action)=>{
            state.isLoading  = false;
            state.isError = false;
            console.log("action", action.payload)
            const indexToUpdate = state.jobs.findIndex(
                (j) => j.id === action.payload.id
            );

            state.jobs[indexToUpdate] = action.payload;
        })
        .addCase(changeJob.rejected, (state, action)=>{
            state.error = action.error?.message;
            state.isLoading = false;
            state.isError = true;
        })
        .addCase(removeJob.pending, (state, action)=>{
            state.isLoading  = true;
            state.isError = false;
        })
        .addCase(removeJob.fulfilled, (state, action)=>{
           
            state.isLoading  = false;
            state.isError = false;
            console.log("id",action.meta)
            state.jobs = state.jobs.filter((j)=>j.id !==action.meta.arg)
        })
        .addCase(removeJob.rejected, (state, action)=>{
            state.error = action.error?.message;
            state.isLoading = false;
            state.isError = true;
        })
    }

})
export default jobSlice.reducer;
export const {editActive, editInactve} = jobSlice.actions;