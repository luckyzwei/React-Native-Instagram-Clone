import React, { useState, useEffect } from "react";
import { View, FlatList, ScrollView, ActivityIndicator } from "react-native";
import Post from "./Post";
import Stories from "./Stories";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [isBusy, setisBusy] = useState(false);
  useEffect(() => {
    fetchPosts();
  }, []);
  const fetchPosts = () => {
    setisBusy(true);
    const url = `https://pixabay.com/api/?key=9830712-3e3ca065b544e613e5f68cb6d&page=${page}&per_page=20`;
    // const url = "https://picsum.photos/v2/list?page=2&limit=100";

    console.log(url);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPage(page + 1);
        setPosts([...posts, ...data.hits]);
        // setPosts([...posts, ...data]);
        setisBusy(false);
      })
      .catch(e => {
        console.log(e);
        setisBusy(false);
        alert(JSON.stringify(e.message));
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        data={posts}
        refreshing={isBusy}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        onEndReached={fetchPosts}
        ListHeaderComponent={<Stories />}
        ListFooterComponent={() => {
          return isBusy ? <ActivityIndicator /> : null;
        }}
        renderItem={({ item, index }) => {
          item.image = { uri: item.largeImageURL };
          item.userImage = { uri: item.userImageURL };
          item.thumbnail = { uri: item.previewURL };
          return <Post post={item} />;
        }}
      />
    </View>
  );
};

export default Posts;
