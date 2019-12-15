class Cart {
  constructor() {
    this.storage = 'cart';
    this.defaults = '{ "items": [] }';
  }

  clearItems = () => {
    localStorage.setItem(this.storage, this.defaults);
  }

  addItem = (item) => {
    let items = localStorage.getItem(this.storage) || this.defaults;
    items = JSON.parse(items);
    let existing = items.items.findIndex(e => e.slug === item.slug);
    if (existing > -1) {
        items.items[existing].quantity++;
    } else {
        Object.assign(item, { quantity: 1 });
        items.items.push(item);
    }
    localStorage.setItem(this.storage, JSON.stringify(items));
  }

  get getAllItems() {
    const items = JSON.parse(localStorage.getItem(this.storage) || this.defaults);
    return items;
  }
}

export default new Cart();
