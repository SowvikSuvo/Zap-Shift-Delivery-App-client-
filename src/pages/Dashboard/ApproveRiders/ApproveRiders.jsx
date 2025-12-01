import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashCan, FaUserCheck } from "react-icons/fa6";
import { IoPersonRemoveSharp } from "react-icons/io5";
import Swal from "sweetalert2";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const updateRiderStatus = (rider, status) => {
    const updateInfo = { status: status, email: rider.email };
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Rider status is set to ${status}.`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const handleRiderDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "This rider information will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/riders/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            // refresh the data ui
            refetch();
            Swal.fire({
              title: "Rider Deleted!",
              text: "The rider has been successfully removed.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const handleApproval = (rider) => {
    updateRiderStatus(rider, "approved");
  };

  const handleRejection = (rider) => {
    updateRiderStatus(rider, " reject");
  };
  return (
    <div>
      <h2 className="text-5xl text-center my-8 font-semibold">
        Riders pending Approval: {riders.length}{" "}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Riders Name</th>
              <th>Email</th>
              <th>NID</th>
              <th>District</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>{rider.nid}</td>
                <td>{rider.district}</td>
                <td>
                  <p
                    className={`${
                      rider.status === "approved"
                        ? "text-green-600 font-semibold"
                        : rider.status === "pending"
                        ? "text-orange-500 font-semibold"
                        : "text-red-500 font-semibold"
                    }`}
                  >
                    {rider.status}
                  </p>
                </td>
                <td>
                  <button onClick={() => handleApproval(rider)} className="btn">
                    <FaUserCheck></FaUserCheck>
                  </button>
                  <button
                    onClick={() => handleRejection(rider)}
                    className="btn"
                  >
                    <IoPersonRemoveSharp />
                  </button>
                  <button
                    onClick={() => handleRiderDelete(rider._id)}
                    className="btn"
                  >
                    <FaTrashCan></FaTrashCan>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveRiders;
