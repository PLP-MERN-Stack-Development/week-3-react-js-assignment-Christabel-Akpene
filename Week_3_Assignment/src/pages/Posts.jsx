import { useEffect, useState } from "react";
import Card from "../components/Card";
import InfiniteScroll from "react-infinite-scroll-component";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      if (!result.ok) {
        throw new Error("Could not fetch data");
      }
      const response = await result.json();
      if (response.length === 0 || response.length < 10) {
        setHasMore(false);
      }
      setPosts((post) => [...post, ...response]);
      setPage((prevPage) => prevPage + 1);
    } catch (err) {
      console.log(err);
      setHasMore(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function onInputChange(e) {
    setSearch(e.target.value);
  }

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="flex flex-col items-center gap-10">
      <div>
        <h1 className="font-bold text-2xl my-4 text-center text-black dark:text-white">
          Posts
        </h1>
        <input
          type="text"
          placeholder="search posts"
          className="border border-zinc-300 dark:border-zinc-600 p-2 text-black dark:text-white bg-white dark:bg-zinc-800 w-100 text-sm rounded outline-1 placeholder-gray-500 dark:placeholder-gray-400"
          onChange={onInputChange}
          value={search}
        />
      </div>

      {search.trim() === "" ? (
        <InfiniteScroll
          dataLength={posts.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<h4 className="text-black dark:text-white">Loading...</h4>}
          endMessage={
            <p className="text-center my-10 text-black dark:text-white">
              <b>End of posts</b>
            </p>
          }
        >
          <div className="grid grid-cols-2 gap-10">
            {posts.map(({ id, title, body }) => (
              <Card key={id} title={title} body={body} />
            ))}
          </div>
        </InfiniteScroll>
      ) : (
        <div className="grid grid-cols-2 gap-10">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(({ id, title, body }) => (
              <Card key={id} title={title} body={body} />
            ))
          ) : (
            <p className="text-center col-span-2 text-black dark:text-white">
              No posts match your search.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Posts;
