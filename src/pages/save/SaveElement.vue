<template>
  <form @submit.prevent="submit">
    <n-form-item
      label="Título"
      :feedback="errors.title"
      :validaiton-status="errors.title == '' ? 'success' : 'error'"
    >
      <n-input
        :status="errors.title == '' ? 'success' : 'error'"
        placeholder="Título"
        v-model:value="form.title"
        type="text"
      />
    </n-form-item>
    <n-form-item
      label="Slug"
      :feedback="errors.url_clean"
      :validaiton-status="errors.url_clean == '' ? 'success' : 'error'"
    >
      <n-input
        :status="errors.url_clean == '' ? 'success' : 'error'"
        placeholder="Slug"
        v-model:value="form.url_clean"
        type="text"
      />
    </n-form-item>
    <n-form-item
      label="Description"
      :feedback="errors.description"
      :validaiton-status="errors.description == '' ? 'success' : 'error'"
    >
      <n-input
        :status="errors.description == '' ? 'success' : 'error'"
        placeholder="Description"
        v-model:value="form.description"
        type="textarea"
      />
    </n-form-item>
    <n-form-item
      label="Price"
      :feedback="errors.price"
      :validaiton-status="errors.price == '' ? 'success' : 'error'"
    >
      <n-input-number
        :status="errors.price == '' ? 'success' : 'error'"
        placeholder="Price"
        v-model:value="form.price"
        type="textarea"
      />
    </n-form-item>
    <n-form-item
      label="Category"
      :feedback="errors.category_id"
      :validaiton-status="errors.category_id == '' ? 'success' : 'error'"
    >
      <n-select
        :status="errors.category_id == '' ? 'success' : 'error'"
        v-model:value="form.category_id"
        :options="categories_options"
        type="textarea"
      />
    </n-form-item>

    <n-form-item
      label="Type"
      :feedback="errors.type_id"
      :validaiton-status="errors.type_id == '' ? 'success' : 'error'"
    >
      <n-select
        :status="errors.type_id == '' ? 'success' : 'error'"
        v-model:value="form.type_id"
        :options="tipes_options"
        type="textarea"
      />
    </n-form-item>

    <n-button class="mt-2" type="primary" attr-type="submit">Enviar</n-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      categories_options: [],
      tipes_options: [],
      element: "",
      form: {
        title: "",
        url_clean: "",
        description: "",
        category_id: "",
        type_id: "",
        price: 0,
      },
      errors: {
        title: "",
        url_clean: "",
        description: "",
        category_id: "",
        type_id: "",
        price: "",
      },
    };
  },

  async mounted() {
    if (this.$route.params.id) {
      // obtener la elemento
      await this.getElement();
      // init
      this.initElement();
    }
    this.categories()
    this.tipes()
  },

  methods: {
    async getElement() {
      this.element = await this.$axios.get(
        "http://127.0.0.1:8000/api/element/" +
          this.$route.params.id +
          "/?format=json"
      );

      this.element = this.element.data;
    },

    initElement() {
      this.form.title = this.element.title;
      this.form.url_clean = this.element.url_clean;
      this.form.description = this.element.description;
      this.form.price = parseFloat(this.element.price);
      this.form.category_id = this.element.category.id;
      this.form.type_id = this.element.type.id;
    },

    categories() {
      this.$axios
        .get("http://localhost:8000/api/category/all/?format=json")
        .then((res) => {
          this.categories_options = res.data.map(c => {
            return {
              label: c.title,
              value: c.id
            }
          });
        });
    },
    tipes() {
      this.$axios
        .get("http://localhost:8000/api/type/all/?format=json")
        .then((res) => {
          this.tipes_options = res.data.map(c => {
            return {
              label: c.title,
              value: c.id
            }
          });
        });
    },

    submit() {
      this.cleanForm();
      
      if (this.element == "")
        return this.$axios
          .post("http://127.0.0.1:8000/api/element/?format=json", this.form)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error.response.data)
            if (error.response.data.title)
              this.errors.title = error.response.data.title[0];
            if (error.response.data.url_clean)
              this.errors.url_clean = error.response.data.url_clean[0];
            if (error.response.data.description)
              this.errors.description = error.response.data.description[0];
            if (error.response.data.price)
              this.errors.price = error.response.data.price[0];
            if (error.response.data.category_id)
              this.errors.category_id = error.response.data.category_id[0];
            if (error.response.data.type_id)
              this.errors.type_id = error.response.data.type_id[0];
          });

      this.$axios
        .put(
          "http://127.0.0.1:8000/api/element/" +
            this.$route.params.id +
            "/?format=json",
          this.form
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
    if (error.response.data.title)
              this.errors.title = error.response.data.title[0];
            if (error.response.data.url_clean)
              this.errors.url_clean = error.response.data.url_clean[0];
            if (error.response.data.description)
              this.errors.description = error.response.data.description[0];
            if (error.response.data.price)
              this.errors.price = error.response.data.price[0];
            if (error.response.data.category_id)
              this.errors.category_id = error.response.data.category_id[0];
            if (error.response.data.type_id)
              this.errors.type_id = error.response.data.type_id[0];
        });
    },

    cleanForm() {
      this.errors.title = "";
      this.errors.url_clean = "";
    },
  },
};
</script>