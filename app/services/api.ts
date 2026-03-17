import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitPropertySearch = async (data: any) => {
  try {
    const response = await api.post('/submit-property-search', data);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const getPropertySearches = async (page = 1) => {
  try {
    const response = await api.get(`/property-searches?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const updateSearchStatus = async (id: number, status: string) => {
  try {
    const response = await api.put(`/property-searches/${id}/status`, { status });
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};