import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [username, setUsername] = useState('');

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ページリロード防止
    console.log('検索するユーザー名:', username);
  };
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">GitHubユーザー検索</h1>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="GitHubユーザー名を入力"
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          検索
        </button>
      </form>
    </div>
  );
}


export default App
