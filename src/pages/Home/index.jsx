import ItemListContainer from "../../components/ItemListContainer";

function Home () {
    const[items, setItems] = useState([])

    //PETICION AL API
    useEffect(() => {
      fetch('../public/mocks/data.json')
        .then((response) => {
          return response.json()
        })
        .then((response) => {
          setItems(response)
          console.log(response)
        })
        .catch((error) =>{
          console.log(error)
        })
  
    }, []);
    return(
        <ItemListContainer items={items} />
    )
}

export default Home;