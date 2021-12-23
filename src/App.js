import { useState } from "react";
import { Sidebar } from "./components/Sidebar";


const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false)

  return (
    <div className="bg-pink-100 max-h-full">
      <header className="flex">

        <h1 className="text-3xl underline border-4">Candy-Castle</h1>
      </header>
      <main className="md:flex">
      </main>
        <Sidebar 
          visible={sidebarVisible}
          setVisible={setSidebarVisible}/>
    </div>
  );
}
export default App;