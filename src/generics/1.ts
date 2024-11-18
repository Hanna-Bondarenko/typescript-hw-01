import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

// Використовуємо Generics (<T>) для типізації даних.
// Promise<T> вказує, що функція повертає об`єкт типу T.
