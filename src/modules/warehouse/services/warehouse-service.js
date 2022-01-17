const apiUrl = process.env['VUE_APP_WAREHOUSE_API_BASE_URL'];
import axios from 'axios';

axios;
apiUrl;

export async function getCategories() {
    return require('./categories.json');
}

export async function inItems(items) {
    items;
}

export async function outItems(items) {
    items;
}

export async function updateItem(item) {
    item;
}

export async function getItem(item) {
    item;
}

export async function getItemByLocation(location) {
    location;
}

export async function getItemByPattern(search) {
    search;
    return require('./items.json');
}

export async function createCategory(category) {
    category;
}

export async function deleteCategory(category) {
    category;
}

export async function accountLogin(username, password) {
    username;
    password;
}