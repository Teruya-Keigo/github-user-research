function UserCard({ user }) {
    return (
        <div className="border p-4 rounded shadow bg-white">
            <div className="flex items-center gap-4">
                <img
                    src={user.avatar_url}
                    alt="avatar"
                    className="w-24 h-24 rounded-full border"
                />
                <div>
                    <h2 className="text-xl font-bold">{user.name || '名前なし'}</h2>
                    <p className="text-gray-600">@{user.login}</p>
                    <p className="mt-1 text-sm text-gray-500">{user.bio || '自己紹介なし'}</p>
                    <p className="mt-1 text-sm text-gray-500">公開リポジトリ数: {user.public_repos ?? '公開リポジトリなし'}</p>
                    <p className="mt-1 text-sm text-gray-500">Followers:{user.followers} </p>
                    <a
                        href={user.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 underline text-sm mt-2 inline-block"
                    >
                        GitHub Profile
                    </a>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
