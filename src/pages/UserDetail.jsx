import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UserCard from '../components/UserCard';
import { useNavigate } from 'react-router-dom';


function UserDetail() {
    const { username } = useParams();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://api.github.com/users/${username}`);
                if (!res.ok) throw new Error('ユーザーが見つかりません');
                const data = await res.json();
                setUserData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [username]);

    const navigate = useNavigate();

    return (
        <div className="p-6 max-w-xl mx-auto">
            <button
                onClick={() => navigate('/')}
                className="inline-block text-blue-600 hover:text-blue-800 font-medium transition duration-200"
            >
                ← 検索画面に戻る
            </button>

            <h1 className="text-2xl font-bold mb-4">ユーザー詳細</h1>

            {loading && <p>読み込み中...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {userData && <UserCard user={userData} />}


        </div>
    );
}

export default UserDetail;
