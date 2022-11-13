import './App.css';
import { useState, useEffect } from 'react';
import { requestCategories } from './components/requests'
import { Categories } from './components/categories'
import { Questions } from './components/questions'
import axios from 'axios';


function App() {
  const [category, setCategory] = useState([])
  const [selectedCategoryId, setSelectedCategoryId] = useState()
  const [Questions, setQuestions] = useState([])
  const [url, setUrl] = useState([])

  useEffect(() => {
    requestCategories().then(res => setCategory(res.data.trivia_categories))
  }, [])

  useEffect(() => {
    axios.get(url).then(res => setQuestions(res.data.results))
  }, [url])

  return (
    <div>
      <section className='quest-container'>
        {selectedCategoryId ? (
          <Questions
            selectedCategoryId={selectedCategoryId}
            setSelectedCategoryId={setSelectedCategoryId} />

        ) : (
          <>
          {category.map((topic) => (
              <div className='cat-container'>
                <Categories
                  setSelectedCategoryId={setSelectedCategoryId}
                  topicId={topic.id}
                  category={topic.name}
                  setUrl={setUrl} />
              </div>
            ))}
          </>
        )}
      </section>
    </div>
  )
}


export default App;
