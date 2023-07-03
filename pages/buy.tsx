import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import NFTGrid from "../components/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/addresses";
import { useContract, useNFTs } from "@thirdweb-dev/react"


export default function Buy() {
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const { data, isLoading } = useNFTs(contract);

    

    console.log(data)
    console.log(contract)
    return(
        <Container maxW={"1200px"} p={5}>
            <Heading>Buy NFT's</Heading>
            <Text>Browse and buy NFT's from this collection</Text>


            
            <NFTGrid
            isLoading={isLoading}
            data={data}
            emptyText={"no NFT's found"}
            />

        </Container>
    )
}