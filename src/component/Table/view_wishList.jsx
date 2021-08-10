import React from "react";
import {BiCart} from "react-icons/bi";
import {RiDeleteBin6Line} from "react-icons/ri";

import {Link} from "react-router-dom";
const View_wishList = () => {
  const transactions = [
    {
      orderId:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFelP1jc1jHM8vMMZA5MB-nUjuX5BZYf25Mw&usqp=CAU",
      billingName: "Neal Matthews",
      Date: "07 Oct, 2019",
      total: "$400",
      badgeClass: "success",
      paymentStatus: "Paid",
    },
    {
      orderId:
        "https://www.patanjaliayurved.net/assets/product_images/400x300/1548324100oats1kg400-300.png",
      billingName: "Jamal Burnett",
      Date: "07 Oct, 2019",
      total: "$380",
      badgeClass: "danger",
      paymentStatus: "Chargeback",
    },
  ];
  return (
    <div className="table-responsive">
      <table className="table align-middle table-nowrap mb-0">
        <thead className="table">
          <tr>
            <th className="align-middle text-center">Image</th>
            <th className="align-middle text-center">Product Name</th>
            <th className="align-middle text-center">Price</th>
            <th className="align-middle text-center">Availability</th>
            <th className="align-middle text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, key) => (
            <tr key={"_tr_" + key}>
              <td className="text-center image_cell">
                <img
                  className="wish_list_image"
                  src={transaction.orderId}
                  alt={transaction.billingName}
                />
              </td>
              <td className="text-center">{transaction.billingName}</td>
              <td className="text-center">{transaction.Date}</td>
              <td className="text-center">{transaction.total}</td>

              <td className="text-center">
                <BiCart className="action-icon" />
                <RiDeleteBin6Line className="action-icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default View_wishList;
