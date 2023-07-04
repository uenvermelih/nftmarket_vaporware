'use client'
import { Avatar, Box, Flex, Heading, Link, Text, Container } from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import NextLink from "next/link";

export function Navbar() {

    const address = useAddress();
    return(        

        <Box maxW={"1200px"} m={"auto"} py={"10px"} px={"40px"}>

            <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Link as={NextLink} href="/">
                    <Heading>VaporWare 💨</Heading>
                </Link>

                <Flex direction={"row"}>
                    <Link as={NextLink} href="/buy" mx={2.5}>
                        <Text>Buy 💸</Text>
                    </Link>       
                    <Link as={NextLink} href="/sell" mx={2.5}>
                        <Text>Sell 💰</Text>
                    </Link>      
                    <Link href="https://nft-mint-omlgchpwg-uenvermelih.vercel.app/" mx={2.5}>
                        <Text>Mint ➡️</Text>
                    </Link>          
                </Flex>
                <Flex dir={"row"} alignItems={"center"}>
                    <ConnectWallet/>

                    {address && (
                        <Link as={NextLink} href={`/profile/${address}`}>
                        <Avatar src="https://bit.ly/broken-link" ml={"20px"}/>
                        </Link>
                    )}

                </Flex>

            </Flex>
        </Box>
        
    )
}