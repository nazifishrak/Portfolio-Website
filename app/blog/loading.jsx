// loading page for nextjs
import React from 'react';

import { CircularProgress } from '@mui/material';


const Loading = () => {
    return (
        <div className="loading">
        {console.log('loading page')}
        <h1 className="text-white" >Loading...</h1>
        </div>
    );
    }
export default Loading;