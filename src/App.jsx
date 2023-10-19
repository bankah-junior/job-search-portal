import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import { About, Blog, BlogDetail, Contact, Home, Jobs, JobCategorie, JobDetail, JobPost, SignUp, ArtAndDesign } from './Pages/index'
import Error from './components/Error'
import StyleGuide from './components/StlyleGuide'

function App() {

  return (
    <Router>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/blogs' element={<Blog/>} />
         <Route path='/blog/:id' element={<BlogDetail/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/jobs' element={<Jobs/>} />
         <Route path='/jobs/categorie' element={<JobCategorie/>} />
         <Route path='/jobs/categorie/artanddesign' element={<ArtAndDesign />} />
         <Route path='/jobs/:categorie' element={<JobCategorie/>} />
         <Route path='/post' element={<JobPost/>} />
         <Route path='/job/:id' element={<JobDetail/>} />
         <Route path='/signup' element={<SignUp/>} />
         <Route path='/styles' element={<StyleGuide/>} />
         <Route path='*' element={<Error/>} />
      </Routes>    
    </Router>
    )
}
   

export default App
