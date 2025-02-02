import { NFTStakingPlatform } from "@/components/nft-staking-platform"

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">NFT Staking Platform</h1>
      <NFTStakingPlatform />
    </main>
  )
}