import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchNews} from '../../store/news/newsSlice'
import CircularProgress from '@mui/material/CircularProgress';
import {loading} from '../../store/news/newsSlice'

export default function News() {

    const news  = useSelector((state) => state.news.articleList)
    const isLoading = useSelector((state) => state.news.isLoading)
    const err = useSelector((state) => state.news.err)
    const errorMes = useSelector((state) => state.news.errorMes)
    const dispatch = useDispatch()


    const addNews = () => {
        dispatch(loading())
        dispatch(fetchNews())
    }

    useEffect(()=>{
        dispatch(fetchNews())
    },[])

    return (
    <div>
        <h4>News</h4>
        <button onClick={addNews}>Подгрузить новости</button>
        { isLoading ?? <CircularProgress />}


        {err ? <p>{errorMes}</p> :
         news.map((item, index) => (
                <div key={index}>
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                </div>
            ))}
      
    </div>
    );
    }