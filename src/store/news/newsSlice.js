import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchNews = createAsyncThunk(
    'fetchNews',
    async function(__,thunkApi){
      const response = await fetch(`https://gnews.io/api/v4/search?q=example&token=04cdffd0054542451b8e9262560cf210`)
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
        }
        
      const result = await response.json();
      return result
    }
  )


export const newsSlice = createSlice({
  name: 'news',
  err: false,
  errorMes: '',
  isLoading: true,
  initialState: {
    articleList: []
  },
  reducers: {
   loading:(state) => {
    state.isLoading = true
    },

  },  extraReducers:{
    // не работает finally
    // [fetchNews.finally]:(state)=>{
    //     console.log("sdvs")
    //     state.isLoading = false
    //     console.log(state.isLoading)
    // },
    
    [fetchNews.fulfilled]:(state,action)=>{
      state.articleList = action.payload.articles
      state.isLoading = false
    },
    [fetchNews.rejected]:(state, action)=>{
        state.err = true
        state.errorMes = action.error.message
        state.isLoading = false
    }
   
}
})

export const {loading } = newsSlice.actions

export default newsSlice.reducer