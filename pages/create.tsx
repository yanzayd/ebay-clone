import React from "react";
import Header from "../components/Header";
import {
  useAddress,
  useContract,
  MediaRenderer,
  useNetwork,
  useNetworkMismatch,
  useOwnedNFTs,
  useCreateDirectListing,
  useCreateAuctionListing,
} from "@thirdweb-dev/react";
import { Contract } from "ethers";

type Props = {};

function Create({}: Props) {
  const address = useAddress();

  const { contract } = useContract(
    process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT,
    "marketplace"
  );

  const { contract: collectionContract } = useContract(
    process.env.NEXT_PUBLIC_COLLECTION_CONTRACT,
    "nft-collection"
  );

  const ownedNfts = useOwnedNFTs(collectionContract, address);

  //   console.log("the address is:  ", address);
  //   console.log("the owened Nfts: ", ownedNfts);
  return (
    <div>
      <Header />

      <main className="max-w-6xl mx-auto p-10 pt-2">
        <h1 className="text-2xl font-bold">LIst an Item</h1>
        <h2 className="text-xl font-semibold pt-5">
          Select an Item you would like to Sell
        </h2>

        <hr className="mb-5" />

        <p>Below you will find the NFT's you own in ypur wallet</p>

        <div></div>
      </main>
    </div>
  );
}

export default Create;
