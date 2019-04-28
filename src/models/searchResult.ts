export class SearchResult<T> {
  total_count: Number;
  items: Array<T>;

  constructor(total_count: Number, items: Array<T>) {
    this.total_count = total_count;
    this.items = items;
  }
}
