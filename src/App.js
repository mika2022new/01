import CostItem from "./components/CostItem";

function App() {

  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "Frigo 01",
      amount: 1000.01
    },

    {
      date: new Date(2021, 11, 25),
      description: "MacBook",
      amount: 1500.01
    },

    {
      date: new Date(2021, 4, 1),
      description: "Jeans",
      amount: 45.01
    }
  ]

  return (
   <div>
    <h1>Let's Start</h1>

    <CostItem 
    date={costs[0].date}
    description={costs[0].description}
    amount={costs[0].amount}
    />

    <CostItem 
    date={costs[1].date}
    description={costs[1].description}
    amount={costs[1].amount}
    />

    <CostItem 
    date={costs[2].date}
    description={costs[2].description}
    amount={costs[2].amount}
    />

   </div>

  );
}

export default App;
