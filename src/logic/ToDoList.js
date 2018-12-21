class ToDo {
  constructor() {
    this.list = ['item 0'];
  }
  addItem(item) {
    this.list.push(item)
  }
  subItem(item) {
    for (let i = 0; i < this.list.length; i ++) {
      if (this.list[i] === item) {
        let newList = this.list.slice();
        newList = newList.splice(i, 1);
        this.list = newList;
        break;
      }
    }
  }
}

export default Todo;
