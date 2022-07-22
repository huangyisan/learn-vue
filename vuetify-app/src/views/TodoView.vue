
<template>
  <div>
    <v-list-item-group multiple active-class="">
      <v-list flat class="pt-0">
        <div v-for="task in tasks" :key="task.id">
          <v-list-item @click="doneTask(task.id)">
            <template v-slot:default>
              <v-list-item-action>
                <v-checkbox :v-model="task.done"></v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ task.name }}</v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
          <v-divider inset></v-divider>
        </div>
      </v-list>
    </v-list-item-group>
  </div>
</template>


<!--
<template>
  <v-list-item-group v-model="settings" multiple active-class="">
    <v-list-item>
      <template v-slot:default="{ active }">
        <v-list-item-action>
          <v-checkbox :input-value="active"></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>Notifications</v-list-item-title>
          <v-list-item-subtitle
            >Notify me about updates to apps or games that I
            downloaded</v-list-item-subtitle
          >
        </v-list-item-content>
      </template>
    </v-list-item>
  </v-list-item-group>

</template>
  -->
  
<script>
// import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",
  data() {
    return {
      settings: [],
      tasks: [
        {
          id: 1,
          name: "a",
          done: false,
        },
        {
          id: 2,
          name: "b",
          done: false,
        },
        {
          id: 3,
          name: "c",
          done: false,
        },
      ],
    };
  },
  methods: {
    doneTask(id) {
      let newTask = this.tasks.filter((task) => {
        return task.id === id;
      })[0];
      console.log(newTask);
      newTask.done = !newTask.done;
    },
  },
};
</script>
