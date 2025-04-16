import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import BrowseBooks from './components/BrowseBooks'
import BookDetails from './components/BookDetails'
import AddBook from './components/AddBook'
import NotFound from './components/NotFound'
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
    <Router>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/:category" element={<BrowseBooks />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Header>
    </Router>
    </Provider>
  )
}

export default App
