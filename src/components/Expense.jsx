import React from 'react'
import ProgressBar from './ProgressBar'
import './Expense.css'
const Expense = () => {

    const data =[
        {
            day:"Mon",
            val:25
        },
        {
            day:"Tue",
            val:60
        },
        {
            day:"Wed",
            val:90
        },
        {
            day:"Thu",
            val:45
        },
        {
            day:"Fri",
            val:30
        },
        {
            day:"Sat",
            val:80
        },
        {
            day:"Sun",
            val:70
        }]

  return (
    <div className='expense-bar-container'>
        {/* <h1>Weekly Activity</h1> */}
      { data.map((val)=><ProgressBar day={val.day} value={val.val+"%"}/>)}
    </div>
  )
}

export default Expense