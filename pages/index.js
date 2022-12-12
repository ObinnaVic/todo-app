import { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { AppStore } from "../components/Store";

export default function Home() {
  const [name, setName] = useState();
  const {state, dispatch} = useContext(AppStore);
  const { undoneTasks, doneTasks } = state;
  const HandleSubmit = () => {
    if (name) {
      const newItem = {name, id:new Date().getTime().toString()}
      dispatch({ type: "ADD_ITEMS", payload: newItem });
      setName('');
    } 
  }

  const HandleTaskDone = (id) => {
    dispatch({type: "TASK_DONE", payload: id})
  }
  
  return (
    <Layout title={"todo-list"}>
      <div className="flex justify-center items-center h-screen w-full">
        <div className="flex flex-col bg-sky-300 p-10 rounded-lg w-3/4 md:w-1/3">
          <div className="flex">
            <input
              type="text"
              className="border rounded-br-3xl mr-5 p-2 w-full"
              placeholder="Enter your todo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              className="font-bold border px-2 bg-sky-400"
              onClick={HandleSubmit}
            >
              ADD
            </button>
          </div>

          {undoneTasks.length > 0 ? (
            undoneTasks.map((item) => {
              return (
                <div className="flex justify-between items-center p-3 my-2 bg-blue-600">
                  <p className="text-white">{item.name}</p>
                  <div className="flex">
                    <button onClick={() => HandleTaskDone(item.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-check-circle-fill text-white mx-3"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                      </svg>
                    </button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-x-circle-fill text-white"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg>
                  </div>
                </div>
              );
            })
          ) : (
            <em className="mx-auto p-3">
              <p>No Item</p>
            </em>
          )}

          <hr className="my-3" />
          {doneTasks.length > 0 ? (
            doneTasks.map((item) => {
              return (
                <div className="flex justify-between items-center p-3 my-2 bg-slate-400">
                  <p className="text-white">{item.name}</p>
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-check-circle-fill text-white mx-3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="currentColor"
                      className="bi bi-x-circle-fill text-white"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                    </svg>
                  </div>
                </div>
              );
            })
          ) : (
            <em className="mx-auto p-3">
              <p>No Item</p>
            </em>
          )}
        </div>
      </div>
    </Layout>
  );
}
