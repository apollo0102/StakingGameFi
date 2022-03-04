import Card from '../../components/Card'

const CardList = (props) => {
  return (
    <div className='pt-16 mx-auto text-gray-600 body-font w-full '>
      <div className='flex flex-wrap -m-4'>
        {props.nfts.map((item, index) => {
          return <Card item={item} key={item.edition} />
        })}
      </div>
    </div>
  )
}

export default CardList
