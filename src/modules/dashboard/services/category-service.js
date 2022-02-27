const apiUrl = process.env['VUE_APP_WAREHOUSE_API_BASE_URL'];

import CrudService from '@/utils/crud-service';

export default CrudService(apiUrl + '/category');