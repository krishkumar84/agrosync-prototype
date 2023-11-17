import React from 'react'
import { Link } from 'react-router-dom';

function Orders() {
    const currentUser = {
        id: 1,
        username: "Anna",
        isSeller: true,
      };
    
      return (
        <div className="flex flex-wrap pt-16 px-12 justify-center bg-white ">
          <div className="w-full pt-12">
            <div className="flex fle justify-between">
              <h1 className="text-3xl mb-5 font-bold">Orders</h1>
            </div>
            <table className='w-full'>
              <tr className="h-12">
                <th className='text-left'>Image</th>
                <th className='text-left'>Title</th>
                <th className='text-left'>Price</th>
                {<th className='text-left'>{currentUser.isSeller ? "Buyer" : "Seller"}</th>}
              </tr>
              <tr className="h-12" >
                <td>
                  <img
                    className="w-12  h-6 object-cover"
                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </td>
                <td className="px-3">Stunning concept art</td>
                <td>59$</td>
                <td>13</td>
              </tr>
              <tr className="h-12">
                <td>
                  <img
                    className="w-12 h-6 object-cover"
                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </td>
                <td className="px-3">Ai generated concept art</td>
                <td>120$</td>
                <td>41</td>
                
              </tr>
              <tr className="h-12">
                <td>
                  <img
                    className="w-12 h-6 object-cover"
                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </td>
                <td className="px-3">High quality digital character</td>
                <td>79$</td>
                <td>55</td>
                
              </tr>
              <tr className="h-12">
                <td >
                  <img
                    className="w-12 h-6 object-cover"
                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </td>
                <td className="px-3">Illustration hyper realistic painting</td>
                <td>119$</td>
                <td>29</td>
               
              </tr>
              <tr className="h-12">
                <td>
                  <img
                    className="w-12 h-6 object-cover"
                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </td>
                <td className="px-3">Original ai generated digital art</td>
                <td>59$</td>
                <td>34</td>
                
              </tr>
              <tr className="h-12">
                <td >
                  <img
                    className="w-12 h-6 object-cover"
                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </td>
                <td className="px-3">Text based ai generated art</td>
                <td>110$</td>
                <td>16</td>
                
              </tr>
            </table>
          </div>
        </div>
  );
}

export default Orders
