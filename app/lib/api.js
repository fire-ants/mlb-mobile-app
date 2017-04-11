class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    }
  }

  static get(route) {
    return this.xhr(route, null, 'GET');
  }

  static put(route, params) {
    return this.xhr(route, params, 'PUT')
  }

  static post(route, params) {
    return this.xhr(route, params, 'POST')
  }

  static delete(route, params) {
    return this.xhr(route, params, 'DELETE')
  }

  static xhr(route, params, verb) {
    const host = 'http://67.205.147.49'
    //const host = 'http://www.recipepuppy.com'
    const url = `${host}${route}`
    console.log(url)
    //let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    let options = Object.assign({ method: verb }, params ? { body: JSON.parse(params) } : null );
    options.headers = Api.headers()
    return fetch(url, options).then( resp => {
      let json = resp.json();
      //let json = resp.text()
      if (resp.ok) {
        return json
      }
      return json.then(err => {throw err});
      //.then( json => json.results); 4-5-17 - earlier no object data caused by use of "results" var which is not present at our dataset
    }).then( json => json );
  }
}
export default Api