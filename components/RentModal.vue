<template>
  <div>
    <b-button id="show-btn" @click="showModal">Rent</b-button>
    <b-modal ref="my-modal" hide-footer title="Rent an extinctor">
      <div class="calendar-container">
        <div class="text-container">
          <p>
            I'm baby biodiesel direct trade green juice chicharrones activated
            charcoal, poke humblebrag vice food truck 8-bit
          </p>
        </div>
        <vc-date-picker :value="null" color="red" is-dark is-range />
        <b-button
          class="order-button"
          id="show-btn"
          variant="outline-danger"
          @click="
            () => {
              addItem(product.id);
              hideModal();
            }
          "
        >
          Order
        </b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["product"],
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
    ...mapMutations(["addItem"]),
  },
};
</script>
<style scoped>
button {
  width: 100%;
  border: none;
  padding: 0.5rem;
  color: white;
  font-weight: 700;
  padding: 1rem 4rem;
  border-radius: 100rem;
  background-color: rgb(231, 81, 43);
  color: white;
  font-weight: 700;
  transition: 0.5s;
}
.order-button {
  margin-top: 20px;
}
.calendar-container {
  margin: 0 auto;
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;
}
p {
  color: grey;
}
.text-container {
  padding: 0.5rem;
}
</style>
