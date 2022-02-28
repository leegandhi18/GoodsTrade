<template>
  <v-card flat>
    <v-toolbar color="primary" dark extended flat>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-toolbar>

    <v-card class="mx-auto" max-width="700" style="margin-top: -64px">
      <v-toolbar flat>
        <v-toolbar-title> GoodsTrade </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
          <v-row>
            <v-col>
              <v-text-field
                label="Search"
                v-model="searchData"
                :rules="searchRules"
                hide-details="auto"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-btn icon type="submit">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-form>

        <!-- <v-btn icon>
          <v-icon>mdi-apps</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn> -->
      </v-toolbar>

      <v-divider></v-divider>
    </v-card>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    searchRules: [
      (value) =>
        (value && value.length >= 3) || "찾을 때는 두 글자 이상이어야 합니다.",
    ],
    valid: true,
    searchData: "",
  }),
  methods: {
    onSubmitForm() {
      if (this.$refs.form.validate()) {
        this.searchData = this.searchData;
        alert(`검색 결과(${this.searchData})를 찾았습니다.`);
        console.log(this.searchData);
        this.searchData = "";
      } else {
        alert(`검색 결과(${this.searchData})를 찾을 수 없습니다.`);
        console.log(this.searchData);
        this.searchData = "";
      }
    },
  },
};
</script>
