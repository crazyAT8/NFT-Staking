"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StakedNFTs } from "./staked-nfts"

// Mock data for NFTs
const mockNFTs = [
  { id: 1, name: "Cool Cat #1", image: "/placeholder.svg?height=100&width=100" },
  { id: 2, name: "Bored Ape #42", image: "/placeholder.svg?height=100&width=100" },
  { id: 3, name: "Crypto Punk #007", image: "/placeholder.svg?height=100&width=100" },
  { id: 4, name: "Doodle #123", image: "/placeholder.svg?height=100&width=100" },
]

export function NFTStakingPlatform() {
  const [stakedNFTs, setStakedNFTs] = useState<typeof mockNFTs>([])
  const [availableNFTs, setAvailableNFTs] = useState(mockNFTs)
  const [rewards, setRewards] = useState(0)

  const stakeNFT = (nft: (typeof mockNFTs)[0]) => {
    setStakedNFTs([...stakedNFTs, nft])
    setAvailableNFTs(availableNFTs.filter((item) => item.id !== nft.id))
    // In a real scenario, this would interact with a smart contract
  }

  const unstakeNFT = (nft: (typeof mockNFTs)[0]) => {
    setAvailableNFTs([...availableNFTs, nft])
    setStakedNFTs(stakedNFTs.filter((item) => item.id !== nft.id))
    // In a real scenario, this would interact with a smart contract
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Available NFTs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {availableNFTs.map((nft) => (
              <Card key={nft.id}>
                <CardContent className="p-4">
                  <img src={nft.image || "/placeholder.svg"} alt={nft.name} className="w-full h-auto mb-2" />
                  <p className="text-sm font-medium">{nft.name}</p>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => stakeNFT(nft)} className="w-full">
                    Stake
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <StakedNFTs stakedNFTs={stakedNFTs} unstakeNFT={unstakeNFT} rewards={rewards} />
    </div>
  )
}

