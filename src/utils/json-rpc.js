import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function BuildJsonRpcRequest(method, params, id) {
  return {
    jsonrpc: '2.0',
    method,
    params,
    id,
  }
}

async function SendJsonRpcRequest(url, request, headers) {
  const { data } = await axios.post(url, request, { headers });
  const { result, error } = data;
  if (error) {
    throw error;
  } else {
    return result;
  }
}

function GenerateId() {
  return uuidv4();
}

var globalHeaders = {};

export class JsonRpcClient {
  constructor(url) {
    this.url = url;
  }

  static setGlobalHeader(key, value) {
    globalHeaders[key] = value;
  }

  async request(method, params, headers = {}) {
    const reqData = BuildJsonRpcRequest(method, params, GenerateId());
    return await SendJsonRpcRequest(this.url, reqData, { ...globalHeaders, ...headers });
  }

  async notify(method, params, headers = {}) {
    const reqData = BuildJsonRpcRequest(method, params);
    return await SendJsonRpcRequest(this.url, reqData, { ...globalHeaders, ...headers });
  }
}