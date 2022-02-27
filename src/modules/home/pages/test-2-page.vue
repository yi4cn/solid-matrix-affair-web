<template>
  <require-auth>
    <h1>Test 2 Page</h1>
    <div>Auth Module Test</div>
    <h2>User</h2>
    <table border="1">
      <tr>
        <td><b>id:</b></td>
        <td>{{ user.id }}</td>
      </tr>
      <tr>
        <td><b>nickname:</b></td>
        <td>{{ user.nickname }}</td>
      </tr>
      <tr>
        <td><b>contacts:</b></td>
        <td>{{ user.contacts }}</td>
      </tr>
      <tr>
        <td><b>username:</b></td>
        <td>{{ user.username }}</td>
      </tr>
      <tr>
        <td><b>roles:</b></td>
        <td>{{ user.roles }}</td>
      </tr>
    </table>
    <h2>Actions</h2>
    <table border="1">
      <tr>
        <td>
          <sm-input-button @click="indexUser">Index User</sm-input-button>
        </td>
      </tr>
      <tr>
        <td>
          <sm-input-button @click="router.push({ name: 'dashboard' })"
            >To Dashboard</sm-input-button
          >
        </td>
      </tr>
    </table>
  </require-auth>
</template>

<script setup>
import RequireAuth from "@/components/require-auth.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { JsonRpcClient } from "@/utils/json-rpc";

const router = useRouter();
const store = useStore();

const user = store.getters.user || {};

const jrpcUrl = process.env["VUE_APP_IDENTITY_RPC_URL"];
const jrpc = new JsonRpcClient(jrpcUrl);
async function indexUser() {
  const users = await jrpc.request("auth.indexUser", {});
  console.log(users);
}
</script>