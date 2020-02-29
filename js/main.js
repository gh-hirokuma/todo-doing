$(function() {
  // 表示するTodoのフィルタに使う定数
  const ALL_FILTER_KEY = "ALL";
  const ACTIVE_FILTER_KEY = "ACTIVE";
  const COMPLETED_FILTER_KEY = "COMPLETED";

  // jQueryで操作するDOMがそのまま入った要素
  let $todos = null;
  let $checkAllButton = null;
  let $clearContainer = null;
  let $todoFilter = null;

  // 現在のフィルタの状態を保存
  let currentFilter = "ALL";

  // 仮DB 表示するTodoアイテムが入ってる配列
  let todoItems = [{ name: "test", done: false }];

  const loadInitialTodos = () => {
    $todos = $("#todos-container");
    $checkAllButton = $("#checkAll");
    $clearContainer = $("#clear-container");
    $todoFilter = $("#todo-filter");

    $todos.empty();
  };

  const init = () => {
    loadInitialTodos();
  };

  init();
});
