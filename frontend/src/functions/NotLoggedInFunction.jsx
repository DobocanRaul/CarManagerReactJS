import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import GlobalContext from '../GlobalContext';
import {useContext} from 'react';
function NotLoggedInFunction(token) {
    if(token==""){
        return false;
    }
    else{
        return true;
    }
}

export default NotLoggedInFunction;