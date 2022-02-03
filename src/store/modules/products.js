export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: "p1",
          image: 1,
          title: "Tree Collection",
          price: 99.99,
        },
        {
          id: "p2",
          image: 2,
          title: "Mountain tree",
          price: 129.99,
        },
        {
          id: "p3",
          image: 3,
          title: "Tree Box",
          price: 6.99,
        },
        {
          id: "p4",
          image: 4,
          title: "Tree Box",
          price: 7.99,
        },
        {
          id: "p5",
          image: 5,
          title: "Tree Box",
          price: 8.99,
        },
        {
          id: "p6",
          image: 6,
          title: "Tree Box",
          price: 16.99,
        },
        {
          id: "p7",
          image: 7,
          title: "Tree Box",
          price: 7.99,
        },
        {
          id: "p8",
          image: 8,
          title: "Tree Box",
          price: 14.99,
        },

        {
          id: "p9",
          image: 9,
          title: "Tree Box",
          price: 26.99,
        },
        {
          id: "p10",
          image: 10,
          title: "Tree Box",
          price: 22.99,
        },
        {
          id: "p11",
          image: 11,
          title: "Tree Box",
          price: 7.99,
        },
        {
          id: "p12",
          image: 12,
          title: "Tree Box",
          price: 6.99,
        },
        {
          id: "p13",
          image: 13,
          title: "Tree Box",
          price: 12.99,
        },
        {
          id: "p14",
          image: 14,
          title: "Tree Box",
          price: 8.99,
        },
        {
          id: "p15",
          image: 15,
          title: "Tree Box",
          price: 14.99,
        },
      ],
    };
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
};
