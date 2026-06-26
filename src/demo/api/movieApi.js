import axios from 'axios';

// Cấu hình axios với baseURL
const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 10000,
});

// Hàm gọi API tìm kiếm phim
export const searchMovies = async (query) => {
  try {
    const response = await apiClient.get('/search/movie', {
      params: {
        query: query || 'batman',
        api_key: 'cfe422613b250f702980a3bbf9e90716',
        language: 'vi-VN',
        page: 1,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error.response?.data?.status_message || 'Có lỗi xảy ra khi tìm kiếm phim');
  }
};