import { useState, useEffect } from 'react';
import UserCard from './components/UserCard';
import { useNavigate } from 'react-router-dom';


function App() {
  const [username, setUsername] = useState('');
  const [history, setHistory] = useState([]);


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = username.trim();
    if (trimmed !== '') {
      const newHistory = [...new Set([trimmed, ...history])];
      setHistory(newHistory);
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
      navigate(`/users/${trimmed}`);
    }

  };

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };



  useEffect(() => {
    const stored = localStorage.getItem('searchHistory');
    if (stored) {
      setHistory(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">GitHubユーザー検索</h1>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
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

      {history.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">検索履歴</h2>
          <ul className="space-y-1">
            {history.map((name) => (
              <li key={name}>
                <button
                  onClick={() => navigate(`/users/${name}`)}
                  className="text-blue-500 hover:underline"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              setHistory([]);
              localStorage.removeItem('searchHistory');
            }}
            className="text-sm text-red-500 hover:underline mt-2"
          >
            履歴をすべて削除
          </button>
        </div>
      )}




    </div>


  );
}

export default App;

