
import { useLoaderData } from 'react-router-dom';
import AllArtsCraftsCard from '../Components/AllArtsCraftsCard';


const AllArtsCrafts = () => {
    const allArtsCrafts = useLoaderData()
    return (
      <div>
        <div className='text-center text-3xl font-bold mt-10'>
          <h1>All Arts & Crafts Items</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-10 p-10'>
          {allArtsCrafts.map((artAndCraft) => (
            <AllArtsCraftsCard
              key={artAndCraft._id}
              artAndCraft={artAndCraft}
            ></AllArtsCraftsCard>
          ))}
        </div>
      </div>
    );
};

export default AllArtsCrafts;