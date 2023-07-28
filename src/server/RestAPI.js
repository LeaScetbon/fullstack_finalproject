const BASE_URL = "http://localhost:3001";

export class RestAPI {
  static async fetchData(url, options) {
    var response;
    console.log("hi fetchData register");
    console.log("options", options);
    if (options) {
      response = await fetch(url, options);
      console.log("hi fetchData register options");
    } else {
      response = await fetch(url);
    }
    console.log(response, "response api");
    const jsonData = await response.json(); // Parse response body as JSON
    console.log(jsonData); // Log the parsed JSON data
    return jsonData; // Return the parsed JSON data
  }

  static async getAllUsers() {
    const url = `${BASE_URL}/api/users`;
    return await RestAPI.fetchData(url);
  }

// RestAPI.js (Updated getUserByUsernameAndPassword function)
static async getUserByUsernameAndPassword(username, password) {
  const url = `${BASE_URL}/api/users/login`;
  const body = { username, password };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(data.error || "Failed to fetch user");
    }
  } catch (error) {
    throw new Error(error.message || "Failed to fetch user");
  }
}



  static async createUser( id, username, email,usertype, userpassword) {
    const url = `${BASE_URL}/api/users`;
    const body = { id, username, email,  usertype, userpassword };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    console.log("api-create");
    console.log("options", options);
    return await RestAPI.fetchData(url, options);
  }

  static async updateEmailByUsername(username, email) {
    const url = `${BASE_URL}/api/users/${username}/email`;
    const body = { email };
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    return await RestAPI.fetchData(url, options);
  }



  static async updatePasswordByUsername(username, userpassword) {
    const url = `${BASE_URL}/api/users/${username}/password`;
    const body = { userpassword };
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    return await RestAPI.fetchData(url, options);
  }

  static async getAllProducts() {
    const url = `${BASE_URL}/api/products`;
    return await RestAPI.fetchData(url);
  }
  static async getAllRecipes() {
    const url = `${BASE_URL}/api/Recipe`;
    return await RestAPI.fetchData(url);
  }
  
  static async addToCart(userId, productId) {
    const url = `${BASE_URL}/api/mycart`;
    const body = { user_id: userId, product_id: productId };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    return await RestAPI.fetchData(url, options);
  }
  
  static async getCartByUserId(userId) {
    const url = `${BASE_URL}/api/mycart/${userId}`;
    return await RestAPI.fetchData(url);
  }
  
}

export default RestAPI;