import React from "react";
import { Link } from "react-router-dom";

const MyProductTableData = ({products,getID}) => {
    const {_id,model,carType,location,price,oldPrice,UsedTime,postTime,add,soldOut} = products
  return (
    <tr class="bg-[#F6F7F9] border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {model}
      </th>
      <td class="py-4 px-6">{carType}</td>
      <td class="py-4 px-6">{location}</td>
      <td class="py-4 px-6 text-orange-500 font-medium">{price}</td>
      <td class="py-4 px-6 text-blue-500 font-medium">{oldPrice}</td>
      <td class="py-4 px-6 ">{UsedTime}</td>
      <td class="py-4 px-6">{postTime}</td>
      <td class="py-4 px-6">{soldOut}</td>
      <td class="py-4 px-6">
        <button
          type="button"
          class="py-2 px-3 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Advertisement
        </button>
      </td>
      <td class="py-4 px-6">
        <button onClick={()=>getID(_id)}
          type="button"
          class="py-2 px-3 text-xs font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyProductTableData;
