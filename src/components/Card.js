const Card = (props) => {
  return (
    <div className='lg:w-1/4 md:w-1/2 p-3 w-full  mb-10'>
      <div className=' rounded-md bg-[#1c1b1b] p-3'>
        <a className='block relative h-48 rounded overflow-hidden'>
          <img
            alt='ecommerce'
            className='object-cover object-center w-full h-full block'
            src={props.img}
          />
        </a>
        <div className='mt-4'>
          <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
            Collection
          </h3>
          {/* <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2> */}
          <p className=' text-white mt-10'>{props.id}</p>
          <div className='flex items-center justify-between gap-x-3 my-10'>
            <button className='w-full md:w-1/2  rounded border-[#0dba88] border-2 text-[#0dba88]  text-base bg-[#1c1b1b] p-2 hover:bg-[#0dba88]  hover:text-white hover:text-lg'>
              UnStake
            </button>
            <button className='w-full md:w-1/2 rounded bg-[#0dba88] text-white  border-[#0dba88] border-2  text-base p-2 hover:bg-[#1c1b1b]  hover:text-[#0dba88] hover:text-lg'>
              Stake
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card