export default class MovieClient {
  constructor(baseUrl, start = 0, pageSize = 5) {
    this.baseUrl = baseUrl;
    this.start = start;
    this.pageSize = pageSize;
  }

  next() {
    return fetch(`${this.baseUrl}?count=${this.pageSize}&start=${this.start}`)
      .then(response => response.json())
      .then(responseJson => {
        this.start += this.pageSize;
        return responseJson.subjects;
      })
      .catch(error => {
        return [];
      });
  }
}
