import React from 'react';
import { increment, resetSteps } from './actions';
import {connect, Connect} from 'react-redux';


const StepCounterComponent = ({steps, increment, resetSteps}) => {
  return (
    <div>
        <p> You've walked {steps} steps today!</p>
        <button onClick={increment} >Add a Step</button>
        <button onClick={resetSteps} >Reset Steps</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
    steps: state.counterStep.steps,
});

const mapDispatchToProps = {
    increment,
    resetSteps,
};

// export default StepCounterComponent

export default connect(mapStateToProps, mapDispatchToProps)(StepCounterComponent);