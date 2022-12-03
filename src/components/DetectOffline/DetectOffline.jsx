import React from 'react'
import { Offline, Online } from "react-detect-offline";
import Icon from "../../constants/Icons";
import './Offline.scss'
function DetectOffline() {
    return (
        <Offline>
                <div className='offiline shadow-lg'>
                <h5><Icon.offline/> You are currently offline</h5>
        </div>
            </Offline>
    )
}

export default DetectOffline
