import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListStatsState } from '../todoAtom'

const TodoListStats = () => {
    const {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted
    } = useRecoilValue(todoListStatsState);

    const formattedPercentCompleted = Math.round(percentCompleted * 100)
    return (
        <ul>
            <li>Totla items : {totalNum}</li>
            <li>Items completed : {totalCompletedNum}</li>
            <li>Itmes not completed : {totalUncompletedNum}</li>
            <li>Percent not completed : {formattedPercentCompleted}</li>
        </ul>
    )
}

export default TodoListStats
