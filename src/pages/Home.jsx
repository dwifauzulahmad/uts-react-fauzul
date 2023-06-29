import { useState } from "react";
import Product from "../components/Product";
import Button from "../components/Button";

export default function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "GeekVape Aegis Legend Box Mod”",
      image: "https://p-id.ipricegroup.com/uploaded_8b8b10fdc32bc588de618349f7d692e7.jpg",
      price: 444260,
    },
    {
      id: 2,
      name: "VOOPOO DRAG 2 Platinum Refresh",
      image: "https://evapo.co.uk/media/catalog/product/cache/76d4303a129a86fdecdac5b693f985d9/v/o/voopoo-drag-2-refresh-edition-kit-platinum.jpg",
      price: 750000,
    },
    {
      id: 3,
      name: "VOOPOO DRAG M100S",
      image: "https://cdn.shopify.com/s/files/1/0474/6526/7356/files/VOOPOO-DRAG-M100S-100W-Mod-Kit-2_1024x.jpg?v=1684901223",
      price: 550000,
    },
    {
      id: 4,
      name: "VOOPOO DRAG 4",
      image: "https://a1.vaping360.com/wp-content/uploads/2023/01/voopoo-drag4-03.jpg?auto=compress,format",
      price: 800000,
    },
    {
      id: 5,
      name: "Geekvape T200 (Aegis Touch) ",
      image: "https://cdn.shopify.com/s/files/1/0474/6526/7356/products/Geekvape-T200-Aegis-Touch-Box-Mod-kit-4-431674_1024x.jpg?v=1662610441",
      price: 720000,
    },
    {
      id: 6,
      name: "Geekvape B100 (POD MOD)",
      image: "https://cdn.shopify.com/s/files/1/0474/6526/7356/products/GEEKVAPE-B100-KIT-2_1024x.jpg?v=1672817082",
      price: 680000,
    },
    {
      id: 7,
      name: "GeekVape Kit E100/E100i (Aegis Eteno)”",
      image: "https://cdn.shopify.com/s/files/1/0474/6526/7356/products/GEEKVAPE-E100-500-500_5_1024x.jpg?v=1671763939",
      price: 500000,
    },
    {
      id: 8,
      name: "GeekVape Aegis Legend 2",
      image: "https://d1d8o7q9jg8pjk.cloudfront.net/p/md_60b88a48f02c2.jpg",
      price: 700000,
    },
    {
      id: 9,
      name: "GeekVape H45 Aegis Hero 2 Kit 45W",
      image: "https://ae01.alicdn.com/kf/S43ed57d94adf4742abbaf86ece16ada8J/Geekvape-H45-Aegis-Hero-2-Kit-45W-Vape-Warna-Kristal-1400MAh-Baterai-4Ml-Pod-Cartridge-B.jpg",
      price: 450000,
    },
    {
      id: 10,
      name: "GeekVape Z200 (Zeus 200)",
      image: "https://www.everzon.com/cdn/shop/products/GEEKVAPE-Z200-500-500_1.jpg?v=1677481960",
      price: 680000,
    },
    {
      id: 11,
      name: "GeekVape Aegis Solo Kit",
      image: "https://thevaporlabkc.com/wp-content/uploads/2019/11/geekvape-aegis-solo-kit-blue-e1594502580738-1200x1200.jpg",
      price: 650000,
    },
    {
      id: 12,
      name: "GeekVape (Kit Aegis Max 2)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUCV8NRWJgWEnCmpcHOicA584x2c-7O6pqQQ&usqp=CAU",
      price: 850000,
    },
  ]);
  const [keyword, setKeyword] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const [editedProduct, setEditedProduct] = useState();
  // const [idSquence, setIdSequence] = useState(planets.length);
  // const [newPlanet, setNewPlanet] = useState();
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cart, setCart] = useState([]);


  const filteredSortedProducts = products
    .toSorted((a, b) => {
      if (sortOrder === "asc") {
        return a[sortBy] < b[sortBy] ? -1 : 1;
      } else {
        return a[sortBy] > b[sortBy] ? -1 : 1;
      }
    })
    .filter(
      (product) =>
        product.name.toLowerCase().includes(keyword) &&
        product.price >= minPrice &&
        product.price <= maxPrice
    );

  return (
    <div className="products">
      <header>
        <button>+ Buat</button>
        <label>
          Cari:
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </label>
        <section>
          Harga:
          <label>
            Minimal:
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </label>
          <label>
            Maksimal:
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value || Infinity)}
            />
          </label>
        </section>
        <section>
          Urutkan:
          <div>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="id">Normal</option>
            <option value="name">Nama</option>
            <option value="price">Harga</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Naik</option>
            <option value="desc">Turun</option>
          </select>
          </div>
        </section>
        {/* <button onClick={() => setIsCartOpen(true)}>
          Keranjang: {cart.reduce((a, p) => a + p.count, 0)}
        </button> */}
      </header>
      <main>
        {filteredSortedProducts.length > 0
          ? filteredSortedProducts
              .filter((_product, i) => i >= 4 * page - 4 && i < 4 * page)
              .map((product) => (
                <Product
                  key={product.id}
                  {...product}
                  setEditedProduct={setEditedProduct}
                />
              ))
          : "Tidak ada produk ditemukan."}
      </main>
      <footer>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Sebelumnya
        </Button>
        {filteredSortedProducts
          .filter((_product, i) => i % 4 === 0)
          .map((_product, i) => (
            <button
              key={i}
              className="page-number"
              onClick={() => setPage(i + 1)}
              disabled={i + 1 === page}
            >
              {i + 1}
            </button>
          ))}
        <Button
          onClick={() => setPage(page + 1)}
          disabled={page === Math.ceil(filteredSortedProducts.length / 4)}
        >
          Berikutnya
        </Button>
      </footer>
      {editedProduct && (
        <form
          className="dialog"
          onSubmit={(e) => {
            e.preventDefault();
            setProducts(
              products.map((product) =>
                product.id === editedProduct.id ? editedProduct : product
              )
            );
            setEditedProduct(undefined);
          }}
        >
          <h1>Edit Produk</h1>
          <label>
            Nama
            <input
              type="text"
              value={editedProduct.name}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, name: e.target.value })
              }
              autoFocus
            />
          </label>
          <label>
            Harga
            <input
              type="number"
              value={editedProduct.price}
              onChange={(e) =>
                setEditedProduct({
                  ...editedProduct,
                  price: parseInt(e.target.value),
                })
              }
            />
          </label>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              type="reset"
              variant="tonal"
              onClick={() => setEditedProduct(undefined)}
            >
              Batal
            </Button>
            <Button>Simpan</Button>
          </div>
        </form>
      )}
    </div>
  );
}
