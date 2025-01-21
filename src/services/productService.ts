import { StoreItem } from "../models/StoreItem";

export const getProduct = async ():Promise<StoreItem[]> => {
    try {
      // Make a GET request using the Fetch API
      const response = await fetch('https://fakestoreapi.com/products');
      
      // Check if the response is successful (status code 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the JSON data from the response
      const result = await response.json();
      console.log(result[0].title,'is response of json')

      return result.map((item:StoreItem)=>new StoreItem(item.id,item.title,item.price,item.description,item.image))
    } catch {
      console.log("error while fetching data")
      return [];
    }
  };