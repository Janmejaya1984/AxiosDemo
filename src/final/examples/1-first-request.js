import { useEffect, useState } from 'react';
import axios from 'axios';
// limit, if 429 wait for 15 min and try again

const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {
  let [dataArr,setDataArr] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      console.log(response);
      dataArr = response.data;
     // console.log("here is the data array");
     setDataArr(dataArr);
       console.log(dataArr);
       console.log(dataArr[0].name);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
   
  }, []);
  
  return <div>
    <ul>
      {dataArr.map( data => <li>{data.name}{data.id}</li>)}
    </ul>
     
  </div>;
};
export default FirstRequest;
