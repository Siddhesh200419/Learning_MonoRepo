import {Button} from "@repo/ui";
import {formatCurrency} from "@repo/utils";

function App() {
  
  return (
    <>
    <h1>Siddhesh is the not that much lucky</h1>
    <Button onClick={() => alert(`Amount: ${formatCurrency(1000)}`)}/>
    <p>Not lucky guy</p>
    </>

  );
}

export default App;