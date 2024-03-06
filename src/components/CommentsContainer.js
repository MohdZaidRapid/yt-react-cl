import React from "react";

const commentsData = [
  {
    name: "Mohd Zaid",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, facilis.",
    replies: [],
  },
  {
    name: "Mohd Zaid",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, facilis.",
    replies: [
      {
        name: "Mohd Zaid",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, facilis.",
        replies: [],
      },
      {
        name: "Mohd Zaid",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, facilis.",
        replies: [
          {
            name: "Mohd Zaid",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, facilis.",
            replies: [
              {
                name: "Mohd Zaid",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, facilis.",
                replies: [
                  {
                    name: "Mohd Zaid",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, facilis.",
                    replies: [
                      {
                        name: "Mohd Zaid",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, facilis.",
                        replies: [
                          {
                            name: "Mohd Zaid",
                            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, facilis.",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Mohd Zaid",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, facilis.",
    replies: [],
  },
  {
    name: "Mohd Zaid",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, facilis.",
    replies: [],
  },
  {
    name: "Mohd Zaid",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, facilis.",
    replies: [],
  },
  {
    name: "Mohd Zaid",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, facilis.",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className=" h-12"
        src="https://static.vecteezy.com/system/resources/previews/019/879/198/non_2x/user-icon-on-transparent-background-free-png.png"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

// n level nesting
const CommentList = ({ comments }) => {
  return comments?.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 border border-l-black ml-5 ">
        {/* <Comment key={index} data={comment} />
        <Comment key={index} data={comment} />
        <Comment key={index} data={comment} /> */}
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
