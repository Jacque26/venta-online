import './App.css';
import CategoryList from './components/category-List/Category-List';


const App = () => {
  const categories = [
    {
      title: "Hats",
      id: 1,
      img: "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      title: "Jackets",
      id: 2,
      img: "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      title: "Sneakers",
      id: 3,
      img: "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      title: "Womens",
      id: 4,
      img: "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      title: "Mens",
      id: 5,
      img: "https://i.ibb.co/R70vBrQ/men.png"
    }
  ]

  return (
    <CategoryList
    categories= {categories}
    />
  );
};

export default App;
