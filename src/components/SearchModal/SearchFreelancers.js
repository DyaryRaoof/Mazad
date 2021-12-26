import Stars from '../Stars';
import './SearchFreelancers.css';

const freelancers = [
  { name: 'dyary raoof', at: '@dyaryraoof', img: 'myimage', stars: 5 },
  { name: 'dyary raoof', at: '@dyaryraoof', img: 'myimage', stars: 3 },
  { name: 'dyary raoof', at: '@dyaryraoof', img: 'myimage', stars: 5 },
  { name: 'dyary raoof', at: '@dyaryraoof', img: 'myimage', stars: 5 },
  { name: 'dyary raoof', at: '@dyaryraoof', img: 'myimage', stars: 5 },
  { name: 'dyary raoof', at: '@dyaryraoof', img: 'myimage', stars: 5 },
];

const SearchFreelancers = (props) => {
  return (
    <div className="freelancer-grid">
      {freelancers.map((f) => {
        <div className="single-freelancer">
          <img src="" alt="" />
          <div>
            <div>{f.name}</div>
            <div>{f.at}</div>
            <Stars number={f.stars} showUsers={false} />
          </div>
        </div>;
      })}
    </div>
  );
};

export default SearchFreelancers;
