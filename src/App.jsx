import { useState, useEffect } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [submittedUser, setSubmittedUser] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedUser(username);  // 検索トリガー
  };

  useEffect(() => {
    if (!submittedUser) return;

    const fetchUserData = async () => {
      setLoading(true);
      setError('');
      setUserData(null);

      try {
        const res = await fetch(`https://api.github.com/users/${submittedUser}`);
        if (!res.ok) {
          throw new Error('ユーザーが見つかりません');
        }
        const data = await res.json();
        setUserData(data);
      } catch (err) {
        setError(err.message || '不明なエラー');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [submittedUser]);


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

      {/* ローディング表示 */}
      {loading && (
        <p className="text-gray-500">読み込み中...</p>
      )}

      {/* エラー表示 */}
      {error && (
        <p className="text-red-500">{error}</p>
      )}

      {/* ユーザー情報の表示 */}
      {userData && (
        <div className="border p-4 rounded shadow">
          <img src={userData.avatar_url} alt="avatar" className="w-24 h-24 rounded-full mb-2" />
          <h2 className="text-xl font-bold">{userData.name || '名前なし'}</h2>
          <p className="text-gray-600">@{userData.login}</p>
          <p className="mt-2">{userData.bio || '自己紹介なし'}</p>
        </div>
      )}

    </div>


  );
}

export default App;

