/* eslint-disable react/react-in-jsx-scope */
import { render, screen, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom";
import Sales from "../Sales";
import imageIcon from "../../assets/images/shopping_cart.png";

afterEach(()=> {
  cleanup();
});

test("Should render completed sale", () => {

  let data = {
    id : 1,
    client : "Damian Torres",
    description : "pizza x2",
    price : 10000,
    image : {imageIcon},
  };
  let {id,client,description,price,image} = data;
      
  render(
    <Sales 
      id={id}
      image={image}
      client={client}
      description={description}
      price={price}
      callback={()=> null}
    />
  );

  const element = screen.getByTestId("sale-1");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Damian Torres");
  expect(element).toHaveTextContent("pizza x2");
  expect(element).toHaveTextContent(10000);

});