import Todo from "../components/Todo";

export default {
  title: "TodoBox",
  component: Todo,
};

export const TodoStory = () => (
  <Todo value="Simple TodoBox" serial={0} done={false} />
);
