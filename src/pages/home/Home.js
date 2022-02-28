import { BaseURI } from '../../hooks/GameFiContract'
import React, { useState, useEffect } from 'react'
import AppLayout from '../AppLayout'
import CardList from './CardList'
import { useEthers, shortenAddress } from '@usedapp/core'
import {
  useMoralis,
  useMoralisWeb3Api,
  useMoralisWeb3ApiCall,
} from 'react-moralis'
import axios from 'axios'
import './Home.scss'
import { data } from 'autoprefixer'

const nftsList1 = [
  {
    id: '#3978',
    link: 'https://ipfs.io/ipfs/Qmdhq43NUrCqgs9hHa8MuKToCKPetXk5N9dqjHvdGyUuw4',
    img: 'https://i0.wp.com/journeytothemetaverse.net/wp-content/uploads/2022/02/sneakPeek.02.gif?fit=640%2C640&ssl=1',
    type: 0,
  },
  {
    id: '#1806',
    link: 'https://ipfs.io/ipfs/Qmdhq43NUrCqgs9hHa8MuKToCKPetXk5N9dqjHvdGyUuw4',
    img: 'https://ipfs.io/ipfs/Qmdhq43NUrCqgs9hHa8MuKToCKPetXk5N9dqjHvdGyUuw4',
    type: 0,
  },
  {
    id: '#7349',
    link: 'https://ipfs.io/ipfs/Qmdhq43NUrCqgs9hHa8MuKToCKPetXk5N9dqjHvdGyUuw4',
    img: 'https://ipfs.io/ipfs/Qmdhq43NUrCqgs9hHa8MuKToCKPetXk5N9dqjHvdGyUuw4',
    type: 0,
  },
  {
    id: '#2567',
    link: 'https://ipfs.io/ipfs/Qmdhq43NUrCqgs9hHa8MuKToCKPetXk5N9dqjHvdGyUuw4',
    img: 'https://ipfs.io/ipfs/Qmdhq43NUrCqgs9hHa8MuKToCKPetXk5N9dqjHvdGyUuw4',
    type: 1,
  },
  {
    id: '#1180',
    link: 'https://ipfs.io/ipfs/Qmdhq43NUrCqgs9hHa8MuKToCKPetXk5N9dqjHvdGyUuw4',
    img: 'https://ipfs.io/ipfs/Qmdhq43NUrCqgs9hHa8MuKToCKPetXk5N9dqjHvdGyUuw4',
    type: 1,
  },
]

const Home = () => {
  const [nftsList, setNftsList] = useState([])
  let [jsonData, setJsonData] = useState([])
  const { account, activate, deactivate } = useEthers()
  const { Moralis, isInitialized, ...rest } = useMoralis()
  const Web3Api = useMoralisWeb3Api()

  const nfts = async () => {
    console.log(account)
    console.log(process.env.REACT_APP_CONTRACT_RINKBEY_ADDRESS)
    const result = await Web3Api.account.getNFTsForContract({
      chain: 'rinkeby',
      address: account,
      token_address: process.env.REACT_APP_CONTRACT_RINKBEY_ADDRESS,
    })
    return result
  }

  const fixURL = (url) => {
    if (url.startsWith('ipfs')) {
      return (
        'https://ipfs.io/ipfs/' +
        url
          .split('ipfs://')
          .slice(-1)[0]
          .substring(0, url.split('ipfs://').slice(-1)[0].length - 1)
      )
    } else {
      return url + '?format=json'
    }
  }
  const makeLinkURL = (url) => {
    if (url.startsWith('ipfs')) {
      return (
        'https://ipfs.io/ipfs/' +
        url.split('ipfs://').slice(-1)[0].split('png')[0] +
        'gif'
      )
    } else {
      return url + '?format=json'
    }
  }

  const baseURI = BaseURI()
  const getJsonData = async(url, index) => {
    try {
      const response = await axios
      .get(fixURL(url) + index + '.json');
      return {
        attributes: response.data.attributes,
        dna: response.data.dna,
        date: response.data.date,
        description: response.data.description,
        edition: response.data.edition,
        image: response.data.image,
        name: response.data.name,
        link: makeLinkURL(response.data.image),
      };
    } catch (ex) {
      console.log(ex);
      return null;
    }
  }
  const setNFTList = async () => {
    const nftList = await nfts()
    var nsList = []
    nftList.result.forEach(async (nft) => {
      console.log('jsonData')
      const json = await getJsonData(baseURI[0], nft.token_id)
      nsList.push(json)
    })
    console.log('---------------nftMetadata---------->')
    console.log(nsList)
    setNftsList(nsList)
  }
  useEffect(() => {
    if (account) {
      setNFTList()
    }
  }, [account])

  // const name = useName()
  return (
    <AppLayout>
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 flex flex-col items-center justify-center gap-y-10'>
        <div className='py-10 text-center w-full flex flex-wrap  items-center justify-between  gap-y-2 '>
          <div className='basis-[100%]  md:basis-[48%] px-10  py-5 bg-gray-700 flex flex-col text-center gap-5 rounded-2xl  shadow-lg shadow-gray-700/50'>
            <span className='text-[30px] font-semibold text-white'>5,780</span>
            <span className='font-normal text-white mb-5 text-[20px]'>
              Total Locked NFTs
            </span>
          </div>
          <div className='basis-[100%] md:basis-[48%] px-10 py-5 bg-gray-700 flex flex-col text-center gap-5 rounded-2xl  shadow-lg shadow-gray-700/50'>
            <span className='text-[30px] font-semibold text-white'>2,678</span>
            <span className='font-normal text-white mb-5 text-[20px]'>
              Number of Stakers
            </span>
          </div>
        </div>
        <div className='bg-gray-700 py-5 text-center w-full rounded-2xl  shadow-lg shadow-gray-700/50'>
          <ul className=''>
            <li className=' text-white text-[30px] font-bold mb-[20px] tracking-[0.05em]'>
              Your Rewards
            </li>
            <li className='text-[20px] font-bold text-white mb-5'>
              <span className='text-[32px]'>50</span>
              <span className='ml-2'>tokens</span>
            </li>
          </ul>
        </div>
        {nftsList && <CardList nfts={nftsList} />}

        <div className='pt-10 pb-20 text-center w-full flex flex-wrap  items-center justify-between gap-y-10'>
          <button className='basis-[100%] md:basis-[48%] text-lg font-bold rounded-2xl  text-white py-5   hover:text-white hover:text-xl bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 focus:outline-none focus:ring focus:ring-cyan-300 shadow-lg shadow-cyan-700/50'>
            STAKE
          </button>
          <button className='basis-[100%] md:basis-[48%] text-lg font-bold rounded-2xl   text-white py-5  hover:text-xl bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 shadow-lg shadow-indigo-700/50'>
            WITHDRAW
          </button>
        </div>
      </main>
    </AppLayout>
  )
}

export default Home
