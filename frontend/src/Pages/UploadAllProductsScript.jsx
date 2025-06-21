import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import all_product from '../Components/Assets/all_product';

const UploadAllProductsScript = () => {
  const { authTokens } = useContext(AuthContext);
  const [status, setStatus] = useState('');
  const [uploaded, setUploaded] = useState(0);

  const handleUpload = async () => {
    setStatus('⏳ Загрузка продуктов...');
    let count = 0;

    for (let i = 0; i < all_product.length; i++) {
      const product = all_product[i];

      try {
        await axios.post(
          `${process.env.REACT_APP_API_URL}/products/`,
          {
            name: product.name,
            description: `${product.category} item`,
            price: product.new_price,
          },
          {
            headers: {
              Authorization: `Bearer ${authTokens?.access}`,
              'Content-Type': 'application/json',
            },
          }
        );
        count++;
      } catch (err) {
        console.error(`❌ Ошибка при загрузке: ${product.name}`, err);
      }
    }

    setUploaded(count);
    setStatus(`✅ Загружено ${count} продуктов! Проверь /admin`);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>📤 Загрузить <code>all_product.js</code> в <strong>Django</strong></h2>
      <button onClick={handleUpload}>Загрузить продукты</button>
      {status && <p>{status}</p>}
      {uploaded > 0 && <p>✔️ Успешно загружено: {uploaded}</p>}
    </div>
  );
};

export default UploadAllProductsScript;
