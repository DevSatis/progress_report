import React from 'react';
import './CourseDetail.css';
import Reply from '@mui/icons-material/Reply';

const CourseDetail = () => {
  return (
    <div className='cDetails'>
        <div className='backButton dropdown'>
            <Reply />
        </div>
        <div className='courseName dropdown'>
            Bio 100
        </div>
        <select className='courseGroup dropdown'>
            <option value="rigatoni">Rigatoni</option>
            <option value="dave">Dave</option>
            <option value="pumpernickel">Pumpernickel</option>
            <option value="reeses">Reeses</option>
        </select>  
    </div>
  )
}

export default CourseDetail