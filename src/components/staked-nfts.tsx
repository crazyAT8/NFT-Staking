import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface StakedNFTsProps {
  stakedNFTs: Array<{ id: number; name: string; image: string }>
  unstakeNFT: (nft: { id: number; name: string; image: string }) => void
  rewards: number
}

export function StakedNFTs({ stakedNFTs, unstakeNFT, rewards }: StakedNFTsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Staked NFTs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {stakedNFTs.map((nft) => (
            <Card key={nft.id}>
              <CardContent className="p-4">
                <img src={nft.image || "/placeholder.svg"} alt={nft.name} className="w-full h-auto mb-2" />
                <p className="text-sm font-medium">{nft.name}</p>
              </CardContent>
              <CardFooter>
                <Button onClick={() => unstakeNFT(nft)} variant="outline" className="w-full">
                  Unstake
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full text-center">
          <p className="text-lg font-bold">Rewards: {rewards} Tokens</p>
          <Button className="mt-2">Claim Rewards</Button>
        </div>
      </CardFooter>
    </Card>
  )
}

