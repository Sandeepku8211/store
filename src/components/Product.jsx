import React from 'react';

const Product = () => {
  const products = [
    {
      id: 1,
      title: 'Dosha',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGBEC7n0tgqcVg9JtPkpBDhjOoffJScDXws7_ykh7Kb_UMsWzq2prozkw_k5Qr-PlpI1B_oxKE8dGXmfQVE8qlmA0lw4E6ksrtSYJVGQ',
      price: '50',
      description: 'A delicious South Indian dish.',
    },
    {
      id: 2,
      title: 'mater Panner',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnAQryV6_l0MKf8rBfUE1D3NhwyfjtSHvNlw&s',
      price: '50',
      description: 'A delicious South Indian dish.',
    },
    {
      id: 3,
      title: 'Chiken Kari',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbIVDjM6mHvqgyaCCFW4wuHg481PFEXoxQNg&s',
      price: '50',
      description: 'A delicious South Indian dish.',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg shadow-md p-4 flex flex-col items-center"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="text-xl font-bold mt-4">{item.title}</h2>
          <p className="text-gray-600 mt-2">{item.description}</p>
          <p className="text-lg font-semibold mt-2">${item.price}</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;