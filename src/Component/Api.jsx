import axios from "axios";

export function getProductDataList(id) {
  return axios
    .get("https://dummyjson.com/products/" + id)
    .then(function (response) {
      return response.data;
    });
}

export function getProductList({ sortBy, sortType, search, page }) {
  let params = {};
  if (sortBy) {
    params.sortBy = sortBy;
  }
  if (sortType) {
    params.sortType = sortType;
  }
  if (search) {
    params.search = search;
  }
  if (page) {
    params.page = page;
  }

  return axios
    .get("https://myeasykart.codeyogi.io/products", {
      params,
    })
    .then(function (responce) {
      return responce.data;
    });
}

export function getProductByIds(ids) {
  const commaSepeartedids = ids.join();
  return axios
    .get("https://myeasykart.codeyogi.io/products/bulk", {
      params: {
        ids: commaSepeartedids,
      },
    })
    .then(function (responce) {
      return responce.data;
    });
}

export function saveCart(cart) {
  return axios.post(
    "https://myeasykart.codeyogi.io/carts",
    { data: cart },
    {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }
  );
}

export function getCart() {
  return axios
    .get("https://myeasykart.codeyogi.io/carts", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then(function (response) {
      return response.data;
    });
}
