import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchKey : "",
    jobType: '',
    sortType: ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchKey: (state, action)=>{
            state.searchKey = action.payload;
        },
        setJobType: (state,action)=>{
            state.jobType = action.payload;
        },
        setSortType: (state, action)=>{
            state.sortType = action.payload;
        }
    }
})
export default filterSlice.reducer;
export const {setSearchKey, setJobType, setSortType}  = filterSlice.actions;