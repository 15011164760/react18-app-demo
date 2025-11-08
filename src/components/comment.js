import "./comment.css";
import { useState, useRef, useEffect } from "react";
import _ from "lodash";
import logo from "../logo.svg";
import classNames from "classnames";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
const usersLoginData = {
  uid: "116",
  name: "刘文清",
};
const originData = [
  {
    id: 1,
    content: "真是个宝藏教程",
    ctime: "2016-05-02 10:12",
    like: "333",
    isCanDelect: false,
    userInfo: {
      uid: "1234567891",
      name: "李总省",
      logo,
    },
  },
  {
    id: 2,
    content: "这首歌曲不错！",
    ctime: "2017-04-02 10:12",
    like: "888",
    isCanDelect: true,
    userInfo: {
      uid: "123456789",
      name: "张天志",
      logo,
    },
  },
  {
    id: 3,
    content: "这个评论不错",
    ctime: "2015-04-02 10:12",
    like: "563",
    isCanDelect: false,
    userInfo: {
      uid: "1222",
      name: "李总省",
      logo,
    },
  },
  {
    id: 4,
    content: "给我出去号码",
    ctime: "2019-04-02 10:12",
    like: "88",
    isCanDelect: true,
    userInfo: {
      uid: "116",
      name: "向华强",
      logo,
    },
  },
];
const commentNewData = [
  {
    id: 5,
    content: "评论的内容热点1",
    ctime: "2019-07-02 10:12",
    like: "10",
    isCanDelect: false,
    userInfo: {
      uid: "1111232",
      name: "刘文清",
      logo,
    },
  },
  {
    id: 6,
    content: "诺言是好听的歌曲",
    ctime: "2020-07-02 10:12",
    like: "20",
    isCanDelect: true,
    userInfo: {
      uid: "116",
      name: "向华强",
      logo,
    },
  },
  {
    id: 7,
    content: "真的挺好的 加油",
    ctime: "2018-07-02 10:12",
    like: "76",
    isCanDelect: true,
    userInfo: {
      uid: "116",
      name: "向华强",
      logo,
    },
  },
];
const tabList = [
  {
    type: "time",
    name: "最新",
  },
  {
    type: "hot",
    name: "最热",
  },
];
function UseGetListDataFn(){
  const [itemList, setItemList] = useState([]);
  //  // 获取评论数据
  //  async function getCommentData() {
  //   const res = await axios.get("http://localhost:3001/data");
  //   console.log(' ', res.data)
  //   setItemList(_.orderBy(res.data, ["ctime"], ["desc"]));
  // }
  useEffect(() => {
    // getCommentData();
  },[]);
  return {
    itemList,
    setItemList
  }
}
function ItemList({item,DelFn}) {
  return (
    <div className="comment_list" key={item.id}>
    <div className="comment_list_left">
      <img src={item.userInfo.logo} alt="" />
    </div>
    <div className="comment_list_right">
      <div className="username">{item.userInfo.name} </div>
      <div className="comment_content">{item.content}</div>
      <div className="comment_Info">
        <div>{item.ctime}</div>
        <div>点赞数:{item.like}</div>
        {item.userInfo.uid === usersLoginData.uid && (
          <div className="delectBtn" onClick={()=>DelFn(item)}> 删除 </div>
        )}
      </div>
    </div>
  </div>
  )
}
function CommentApp(props) {
  console.log(" props=", props);
  const {itemList,setItemList}=UseGetListDataFn();
  const inputRef = useRef(null);
  const [type, setType] = useState("time");

  function DeleteFN(currentItem, index) {
    console.log(" ", [...itemList]);
    setItemList(itemList.filter((item) => item.id !== currentItem.id));
  }
  function changeTabFn(type) {
    setType(type);
    if (type === "time") {
      setItemList(_.orderBy(originData, ["ctime"], ["desc"]));
    } else {
      setItemList(_.orderBy(commentNewData, ["like"], ["desc"]));
    }
  }
  const [content, changeContent] = useState("");
  function publishFn() {
    setItemList([
      ...itemList,
      {
        id: uuidv4(),
        content: content,
        ctime: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss"),
        like: "88",
        isCanDelect: true,
        userInfo: {
          uid: "116",
          name: "向华强",
          logo,
        },
      },
    ]);
    changeContent("");
    inputRef.current.focus();
  }
  const sonMsg = "helle 我是子组件里面的数据";
  return (
    <div className="all">
      <div>
        父组件传递的数据
        <div>{props.name}</div>
        <div>{props.isnumber}</div>
        <div>{props.arr}</div>
        <div>{JSON.stringify(props.obj)}</div>
        {/* <div>{props.cb}</div> */}
        <div>{props.jsx}</div>
        <div>{props.children}</div>
        <button onClick={() => props.getMessage(sonMsg)}>getMessage</button>
      </div>
      <div className="allTop">
        <div className="comment_title_all">
          <div className="comment_title">
            <div className="title">评论</div>
            <div className="num">10</div>
          </div>
          <div className="comment_tab">
            {tabList.map((item, index) => {
              return (
                <div
                  onClick={() => changeTabFn(item.type)}
                  className={classNames("tab_title", {
                    active: type === item.type,
                  })}
                  key={item.type}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="publish_content">
          <img src={logo} alt="" />
          <input
            type="text"
            placeholder="说点什么吧"
            value={content}
            ref={inputRef}
            onChange={(e) => changeContent(e.target.value)}
          />
          <button onClick={publishFn}>发布</button>
        </div>
        <div className="comment_list_all">
          {itemList.map((item, index) => (
           <ItemList  item={item} key={item.id} DelFn={DeleteFN}/>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CommentApp;
