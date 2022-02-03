<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Payment Confirmation</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="stepwizard">
              <div class="stepwizard-row setup-panel">
                <div class="stepwizard-step col-xs-3">
                  <a href="#step-1" type="button" class="btn btn-success btn-circle">1</a>
                  <p><small id="re">Step 1</small></p>
                </div>
                <div class="stepwizard-step col-xs-3">
                  <a
                    href="#step-2"
                    type="button"
                    class="btn btn-default btn-circle"
                    disabled="disabled"
                    >2</a
                  >
                  <p><small id="re">Step 2</small></p>
                </div>
                <div class="stepwizard-step col-xs-3">
                  <a
                    href="#step-3"
                    type="button"
                    class="btn btn-default btn-circle"
                    disabled="disabled"
                    >3</a
                  >
                  <p><small id="re">Step 3</small></p>
                </div>
                <div class="stepwizard-step col-xs-3">
                  <a
                    href="#step-4"
                    type="button"
                    class="btn btn-default btn-circle"
                    disabled="disabled"
                    >4</a
                  >
                  <p><small id="re">Step 4</small></p>
                </div>
              </div>
            </div>

            <form role="form">
              <div class="panel panel-primary setup-content" id="step-1">
                <div class="panel-heading">
                  <h3 class="panel-title" id="re">Informations</h3>
                </div>
                <div class="panel-body">
                  <div class="form-group">
                    <label class="control-label" id="re">First Name</label>
                    <input
                      maxlength="100"
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="Enter First Name"
                    />
                  </div>
                  <div class="form-group">
                    <label class="control-label" id="re">Last Name</label>
                    <input
                      maxlength="100"
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="Enter Last Name"
                    />
                  </div>
                  <button
                    class="btn btn-primary nextBtn pull-right"
                    type="button"
                    id="tt"
                  >
                    Next
                  </button>
                </div>
              </div>

              <div class="panel panel-primary setup-content" id="step-2">
                <div class="panel-heading">
                  <h3 class="panel-title" id="re">Payment</h3>
                </div>
                <div class="panel-body">
                  <div class="form-group">
                    <label class="control-label" id="re">Address 1</label>
                    <input
                      maxlength="200"
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="Enter Company Name"
                    />
                  </div>
                  <div class="form-group">
                    <label class="control-label" id="re">Address 2</label>
                    <input
                      maxlength="200"
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="Enter Company Address"
                    />
                  </div>
                  <button
                    class="btn btn-primary nextBtn pull-right"
                    type="button"
                    id="tt"
                  >
                    Next
                  </button>
                </div>
              </div>

              <div class="panel panel-primary setup-content" id="step-3">
                <div class="panel-heading">
                  <h3 class="panel-title" id="re">Shipping Process</h3>
                </div>
                <div class="panel-body">
                  <div class="form-group">
                    <label class="control-label" id="re">Methods</label>
                    <input
                      maxlength="200"
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="Enter Company Name"
                    />
                  </div>
                  <div class="form-group">
                    <label class="control-label" id="re">Price</label>
                    <input
                      maxlength="200"
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="Enter Company Address"
                    />
                  </div>
                  <button
                    class="btn btn-primary nextBtn pull-right"
                    type="button"
                    id="tt"
                  >
                    Next
                  </button>
                </div>
              </div>

              <div class="panel panel-primary setup-content" id="step-4">
                <div class="panel-heading">
                  <h3 class="panel-title" id="re">Finished</h3>
                </div>
                <div class="panel-body">
                  <div class="form-group">
                    <label class="control-label" id="re">Number</label>
                    <input
                      maxlength="200"
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="Enter Company Name"
                    />
                  </div>
                  <div class="form-group">
                    <label class="control-label" id="re">Email</label>
                    <input
                      maxlength="200"
                      type="text"
                      required="required"
                      class="form-control"
                      placeholder="Enter Company Address"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-dismiss="modal" id="btnss">Close</button>
          <button class="btn pull-right" type="submit" id="tt">Finish!</button>
        </div>
      </div>
    </div>
  </div>
  <div
    data-aos="fade-right"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
  >
    <section>
      <h2>Your Cart</h2>
      <h3>
        Total Amount: <base-badge mode="elegant">${{ cartTotal }}</base-badge>
      </h3>
      <ul>
        <cart-item
          v-for="item in cartItems"
          :key="item.productId"
          :prod-id="item.productId"
          :title="item.title"
          :image="item.image"
          :price="item.price"
          :qty="item.qty"
        ></cart-item>
      </ul>
      <div class="d-flex justify-content-end mt-4">
        <button class="btn mr-2" id="btns">
          <router-link to="/" class="text-decoration-none">Back</router-link>
        </button>
        <button type="button" class="btn" data-toggle="modal" data-target="#exampleModal">
          Confirm
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";
import BaseBadge from "../components/BaseBadge.vue";
export default {
  components: {
    CartItem,
    BaseBadge,
  },
  computed: {
    cartTotal() {
      return this.$store.getters["cart/totalSum"];
    },
    cartItems() {
      return this.$store.getters["cart/products"];
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: #70a6be;
  border-radius: 20px;
  color: white;
  text-shadow: 1px 1px 2px black;
}
#btns {
  background-color: #dc0019;
  width: 12%;
  border-radius: 20px;

  text-shadow: 1px 1px 2px black;
}
a {
  color: white;
}
section {
  margin: 2rem auto;
  max-width: 40rem;
}

h2 {
  color: #dc0019;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

h3,
h5 {
  text-align: center;
  color: #dc0019;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.stepwizard-step p {
  margin-top: 0px;
  color: #666;
}
.stepwizard-row {
  display: table-row;
}
.stepwizard {
  display: table;
  width: 100%;
  position: relative;
}
.stepwizard-step button[disabled] {
  /*opacity: 1 !important;
    filter: alpha(opacity=100) !important;*/
}
.stepwizard .btn.disabled,
.stepwizard .btn[disabled],
.stepwizard fieldset[disabled] .btn {
  opacity: 1 !important;
  color: #bbb;
}
.stepwizard-row:before {
  top: 14px;
  bottom: 0;
  position: absolute;
  content: " ";
  width: 100%;
  height: 1px;
  background-color: #ccc;
  z-index: 0;
}
.stepwizard-step {
  display: table-cell;
  text-align: center;
  position: relative;
}
.btn-circle {
  width: 30px;
  height: 30px;
  text-align: center;
  padding: 6px 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 15px;
}
#re {
  color: #dc0019;
}
#tt {
  width: 20%;
}
#btnss {
  width: 20%;
  background-color: #dc0019;
}
</style>
