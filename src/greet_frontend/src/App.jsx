import { useState } from 'react';
import { greet_backend } from 'declarations/greet_backend';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    greet_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <div className="m-20 p-6 bg-gray-50 rounded-lg shadow-lg">
  <h1 className="text-blue-700 text-center text-3xl font-bold mb-8">
    Demo Of MOTKO (backend) and React JS (frontend)
  </h1>
  
  <main className="flex flex-col items-center">
    <img src="/logo2.svg" alt="DFINITY logo" className="w-32 h-32 mb-6" />
    
    <form action="#" onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Enter your name:
        </label>
        <input 
          id="name" 
          alt="Name" 
          type="text" 
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <button 
        type="submit" 
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
      >
        Click Me!
      </button>
    </form>
    
    <section id="greeting" className="mt-6 text-lg text-center text-gray-700">
      {greeting}
    </section>
  </main>
</div>

  );
}

export default App;



