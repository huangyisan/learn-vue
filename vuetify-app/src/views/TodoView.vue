<template>
  <div>
    <v-list flat class="pt-0">
      <div v-for="task in tasks" :key="task.id">
        <v-list-item>
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ task.name }}</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
        <v-divider inset></v-divider>
      </div>
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
        {
          id: 1,
          name: "Wake up",
          done: false,
        },
        {
          id: 2,
          name: "Get bananas",
          done: false,
        },
        {
          id: 3,
          name: "Eat bananas",
          done: true,
        },
      ],
    };
  },
};
</script>
