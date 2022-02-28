/* eslint-disable react/react-in-jsx-scope */
import { render, screen, cleanup} from "@testing-library/react";
import "@testing-library/jest-dom";
import Pizza from "../Pizza";
import imageIcon from "../../assets/images/pizza.png";

afterEach(()=> {
  cleanup();
});

test("Should render completed pizza", () => {

  let data = {
    id : 1,
    name : "Pizza de pollo",
    description : "pizza completa de pollo",
    price : 10000,
    image : {imageIcon},
  };
  let {id,name,description,price,image} = data;
      
  render(
    <Pizza 
      id={id}
      image={image}
      name={name}
      description={description}
      price={price}
      callback={()=> null}
    />
  );

  const element = screen.getByTestId("pizza-1");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Pizza de pollo");
  expect(element).toHaveTextContent("pizza completa de pollo");
  expect(element).toHaveTextContent(10000);

});