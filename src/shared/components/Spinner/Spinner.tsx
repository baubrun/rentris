import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import {Rings} from "react-loader-spinner"
import { ISpinner } from "../../models/spinner";

const Spinner: React.FC<ISpinner> = (props) => {
  const { show } = props;

  return show ? (
    <div className="spinner">
      <Backdrop open={show}>
        <Rings
          color="#82b1ff"
          height={100}
          width={100}
        />
      </Backdrop>
    </div>
  ) : null;
};

export default Spinner;
