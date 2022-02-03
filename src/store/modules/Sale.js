export default {
    namespaced: true,
    state() {
      return {
        Sales: [
          {
            id: "p1",
            image: 1,
            title: "Tree Collection",
            price: 99.99,
            prices: 77.99,
          },
          {
            id: "p2",
            image: 2,
            title: "Mountain tree",
            price: 129.99,
            prices: 100.99,
          },
          {
            id: "p3",
            image: 3,
            title: "Tree Box",
            price: 6.99,
            prices: 99.99,
          },
          {
            id: "p4",
            image: 4,
            title: "Tree Box",
            price: 107.99,
            prices: 85.99,
          },
       
          {
            id: "p5",
            image: 3,
            title: "Tree Box",
            price: 107.99,
            prices: 85.99,
          },
          {
            id: "p6",
            image: 1,
            title: "Tree Box",
            price: 107.99,
            prices: 85.99,
          },
          {
            id: "p7",
            image: 3,
            title: "Tree Box",
            price: 107.99,
            prices: 85.99,
          },
          {
            id: "p8",
            image: 2,
            title: "Tree Box",
            price: 107.99,
            prices: 85.99,
          },
        ],
      };
    },
    getters: {
      Sales(state) {
        return state.Sales;
      },
    },
  };
  