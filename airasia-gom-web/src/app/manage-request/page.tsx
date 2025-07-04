"use client";

import React, { useState, useEffect } from "react";
import ManageRequestSearchComponent from "./components/ManageRequestSearch";
import ManageRequestTagButtonComponent from "./components/ManageRequestTagButton";
import RequestTable from "./components/ManageRequestTable";
import manageRequestData from "../test-data/manageRequest.json";
import { requestStatusFilterEnum } from "./helper/requestStatus";
import type { ISearchParams, IManageRequestData } from "./types/page";

export default function ManageRequest() {
  const [searchParams, setSearchParams] = useState<ISearchParams>({
    origin: "",
    destination: "",
    flightNumber: "",
    referenceId: "",
    departureDate: "",
    tripType: "",
    status: "",
  });

  const [requestStatus, setRequestStatus] = useState<string>(
    requestStatusFilterEnum.all
  );
  const [manageRequestList, setManageRequestList] =
    useState<IManageRequestData[]>();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchParams);
  };

  const handleValue = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    setManageRequestList([]);
    if (requestStatus === requestStatusFilterEnum.all) {
      setManageRequestList([...manageRequestData]);
    } else {
      const items = manageRequestData?.filter(
        (item) => item.status === requestStatus
      );
      setManageRequestList([...items]);
    }
  }, [requestStatus]);

  return (
    <div className="p-10">
      <h1 className="text-red-600 font-bold">List of Request Quotation</h1>
      <ManageRequestSearchComponent
        searchParams={searchParams}
        handleValue={handleValue}
        handleSubmit={handleSubmit}
      />
      <ManageRequestTagButtonComponent
        status={requestStatus}
        setStatus={setRequestStatus}
      />
      {manageRequestList && <RequestTable manageRequest={manageRequestList} />}
    </div>
  );
}
