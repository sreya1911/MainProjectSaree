import React, {useState,useEffect} from "react";
import { Row, Col,Card,Button, CardBody } from "react-bootstrap";
// import ProductCard from "./Card";
import "./All.css";
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    setIsWishlisted(wishlist.some(item => item.name === product.name));
  }, [wishlist, product.name]);

  const handleWishlistClick = () => {
    if (isWishlisted) {
      removeFromWishlist(product);
    } else {
      addToWishlist(product);
    }
    setIsWishlisted(!isWishlisted);
  };

  return (
    <Card className="hover-card">
      <Card.Img
        variant="top"
        src={require(`../assets/${product.images[0]}`)}
        alt={product.name}
        style={{ width: "100%", height: "350px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text className="text-danger">${product.price}</Card.Text>
        <Button onClick={() => addToCart(product)}>Add to Cart</Button>
        <i
          className={`bi bi-heart${isWishlisted ? '-fill' : ''}`}
          onClick={handleWishlistClick}
          style={{
            cursor: 'pointer',
            marginLeft: '10px',
            color: isWishlisted ? 'red' : 'black'
          }}
        ></i>
      </Card.Body>
    </Card>
  );
};


const Carddisplay = ({ category, subcategory }) => {
  if (!category) {
    return <div>No category selected</div>;
  }

  const itemsToDisplay = subcategory
    ? subcategory.sarees
    : category.subcategories.flatMap((sub) => sub.sarees);

  return (
    <div className="cart-container">
      <div className="category-section">
        <Row>
          {itemsToDisplay.map((item, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">

              <ProductCard product={item} />

            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Carddisplay;