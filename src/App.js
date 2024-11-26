import './App.css';
import Ideas from './Ideas';
import Form from './Form';
import { useState } from 'react';

function App() {
  const dummyIdeas = [
    { id: 1, title: 'Prank Travis', description: 'Stick googly eyes on all his stuff' },
    { id: 2, title: 'Make secret password app', description: 'So you and your rideshare driver can both know neither one of you is lying' },
    { id: 3, title: 'Learn a martial art', description: 'To compete in the kumite' }
  ]
  const [ideas, setIdeas] = useState((dummyIdeas));

  function addIdea (newIdea) {
    setIdeas([...ideas, newIdea])
  }

  return (
    <main className='App'>
      <h1>IdeaBox</h1>
      <Form addIdea={addIdea} />
      { !ideas.length && <h2>No ideas yet -- add some!</h2> }
      <Ideas ideas={ ideas } />
    </main>
  )
}


export default App;