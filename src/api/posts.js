export const getPosts = async () => {
  const response = await window.fetch("https://gorest.co.in/public-api/posts");

  if (!response.ok) {
    throw new Error(
      "Estamos teniendo problemas con el servidor, por faovr intenta luego."
    );
  } else {
    return await response.json();
  }
};
