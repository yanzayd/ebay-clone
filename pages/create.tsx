import React from "react";
import Header from "../components/Header";
import { useAddress, useContract } from "@thirdweb-dev/react";
import { Contract } from "ethers";

type Props = {};

function Create({}: Props) {
  const address = useAddress();
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT,
    "marketplace"
  );
  console.log(contract);
  return (
    <div>
      <Header />
    </div>
  );
}

export default Create;
