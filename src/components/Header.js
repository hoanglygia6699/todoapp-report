import { Button } from "antd";
import React, { memo, useState } from "react";

const Header = memo((props) => {
  const [text, setText] = useState("");
  const { addTodo } = props;

  const onAddTodo = (event) => {
    if (event.key === "Enter" && text) {
      addTodo({
        id: new Date().valueOf(),
        text,
        isCompleted: false,
      });
      setText("");
    }
  };

  return (
    <header className="header">
      <h1>TODOS</h1>
      <form 
      // onSubmit={(e) => {
      //   e.preventDefault();
      //   if (text === "") {
      //     return;
      //   }
      //   props(addTodo(text.value));
      //   text.value = "";
      // }}
      >
      <input
        className="new-todo"
        placeholder="Enter Your Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={onAddTodo}
      />
      <Button
        className="btn-add"
        onClick={()=>
            addTodo({
                id: new Date().valueOf(),
                text,
                isCompleted: false,
              })
        }
      >
        Add Task
      </Button>

      {/* <Button
        className="btn-add"
        htmlType="submit"
      >
        Add Task
      </Button> */}


      </form>
    </header>
  );
});

export default Header;
