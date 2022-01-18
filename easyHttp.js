class EasyHttp {

  async get(url) {
    const data = await fetch(url);

    const out = await data.json();
    return out;
  }


  async post(url, value) {
    const data = await fetch(url, {

      method: 'POST',

      headers: {
        'Content-type': 'application/json'
      },

      body: JSON.stringify(value)


    });


    const out = await data.json();
    return out;
  }


  async put(url, value) {
    const data = await fetch(url, {

      method: 'PUT',

      headers: {
        'Content-type': 'application/json'
      },

      body: JSON.stringify(value)


    });


    const out = await data.json();
    return out;
  }

  async delete(url) {

    const data = await fetch(url, {

      method: 'DELETE',



    });


    const out = await 'Deleted ..';
    return out;
  }
}
