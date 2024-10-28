import Link from 'next/link';
import Carousel from './carousel';

export default function Home() {
  
  return (
    <main>
      <h1>Hello this is the dashboard page</h1>
      <div className='w-[60%] mx-auto pt-11'>
        <Carousel slides={recentImages}/>
      </div>
      <div className='w-[60%] h-72 mx-auto pt-11 bg-clip-content bg-hblue'>
        <Carousel slides={recentPatients}/>
      </div>
    </main>
  );
}

const recentImages = [
  {id: 0, imageUrl:"https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg"},
  {id: 1, imageUrl:"https://wallpapercave.com/wp/wp3386769.jpg"},
  {id: 2, imageUrl:"https://wallpaperaccess.com/full/809523.jpg"}
];
const recentPatients = [
  {id: 0, info: {name: "Rayyan Khalique", dOB: new Date(2009, 3, 3), sex: "male"}},
  {id: 1, info: {name: "Dylan Patel", dOB: new Date(2009, 2, 20), sex: "male"}},
  {id: 2, info: {name: "Trevon Nguyen", dOB: new Date(2009, 5, 15), sex: "male"}}
];
