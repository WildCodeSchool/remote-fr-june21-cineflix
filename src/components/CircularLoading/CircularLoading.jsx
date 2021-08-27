import React from 'react';
import "./CircularLoading.css";
import { CircularProgress } from "@material-ui/core";


const CircularLoading = () => {
    return (
        <div className="circle">
            <CircularProgress />
        </div>
    );
};

export default CircularLoading;