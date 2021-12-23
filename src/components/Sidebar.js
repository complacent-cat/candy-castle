import { MenuAlt2Icon } from '@heroicons/react/solid'

const navData = [
  {
    tile: "elem1",
    discription: "this is list elme 1"
  },
  {
    tile: "elem1",
    discription: "this is list elme 1"
  },
  {
    tile: "elem1",
    discription: "this is list elme 1"
  }
]

export const Sidebar = ({ visible, setVisible }) => {
  return (
    <div className={visible ? "visible" : "invisible"}>
      <button onClick={setVisible}>
        <MenuAlt2Icon className="h-8 w-8 m-2 text-blue-500"/>
      </button>
      
      hello from side
    </div>
  );
}
