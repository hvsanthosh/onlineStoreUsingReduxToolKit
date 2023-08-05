import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import remove action from my slice
import { remove } from "../store/cartSlice";
const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeToCart = (id) => {
    // dispatch a remove action
    dispatch(remove(id));
  };

  const cards = products.map((product) => (
    <div className="col-md-12" style={{ marginBottom: "10px" }}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />

          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>INR:{product.price} only</Card.Text>
          </Card.Body>
          <Card.Footer className="text-center" style={{ background: "white" }}>
            <Button variant="danger" onClick={() => removeToCart(product.id)}>
              Remove Item
            </Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  ));
  return (
    <>
      <div className="row">{cards}</div>
      {/* <h1>Cart</h1>
      {JSON.stringify(products)} */}
    </>
  );
};

export default Cart;
