import React from "react";
// import { Connect, connect } from "react-redux";
import { toggleLight } from "./actions";
import { useDispatch, useSelector } from "react-redux";

const RoomComponent = () => {
    const isLightOn = useSelector((state) => state.lightSwitch.isLightOn);
    const dispatch = useDispatch();
  return (
    <div>
        <p>The light is { isLightOn ?  'on': 'off'}</p>
        <button onClick={()=>dispatch(toggleLight())} >ToggleLight </button>
    </div>
  );
};

export default RoomComponent;

// const mapStateToProps = (state) => ({isLightOn: state.lightSwitch.isLightOn});

// const mapDispatchToProps = (state) => ({
//     toggleLight,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(RoomComponent);