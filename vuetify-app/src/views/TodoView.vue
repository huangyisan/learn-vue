<template>
  <div>
    <v-list flat>
      <v-list-item v-for="task in tasks" :key="task.id">
        <template v-slot:default="{ active }">
          <v-list-item-action>
            <v-checkbox :input-value="active"></v-checkbox>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ task.name }}</v-list-item-title>
          </v-list-item-content>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
// import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",
  data() {
    return {
      tasks: [
        { id: 1, name: "eat banana" },
        { id: 2, name: "eat aa" },
        { id: 3, name: "eat bb" },
      ],
    };
  },
};
</script>
