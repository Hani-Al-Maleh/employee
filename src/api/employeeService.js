import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const getEmployees = async () => {
  try {
    return await axios.get(`${API_URL}/employees`);
  } catch (error) {
    console.error('Error fetching employees:', error.message);
    throw error;
  }
};

export const getEmployee = async (id) => {
  try {
    return await axios.get(`${API_URL}/employees/${id}`);
  } catch (error) {
    console.error(`Error fetching employee ${id}:`, error.message);
    throw error;
  }
};

export const addEmployee = async (employee) => {
  try {
    return await axios.post(`${API_URL}/employees`, employee);
  } catch (error) {
    console.error('Error adding employee:', error.message);
    throw error;
  }
};

export const updateEmployee = async (id, employee) => {
  try {
    return await axios.put(`${API_URL}/employees/${id}`, employee);
  } catch (error) {
    console.error(`Error updating employee ${id}:`, error.message);
    throw error;
  }
};

export const deleteEmployee = async (id) => {
  try {
    return await axios.delete(`${API_URL}/employees/${id}`);
  } catch (error) {
    console.error(`Error deleting employee ${id}:`, error.message);
    throw error;
  }
};

export const getCountries = async () => {
  try {
    return await axios.get(`${API_URL}/countries`);
  } catch (error) {
    console.error('Error fetching countries:', error.message);
    throw error;
  }
};
