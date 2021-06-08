import React, { useState } from 'react';
import axios from 'axios';
import { BookSharp } from '@material-ui/icons';

//const [books, setBooks] = useState(null);
//const apiURL = 'https://rickandmortyapi.com/api/character';
const apiURL = 'http://localhost:3000/api/sendData';

export async function getStaticProps() {
  const res = await fetch(apiURL);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

/*async function fecht(e) {
  e.preventDefault();
  var config = {
    method: 'get',
    url: 'http://localhost:3000/api/sendData',
    headers: {},
  };

  try {
    const response = await axios(config);

    if (response.status == 200) {
      setBooks(response.data);

      console.log(books);
      //console.log(JSON.stringify(response.data));
    }
  } catch (error) {
    console.log(error);
  }
}*/
export default function GetData({ data }) {
  const { results = [] } = data;
  console.log(data.data)


  return (
    <div>

      <ul>
        {data.data.map((data) => {


          <li>{data.Name}
            {data.Account}
          </li>


        })}
        <li>test</li>
      </ul>
    </div>
  );
}
