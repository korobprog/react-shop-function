import './App.css';
import Item from './item';

const myItem = new Item();

const ShopItemFunc = () => {
  return (
    <div className="main-content">
      <h2>{myItem.brand}</h2>
      <h1>{myItem.title}</h1>
      <h3>{myItem.description}</h3>
      <div className="description">{myItem.descriptionFull}</div>
      <div className="highlight-window mobile">
        <div className="highlight-overlay"></div>
      </div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{`${myItem.currency} ${myItem.price}`}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
};

export default ShopItemFunc;
