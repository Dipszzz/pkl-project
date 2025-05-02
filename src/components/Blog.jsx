import React, { useEffect, useState } from "react";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/tribun");
        if (!response.ok) {
          throw new Error("Gagal mengambil data dari server");
        }
        const data = await response.json();
        console.log("Posts from API:", data);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-3xl text-blue-800 font-bold">Loading Bro...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-3xl text-red-500 font-bold">Lha Ko Error: {error}</div>;
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">
        Berita Bisnis Terkini (Tempo)
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-105"
          >
            <img
              src={
                post.image && post.image !== ""
                  ? post.image
                  : "https://via.placeholder.com/400x300?text=No+Image"
              }
              alt={post.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {post.description}
              </p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold hover:underline text-sm"
              >
                Baca selengkapnya
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
