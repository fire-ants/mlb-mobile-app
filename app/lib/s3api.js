class s3Api {
  static headers() {
    return {
      'GET': '/fireants-dev',
      'Host': 'https://ecs2-us-central-1.emc.io',
      'Date': Date.now(),
      'Authorization': 'AWS eygh4lc58iua_us_generic_generic@dpc.emc.com: /J+E6nSCru78ymaOFxQzg9BMLNtkePRcKGTsAhpb',
    }
  }

static get(route) {
    return this.xhr(route, null, 'GET');
  }

static xhr(route, params, verb) {
    const host = 'https://ecs2-us-central-1.emc.io/fireants-dev'
    //const date = 'Date:' + Date.now
    //const auth = 'AWS eygh4lc58iua_us_generic_generic@dpc.emc.com'
    //const sk = '/J+E6nSCru78ymaOFxQzg9BMLNtkePRcKGTsAhpb'
    const url = `${host}${route}`

    console.log(url)
    //let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null );
    let options = Object.assign({ method: verb }, params ? { body: JSON.parse(params) } : null );
    options.headers = s3Api.headers()
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
  export default s3Api
