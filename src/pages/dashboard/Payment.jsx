import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../customHook/useAxiosSecure";
import useAuthHook from "../../customHook/useAuthHook";

const Payment = () => {
  const { id } = useParams();
  const { user } = useAuthHook();
  const axiosSecure = useAxiosSecure();
  const {
    data = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["payment", id],
    queryFn: async () => {
      const result = await axiosSecure.get(`/payment/${id}`);
      return result.data;
    },
  });
  console.log(data);

  async function handlePayment() {
    const paymentData = {
      cost: data.price,
      bookName: data.title,
      bookId: data.bookId,
      senderEmail: data.email,
    };
    const result = await axiosSecure.post(
      "/payment-checkout-session",
      paymentData
    );

    console.log(result.data);
    window.location.href = result.data.url;
  }

  return (
    <div>
      <button
        className="bg-amber-100 p-4 rounded-2xl shadow"
        onClick={handlePayment}
      >
        pay tk {data.price}
      </button>
    </div>
  );
};

export default Payment;
