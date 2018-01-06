class List {
  
  constructor() {
    this.list = [];
    this.currentItem = 0;

  }

  nextItem() {
    this.list[this.currentItem].done = true;
    this.currentItem += 1;
    return this.list[this.currentItem + 1];
  }
  prevItem() {
    this.currentItem -= 1;
    return this.list[this.currentItem - 1];
  }


}
