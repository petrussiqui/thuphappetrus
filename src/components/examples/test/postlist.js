import PostItem from "../postdetail/postitem";
import "./postlist.scss";

function PostList(){
    const posts = [
    { 
        src:"https://static-images.vnncdn.net/files/publish/2022/7/4/minions-su-troi-day-cua-gru-6-798.jpeg",
        title: "Minion richkid",
        des:"Minions cũng rất vô tư. Bất cứ khi nào mắc lỗi và có điều gì đó không ổn, họ không lo lắng về điều đó. Họ chỉ đơn giản là cố gắng tìm cách khắc phục sự cố. Có thể đó không phải là hành vi mang tính thực tế, nhưng đó là cách mà nhiều người ước họ có trong đời thực"
    },
    { 
        src:"https://cdnmedia.thethaovanhoa.vn/Upload/O5NP4aFt6GVwE7JTFAOaA/files/2022/07/Phim-Minions%20(4).jpg",
        title: "Minion học võ",
        des:"Minions cũng rất vô tư. Bất cứ khi nào mắc lỗi và có điều gì đó không ổn, họ không lo lắng về điều đó. Họ chỉ đơn giản là cố gắng tìm cách khắc phục sự cố. Có thể đó không phải là hành vi mang tính thực tế, nhưng đó là cách mà nhiều người ước họ có trong đời thực" 
    },
    {
        src:"https://cdn.sforum.vn/sforum/wp-content/uploads/2022/07/8-1.jpg",
        title: "Minion phi công",
        des:"Minions cũng rất vô tư. Bất cứ khi nào mắc lỗi và có điều gì đó không ổn, họ không lo lắng về điều đó. Họ chỉ đơn giản là cố gắng tìm cách khắc phục sự cố. Có thể đó không phải là hành vi mang tính thực tế, nhưng đó là cách mà nhiều người ước họ có trong đời thực"
    },
    {
        src:"https://i.ytimg.com/vi/3JYcPIFD5cU/maxresdefault.jpg",
        title: "Minion biến hình",
        des:"Minions cũng rất vô tư. Bất cứ khi nào mắc lỗi và có điều gì đó không ổn, họ không lo lắng về điều đó. Họ chỉ đơn giản là cố gắng tìm cách khắc phục sự cố. Có thể đó không phải là hành vi mang tính thực tế, nhưng đó là cách mà nhiều người ước họ có trong đời thực"
    }
    ]; 
    const list =( <div className="post-list">
        {posts.map((post,index)=>(
            <PostItem 
            key={post.index}
            src= {post.src}
            title={post.title}
            des={post.des}
            />
            ))}
    </div>);
    console.log(list);
    return(list);
}
export default PostList;