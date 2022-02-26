import Card from '../../components/Card'

const nfts = [
  {
    id: '#3978',
    link: "https://ipfs.io/ipfs/Qmdhq43NUrCqgs9hHa8MuKToCKPetXk5N9dqjHvdGyUuw4",
    img: "https://ipfs.io/ipfs/Qmdhq43NUrCqgs9hHa8MuKToCKPetXk5N9dqjHvdGyUuw4",
    type:0
  },
  {
    id: '#1806',
    link: "https://ipfs.io/ipfs/Qmdhq43NUrCqgs9hHa8MuKToCKPetXk5N9dqjHvdGyUuw4",
    img: "https://ipfs.io/ipfs/Qmdhq43NUrCqgs9hHa8MuKToCKPetXk5N9dqjHvdGyUuw4",
    type:0
  },
  {
    id: '#7349',
    link: "https://ipfs.io/ipfs/Qmdhq43NUrCqgs9hHa8MuKToCKPetXk5N9dqjHvdGyUuw4",
    img: "https://ipfs.io/ipfs/Qmdhq43NUrCqgs9hHa8MuKToCKPetXk5N9dqjHvdGyUuw4",
    type:0
  },
  {
    id: '#2567',
    link: "https://ipfs.io/ipfs/Qmdhq43NUrCqgs9hHa8MuKToCKPetXk5N9dqjHvdGyUuw4",
    img: "https://ipfs.io/ipfs/Qmdhq43NUrCqgs9hHa8MuKToCKPetXk5N9dqjHvdGyUuw4",
    type:1
  },
  {
    id: '#1180',
    link: "https://ipfs.io/ipfs/Qmdhq43NUrCqgs9hHa8MuKToCKPetXk5N9dqjHvdGyUuw4",
    img: "https://ipfs.io/ipfs/Qmdhq43NUrCqgs9hHa8MuKToCKPetXk5N9dqjHvdGyUuw4",
    type:1
  },
]

const CardList = () => {
  return (
      <div className='pt-16 mx-auto text-gray-600 body-font w-full '>
        <div className='flex flex-wrap -m-4'>
        {nfts.map((item) => (
            <Card
              id={item.id}
              link={item.link}
              img={item.img}
              type={item.type}
              key={item.id}
            ></Card>
          ))}
        </div>
      </div>
  )
}

export default CardList
