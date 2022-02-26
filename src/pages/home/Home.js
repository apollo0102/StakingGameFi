import { useTotalSupply, useName } from '../../hooks/DDEFIREContract'
import AppLayout from '../AppLayout'
import CardList from './CardList'
import './Home.scss'

const Home = () => {
  const name = useName()
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
              <span className='ml-2'>
              tokens
              </span>
            </li>
          </ul>
        </div>
        <CardList />

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
