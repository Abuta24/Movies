import Filmebi from '../Filmebi'
import './movies.css'
import Data  from './data.json'; 



export default function movies() {
  return (
    <div>
      <Filmebi title="Movies" items={Data} />
    </div>
  )
}
