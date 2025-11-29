import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();

  console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);
   
  return (
    <div className="space-y-2 p-5">
      <h2 className="text-4xl text-green-400">Payment Successful</h2>
      <p className="text-xl font-bold">
        Your TransactionId:{" "}
        <span className="text-lg font-bold text-teal-800">
          {paymentInfo.transactionId}
        </span>
      </p>
      <p className="text-xl font-bold">
        Your Parcel Tracking id:{" "}
        <span className="text-lg font-bold text-teal-800">
          {paymentInfo.trackingId}
        </span>
      </p>
    </div>
  );
};

export default PaymentSuccess;
