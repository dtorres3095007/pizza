/* eslint-disable react/react-in-jsx-scope */
import { render, screen, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom";
import Balance from "../Balance";
import imageIcon from "../../assets/images/shopping_cart.png";

afterEach(()=> {
  cleanup();
});

test("Should render completed balance", () => {

  let data = {
    id : 1,
    title : "Ventas",
    color : "white",
    price : 10000,
    image : {imageIcon},
    render : ()=>
      <div>
        <p>item 1</p>
        <p>item 2</p>
        <p>item 3</p>
      </div>
  };
  let {id,title,color,price,image, render : renderCont} = data;

  render(
    <Balance 
      id={id}
      image={image}
      title={title}
      color={color}
      price={price}
      render={renderCont}
    />
  );

  const element = screen.getByTestId("balance-1");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Ventas");
  expect(element).toHaveTextContent(10000);

});