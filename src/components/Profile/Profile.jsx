import React, { useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { toggleShowName } from '../../store/profile/profileSlice'



export default function Profile() {

    const showName = useSelector((state) => state.profile.showName)
    const name  = useSelector((state) => state.profile.name)
    const dispatch = useDispatch()

    
    const setShowName = useCallback(() => {
    dispatch(toggleShowName());
    }, [dispatch]);


    return (
    <div>
        <h4>Profile</h4>
        <input type="checkbox" checked={showName} value={showName} onChange={setShowName}/>
        <span>Show Name</span>
        {showName && <div>{name}</div>}
    </div>
    );
    }