const apiUrl = process.env['VUE_APP_WAREHOUSE_API_BASE_URL'];
import axios from 'axios';

axios;
apiUrl;

export async function getCategories() {
    return [
        { "id": "5b1eb12d253cfd002a631a12", "name": "A光", "initial": "A" },
        { "id": "5b1f28d72ceb9b002e6f01c0", "name": "A毛", "initial": "A" },
        { "id": "5b1f28e82ceb9b002e6f01c1", "name": "R染底雕印", "initial": "R" },
        { "id": "5b1f28f52ceb9b002e6f01c2", "name": "Z染底印花", "initial": "Z" },
        { "id": "5b1f29032ceb9b002e6f01c3", "name": "P暗格泡泡", "initial": "P" },
        { "id": "5b1f290f2ceb9b002e6f01c4", "name": "N扎染印花", "initial": "N" },
        { "id": "5b1f291f2ceb9b002e6f01c5", "name": "L绉布", "initial": "L" },
        { "id": "5b1f29292ceb9b002e6f01c6", "name": "D雕印", "initial": "D" },
        { "id": "5b1f29312ceb9b002e6f01c7", "name": "T弹力", "initial": "T" },
        { "id": "5b1f29475ece45002936dac2", "name": "G贡缎染色", "initial": "G" },
        { "id": "5b1f29552ceb9b002e6f01c8", "name": "G贡缎印花", "initial": "G" },
        { "id": "5b1f295c2ceb9b002e6f01c9", "name": "H数码", "initial": "H" },
        { "id": "5b1f29745ece45002936dac3", "name": "J竹节棉", "initial": "J" },
        { "id": "5b20b455a40a5f00353eec81", "name": "A染底", "initial": "A" },
        { "id": "5bbda5ca7d61ab0038a2da7c", "name": "S贡缎数码", "initial": "S" },
        { "id": "5bbda5d17d61ab0038a2da7d", "name": "F弹力贡缎数码", "initial": "F", }
    ];
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