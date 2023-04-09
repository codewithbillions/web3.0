import {Routes, Route} from 'react-router-dom'


import Home from './pages/Home'
import Team from './pages/Team'
import PageNotFound from './pages/404'



const App = () => (
<div className="min-h-screen">
   <div className="bg-primary w-full overflow-hidden opacity-100">
   <Routes>
      <Route path="/" element={<Home />}/>
         <Route path="/team" element={<Team />}/>
         <Route path="*" element={<PageNotFound />} />
   </Routes>
   </div> 
</div>
);

export default App;