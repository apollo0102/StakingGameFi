const Card = (props) => {
  return (
    <div className='lg:w-1/4 md:w-1/2 p-3 w-full  mb-10'>
      <div className=' rounded-md bg-[#1c1b1b] p-3 shadow-lg shadow-emerald-700/50'>
        <a className='block relative h-48 rounded overflow-hidden' href="/#">
          <img
            alt='ecommerce'
            className='object-cover object-center w-full h-full block'
            src={props.item.link}
          />
        </a>
        <div className='mt-4'>
          <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
            Collection
          </h3>
          {/* <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2> */}
          <p className=' text-white mt-10'>{props.item.edition}</p>
          <div className='flex items-center justify-between gap-x-3 my-10'>
            <button className='w-full md:w-1/2  rounded border-[#0dba88] border-2 text-[#0dba88]  text-base bg-[#1c1b1b] p-2 hover:bg-gray-700  hover:text-white bg-gray--500 active:bg-gray-700 focus:outline-none focus:ring focus:ring-cyan-300 shadow-lg shadow-cyan-700/50'>
              UnStake
            </button>
            <button className='w-full md:w-1/2 rounded bg-[#0dba88] text-white  border-[#0dba88] border-2  text-base p-2 hover:bg-[#0dba88]-500  hover:text-[#0dba88]-300 bg-gray--500 active:bg-gray-700 focus:outline-none focus:ring focus:ring-cyan-300 shadow-lg shadow-stone-700/50'>
              Stake
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card
