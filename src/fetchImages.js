import axios from 'axios';


// Перевірка помилок під час виконання запиту до серверу
export default async function fetchImages(value, page) {
  const url = 'https://pixabay.com/api/';
  const key = `35556462-a8d5565fa0c9d2dfbbf17af0f`; 
const filter = `?key=${key}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  return await axios.get(`${url}${filter}`).then(response => response.data);
}