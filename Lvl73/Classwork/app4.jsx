function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 129,
      description: "Light and comfortable headphones for daily use.",
      image: "https://picsum.photos/seed/product1/300/200",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199,
      description: "Tracks steps, sleep, and notifications.",
      image: "https://picsum.photos/seed/product2/300/200",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 49,
      description: "Fast mouse with smooth clicks.",
      image: "https://picsum.photos/seed/product3/300/200",
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      price: 89,
      description: "Comfortable keyboard for typing and gaming.",
      image: "https://picsum.photos/seed/product4/300/200",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: 59,
      description: "Loud sound in a small size.",
      image: "https://picsum.photos/seed/product5/300/200",
    },
    {
      id: 6,
      name: "Phone Stand",
      price: 15,
      description: "Simple stand for your phone on the desk.",
      image: "https://picsum.photos/seed/product6/300/200",
    },
    {
      id: 7,
      name: "USB-C Cable",
      price: 12,
      description: "Durable cable for charging and data.",
      image: "https://picsum.photos/seed/product7/300/200",
    },
    {
      id: 8,
      name: "Laptop Backpack",
      price: 45,
      description: "Backpack with laptop space and pockets.",
      image: "https://picsum.photos/seed/product8/300/200",
    },
    {
      id: 9,
      name: "Desk Lamp",
      price: 35,
      description: "Bright light for studying and work.",
      image: "https://picsum.photos/seed/product9/300/200",
    },
    {
      id: 10,
      name: "Portable SSD",
      price: 149,
      description: "Fast storage for files and backups.",
      image: "https://picsum.photos/seed/product10/300/200",
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>Products</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              width: 260,
              border: "1px solid #ddd",
              borderRadius: 10,
              padding: 12,
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", borderRadius: 10 }}
            />
            <h3>{product.name}</h3>
            <p>
              <b>Price:</b> ${product.price}
            </p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
