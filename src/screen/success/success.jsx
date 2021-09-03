import React from "react";
import { Card } from "react-bootstrap";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className='container'>
      <div className='success'>
        <Card className='success-card'>
          <div className='success-mark'>
            <GiCheckMark className='success-mark-icon' />
          </div>
          <div className='success-contain'>
            <h2 className=''>Successfull Order</h2>
            <h5> Thank you so much</h5>
          </div>
        </Card>
        <div className='end-button'>
          <Link to='/'>
            <div className='continue-home'>Continue Shopping</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
